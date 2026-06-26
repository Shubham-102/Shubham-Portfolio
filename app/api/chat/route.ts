import Groq from "groq-sdk";
import {
  personal,
  projects,
  experience,
  education,
  skills,
  certifications,
} from "@/lib/data";

// Runs on the server only — the API key is never exposed to the browser.
export const runtime = "nodejs";

const MODEL = process.env.CHAT_MODEL || "llama-3.1-8b-instant";

// Assemble everything the model needs to know, straight from data.ts.
function buildSystemPrompt(): string {
  const proj = projects
    .map(
      (p) =>
        `- ${p.name} (${p.kind}) — headline: ${p.metric}. Stack: ${p.stack.join(
          ", "
        )}. ${p.bullets.join(" ")}`
    )
    .join("\n");

  const exp = experience
    .map(
      (j) =>
        `- ${j.role} at ${j.company} (${j.location}, ${j.period}): ${j.bullets.join(
          " "
        )}`
    )
    .join("\n");

  const edu = education
    .map((e) => `- ${e.degree}, ${e.school} (${e.period}). ${e.detail}`)
    .join("\n");

  const skillList = skills
    .map((s) => `${s.group}: ${s.items.join(", ")}`)
    .join("\n");

  return `You are ${personal.name}, answering questions from visitors to your personal portfolio site. Speak in the FIRST PERSON ("I", "my") as if you are Shubham himself. Be warm, concise, and confident but never arrogant. Keep answers to 2-4 sentences unless asked for detail.

Rules:
- Only use the facts below. If you don't know something (salary expectations, personal details not listed), say you'd be happy to discuss it directly over email: ${personal.email}.
- Never invent projects, employers, metrics, or dates.
- If asked something off-topic or inappropriate, gently steer back to my professional background.

ABOUT ME
${personal.summary}
Currently: ${personal.status}. Based in ${personal.location}.

PROJECTS
${proj}

EXPERIENCE
${exp}

EDUCATION
${edu}

SKILLS
${skillList}

CERTIFICATIONS
${certifications.join("; ")}

CONTACT
Email: ${personal.email} · GitHub: ${personal.github} · LinkedIn: ${personal.linkedin}`;
}

type Incoming = { role: "user" | "assistant"; content: string };

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return Response.json(
      { reply: "The chatbot isn't configured yet — GROQ_API_KEY is missing." },
      { status: 200 }
    );
  }

  let body: { messages?: Incoming[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = (body.messages || [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && m.content)
    .slice(-12) // keep context small + cheap
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  if (messages.length === 0) {
    return Response.json({ error: "No messages" }, { status: 400 });
  }

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const response = await groq.chat.completions.create({
      model: MODEL,
      max_tokens: 512,
      messages: [{ role: "system", content: buildSystemPrompt() }, ...messages],
    });

    const reply = (response.choices[0]?.message?.content || "").trim();

    return Response.json({ reply: reply || "…" });
  } catch (err) {
    console.error("chat error:", err);
    return Response.json(
      { reply: "I'm having trouble responding right now. Please email me instead." },
      { status: 200 }
    );
  }
}

// ============================================================================
//  data.ts  —  THE ONLY FILE YOU NEED TO EDIT FOR CONTENT.
//  Everything on the site + the chatbot's knowledge is built from this file.
//  Search for "TODO" to find the spots that need your real links / photo.
// ============================================================================

export const personal = {
  name: "Shubham Maheshwari",
  // Roles cycle in the hero typewriter — reorder / edit freely.
  roles: [
    "ML Engineer",
    "Data Scientist",
    "GenAI Builder",
    "MLOps Practitioner",
  ],
  tagline:
    "I build and ship ML models, RAG pipelines, and data-driven products.",
  summary:
    "M.Eng. graduate in Computer Science from UConn with experience building and deploying ML models, RAG pipelines, and data-driven applications. Skilled in Python, PyTorch, LangChain, and MLflow with hands-on exposure to AWS and GCP. Databricks Generative AI certified.",
  status: "Available for full-time — ML Engineering / Data Science",
  location: "Hartford, CT",
  // IANA timezone for the live clock. Hartford uses America/New_York.
  timezone: "America/New_York",
  email: "shubhammaheshwari0210@gmail.com",
  phone: "(959) 995-3650",
  github: "https://github.com/Shubham-102",
  linkedin: "https://www.linkedin.com/in/maheshwari-shubham/",
  resumeUrl: "/resume.pdf",
  // Drop a square photo in /public and set the path, or leave "" for no photo.
  photo: "/shubham.jpg",
};

// The scrolling market-tape between sections. Keep these punchy + numeric.
export const ticker: { label: string; trend?: "up" | "flat" }[] = [
  { label: "AUC 0.7425 vs 0.7170 baseline", trend: "up" },
  { label: "96.64% multi-modal accuracy", trend: "up" },
  { label: "+14% over single-modality", trend: "up" },
  { label: "40+ MLflow experiments tracked", trend: "flat" },
  { label: "sub-100ms FastAPI inference", trend: "flat" },
  { label: "87% vs 72% risk classifier", trend: "up" },
  { label: "94.9% within-1-notch rating", trend: "up" },
  { label: "176K Lending Club records", trend: "flat" },
  { label: "−40% UI defect rate", trend: "up" },
  { label: "Databricks GenAI certified", trend: "flat" },
];

export type Project = {
  id: string;
  name: string;
  kind: string; // short descriptor shown in the row
  metric: string; // headline number shown collapsed
  stack: string[];
  bullets: string[];
  repo?: string; // TODO: add GitHub URL
  demo?: string; // live demo URL (HF Spaces, Streamlit, etc.)
  preview?: string; // optional screenshot path in /public (e.g. /projects/credit-risk.png)
};

export const projects: Project[] = [
  {
    id: "credit-risk",
    name: "Credit Risk Scoring Engine",
    kind: "Full-Stack ML Platform",
    metric: "AUC 0.7425",
    stack: ["Python", "LightGBM", "XGBoost", "SHAP", "FastAPI", "React", "MLflow", "AWS"],
    bullets: [
      "Trained LightGBM on 176K Lending Club records, reaching AUC 0.7425 vs a 0.7170 logistic baseline; GPU-accelerated via CUDA with SMOTE, validated with bootstrap CIs and a Wilcoxon signed-rank test across 5-fold CV.",
      "Engineered an 8-class corporate credit-rating model (AAA–D, S&P-aligned) with 67.2% exact accuracy and 94.9% within-1-notch; integrated a Basel III stress-test simulator with per-request SHAP explainability over REST.",
      "Tracked 40+ experiments in MLflow; deployed a FastAPI backend (7 endpoints, sub-100ms) and a React dashboard on AWS EC2 with Docker.",
    ],
    repo: "", // TODO
    demo: "https://huggingface.co/spaces/shubhaM-Maheshwari/credit-risk-engine",
    preview: "/projects/credit-risk.png",
  },
  {
    id: "multimodal",
    name: "Explainable Multi-Modal Deep Learning",
    kind: "Capstone",
    metric: "96.64% acc",
    stack: ["PyTorch", "SHAP", "Grad-CAM", "MLflow", "GCP Vertex AI"],
    bullets: [
      "Designed a gated-fusion architecture reaching 96.64% accuracy, beating single-modality baselines by 14%.",
      "Stress-tested under 10–30% noise with 18% higher accuracy retention; generated per-modality SHAP and Grad-CAM explanations on GCP Vertex AI.",
    ],
    repo: "", // TODO
    demo: "", // TODO
  },
  {
    id: "insurance-genai",
    name: "Insurance Risk Advisor",
    kind: "Deployed GenAI + ML App",
    metric: "87% accuracy",
    stack: ["LangChain", "LangGraph", "Llama 3.1", "ChromaDB", "HuggingFace", "Streamlit"],
    bullets: [
      "Built an end-to-end RAG pipeline using a ChromaDB vector store and sentence-transformer embeddings; extended it with a LangGraph agent that routes between vector search and web search; deployed on Hugging Face Spaces.",
      "Trained a multi-class risk classifier on 50K+ records reaching 87% vs a 72% logistic baseline; deployed on AWS with real-time scoring, data-drift detection, and automated retraining triggers.",
    ],
    repo: "", // TODO
    demo: "https://insurance-risk-advisor-ecmby3rntyfatawmqd43mb.streamlit.app/",
    preview: "/projects/insurance.png",
  },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "Sourcved Technologies",
    role: "Software Developer Intern",
    location: "Ahmedabad, India",
    period: "Jul 2023 – Jul 2024",
    bullets: [
      "Integrated ML inference endpoints into REST-API-driven web apps; traced data flow from model backend to UI and identified 3 classes of serialization bugs causing silent data loss in prediction pipelines.",
      "Cut UI defect rate by 40% over two release cycles via a pre-merge browser-matrix checklist (Chrome, Firefox, Edge), improving reliability of ML-powered feature rollouts.",
    ],
  },
  {
    company: "Arth Infosoft Pvt. Ltd.",
    role: "MERN Stack Developer Intern",
    location: "Ahmedabad, India",
    period: "Jan 2023 – May 2023",
    bullets: [
      "Designed MongoDB schemas with optimized embedding vs referencing strategies for high-throughput workflows; built REST endpoints feeding structured data into analytical dashboards and React front ends.",
    ],
  },
  {
    company: "University of Connecticut Dining Services",
    role: "Student Manager",
    location: "Storrs, CT",
    period: "Aug 2024 – May 2026",
    bullets: [
      "Managed scheduling, payroll, and onboarding for 40+ student employees; used data analytics to optimize shift allocation and cut scheduling conflicts by tracking attendance and peak-demand patterns.",
    ],
  },
];

export const education = [
  {
    school: "University of Connecticut",
    degree: "M.Eng., Computer Science & Engineering (STEM)",
    location: "Storrs, CT",
    period: "Aug 2024 – May 2026",
    detail: "GPA 3.36/4.00 · Machine Learning, Deep Learning, Data Mining, Cloud Computing",
    logo: "/logos/uconn.png",
  },
  {
    school: "Gujarat Technological University",
    degree: "B.E., Computer Science & Engineering",
    location: "India",
    period: "Jul 2019 – May 2023",
    detail: "GPA 3.5/4.00",
    logo: "/logos/gtu.png",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "ML / AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "SHAP", "Grad-CAM", "Feature Engineering", "A/B Testing", "Credit Risk Modeling", "Model Monitoring & Drift Detection"],
  },
  {
    group: "GenAI / LLM",
    items: ["LangChain", "LangGraph", "RAG Pipelines", "ChromaDB", "Sentence Transformers", "Groq (Llama 3)", "HuggingFace", "Fine-tuning (LoRA / PEFT)"],
  },
  {
    group: "MLOps / Infra",
    items: ["MLflow", "FastAPI", "Streamlit", "Docker", "GitHub Actions", "AWS (EC2, S3, SageMaker)", "GCP (Vertex AI, BigQuery)", "Databricks"],
  },
  {
    group: "Languages / Data",
    items: ["Python", "SQL", "Git", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Power BI", "Tableau", "React"],
  },
];

export const certifications: {
  name: string;
  issuer: string;
  logo: string;
  image: string;
}[] = [
  {
    name: "Generative AI Fundamentals",
    issuer: "Databricks",
    logo: "/logos/databricks.svg",
    image: "/certs/genai-fundamentals.png",
  },
  {
    name: "Databricks Fundamentals Accreditation",
    issuer: "Databricks",
    logo: "/logos/databricks.svg",
    image: "/certs/databricks-fundamentals.png",
  },
  {
    name: "AI Agent Fundamentals",
    issuer: "Databricks",
    logo: "/logos/databricks.svg",
    image: "/certs/ai-agent-fundamentals.png",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "AWS",
    logo: "/logos/aws.svg",
    image: "/certs/aws-genai.png",
  },
  {
    name: "Azure AI Essentials Professional Certificate",
    issuer: "Microsoft · LinkedIn",
    logo: "/logos/microsoft.svg",
    image: "/certs/azure-ai-essentials.png",
  },
  {
    name: "Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    logo: "/logos/linkedin-icon.svg",
    image: "/certs/data-analytics-career.png",
  },
];

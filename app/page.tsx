import BackgroundOrbs from "@/components/BackgroundOrbs";
import ScrollProgress from "@/components/ScrollProgress";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import KineticMarquee from "@/components/KineticMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import ChatBubble from "@/components/ChatBubble";

export default function Page() {
  return (
    <main id="top" className="relative">
      <BackgroundOrbs />
      <ScrollProgress />
      <Nav />
      <Hero />
      <KineticMarquee />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <ChatBubble />
    </main>
  );
}

import Nav from "@/components/nav";
import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import StoryManifesto from "@/components/story-manifesto";
import StatsBar from "@/components/stats-bar";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <HowItWorks />
      <Features />
      <StoryManifesto />
      <StatsBar />
      <Testimonials />
      <Footer />
    </main>
  );
}

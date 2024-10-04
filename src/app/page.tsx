import FeatureCourses from "@/Components/FeatureCourses";
import HeroSection from "@/Components/HeroSection";
import WhyChooseUs from "@/Components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center text-white"> </h1>
      <HeroSection/>
      <FeatureCourses/>
      <WhyChooseUs/>
    </main>
  );
}

import Category from "@/components/organisms/Category";
import Clients from "@/components/organisms/Clients";
import Hero from "@/components/organisms/Hero";
import SignUpBanner from "@/components/organisms/SignUpBanner";

export default function Home() {
  return (
    <div className="px-32 mb-10">
      <Hero />
      <Clients />
      <Category />
      <SignUpBanner />
    </div>
  );
}


import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignUpBanner() {
  return (
    <div className="flex flex-row justify-between items-start mt-32 mb-10 px-16 pt-16 bg-primary text-primary-foreground">
      <div>
        <h1 className="text-5xl font-semibold">
          Start posting <br /> jobs today
        </h1>
        <p className="my-6">Start posting job for only Rp 50.000</p>
        <Button size="lg" variant="secondary" className="text-primary">
          Sign Up for free
        </Button>
      </div>
      <div>
        <Image
          alt="dashboard"
          src="/images/dashboard.png"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}

import Image from "next/image";
import FormSearch from "../FormSearch";

export default function Hero() {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-7xl font-semibold text-slate-800 w-max relative">
          Discover <br /> more than <br />{" "}
          <span className="text-primary">5000+ Jobs</span>
        </h1>
        <Image
          alt="pattern 2"
          src="/images/pattern2.png"
          width={455}
          height={32}
          className="mb-5"
        />
        <p className="text-muted-foreground text-lg">
          Great platform for the job seeker that searching for <br /> new career
          heights and passionate about startups.
        </p>
        <FormSearch />
      </div>
      <div className="block mt-2">
        <Image
          alt="hero"
          src="/images/hero.png"
          width={501}
          height={710}
          objectFit="contain"
        />
      </div>
    </div>
  );
}

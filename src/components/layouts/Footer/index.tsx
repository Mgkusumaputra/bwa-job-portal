import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const aboutLinks = [
  "Companies",
  "Pricing",
  "Terms",
  "Privacy Policy",
  "Advice",
];
const resourceLinks = ["Help Docs", "Guide", "Updates", "Contact Us"];
const socialMediaImg = [
  { src: "/images/soc-Facebook.png", href: "https://facebook.com" },
  { src: "/images/soc-Instagram.png", href: "https://instagram.com" },
  { src: "/images/soc-Twitter.png", href: "https://x.com" },
  { src: "/images/soc-LinkedIn.png", href: "https://linkedin.com" },
  { src: "/images/soc-Dribbble.png", href: "https://dribbble.com" },
];

export default function Footer() {
  return (
    <div className="bg-slate-900 px-32 pt-16 pb-11">
      <div className="flex flex-row items-start justify-between">
        {/* Logo Section */}
        <div>
          <Image alt="logo" src="/images/logo.png" width={160} height={36} />
          <p className="text-muted mt-8">
            Great platform for the job seeker that <br />
            passionate about startups. Find your dream job <br />
            easier.
          </p>
        </div>

        {/* About Links */}
        <div>
          <h1 className="text-lg text-primary-foreground font-semibold mb-5">
            About
          </h1>
          <div className="space-y-5">
            {aboutLinks.map((item: string, key: number) => (
              <Link key={key} href={`/${item}`} className="block text-muted">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Resource Links */}
        <div>
          <h1 className="text-lg text-primary-foreground font-semibold mb-5">
            Resource
          </h1>
          <div className="space-y-5">
            {resourceLinks.map((item: string, key: number) => (
              <Link key={key} href={`/${item}`} className="block text-muted">
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-lg text-primary-foreground font-semibold mb-5">
            Get job notifications
          </h1>
          <p className="text-muted">
            The lastest job news, articles, sent to <br />
            your inbox weekly
          </p>
          <div className="mt-10 inline-flex items-center gap-3">
            <Input placeholder="Your email address" className="py-5" />
            <Button className="py-5">Subscribe</Button>
          </div>
        </div>
      </div>

      <Separator className="mt-20 mb-11 bg-gray-300" />

      <div className="flex flex-row items-center justify-between">
        <p className="text-slate-600">
          {new Date().getFullYear()} @ JobHuntly. All rights reserved.
        </p>
        <div className="space-x-3">
          {socialMediaImg.map((item: any, key: number) => (
            <Link target="_blank" key={key} href={item.href}>
              <Image
                alt={item.src}
                src={item.src}
                width={32}
                height={32}
                className="inline"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

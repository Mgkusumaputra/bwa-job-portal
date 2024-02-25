import Image from "next/image";

const CLIENT_IMG = [
  {
    src: "/images/jobox.png",
    alt: "Jobox",
  },
  {
    src: "/images/dsign.png",
    alt: "Dsign",
  },
  {
    src: "/images/wave.png",
    alt: "Wave",
  },
  {
    src: "/images/twins.png",
    alt: "Twins",
  },
  {
    src: "/images/bubles.png",
    alt: "Bubles",
  },
];

export default function Clients() {
  return (
    <div className="relative z-10">
      <h1 className="text-lg text-muted-foreground">Companies we help grow</h1>
      <div className="mt-8 flex flex-row justify-between">
        {CLIENT_IMG.map((item: any, key: number) => (
          <Image
            key={key}
            alt={item.alt}
            src={item.src}
            width={139}
            height={35}
          />
        ))}
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { JobType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface JobItemProps extends JobType {}

export default function JobItem({
  categories,
  desc,
  href,
  image,
  jobType,
  location,
  name,
  type,
}: JobItemProps) {
  return (
    <Link
      href={href}
      className="border border-border p-8 flex flex-row items-start gap-6"
    >
      <Image alt={image} src={image} width={64} height={64} />
      <div>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm text-muted-foreground mb-2">
          {type} . {location}
        </p>
        <div className="h-5 inline-flex gap-2 items-center">
          <Badge variant="secondary">{jobType}</Badge>
          <Separator orientation="vertical" />
          {categories.map((item: string, key: number) => (
            <Badge
              key={key}
              variant="outline"
              className="rounded border-primary bg-primary/5 text-primary"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

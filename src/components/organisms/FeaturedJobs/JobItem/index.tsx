import { Badge } from "@/components/ui/badge";
import { JobType } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface JobItemProps extends JobType {}

export default function JobItem({
  image,
  href,
  jobType,
  name,
  type,
  location,
  desc,
  categories,
}: JobItemProps) {
  return (
    <Link href={href} className="border border-border p-6">
      <div className="flex flex-row justify-between items-start">
        <Image alt={image} src={image} width={48} height={48} />
        <span className="px-4 py-1 text-xs font-semibold text-primary border border-primary ">
          {jobType}
        </span>
      </div>
      <div className="my-4">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-muted-foreground mb-3">
          {type} . {location}
        </p>
        <p className="text-muted-foreground h-12 line-clamp-2 text-ellipsis">
          {desc}
        </p>
      </div>
      <div className="space-x-2">
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
    </Link>
  );
}

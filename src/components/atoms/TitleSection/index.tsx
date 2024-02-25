import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface TitleSectionProps {
  titleA: string;
  titleB: string;
  action: string;
  hrefAction: string;
}

export default function TitleSection({
  titleA,
  titleB,
  action,
  hrefAction,
}: TitleSectionProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-4xl font-bold">
        {titleA} <span className="text-primary">{titleB}</span>
      </h1>
      <Link
        href={hrefAction}
        className="inline-flex gap-3 items-center text-primary font-semibold cursor-pointer"
      >
        <p>{action}</p>
        <HiOutlineArrowNarrowRight />
      </Link>
    </div>
  );
}

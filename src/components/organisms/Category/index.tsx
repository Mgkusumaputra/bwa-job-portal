import TitleSection from "@/components/atoms/TitleSection";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";

const CATEGORY_DATA = [
  {
    title: "Design",
    jobAvail: 100,
  },
  {
    title: "Sales",
    jobAvail: 100,
  },
  {
    title: "Business",
    jobAvail: 100,
  },
  {
    title: "Marketing",
    jobAvail: 100,
  },
  {
    title: "Human Resource",
    jobAvail: 100,
  },
  {
    title: "Finance",
    jobAvail: 100,
  },
  {
    title: "Engineering",
    jobAvail: 100,
  },
  {
    title: "Technology",
    jobAvail: 100,
  },
];

export default function Category() {
  return (
    <div className="mt-32 mb-8">
      <TitleSection
        titleA="Explore by"
        titleB="Category"
        action="Show all jobs"
        hrefAction="/"
      />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {CATEGORY_DATA.map((item: any, key: number) => (
          <Link
            key={key}
            href={"/"}
            className="border border-border p-8 cursor-pointer transition-colors group hover:border-primary hover:bg-primary hover:text-white"
          >
            <BiCategory className="w-12 h-12 text-primary group-hover:text-white" />
            <div className="mt-7">
              <h2 className="text-3xl font-semibold">{item.title}</h2>
              <div className="text-muted-foreground inline-flex items-center gap-1 mt-1 group-hover:text-white">
                <p>{item.jobAvail} jobs available</p>
                <HiOutlineArrowRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import TitleSection from "@/components/atoms/TitleSection";
import JobItem from "./JobItem";

const FEATURED_JOBS_DATA = [
  {
    images: "/images/company.png",
    href: "/",
    jobType: "Full Time",
    name: "Email Marketing",
    type: "Agency",
    location: "Jakarta, Indonesia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt mollitia. Nemo, illo ratione minima numquam odio inventore adipisci cupiditate sequi maiores perferendis assumenda molestiae expedita, voluptatem eos amet deserunt.",
    categories: ["Marketing", "Email"],
  },
  {
    images: "/images/company.png",
    href: "/",
    jobType: "Full Time",
    name: "Back-End Engineer",
    type: "Agency",
    location: "Jakarta, Indonesia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt mollitia. Nemo, illo ratione minima numquam odio inventore adipisci cupiditate sequi maiores perferendis assumenda molestiae expedita, voluptatem eos amet deserunt.",
    categories: ["Engineer", "Back-End"],
  },
  {
    images: "/images/company.png",
    href: "/",
    jobType: "Full Time",
    name: "Front-End Engineer",
    type: "Agency",
    location: "Jakarta, Indonesia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt mollitia. Nemo, illo ratione minima numquam odio inventore adipisci cupiditate sequi maiores perferendis assumenda molestiae expedita, voluptatem eos amet deserunt.",
    categories: ["Engineer", "Front-End"],
  },
  {
    images: "/images/company.png",
    href: "/",
    jobType: "Full Time",
    name: "UX Designer",
    type: "Agency",
    location: "Jakarta, Indonesia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt mollitia. Nemo, illo ratione minima numquam odio inventore adipisci cupiditate sequi maiores perferendis assumenda molestiae expedita, voluptatem eos amet deserunt.",
    categories: ["Product", "UX", "Designer"],
  },
];

export default function FeaturedJobs() {
  return (
    <div className="mt-32 mb-10">
      <TitleSection
        titleA="Featured"
        titleB="Jobs"
        action="Show all jobs"
        hrefAction="/"
      />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {FEATURED_JOBS_DATA.map((item: any, key: number) => (
          <JobItem
            key={key}
            href={item.href}
            image={item.images}
            jobType={item.jobType}
            name={item.name}
            type={item.type}
            location={item.location}
            desc={item.desc}
            categories={item.categories}
          />
        ))}
      </div>
    </div>
  );
}

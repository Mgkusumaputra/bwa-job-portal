import TitleSection from "@/components/atoms/TitleSection";
import JobItem from "./JobItem";
import { JOBS_DATA } from "@/constant";

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
        {JOBS_DATA.map((item: any, key: number) => (
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

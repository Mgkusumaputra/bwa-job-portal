import TitleSection from "@/components/atoms/TitleSection";
import { JOBS_DATA } from "@/constant";
import JobItem from "./JobItem";

export default function LastestJobs() {
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection
        titleA="Lastest"
        titleB="jobs open"
        action="Show all jobs"
        hrefAction="/"
      />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {JOBS_DATA.map((item: any, key: number) => (
          <JobItem
            key={key}
            categories={item.categories}
            desc={item.desc}
            href={item.href}
            image={item.images}
            jobType={item.jobType}
            location={item.location}
            name={item.name}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}

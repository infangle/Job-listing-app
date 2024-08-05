import React from "react";
import Link from "next/link";
const JobCard = ({ job, index }) => {
  return (
    <Link
      key={job.id}
      href={{
        pathname: `./components/${job.id}`,
        query: { id: job.id },
      }}
      passHref
      className="flex flex-row border-solid border border-custom-border p-6 bg-white rounded-3xl mb-7 w-60p gap-2"
    >
      <div className="m-2 min-w-16 max-w-20">
        <img src={job.logoUrl} alt={job.title} className="w-full h-auto" />
      </div>
      <div>
        <p className="font-epilogue text-xl font-semibold text-custom-blue leading-6 ml-2 mr-2 mb-3">
          {job.title}
        </p>
        <p className="font-epilogue text-sm font-normal leading-6 text-custom-gray m-4">
          {job.orgName} {job.location}
        </p>
        <p className="font-epilogue text-sm font-normal leading-6 text-custom-gray m-4">
          {job.description}
        </p>
        <div className="flex gap-3 mt-2">
          <button className=" px-4 rounded-full bg-green-100 text-green-300">
            In person
          </button>
          <button className="w-auto rounded-full text-orange-400 border border-orange-400 h-8 px-4">
            Education
          </button>
          <button className="w-auto rounded-full text-Slate-Blue border border-Slate-Blue h-8 px-4">
            IT
          </button>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;

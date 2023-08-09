import React from "react";
import { Link } from "react-router-dom";
import { category } from "../data";

const CategoryNav = () => {
  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {category?.map((data) => {
            return (
              <Link
                to={`/search?query=${data.type}`}
                className="cursor-pointer uppercase"
                key={data.id}
              >
                {data.type}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;

import React from "react";
import { FiX } from "react-icons/fi";
import { category } from "../data";
import { Link } from "react-router-dom";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  return (
    <div className="w-full h-full bg-primary p-8">
      <div
        className="flex justify-end mb-8 cursor-pointer"
        onClick={() => setCatNavMobile(false)}
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {category?.map((categories) => {
          return (
            <Link
              to={`/search?query=${categories.type}`}
              className="uppercase font-medium"
              key={categories.id}
              onClick={() => setCatNavMobile(false)}
            >
              {categories.type}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;

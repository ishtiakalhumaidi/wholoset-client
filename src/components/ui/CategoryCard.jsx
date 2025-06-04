import React from "react";

const CategoryCard = ({ name, icon: Icon }) => {
  return (
    <div className="group bg-base-100 border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary/10 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition duration-300">
          <Icon />
        </div>
        <h3 className="text-base font-medium text-content group-hover:text-primary transition">{name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;

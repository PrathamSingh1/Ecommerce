import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
  });
  return (
    <div className="bg-red-500 text-foreground h-full">
      <h2>FilterSidebar</h2>
    </div>
  );
};

export default FilterSidebar;

import React from "react";

import Child1Data from "./Child1Data";
import Child2Data from "./Child2Data";
import Child3Data from "./Child3Data";
import { Fruits, Groceries, Vegetables } from "../Data/data";

const ParentData = () => {
  return (
    <div>
      <Child1Data VegList={Vegetables} />
      <Child2Data GroceryList={Groceries} />
      <Child3Data FruitList={Fruits} />
    </div>
  );
};

export default ParentData;

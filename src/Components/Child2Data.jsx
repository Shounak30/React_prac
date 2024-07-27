import React from "react";

const Child2Data = ({ GroceryList }) => {
  return (
    <>
      <h2 style={{ color: "greenyellow" }}>GroceryList</h2>
      <table border="2px">
        <tr>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>name</th>
        </tr>
        {GroceryList.map((grocery) => {
          return (
            <tr>
              <td>{grocery.category}</td>
              <td>{grocery.price}</td>
              <td>{grocery.stocked ? "YES" : "NO"}</td>
              <td>{grocery.name}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Child2Data;

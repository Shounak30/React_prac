import React from "react";

const Child1Data = ({ VegList }) => {
  return (
    <>
      <h2 style={{ color: "Tomato" }}>Vegetable List</h2>
      <table border="2px">
        <tr>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>name</th>
        </tr>

        {VegList.map((veg) => (
          <tr>
            <td> {veg.category}</td>
            <td>{veg.price}</td>
            <td>{veg.stocked ? "Yes" : "No"}</td>
            <td>{veg.name}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Child1Data;
[1, 2, 3].map((a) => a * 2);

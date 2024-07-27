import React from "react";

const Child3Data = ({ FruitList }) => {
  return (
    <div>
      <h2 style={{ color: "tomato" }}>Fruits</h2>

      <table border={"2px"}>
        <tr>
          <td>Apple</td>
          <td>Orange</td>
          <td>Grapes</td>
          <td>Guava</td>
        </tr>
        {FruitList.map((fruit) => {
          return (
            <tr>
              <td>{fruit.category}</td>
              <td>{fruit.price}</td>
              <td>{fruit.stocked ? "YES" : "NO"}</td>
              <td>{fruit.category}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Child3Data;

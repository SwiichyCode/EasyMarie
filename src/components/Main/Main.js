import React, { useState } from "react";
import { MainWrapper } from "./MainStyle";
import { items } from "../../data";
import { Table } from "react-bootstrap";

export default function Main() {
  const [data, setData] = useState("");

  return (
    <MainWrapper>
      {/* Cristaux calculator */}
      <div className="cristaux-calculator">
        <label for="cristal">💎</label>
        <input
          type="number"
          id="cristal"
          onChange={(e) => setData(e.target.value)}
        />
        <span>One 💎 = {parseInt(data / 95)} 🪙​</span>
      </div>
      <Table className="items-calculator" striped bordered hover>
        <thead>
          <tr>
            <th>Img</th>
            <th>Item name</th>
            <th>Quantity</th>
            <th>Cristal price</th>
            <th>Unit price</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, img, quantity, cristalPrice }, index) => {
            return (
              <>
                <tr>
                  <td className="justify-content-center">
                    <img src={img} alt="" />
                  </td>
                  <td align="middle">
                    <span>{name}</span>
                  </td>
                  <td align="center">
                    <span>x{quantity}</span>
                  </td>
                  <td align="center">{cristalPrice} 💎</td>
                  <td align="center">{cristalPrice / quantity}</td>
                  <td align="center">
                    {(cristalPrice / quantity) * parseInt(data / 95)}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </MainWrapper>
  );
}

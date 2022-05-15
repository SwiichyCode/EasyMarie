import React from "react";
import { items } from "../../data";

export default function ItemList({ data }) {
  const perStack = (cristal, quantity) => {
    return (
      ((cristal / quantity) * (data * 0.0095)).toFixed(2) * quantity
    ).toFixed(2);
  };

  return (
    <tbody>
      {items
        // .filter((e) => e.tier === 3)
        .map((item) => {
          return (
            <>
              {item.amelioration.map((e) => {
                return (
                  <tr>
                    <td className="justify-content-center">
                      <img src={e.img} alt="" />
                    </td>
                    <td align="middle">
                      <span>{e.name}</span>
                    </td>
                    <td align="center">
                      <span>x{e.quantity}</span>
                    </td>
                    <td align="center">{e.cristalPrice} 💎</td>
                    <td align="center">{e.cristalPrice / e.quantity} 💎</td>
                    <td align="center" className="perStack">
                      {perStack(e.cristalPrice, e.quantity)}
                      🪙
                    </td>
                  </tr>
                );
              })}
            </>
          );
        })}
    </tbody>
  );
}

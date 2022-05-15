import React, { useState } from "react";
import { MainWrapper } from "./MainStyle";
import Tableaux from "../Table/Tableaux";

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
        <span>One 💎 = {(data * 0.0095).toFixed(2)} 🪙​</span>
      </div>
      <Tableaux data={data} />
    </MainWrapper>
  );
}

import React from "react";
import { NavBarWrapper } from "./NavBarStyle";

export default function NavBar() {
  const items = [
    { name: "Home", url: "#" },
    { name: "Tools", url: "#" },
    { name: "Discord", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <NavBarWrapper>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </NavBarWrapper>
  );
}

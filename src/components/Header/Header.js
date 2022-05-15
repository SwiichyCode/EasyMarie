import React from "react";
import NavBar from "../NavBar/NavBar";
import { HeaderLogo, HeaderWrapper } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>Steins gate - Tools</HeaderLogo>
      <NavBar />
    </HeaderWrapper>
  );
}

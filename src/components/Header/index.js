import React from "react";
import facebook from "../../assets/facebook.png";
import { Img, Link, Wrapper } from "./styles";

export default function Header() {
  return (
    <Wrapper>
      <Img src={facebook} alt="facebook" />
      <Link>Meu perfil</Link>
    </Wrapper>
  );
}

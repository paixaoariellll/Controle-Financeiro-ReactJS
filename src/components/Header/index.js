import React from "react";
import Logo from '../../assets/logo.svg';
import * as C from "./styles";


const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <img src={Logo} alt="Controle" />
      </C.Header>
    </C.Container>
  );
};

export default Header;

import { Children } from "react";
import styled from "styled-components";

export const Container = styled.div`
  color: #363F5F;
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;
`;

/* Parei tentando colocar cores separadas tanto color quanto background
por children
Entradas em verde
Saídas em vermelho 
Total em verde quando estivesse positivo,
vermelho quando estivesse negativo e qualquer
outra cor quando estivesse zerado
 */

export const ResumeItem = styled.div`
  background-color: green;
`;

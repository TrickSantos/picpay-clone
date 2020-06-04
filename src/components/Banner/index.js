import React from "react";
import { Container, Details, Title, Description, Img } from "./styles";

import img13 from "../../images/13.png";

export default function Tips() {
  return (
    <Container>
      <Details>
        <Title>Cobre um Amigo</Title>
        <Description>
          Mantenha suas parcerias em dia, e cobre pelo nosso App.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}

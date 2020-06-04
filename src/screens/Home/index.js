import React from "react";
import { Text } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { StatusBar, Platform } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Suggestions from "../../components/Suggestions";
import Atividades from "../../components/Atividades";
import Banner from "../../components/Banner";
import Tips from "../../components/Tips";
import {
  Wrapper,
  Header,
  Container,
  Balance,
  BalanceContainer,
  BalanceTitle,
} from "./styles";

export default function Home() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#000");
    }, [])
  );
  return (
    <Wrapper>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color="#10c86e"
          />
          <BalanceContainer>
            <BalanceTitle>Meu Saldo</BalanceTitle>
            <Balance>R$ 10,00</Balance>
          </BalanceContainer>
          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
        <Atividades />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}

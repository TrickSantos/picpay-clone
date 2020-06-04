import React, { useState, useCallback } from "react";
import { Text, Switch } from "react-native";
import { StatusBar, Platform } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
} from "./styles";

import creditCard from "../../images/credit-card.png";

export default function Wallet() {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle("light-content");
      Platform.OS === "android" && StatusBar.setBackgroundColor("#52E78C");
    }, [])
  );

  const [visible, setVisible] = useState(true);

  const [useBalance, setUseBalance] = useState(true);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleUseBalance = () => {
    setUseBalance(!useBalance);
  };
  return (
    <Wrapper>
      <StatusBar
        barStyle="light-content"
        backgroundColor={useBalance ? "#52E78C" : "#D3D3D3"}
      />
      <Header
        colors={useBalance ? ["#52E78C", "#1AB563"] : ["#D3D3D3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>
          <BalanceContainer>
            <Value>
              R$ <Bold>{visible ? "10,00" : "-----"}</Bold>
            </Value>
            <EyeButton onPress={handleVisible}>
              <Feather
                name={visible ? "eye" : "eye-off"}
                size={24}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está rendendo 100% do CDI</Info>
          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={26} color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleUseBalance} />
      </UseBalance>
      <PaymentMethods>
        <PaymentMethodsTitle>Forma de Pagamento</PaymentMethodsTitle>
        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Cadastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu picpay.
              </CardInfo>
            </CardDetails>
            <Img source={creditCard} resizeMode="contain" />
          </CardBody>
          <AddButton>
            <AntDesign name="pluscircleo" size={25} color="#0DB060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>
      </PaymentMethods>
    </Wrapper>
  );
}

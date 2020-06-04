import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.ScrollView``;

export const Balance = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
export const BalanceTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 14px;
`;
export const BalanceContainer = styled.View``;

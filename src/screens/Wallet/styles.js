import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 200px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;
export const Value = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: 200;
`;
export const Bold = styled.Text`
  font-weight: bold;
`;
export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
export const Actions = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  width: 130px;
  height: 40px;
`;

export const ActionLabel = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 10px;
`;
export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 15px;
  padding: 0 14px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #fff;
`;
export const Card = styled.View`
  background: #1e232a;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 15px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const CardInfo = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-top: 10px;
`;
export const Img = styled.Image`
  width: 50px;
`;
export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  margin-left: 10px;
  font-size: 16px;
  font-weight: bold;
`;

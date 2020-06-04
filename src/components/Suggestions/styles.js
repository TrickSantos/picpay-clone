import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  background: #1e222b;
  height: 100px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-top: 5px;
`;
export const Option = styled.TouchableOpacity`
  width: 80px;
  margin-right: 16px;
  align-items: center;
`;
export const Img = styled.Image``;

import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  margin-top: 15px;
`;
export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 130px;
  height: 170px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 12px;
`;
export const Title = styled.Text`
  color: #fff;
`;
export const Img = styled.Image`
  align-self: center;
`;

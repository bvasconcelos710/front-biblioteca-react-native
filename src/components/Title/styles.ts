import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const TitleText = styled.Text`
  font-size: 27px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.secondary};
`;

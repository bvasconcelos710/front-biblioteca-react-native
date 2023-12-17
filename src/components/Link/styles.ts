import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const HandleLink = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`;

export const TextLink = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: underline;
  font-weight: 900;
`;

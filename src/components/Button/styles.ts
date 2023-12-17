import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
`;

export const HandleButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 16px;
  border-radius: 20px;
  align-items: center;
`;

export const TextButton = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
`;

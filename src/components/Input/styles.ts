import { TextInput } from "react-native";
import styled from "styled-components/native";

interface Props {
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background_input};
  color: ${(props) => props.theme.colors.text};
  padding: 12px;
  border-color: ${(props) =>
    props.isError
      ? props.theme.colors.main
      : props.isFocused
      ? props.theme.colors.secondary
      : props.theme.colors.border};
  border-width: 1px;
  border-radius: 10px;
`;

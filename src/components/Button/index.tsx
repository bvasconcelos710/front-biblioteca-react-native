import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, HandleButton, TextButton } from "./styles";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <Container>
      <HandleButton {...rest}>
        <TextButton>{title}</TextButton>
      </HandleButton>
    </Container>
  );
}

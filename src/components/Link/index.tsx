import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, HandleLink, TextLink } from "./styles";

export type LinkProps = TouchableOpacityProps & {
  title: string;
};

export function Link({ title, ...rest }: LinkProps) {
  return (
    <Container>
      <HandleLink {...rest}>
        <TextLink>{title}</TextLink>
      </HandleLink>
    </Container>
  );
}

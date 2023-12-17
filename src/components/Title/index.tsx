import React from "react";
import { Container, TitleText } from "./styles";

interface IProps {
  title: string;
}

export function Title({ title }: IProps) {
  return (
    <Container>
      <TitleText>{title}</TitleText>
    </Container>
  );
}

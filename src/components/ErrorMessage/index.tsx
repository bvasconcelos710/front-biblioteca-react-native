import { ErrorText } from "./styles";

interface Props {
  description: string | undefined;
}

export function ErrorMessage({ description }: Props) {
  return <ErrorText>{description}</ErrorText>;
}

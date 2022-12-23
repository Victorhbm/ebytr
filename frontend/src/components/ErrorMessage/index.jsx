import { Paragraph } from "./style";

function ErrorMessage({ message }) {
  return (
    <Paragraph>{ message }</Paragraph>
  );
}

export default ErrorMessage;
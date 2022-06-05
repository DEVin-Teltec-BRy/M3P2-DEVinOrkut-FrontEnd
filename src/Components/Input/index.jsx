import { Form } from "react-bootstrap";

export const NewInputForm = ({
  label,
  type,
  name,
  text,
  placeholder,
  error,
  onChange,
  value,
  isValid,
  disabled,
  as,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>

      <Form.Control
        type={type ? type : "text"}
        name={name}
        onChange={onChange}
        value={value}
        isValid={!!isValid}
        placeholder={placeholder}
        isInvalid={error}
        disabled={disabled}
        as={as}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Text>{text}</Form.Text>
    </Form.Group>
  );
};

import { Badge, Card } from "react-bootstrap";
import { CardContainer } from "./cardMain.styled";

export const CardMain = ({ children, title , count,bg }) => {
  return (
    <CardContainer bg={bg} >
      {title && count && (
        <Card.Header>
          {title}
          <Badge pill>{count}</Badge>
        </Card.Header>
      )}

      <Card.Body>{children}</Card.Body>
    </CardContainer>
  );
};

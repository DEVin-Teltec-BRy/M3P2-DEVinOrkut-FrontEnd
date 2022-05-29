import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardContainer } from "./cardMain.styled";

export const CardMain = ({ children, title, count, bg, toAll,pagination }) => {
  return (
    <CardContainer bg={bg}>
      {title && (
        <Card.Header>
          {title}
          <Badge pill>{count}</Badge>
        </Card.Header>
      )}

      <Card.Body>{children}</Card.Body>
      {toAll && (
        <Card.Footer>
          <Link to={`/${toAll}`}>Ver todos</Link>
        </Card.Footer>
      )}
      {pagination && (
        <Card.Footer className="paginations">
         {pagination}
        </Card.Footer>
      )}
    </CardContainer>
  );
};

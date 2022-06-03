import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CardContainer,CardBody } from "./cardMain.styled";

export const CardMain = ({
  children,
  title,
  count,
  bg,
  toAll,
  pagination, center=true, column
}) => {
  return (
    <CardContainer bg={bg}>
      {title && (
        <Card.Header>
          {title}
          <Badge pill>{count}</Badge>
        </Card.Header>
      )}

      <CardBody column={column ? 'true':''} center={center ? "true" : ""}>{children}</CardBody>
      {toAll && (
        <Card.Footer>
          <Link to={`/${toAll}`}>Ver todos</Link>
        </Card.Footer>
      )}
      {pagination && (
        <Card.Footer className="paginations">{pagination}</Card.Footer>
      )}
    </CardContainer>
  );
};

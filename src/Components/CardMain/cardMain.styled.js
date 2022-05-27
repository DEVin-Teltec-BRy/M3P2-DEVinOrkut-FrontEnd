import styled from "styled-components";
import { Card } from "react-bootstrap";

export const CardContainer = styled(Card)`
  background: ${({ bg }) => (bg === "grey" ? "var(--card);" : "var(--white);")};

  .card-header {
    border-bottom: 0px;
    background: var(--white);
    position: relative;
    font-weight: bold;
    font-size: 1.1rem;
    .badge {
      position: absolute;
      right: 1rem;
      font-weight: normal;
    }
    .bg-primary {
      background-color: var(--pink) !important;
    }
  }
  .card-body{
    display: flex;
    gap:5px;
    flex-wrap:wrap;
  }
  .card-footer{
    background:var(--white) ;
    border-top:0px;
    padding: 5px 10px ;
    text-align:end ;
    a{
      color: var(--pink);
    }
  }
  .active >.page-link {
    background:var(--pink) ;
    border: var(--pink);
  }
  .pagination {
    justify-content:flex-end;
  }
`;

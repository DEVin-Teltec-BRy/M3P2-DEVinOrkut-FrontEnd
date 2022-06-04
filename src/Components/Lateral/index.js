import { CardMain } from "../CardMain";
import { CardSecondary } from "../CardSecondary";

export const Lateral = ({content, title}) => {
    return (
      <CardMain title={title} count={content.length} toAll="friends">
        {content.map((_, key) => (
          <CardSecondary
            round
            key={key}
            text="Bill Gates"
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
    );
  };
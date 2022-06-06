import { CardMain } from "../CardMain";
import { CardSecondary } from "../CardSecondary";

export const Lateral = ({content, title}) => {
    return (
      <CardMain title={title} count={content.length} toAll="friends">
        {content.map(({fullName,id}, key) => (
          <CardSecondary
            round
            to='usuario'
            id={id}
            key={key}
            text={fullName}
            src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
          />
        ))}
      </CardMain>
    );
  };
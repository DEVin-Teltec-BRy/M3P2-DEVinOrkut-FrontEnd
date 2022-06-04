import { CardMain } from "../CardMain";
import { CardSecondary } from "../CardSecondary";
import profileDefaultM from "../../Assets/images/default-m.png";
import profileDefaultF from "../../Assets/images/default-f.png";

export const Lateral = ({content, title}) => {
    return (
      <CardMain title={title} count={content.length} toAll="friends">
        {content.map((friend, key) => (
          <CardSecondary
            friend={friend}
            key={key}
            round
            text={friend.fullName}
            src={friend.profilePicture[0] || friend.gender.substr(1).toUpperCase() === 'F' ? profileDefaultF : profileDefaultM}
          />
        ))}
      </CardMain>
    );
  };
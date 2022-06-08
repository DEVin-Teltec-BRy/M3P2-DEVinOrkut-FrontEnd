import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Lateral } from "../../Components/Lateral";
import { Pagination } from "../../Components/Pagination";
import { useData } from "../../Context/dataContext";
import Layout from "../../Layout";
import { useState, useEffect } from "react";
import { Loading } from "../../Components/Loading";

export const FriendPage = () => {
  const [testArr, setTestArr] = useState([]);
  const [index, setIndex] = useState(1);

  const {
    user: { friends, communities },
  } = useData();

  useEffect(() => {
    if (friends.length > 0) {
      const testArrEffect = Array(39).fill(friends[0]);
      testArrEffect.push(friends[1]);
      setTestArr(testArrEffect);
    }
    console.log(index);
  }, [friends, index]);

  // console.log("friends: ", friends);
  // console.log("testArr: ", testArr);

  return (
    <Layout lateral={<Lateral content={communities} title="Comunidades" />}>
      <CardMain
        title="Amigos"
        count={testArr.length}
        pagination={
          <Pagination 
            pageChange={setIndex}
            // nro={5} 
            nro={testArr.length / 20}
          />
        }
      >
        {testArr.length > 0 ? (
          testArr.map(({ fullName, id }, key) => (
            (key < (index)*20 && key >= ((index)*20)-20 ) ?
            (
               <CardSecondary
                key={key}
                round
                to="usuario"
                id={id}
                text={fullName}
                src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
              />
            ) : (null)
          ))
        ) : (
          <Loading></Loading>
        )}
      </CardMain>
    </Layout>
  );
};

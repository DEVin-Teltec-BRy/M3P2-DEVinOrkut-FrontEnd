import { CardMain } from "../../Components/CardMain";
import { CardSecondary } from "../../Components/CardSecondary";
import { Pagination } from "../../Components/Pagination";
import Layout from "../../Layout";
import { CommunityDetail } from "../../Components/CommunityDetail";
import AsideContent from "./asideContent.styled.js";
export const CommunityDetailPage = () => {
    return (
        <Layout lateral={<Lateral />}>
            <CardMain count={1000} pagination={<Pagination />}>
                {<CommunityDetail
                    title="Tocava a Campainha e Corria"
                    category="Viagens"
                    creatAt="08/08/2004"
                    owner="Elon Mosca"
                    imgsrc="https://img10.orkut.br.com/community/f1c6ee6a8d9901c05190658e3fcd68fb.jpg"
                    isowner={true}
                    description="Quem nunca tocou a campainha de alguém e saiu correndo?
                    Sim, a campainha daquela vizinha chata, daquele vizinho insuportável que ninguém aguentava, daquela velha senhora que sempre brigava e xingava você e seus amigos para que brincassem ”MAIS PRA LÁ DA RUA”.
                    Tocada só prá ver a pessoa atender e ficar com aquela cara, e você tá dando risada até não querer mais."
                />}

            </CardMain>
        </Layout>
    );
};

export const Lateral = () => {
    return (
        <AsideContent>
            <CardMain title="Membros" count={2000} toAll=":communityid/members">
                {[...Array(8)].map((_, key) => (
                    <CardSecondary
                        round
                        key={key}
                        text="Bill Gates"
                        src="https://cdn.allfamous.org/people/avatars/bill-gates-zdrr-allfamous.org.jpg"
                    />
                ))}
            </CardMain>
            <CardMain title="Comunidades" count={1000} toAll="communities">
                {[...Array(8)].map((_, key) => (
                    <CardSecondary
                        size="md"
                        key={key}
                        text="Full Bugs"
                        src="https://thumbs.dreamstime.com/b/o-homem-irado-na-camisa-vermelha-rasga-folha-de-papel-6582601.jpg"
                    />
                ))}
            </CardMain>
        </AsideContent>
    );
};
import { useNavigate } from "react-router-dom";
import * as S from './forum.style'
import { NewButton } from "../Button";
export const BottomForum = ({ lastUserImg, title, replys, lastResponse, forumid, comunityid }) => {
    const navigate = useNavigate();
    return (
        <S.MainDivCard>
            <div className="img">
                <img src={lastUserImg} alt="" />
            </div>
            <div className="content">
                <div className="title"><span onClick={() => navigate(`/communities/${comunityid}/forum/${forumid}`)}> {title}</span></div>
                <div className="infos"><p>{replys} Respostas</p> <p>Ultima resposta: {lastResponse}</p></div>
            </div>
        </S.MainDivCard >
    )
}


export const ForumCard = ({ userImg, userName, content, creatAt, userid, canEditOrDel }) => {
    const navigate = useNavigate();
    return (
        <>
            <S.ForumDivCard>
                <div className="img">
                    <img src={userImg} alt="" onClick={() => navigate(`/user/${userid}`)} />
                </div>
                <div className="content">
                    <div className="title"><span onClick={() => navigate(`/user/${userid}`)}> {userName}</span>
                        {canEditOrDel && (
                            <NewButton size="sm">
                                X
                            </NewButton>)}
                    </div>
                    <div className="postcontent"><p>{content}</p></div>
                    <div className="infos"><p>Postado há: {creatAt}</p>
                        {canEditOrDel && (
                            <NewButton size="sm">
                                Editar
                            </NewButton>)}


                    </div>
                </div>

            </S.ForumDivCard >

        </>
    )
}



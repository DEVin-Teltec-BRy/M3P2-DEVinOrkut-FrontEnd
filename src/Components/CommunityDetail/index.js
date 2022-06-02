import React from 'react'
import { Form } from "react-bootstrap";

import * as S from './communityDetail.style'

export const CommunityDetail = ({ title, imgsrc, category, creatAt, owner, isowner, description, children }) => {
    return (
        <S.MainSection>
            <S.DivTitle><h1>{title}</h1></S.DivTitle>
            <hr />
            <S.DivContent>
                <div className="img-container"><img src={imgsrc} alt="" /></div>
                <div className="infos">
                    <ul>
                        <li><span>Categoria:</span> {category}</li>
                        <li><span>Criada em:</span> {creatAt}</li>
                        <li><span>Proprietário:</span> {owner}</li>
                    </ul>
                    {isowner && (<Form><Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Editar Comunidade"
                    /></Form>)}

                </div>
            </S.DivContent>
            <hr />
            <S.DivDescription> <span>Descrição:</span> <p>{description}</p></S.DivDescription>
            <hr />
            <S.DivForum>
                <div className="top-forum"><span>Fórum</span> <button>Criar Tópico</button></div>
                <div className="body-forum">

                    {children}
                </div>
            </S.DivForum>
        </S.MainSection>
    )
}


import { CardContainerSecondary } from "./cardSecondary.styled"

export const CardSecondary = ({size,round,src,text})=>{
    return (
        <CardContainerSecondary bg='grey' size={size} round={round ? 'true':''}>
            <img src={src} alt="" />
            <div>
                {text}
            </div>
        </CardContainerSecondary>
    )
}
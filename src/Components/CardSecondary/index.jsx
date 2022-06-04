import { CardContainerSecondary } from "./cardSecondary.styled"

export const CardSecondary = ({size,round,src,text, count})=>{
    return (
        <CardContainerSecondary bg='grey' size={size} round={round ? 'true':''}>
            <img src={src} alt={`Foto do perfil de ${text}`} />
            <div>
                {text}
            </div>
        </CardContainerSecondary>
    )
}
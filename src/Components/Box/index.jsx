import { BoxContent } from "./box.styled"

export const BoxContainer = ({title,children})=>{

    return (
        <BoxContent>
            <h2>{title}:</h2>
            <div>
                {children}
            </div>
        </BoxContent>
    )
}
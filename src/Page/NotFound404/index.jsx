import notFound from '../../Assets/404 Error.svg'
import { MainNootFound } from './notfound.styled'
export const NotFoundPage = ()=>{

    return (
        <MainNootFound>
            <img src={notFound} alt="not found"/>
        </MainNootFound>
    )
}
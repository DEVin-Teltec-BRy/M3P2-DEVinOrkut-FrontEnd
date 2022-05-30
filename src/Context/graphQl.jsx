import { ApolloProvider } from '@apollo/client'
import {clientGraphQl} from  '../Graphql'

export const GraphQlProvider = ({children})=>{

return (
    <ApolloProvider client={clientGraphQl}>
        {children}
    </ApolloProvider>
)
}

import { gql } from "@apollo/client";


export const SEND_EMAIL = gql`
mutation SendEmailresetPassword($user: UserPassword) {
  sendEmailresetPassword(user: $user)
}
`; 
export const RESET_PASS = gql`
mutation ChangePassword($user: NewPassword) {
  changePassword(user: $user)
}
`
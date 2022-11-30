import { User } from "../interfaces/user"




interface CardUserProps {
    user: User;

}
export const CardUser: React.FC<CardUserProps>=({ user }: CardUserProps) =>{


    return (
        <h1>{user.username}</h1>
    )
}





import { User } from "../interfaces/user"
import './CardUser.css'



interface CardUserProps {
    user: User;

}
export const CardUser: React.FC<CardUserProps> = ({ user }: CardUserProps) => {


    return (

        <article id={user.id} className="article-card">
            <h1>Username: {user.username}</h1>
            <h3>First Name : {user.firstName}</h3>
            <h3>Last Name : {user.lastName}</h3>
            <p>Description : {user.description}</p>
            <p>Time created : {user.timeCreated}</p>
            {user.timeEdited ? <p>Last Edited : {user.timeEdited}</p> : ''}


        </article>
    )
}





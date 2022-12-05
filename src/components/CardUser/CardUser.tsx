import { User } from "../model/users"

import male from '../utils/profile-male.png'
import female from '../utils/profile-female.png'
import './CardUser.css'
import { UserUpdateListener } from "../shared/common-types";





interface CardUserProps {
    user: User;
    owner: User;

    onEditedUser: UserUpdateListener;
    admin: 2 | undefined


}
export const CardUser: React.FC<CardUserProps> = ({ user, owner, onEditedUser, admin }: CardUserProps) => {

    if (owner !== undefined) {
  
    }


    return (
        <article id={user.id + ''} className="article-card">

            <h1>Username: {user.username}</h1>
            <h3>First Name : {user.firstName}</h3>
            <h3>Last Name : {user.lastName}</h3>
            {user.description ? <p>Descriprion : {user.description}</p> : ''}
            <p>Time created : {user.timeCreated}</p>
            {user.timeEdited ? <p>Last Edited : {user.timeEdited}</p> : ''}
            <h3>GENDER :{user.gender === 1 ? 'MALE' : 'FEMALE'}</h3>
            {user.imageUrl ? <img src={user.imageUrl} alt="ProfilPic" height={250} width={250} /> : user.gender === 1 ? <img src={male} alt="Profile-Male" height={250} width={250} /> : <img src={female} alt="Profile-Female" height={250} width={250} />}
            {admin === 2 ? <button id={user.id + ''} onClick={() => onEditedUser(user)}>You are ADMIN, edit User</button> : user.id === owner?.id ? <button id={user.id + ''} onClick={() => onEditedUser(user)}>Edit User</button> : ''}

            {((user.role === 2) && (user.id === owner?.id)) ? <button id={owner.id + ''} onClick={() => onEditedUser(user)}>Edit</button> : ''}





        </article>
    )
}

export default CardUser





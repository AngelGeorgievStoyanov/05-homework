import { User } from "../model/users"

import male from '../utils/profile-male.png'
import female from '../utils/profile-female.png'
import './CardUser.css'
import { UserUpdateListener } from "../shared/common-types";





interface CardUserProps {
    user: User;
    owner: User | number | undefined;
    onEditedUser: UserUpdateListener;
    admin: 2 | undefined | boolean


}
export const CardUser: React.FC<CardUserProps> = ({ user, owner, onEditedUser, admin }: CardUserProps) => {



    return (
        <article id={user.id + ''} className="article-card">

            <h1>Username: {user.username}</h1>
            <h3>First Name : {user.firstName}</h3>
            <h3>Last Name : {user.lastName}</h3>
            {user.description ? <p>Descriprion : {user.description}</p> : ''}
            <p>Time created : {user.timeCreated}</p>
            {user.timeEdited ? <p>Last Edited : {user.timeEdited}</p> : ''}
            <h3>GENDER :{user.gender === 1 ? 'MALE' : 'FEMALE'}</h3>
            <h4>Your status : {user.status === 1 ? 'ACTIVE' : user.status === 2 ? 'SUSPENDED' : 'DEACTIVATED'} </h4>
            {user.imageUrl ? <img src={user.imageUrl} alt="ProfilPic" height={250} width={250} /> : user.gender === 1 ? <img src={male} alt="Profile-Male" height={250} width={250} /> : <img src={female} alt="Profile-Female" height={250} width={250} />}
            {(admin === true) ? <button id={user.id + ''} onClick={() => onEditedUser(user)}>You are ADMIN, edit User</button> : (user.id === owner) ? <button id={user.id + ''} onClick={() => onEditedUser(user)}>Edit your profile</button> : ''}
            {owner === user.id ? <h1>OWNER</h1> : ''}

        </article>
    )
}

export default CardUser





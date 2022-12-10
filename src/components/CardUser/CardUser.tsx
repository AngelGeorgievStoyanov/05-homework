import { User } from "../model/users"

import male from '../utils/profile-male.png'
import female from '../utils/profile-female.png'
import './CardUser.css'
import { UserUpdateListener } from "../shared/common-types";
import React from "react";





interface CardUserProps {
    user: User;
    owner: User | number | undefined;
    onEditedUser: UserUpdateListener;
    admin: 2 | undefined | boolean;
    onDeleteUser: UserUpdateListener


}
export const CardUser: React.FC<CardUserProps> = ({ user, owner, onEditedUser, admin, onDeleteUser }: CardUserProps) => {


    function handeleDelete(event: React.MouseEvent) {
        onDeleteUser(user)
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
            <h4>Your status : {user.status === 1 ? 'ACTIVE' : user.status === 2 ? 'SUSPENDED' : 'DEACTIVATED'} </h4>
            {user.description ? <p>Description : {user.description}</p> : ''}
            {user.imageUrl ? <img src={user.imageUrl} alt="ProfilPic" height={250} width={250} /> : user.gender === 1 ? <img src={male} alt="Profile-Male" height={250} width={250} /> : <img src={female} alt="Profile-Female" height={250} width={250} />}
            {(admin === true) ? <button id={user.id + ''} onClick={() => onEditedUser(user)}>You are ADMIN, edit User</button> : (user.id === owner) ? <button id={user.id + ''} onClick={() => onEditedUser(user)}>Edit your profile</button> : ''}
            {(admin === true) && (user.id === owner) ? <h3>This is your profile {user.username} ! </h3> : admin === true ? <button className="btn-del" onClick={handeleDelete} >DELETE USER</button> : ''}

        </article>
    )
}

export default CardUser






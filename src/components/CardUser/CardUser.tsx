import { User } from "../interfaces/user"

import male from '../utils/profile-male.png'
import female from '../utils/profile-female.png'
import './CardUser.css'

import { Link } from "react-router-dom"



interface CardUserProps {
    user: User;
 
   

}
export const CardUser: React.FC<CardUserProps> = ({user }:CardUserProps) => {

 
    return (

        <article id={user.id} className="article-card">
            <h1>Username: {user.username}</h1>
            <h3>First Name : {user.firstName}</h3>
            <h3>Last Name : {user.lastName}</h3>
            {user.description ? <p>Descriprion : {user.description}</p> : ''}
            <p>Time created : {user.timeCreated}</p>
            {user.timeEdited ? <p>Last Edited : {user.timeEdited}</p> : ''}
            <h3>GENDER :{user.gender}</h3>
            {user.imageUrl ? <img src={user.imageUrl} alt="ProfilPic" height={250} width={250} /> : user.gender === 'MALE' ? <img src={male} alt="Profile-Male" height={250} width={250} /> : <img src={female} alt="Profile-Female" height={250} width={250} />}
            { user.role==='ADMIN' ?<span>You are {user.role} <button  >Edit User</button></span>:'' }
            <Link className="button button-details" to={`/details/${user.id}`}>DETAILS</Link>

    
           
        </article>
    )
}





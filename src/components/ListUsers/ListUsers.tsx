
import CardUser from "../CardUser/CardUser";
import { User } from "../model/users";
import {  UserUpdateListener } from "../shared/common-types";



type UsersProps = {
    users: User[]
    owner: User |number|undefined;
    onEditedUser:UserUpdateListener;
    admin:2|undefined|boolean
  
}

function ListUsers({ users, ...rest}: UsersProps) {

    return (
        <>


            {users.map(x => <CardUser key={x.id} user={x}  {...rest}/>)}

        </>
    )
}

export default ListUsers


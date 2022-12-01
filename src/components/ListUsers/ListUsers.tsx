import { FC } from "react";
import  {CardUser}  from "../CardUser/CardUser";
import { User } from "../interfaces/user";



type UsersProps = {
    users: User[]
}

export const ListUsers: FC<UsersProps> = (
    { users }
) => {

    return (
        <>
            {users.length > 0 ?
                <>
                    {users.map(x => <CardUser key={x.id} user={x} />)}
                </> : ''}
        </>
    )
}




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
        <section>
            {users.length > 0 ?
                <div>
                    {users.map(x => <CardUser key={x.id} user={x} />)}
                </div> : ''}
        </section>
    )
}




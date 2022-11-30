import { FC, useEffect, useState } from "react"
import { User } from "../interfaces/user"
import {ListUsers} from "../ListUsers/ListUsers"
import * as authServices from '../services/authServices'


export const  Home :FC = () => {

    const [users, setUsers] = useState<User[]>([])


    useEffect(() => {


        authServices.getAllUsers()
            .then(result => {
                setUsers(result)
            }).catch(err => {
                console.log(err)
            })

      
    }, [])


    return (
        <div className="div-home">
            <ListUsers users={users} />
        </div>
    )
}



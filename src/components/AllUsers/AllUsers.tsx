import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../interfaces/user"
import { ListUsers } from "../ListUsers/ListUsers"
import * as authServices from '../services/authServices'
import { getUser } from "../userLocalStorage/userLocalStorage"
import './AllUsers.css'

function AllUsers() {

    const [users, setUsers] = useState<User[]>([])
    const user = getUser()
  
    const navigate = useNavigate()
  

    useEffect(() => {
        
        if(!user){
           return navigate('/login')
            
        }

        authServices.getAllUsers()
            .then(result => {
                setUsers(result)
            }).catch(err => {
                console.log(err)
            })


    }, [navigate, user])


    return (
        <div className="div-all-users">
            <ListUsers users={users} />
        </div>
    )
}


export default AllUsers



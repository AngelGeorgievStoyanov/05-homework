import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getUser } from "../userLocalStorage/userLocalStorage"



export default function Home() {

    const user = getUser()
  
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
           
            return   navigate('/login')
        } 

    })
    return (
        <h1>Welcome {user}!</h1>
    )
}

import { User } from "../interfaces/user"

const initialValue ={
    username:'',
    id:''
}



// export const userLocalStorage = (key, initialValue) => {



//     try {
//         let item = localStorage.getItem(key)

//         return item ? JSON.parse(item) : initialValue
//     } catch (error) {

//         console.log(error)
//         return initialValue

//     }
// }

export const setItemLocalStorage = (key:string, value:{}) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = (id:string,data:{})=>{
    console.log(id,data)
    setItemLocalStorage(id,data)
}
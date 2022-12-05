import { useCallback, useEffect, useState } from "react"
import { User, UserRegister } from "../model/users"
import ListUsers from "../ListUsers/ListUsers"
import { ApiClient, ApiClientImpl } from '../services/authServices'
import * as authServices from '../services/authServices'
import { IdType, Optional } from "../shared/common-types"
import './AllUsers.css'
import Register from "../Register/Register"
import Login from "../Login/Login"



const API_CLIENT: ApiClient<IdType, User> = new ApiClientImpl<IdType, User>('users');

const AllUsers = () => {


    const [users, setUsers] = useState<User[]>([])
    const [owner, setOwner] = useState<User | any>()
    const [editedUser, setEditedUser] = useState<Optional<User>>(undefined);
    const [admin, setAdmin] = useState<2 | undefined>(undefined);
    const [hide, setHide] = useState(false);
    const [errors, setErrors] = useState<string | undefined>();

    const [mainHide, setMainHide] = useState(false)



    useEffect(() => {
        API_CLIENT.findAll().then(allUsers => {
            setUsers(allUsers);

        }).catch(err => {
            console.log(err)
            setErrors(err + '')
        })
    }, []);

    const handleUpdateUser = useCallback(async (user: User) => {

        try {
            const edit = await API_CLIENT.update(user)
            setUsers((oldUser) => oldUser.map(us => us.id === edit.id ? edit : us))
        } catch (err) {
            console.log(err)
            setErrors(err + '')
        }
    }, [])






    const handleUserSubmit = useCallback(async (user: UserRegister | User) => {
        try {

            if ('id' in user) {

                await handleUpdateUser(user)
                setEditedUser(undefined)
            } else {

                if (user.firstName === '') {
                    throw new Error('First Name is required')
                    
                }
                if (user.lastName === '') {
                    throw new Error('Last Name is required')
                }
                if (user.username === '') {
                    throw new Error('Username is required')
                }
                if (user.password === '') {
                    throw new Error('Password is required')
                }
                if (user.rePass === '') {
                    throw new Error('Confirm Password is required')
                }

                if (user.password !== user.rePass) {
                    throw new Error('Password and Confirm Password don\'t match')
                }

                const register = await API_CLIENT.register(user)

                setUsers(usersOld => usersOld.concat(register))
                setOwner(register)
                setEditedUser(editedUser ? undefined : new User(0, '', '', '', '', '', undefined, undefined, '', '', '', ''))
                setAdmin(register.role === 2 ? 2 : undefined)
                setErrors(undefined);

            }
        } catch (err) {
            setErrors(err + '');
            console.log(err + '');
        }
    }, [editedUser, handleUpdateUser])






    const handleLogin = useCallback(async (username: string, password: string) => {
        try {
            const userLog = await authServices.login1(username, password)

            const allUsers = await API_CLIENT.findAll()

            setOwner(userLog)
            setUsers(allUsers)
            mainHideF()
            setErrors(undefined)
            let userEl = document.getElementById('username') as HTMLInputElement
            userEl.value = ''
            let passEl = document.getElementById('password') as HTMLInputElement
            passEl.value = ''



        } catch (err) {
            setErrors(err + '');
            console.log(err + '');
        }

    }, []);



    const handleEditUser = (user: User) => {
        mainHideF()
        setEditedUser(user)

    }


    const toggleHide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setHide(!hide);
    };



    const mainHideF = () => {

        setMainHide(!mainHide)
    }

    const exit = () => {
        setEditedUser(editedUser ? undefined : new User(0, '', '', '', '', '', undefined, undefined, '', '', '', ''))

        setOwner(undefined)
        mainHideF()

    }


    return (
        <div className="div-all-users">
            {errors && <h3 className="errors">{errors}</h3>}

            <article style={{ display: mainHide ? "none" : "block" }}>

                <div className="login" id="login" style={{ display: hide ? "none" : "block" }}>
                    <Login onLogin={handleLogin} onTogle={toggleHide} />
                </div>
                <div className="register" id="register" style={{ display: hide ? "block" : "none" }}>
                    <Register key={editedUser?.id} onTogle={toggleHide} user={editedUser} onRegister={handleUserSubmit} mainHid={mainHideF} />
                </div >
            </article>

            <main className="main" style={{ display: mainHide ? "block" : "none" }}>
                <div className="div-exit">
                    <button onClick={exit}>EXIT</button>
                </div>

                <div className="main">
                    <ListUsers users={users} owner={owner} admin={admin} onEditedUser={handleEditUser} />
                </div>

            </main>
        </div>

    )


}

export default AllUsers





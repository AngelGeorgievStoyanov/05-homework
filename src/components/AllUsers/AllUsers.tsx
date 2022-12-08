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
    const [owner, setOwner] = useState<User | number | undefined>()
    const [editedUser, setEditedUser] = useState<Optional<User>>(undefined);
    const [admin, setAdmin] = useState<2 | undefined | boolean>(undefined);
    const [hide, setHide] = useState(false);
    const [errors, setErrors] = useState<string | undefined>();
    const [mainHide, setMainHide] = useState(false)
    const [name, setName] = useState<string>()

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
            mainHideF()
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


                await API_CLIENT.findByUsername(user.username as any)


                const register = await API_CLIENT.register(user)

                setUsers(usersOld => usersOld.concat(register))
                setOwner(register.id)

                setEditedUser(editedUser ? undefined : new User(0, '', '', '', '', '', undefined, undefined, '', '', '', ''))
                setName(register.firstName)
                setAdmin(register.role === 2 ? true : undefined)
                setErrors(undefined);

                mainHideF()

            }
        } catch (err) {
            setErrors(err + '');
            console.log(err + '');
        }
    }, [])






    const handleLogin = useCallback(async (username: string, password: string) => {
        try {
            const userLog = await authServices.login1(username, password)
            setName(userLog[0].firstName)
            console.log(name)

            const allUsers = await API_CLIENT.findAll()
            setUsers(allUsers)
            const user = userLog.map((x: any) => { return x.id })
            setOwner(undefined)
            setOwner(user[0])
            mainHideF()
            setErrors(undefined)

            const role = userLog.map((x: any) => { return x.role })

            setAdmin(role[0] === 2 ? true : undefined)
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

        if (hide === false) {
            setHide(!hide);
        }
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

        setEditedUser(undefined)


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
                    <Register key={editedUser?.id} onTogle={toggleHide} user={editedUser} admin={admin} onRegister={handleUserSubmit} />
                </div >
            </article>

            <main className="main" style={{ display: mainHide ? "block" : "none" }}>
                <div className="div-exit">
                    <button onClick={exit}>EXIT</button>
                </div>
                {name ? <div className="welcome"><h2 >Welcome {name} !</h2></div> : ''}
                <div className="main">
                    <ListUsers users={users} owner={owner} admin={admin} onEditedUser={handleEditUser} />
                </div>

            </main>
        </div>

    )


}

export default AllUsers








export interface User{
    id:string;
    firstName:string;
    lastName:string
    username:string;
    password:string;
    gender: 'MALE' | 'FEMALE';
    role: 'USER' | 'ADMIN';
    imageUrl?:string;
    description?:string;
    timeCreated:string;
    timeEdited?:string
    key?:string
}


export interface UsersProps{
    users: User[];
 }



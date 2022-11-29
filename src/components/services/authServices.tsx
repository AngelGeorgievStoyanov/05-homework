
const apiJson = 'http://localhost:3000/posts'



// export const login =async (id:string, firstName:string, lastName:string,username:string,  password:string, gender:string, role:string, imageUrl:string, description:string, timeCreated:string, timeEdited:string) => {
//     const response = await fetch(`${apiJson}`, {
//         method: 'POST',
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify({  id, firstName, lastName,username,  password, gender, role, imageUrl, description, timeCreated, timeEdited})
//     });
//     const result = await response.json();
//     return result;

// }


export const login =async (data :any) => {
    const response = await fetch(`${apiJson}`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;

}
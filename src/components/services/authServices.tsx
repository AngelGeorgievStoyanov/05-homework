

const apiJson = 'http://localhost:3000/posts'





export const register = async (data: any) => {
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



export const login = async (username: string, password: string) => {
    const response = await fetch(`${apiJson}/?username=${username}`)

 const result= await response.json()

 if (result[0].password===password){
     return result

 }else{
    throw new Error('Username or Password dont match')
 }

   
}




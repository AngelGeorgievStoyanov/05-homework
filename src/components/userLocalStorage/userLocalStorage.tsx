
export const setItemLocalStorage = (key: string, value: {}) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}


export const loginUser = (id: string, data: {}) => {
    try {
        return setItemLocalStorage(id, data)
    } catch (error) {
        console.log(error)
    }
}

export const getUser = () => {
    try {
        return localStorage.key(0)
    } catch (error) {
        console.log(error)
    }

}



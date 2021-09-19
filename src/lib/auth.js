export default function getUserData(){
    const userDataRaw = localStorage.getItem("userData") 
    const userData = userDataRaw ? JSON.parse(userDataRaw) : null 
    return userData // returns a object with userData or a null
}
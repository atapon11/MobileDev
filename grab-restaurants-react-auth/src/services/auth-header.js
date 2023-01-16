export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));

    if("user && user.access-token") {
        return {"x-access-token" : user.accessToken};
    }else{
        return{};
    }
}
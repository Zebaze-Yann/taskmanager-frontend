
interface LoginRequest{
    email:string;
    password:string;
}

interface User{
 id:number;
    role:string;
    username:string;
    email:string;
}


interface LoginResponse{
    token:string;
    user:User;

}


 
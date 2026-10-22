import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query";
import { authApi } from "./authApi";
import { error } from "console";

export function useAuthenticate(){
    const queryClient=useQueryClient();
    return (useMutation({
        mutationFn:(newLogin:LoginRequest)=>authApi(newLogin),

        onSuccess:(data)=>{
            document.cookie="app-token=" + data.token +";path=/"
            localStorage.setItem("user",JSON.stringify(data.user))
            queryClient.invalidateQueries({queryKey:["users"]})
        },

        onError:(error)=>{
            console.error("erreur de l'authentification:", error.message);
        }

    }))

}
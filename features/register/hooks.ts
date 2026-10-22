import {useQuery,useQueryClient,useMutation} from "@tanstack/react-query";
import {registerApi} from "@/features/register/registerApi";

export function useRegister(){
    const queryClient=useQueryClient();
    return(useMutation({
        mutationFn:(newUser:RegisterRequest)=> registerApi(newUser),
        onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:["users"]})
        
        },

        onError:(error)=>{
          console.error("échec de l'inscription:",error.message)  
        }
    }

    ))
}
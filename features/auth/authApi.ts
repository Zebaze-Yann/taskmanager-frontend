import apiClient from "@/api/apiClient";
export async function authApi(data:LoginRequest){

    const response= await apiClient.post<LoginResponse>("/api/auth/login",data);

    return response.data;

}
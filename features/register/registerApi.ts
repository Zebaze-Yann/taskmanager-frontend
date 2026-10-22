import apiClient from "@/api/apiClient";


export  async function registerApi(data:RegisterRequest){
  const response=await apiClient.post<RegisterResponse>("/api/auth/register",data);
  return response.data;
  
 }
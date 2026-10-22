"use client";
import { Divide, Heading1 } from "lucide-react";
import { ListTodo } from "lucide-react";
import { useRegister } from "@/features/register/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const router = useRouter();
  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { mutate, data, isPending, isError, error } = useRegister();

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate(dataForm, {
      onSuccess: () => {
        router.push("/login");
      },
    });
  }
  return (
    <div className=" min-h-screen bg-primary/10 flex justify-center items-center">
      <div className="w-full max-w-md rounded-lg shadow-md border-2 border-primary/80 py-10 px-4 bg-base-300">
        <div className="flex justify-center items-center bg-primary/80 font-bold text-2xl w-fit mx-auto p-2">
          <ListTodo size={30}></ListTodo>
          <p>Taskmanager</p>
        </div>
        <form onSubmit={handleRegister} action="">
          <div className="flex flex-col">
            <label htmlFor="username">nom</label>
            <input
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary/80 bg-secondary/10"
              type="text"
              name="username"
              id="username"
              required
              onChange={(e) =>
                setDataForm({ ...dataForm, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <input
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary/80 bg-secondary/10"
              type="email"
              name="email"
              id="email"
              required
              onChange={(e) =>
                setDataForm({ ...dataForm, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary/80 bg-secondary/10"
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) =>
                setDataForm({ ...dataForm, password: e.target.value })
              }
            />
          </div>
          {isError && (
            <p className="text-red-500 text-sm">
              Erreur: {error?.message || "Echec de l'inscription"}
            </p>
          )}
          <button
            className="mt-5 rounded-lg text-xl bg-primary/80 hover:bg-primary/70 transition-colors duration-300 w-full p-2"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "envoi en cours" : "Envoyer"}
          </button>
        </form>
      </div>
    </div>
  );
}

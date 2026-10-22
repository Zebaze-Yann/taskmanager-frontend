"use client";
import { useEffect, useState } from "react";
export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return <h1 className="font-bold text-center">Bienvenu, {user?.username}</h1>;
}

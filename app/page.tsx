import { ListTodo, CheckCircle, Clock, BarChart3 } from "lucide-react";
import { DashboardPreview } from "@/components/DashboardPreview";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-full min-h-screen">
      <header className="max-w-7xl mx-auto p-2 mt-3">
        <nav className="navbar bg-base-200 flex justify-between shadow-lg rounded-box ">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost">
              <ListTodo></ListTodo>
              Taskmanager
            </Link>
          </div>
          <div className="navbar-end gap-2">
            <Link href="/register" className="btn btn-primary">
              s'inscrire
            </Link>
            <Link href="/login" className="btn btn-ghost">
              se connecter
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto mt-10 ">
        <div className="hero bg-base-200 shadow-xl rounded-box py-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <DashboardPreview />
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Bienvenue sur Taskmanager !
              </h1>
              <p className="py-6">
                Organisez vos projets, gérez vos délais et transformez vos idées
                en résultats concrets
              </p>
              <button className="btn btn-primary text-xl p-6">Commencer</button>
            </div>
          </div>
        </div>

        <section className="p-16 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              Pourquoi choisir Taskmanager ?
            </h2>
            <p className="opacity-70 mt-2">
              Tout ce dont vous avez besoin pour rester productif.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3">
            <div className="card bg-base-200 shadow-lg transition-transform hover:-translate-y-1">
              <div className="card-body gap-3">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-box">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="card-title text-xl">Gestion simple</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Créez, organisez et triez vos tâches quotidiennes en quelques
                  clics grâce à notre interface intuitive.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg transition-transform hover:-translate-y-1">
              <div className="card-body gap-3">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-box">
                  <Clock className="w-6 h-6"></Clock>
                </div>
                <h3 className="card-title text-xl">Gestion du temps</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Définissez des dates limites, créez des rappels personnalisés
                  et priorisez vos urgences.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg transition-transform hover:-translate-y-1">
              <div className="card-body gap-3">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-box">
                  <BarChart3 className="w-6 h-6"></BarChart3>
                </div>
                <h3 className="card-title text-xl">Statistiques avancées</h3>
                <p className="opacity-80 text-sm leading-relaxed">
                  Visualisez votre productivité hebdomadaire à l'aide de
                  graphiques clairs et de rapports détaillés.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
        <aside className="gap-2">
          <ListTodo className="h-8 w-8 text-primary"></ListTodo>
          <p className="font-bold">
            {" "}
            Taskmanager Inc <br /> la gestion des projets simplifiée depuis 2026
          </p>
          <p className="text-xs opacity-60">
            Copyright © 2026 - Tous droits réservés
          </p>
        </aside>
      </footer>
    </div>
  );
}

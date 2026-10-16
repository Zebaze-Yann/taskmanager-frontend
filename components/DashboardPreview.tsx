import { Clock, BarChart3, LayoutGrid } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="relative">
      <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full" />
      <div className="absolute -right-4 bottom-0 h-32 w-32 rounded-full" />

      <div className="relative rounded-[2rem] border border-white bg-cyan-300 p-2 shadow-2xl shadow-slate-900/10">
        <div className="rounded-[1.6rem] bg-slate-950 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                TaskBoard
              </span>
            </div>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs">
              Octobre 2026
            </span>
          </div>

          <div className="mt-6 rounded-2xl bg-white/[0.05] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">
                Progression globale
              </span>
              <span className="text-sm font-bold text-emerald-300">76%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[76%] rounded-full bg-cyan-300" />
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
                <span className="font-semibold">Design Sprint</span>
              </div>
              <span className="text-slate-400 text-xs">09:30</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-300" />
                <span className="font-semibold">Révision produit</span>
              </div>
              <span className="text-slate-400 text-xs">11:45</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-white/8 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                <span className="font-semibold">Livraison</span>
              </div>
              <span className="text-slate-400 text-xs">15:00</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/8 p-3">
              <div className="flex items-center gap-2 text-violet-200">
                <LayoutGrid size={16} />
              </div>
              <div className="mt-3 text-2xl font-black">07</div>
              <div className="text-[11px] text-slate-400">Tâches</div>
            </div>
            <div className="rounded-2xl bg-white/8 p-3">
              <div className="flex items-center gap-2 text-violet-200">
                <Clock size={16} />
              </div>
              <div className="mt-3 text-2xl font-black">04</div>
              <div className="text-[11px] text-slate-400">Échéances</div>
            </div>
            <div className="rounded-2xl bg-white/8 p-3">
              <div className="flex items-center gap-2 text-violet-200">
                <BarChart3 size={16} />
              </div>
              <div className="mt-3 text-2xl font-black">+22%</div>
              <div className="text-[11px] text-slate-400">Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

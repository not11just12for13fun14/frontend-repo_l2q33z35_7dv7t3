import { useMemo } from 'react'

function StatusPanel({ state }) {
  const { hp, fray, location, keyRel, imprint, flags, inventory, urgency } = state
  const frayColor = useMemo(() => {
    if (fray >= 75) return 'text-red-400'
    if (fray >= 50) return 'text-orange-300'
    if (fray >= 25) return 'text-yellow-300'
    return 'text-emerald-300'
  }, [fray])

  return (
    <aside className="fixed right-4 top-4 z-20 w-[300px] max-w-[85vw] bg-slate-900/70 backdrop-blur border border-slate-700/60 rounded-2xl shadow-2xl p-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-slate-200 font-semibold">Pablo Qemur</span>
        <span className="text-slate-400 text-sm">{location}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-blue-200">HP</span>
        <span className="font-mono text-blue-100">{hp}/100</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-blue-200">Fray</span>
        <span className={`font-mono ${frayColor}`}>{fray}%</span>
      </div>
      {keyRel && (
        <div className="text-xs text-slate-300 pt-1">{keyRel}</div>
      )}
      {/* contextual items */}
      <div className="pt-2 space-y-1">
        {imprint && (
          <div className="text-slate-300 text-sm"><span className="text-slate-400">Active Imprint:</span> {imprint}</div>
        )}
        {flags?.length > 0 && (
          <div className="text-slate-300 text-sm"><span className="text-slate-400">Flag:</span> {flags[0]}</div>
        )}
        {inventory?.length > 0 && (
          <div className="text-slate-300 text-sm"><span className="text-slate-400">On You:</span> {inventory.slice(0,2).join(' • ')}</div>
        )}
        {urgency && (
          <div className="text-rose-300 text-xs">{urgency}</div>
        )}
      </div>
    </aside>
  )
}

export default StatusPanel

import Hero from './components/Hero'
import Narrative from './components/Narrative'
import StatusPanel from './components/StatusPanel'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Hero />
      <Narrative />
      {/* Sample status panel state for initial render; Narrative will own state later if needed */}
      <StatusPanel state={{ hp: 100, fray: 3, location: 'Cresthaven • South Atrium', keyRel: 'Kael: Rivalry+', imprint: '', flags: ['Orientation Day'], inventory: ['Cracked phone', 'Lunch token'], urgency: '' }} />
    </div>
  )
}

export default App

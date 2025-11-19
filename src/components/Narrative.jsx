import { useEffect, useMemo, useRef, useState } from 'react'

// Helper to vary visual wrappers per render
const frames = [
  'border border-slate-700/50 rounded-xl',
  'ring-1 ring-indigo-500/20 rounded-[1.25rem] backdrop-blur-sm',
  'outline outline-1 outline-fuchsia-400/20 rounded-2xl shadow-lg',
]

function Narrative({ onChoice }) {
  const [turn, setTurn] = useState(0)
  const [story, setStory] = useState([])
  const [state, setState] = useState({
    hp: 100,
    fray: 3,
    location: 'Cresthaven • South Atrium',
    keyRel: 'Kael: Rivalry+',
    imprint: '',
    flags: ['Orientation Day'],
    inventory: ['Cracked phone', 'Lunch token'],
    urgency: ''
  })
  const scrollRef = useRef(null)

  useEffect(() => {
    // Opening ritual content - kept concise in UI, narrative will be provided via assistant chat
    if (turn === 0) {
      const intro = `Vadum looks like home until it breathes. Towers tilt, trains rewrite their rails, and the sky remembers other colors. Cresthaven calls it stability. We call it luck.`
      setStory([intro])
    }
  }, [turn])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [story])

  const frameClass = useMemo(() => frames[turn % frames.length], [turn])

  const makeChoice = (id) => {
    setTurn(t => t + 1)
    if (id === 'rooftop') {
      setState(s => ({ ...s, location: 'Cresthaven • Rooftop', keyRel: 'Mira: Trust+', flags: ['Rooftop Pact'], urgency: 'Lunch bell in 6 minutes' }))
      setStory(st => ([...st, 'You climb the emergency stairs. The door sticks. The sky bends like heated glass.']))
    } else if (id === 'cafeteria') {
      setState(s => ({ ...s, location: 'Cresthaven • Cafeteria', keyRel: 'Kael: Rivalry++', flags: ['Eyes On You'], urgency: 'Duel rumors spreading'] }))
      setStory(st => ([...st, 'The cafeteria hums. Conversations splice like jump cuts. Kael waits with a grin that could cut wire.']))
    } else if (id === 'archive') {
      setState(s => ({ ...s, location: 'Lower Stacks • Archive Perimeter', keyRel: 'Archivist: Unknown', flags: ['Out of Bounds'], urgency: 'Security sweep in 10'] }))
      setStory(st => ([...st, 'Down past the maintenance corridor, the air smells like dust and hummingbird wings. The Archive perimeter ticks softly.']))
    }
    onChoice?.(id)
  }

  return (
    <section className="relative z-10 mx-auto px-6 sm:px-10 py-8 max-w-5xl">
      <div className={`bg-slate-900/70 text-slate-100 ${frameClass} p-6 sm:p-8 space-y-6`} ref={scrollRef} style={{ maxHeight: '52vh', overflowY: 'auto' }}>
        {story.map((chunk, i) => (
          <p key={i} className="leading-7">
            {chunk}
          </p>
        ))}
        <div className="pt-4 grid gap-3 sm:grid-cols-3">
          <button onClick={() => makeChoice('rooftop')} className="text-left bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 rounded-lg px-4 py-3 transition">Climb to the rooftop</button>
          <button onClick={() => makeChoice('cafeteria')} className="text-left bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-200 border border-emerald-400/30 rounded-lg px-4 py-3 transition">Head to the cafeteria</button>
          <button onClick={() => makeChoice('archive')} className="text-left bg-fuchsia-500/15 hover:bg-fuchsia-500/25 text-fuchsia-200 border border-fuchsia-400/30 rounded-lg px-4 py-3 transition">Slip toward the Archive</button>
        </div>
      </div>
    </section>
  )
}

export default Narrative

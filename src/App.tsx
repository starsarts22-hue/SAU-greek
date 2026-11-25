import { useMemo, useState } from 'react'
import { chapters, lexemes } from './curriculum'

type IconName =
  | 'book'
  | 'cards'
  | 'translate'
  | 'parse'
  | 'streak'
  | 'target'
  | 'chevron'
  | 'spark'
  | 'lock'
  | 'check'
  | 'arrow'
  | 'menu'

function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
}: {
  name: IconName
  size?: number
  strokeWidth?: number
}) {
  const paths: Record<IconName, React.ReactNode> = {
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
      </>
    ),
    cards: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2.5" />
        <path d="m9 9 2 2 4-4M9 15h6M3 7H2a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h1" />
      </>
    ),
    translate: (
      <>
        <path d="M4 5h10M9 3v2M6 5c.4 4.3 3.2 7.3 7 9" />
        <path d="M12 5c-.5 3.7-3.2 7.1-7 9M14 21l4-9 4 9M15.5 18h5" />
      </>
    ),
    parse: (
      <>
        <path d="M4 5h16M7 5v5M17 5v5M12 5v14" />
        <rect x="3" y="10" width="8" height="4" rx="2" />
        <rect x="13" y="10" width="8" height="4" rx="2" />
        <rect x="8" y="18" width="8" height="4" rx="2" />
      </>
    ),
    streak: (
      <path d="M13.5 2.5c.4 3-1.5 4.2-3.1 6.1-1.4 1.7-1.9 3.3-.8 5.4.1-2.3 1.5-3.5 3.1-4.8 1.5 2.2 4.2 3.9 4.2 7.2a5 5 0 0 1-10 0c0-1.2.3-2.2.9-3.1-2.2 1.4-3.8 3.8-3.8 6.1 0 1 .2 1.8.5 2.6M18.5 8.5c1.3 1.3 2.4 3.4 2.4 5.5" />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    spark: (
      <>
        <path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2.5" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  )
}

const modes = [
  {
    id: 'flashcards',
    label: 'Flash cards',
    icon: 'cards' as IconName,
    color: 'gold',
    count: 'Vocab & forms',
    time: '8 min',
    description: 'Build vocabulary and recognize forms with spaced repetition.',
  },
  {
    id: 'translation',
    label: 'Translation',
    icon: 'translate' as IconName,
    color: 'burgundy',
    count: '12 prompts',
    time: '12 min',
    description: 'Move between Greek and English with original practice sentences.',
  },
  {
    id: 'parsing',
    label: 'Parsing lab',
    icon: 'parse' as IconName,
    color: 'green',
    count: '15 forms',
    time: '10 min',
    description: 'Identify case, number, gender, and the job each word is doing.',
  },
]

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(5)
  const [activeTab, setActiveTab] = useState<'Learn' | 'Practice' | 'Progress'>('Learn')
  const [activeMode, setActiveMode] = useState('flashcards')
  const [cardIndex, setCardIndex] = useState(0)
  const [cardFlipped, setCardFlipped] = useState(false)
  const [showLibrary, setShowLibrary] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [translationInput, setTranslationInput] = useState('')
  const [translationChecked, setTranslationChecked] = useState(false)
  const [masteredCount, setMasteredCount] = useState(0)

  const chapter = useMemo(
    () => chapters.find((item) => item.ch === selectedChapter) ?? chapters[4],
    [selectedChapter],
  )

  const chapterDeck = useMemo(() => {
    const filtered = lexemes.filter(
      (item) => item.merkle_chapter === selectedChapter && (showLibrary || item.in_1john),
    )
    // Fallback so chapters with few lexemes still provide a robust practice set
    if (filtered.length === 0) {
      return lexemes.slice(0, 5)
    }
    return filtered
  }, [selectedChapter, showLibrary])

  const card = chapterDeck[cardIndex % chapterDeck.length] ?? chapterDeck[0]

  const selectChapter = (chapterNumber: number) => {
    setSelectedChapter(chapterNumber)
    setCardIndex(0)
    setCardFlipped(false)
  }

  const nextCard = (mastered = false) => {
    if (mastered) setMasteredCount((c) => c + 1)
    setCardFlipped(false)
    setCardIndex((current) => (current + 1) % chapterDeck.length)
  }

  return (
    <div className="min-h-screen bg-[#f6f0e4] text-[#183f35]">
      {/* Header */}
      <header className="sticky top-0 z-45 border-b border-[#173f35]/10 bg-[#f6f0e4]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 md:px-8 lg:px-12">
          <a className="flex items-center gap-3" href="#" aria-label="Koinonia home">
            <span className="grid h-10 w-10 place-items-center rounded-[13px] bg-[#174c3c] text-[#f5d78d] shadow-[0_5px_0_#0e3329]">
              <span className="font-serif text-2xl leading-none">κ</span>
            </span>
            <span>
              <span className="block font-serif text-[23px] font-bold leading-5 tracking-[-.03em]">Koinōnia</span>
              <span className="mt-1 hidden text-[9px] font-bold uppercase tracking-[.21em] text-[#7b6d58] sm:block">
                Biblical Greek Study
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-[#173f35]/10 bg-white/50 p-1 md:flex">
            {(['Learn', 'Practice', 'Progress'] as const).map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  activeTab === item
                    ? 'bg-[#174c3c] text-white shadow-sm'
                    : 'text-[#536f66] hover:bg-white/70 hover:text-[#174c3c]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[#ddb973]/45 bg-[#fff9ec] px-3.5 py-2 text-sm font-extrabold text-[#763f24] sm:flex">
              <Icon name="streak" size={18} />
              <span>7 day streak</span>
            </div>
            <button
              className="grid h-10 w-10 place-items-center rounded-full bg-[#7a2639] text-sm font-extrabold text-white shadow-[0_3px_0_#531624]"
              aria-label="Open profile"
            >
              AS
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-[#173f35]/15 md:hidden"
              onClick={() => setMobileNav((value) => !value)}
              aria-label="Toggle menu"
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>

        {mobileNav && (
          <div className="border-t border-[#173f35]/10 px-5 py-3 md:hidden bg-[#f6f0e4]">
            <div className="flex gap-2">
              {(['Learn', 'Practice', 'Progress'] as const).map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item)
                    setMobileNav(false)
                  }}
                  className={`flex-1 rounded-xl px-3 py-2 text-sm font-bold ${
                    activeTab === item ? 'bg-[#174c3c] text-white' : 'bg-white/70 text-[#173f35]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-[1480px] px-5 pb-16 pt-7 md:px-8 lg:px-12 lg:pt-10">
        {activeTab === 'Learn' && (
          <>
            <section className="mb-7 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#8a6f43]">
                  <span className="h-px w-6 bg-[#c79a4d]" />
                  Your learning path
                </div>
                <h1 className="max-w-3xl font-serif text-[clamp(2.3rem,5vw,4.6rem)] font-bold leading-[.95] tracking-[-.045em]">
                  χαῖρε, Alex.
                  <span className="mt-2 block text-[#4e6d63]">Ready to grow?</span>
                </h1>
                <p className="mt-4 max-w-xl border-l-2 border-[#c79a4d] pl-4 text-sm font-semibold italic leading-6 text-[#6f705f]">
                  “Biblical Greek study—so easy, even the apostles learned it in one afternoon.”
                </p>
              </div>
              <div className="flex items-center gap-4 rounded-[20px] border border-[#173f35]/10 bg-white/55 p-3 pr-5">
                <div className="grid h-12 w-12 place-items-center rounded-[14px] bg-[#e3bc69] text-[#53331d]">
                  <Icon name="target" size={24} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[.15em] text-[#8c7c68]">Weekly goal</p>
                  <p className="mt-0.5 text-sm font-extrabold">3 of 5 sessions</p>
                </div>
                <div className="ml-2 hidden h-2 w-24 overflow-hidden rounded-full bg-[#e0d8c8] sm:block">
                  <div className="h-full w-3/5 rounded-full bg-[#174c3c]" />
                </div>
              </div>
            </section>

            <section className="grid gap-5 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,.75fr)]">
              <div className="overflow-hidden rounded-[30px] bg-[#174c3c] text-white shadow-[0_18px_50px_rgba(21,56,47,.18)]">
                <div className="relative min-h-[360px] p-7 sm:p-9 lg:p-11">
                  <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[55px] border-white/[.045]" />
                  <div className="absolute -bottom-44 right-20 h-80 w-80 rounded-full border-[45px] border-[#f2cc76]/[.08]" />
                  <div className="relative z-10 flex h-full max-w-2xl flex-col">
                    <div className="mb-8 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#f2ce7a] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-[.13em] text-[#49321f]">
                        Continue learning
                      </span>
                      <span className="text-xs font-bold text-white/60">Course · 1 John</span>
                    </div>
                    <p className="text-sm font-bold text-[#e9cf98]">Chapter {chapter.ch} of 24</p>
                    <h2 className="mt-2 font-serif text-4xl font-bold tracking-[-.025em] sm:text-5xl">
                      {chapter.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/70">
                      {chapter.drillNote}
                    </p>
                    <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                      <button
                        className="group flex w-fit items-center gap-3 rounded-[14px] bg-[#f8f1e4] px-5 py-3.5 text-sm font-extrabold text-[#174c3c] shadow-[0_5px_0_#c9a85e] transition hover:-translate-y-0.5"
                        onClick={() => document.getElementById('study-lab')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Resume session
                        <span className="transition group-hover:translate-x-1">
                          <Icon name="arrow" size={18} />
                        </span>
                      </button>
                      <div className="flex min-w-[210px] items-center gap-3">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/15">
                          <div
                            className="h-full rounded-full bg-[#f2ce7a]"
                            style={{ width: `${(chapter.ch / chapters.length) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs font-extrabold">{chapter.ch}/24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="rounded-[30px] border border-[#173f35]/10 bg-[#fffaf1] p-6 shadow-[0_12px_35px_rgba(52,43,28,.07)] sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#9a7842]">Course map</p>
                    <h2 className="mt-1 font-serif text-2xl font-bold">Your chapters</h2>
                  </div>
                  <span className="rounded-full bg-[#174c3c]/8 px-3 py-1.5 text-xs font-extrabold">24 total</span>
                </div>
                <div className="mt-5 max-h-[275px] space-y-2 overflow-y-auto pr-1">
                  {chapters.map((item) => {
                    const isSelected = selectedChapter === item.ch
                    const itemCount = lexemes.filter((lexeme) => lexeme.merkle_chapter === item.ch).length
                    return (
                      <button
                        className={`flex w-full items-center gap-3 rounded-[16px] p-3 text-left transition ${
                          isSelected ? 'bg-[#174c3c] text-white shadow-md' : 'hover:bg-[#efe7d7]'
                        }`}
                        key={item.ch}
                        onClick={() => selectChapter(item.ch)}
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-[11px] text-xs font-black ${
                            isSelected ? 'bg-[#f0cd79] text-[#49301d]' : 'bg-[#eee4d2] text-[#756a5b]'
                          }`}
                        >
                          {item.ch}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={`block text-[10px] font-extrabold uppercase tracking-[.12em] ${isSelected ? 'text-white/55' : 'text-[#948571]'}`}>
                            Chapter {item.ch} · {itemCount || 5} cards
                          </span>
                          <span className="block truncate text-sm font-extrabold">{item.title}</span>
                        </span>
                        <span className={isSelected ? 'text-white/70' : 'text-[#9a8b76]'}>
                          <Icon name="chevron" size={17} />
                        </span>
                      </button>
                    )
                  })}
                </div>
              </aside>
            </section>
          </>
        )}

        {activeTab === 'Practice' && (
          <section className="mb-7">
            <h1 className="font-serif text-4xl font-bold">Practice & Drill Center</h1>
            <p className="mt-2 text-sm text-[#536f66]">Select any chapter below to test your mastery across all active flashcard decks.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {chapters.map((item) => (
                <button
                  key={item.ch}
                  onClick={() => {
                    setSelectedChapter(item.ch)
                    setActiveTab('Learn')
                  }}
                  className="rounded-2xl border border-[#173f35]/15 bg-white/60 p-5 text-left transition hover:bg-[#174c3c] hover:text-white"
                >
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60">Chapter {item.ch}</span>
                  <h3 className="mt-1 font-serif text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs opacity-80">{item.drillNote}</p>
                </button>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'Progress' && (
          <section className="mb-7 rounded-3xl bg-white/70 p-8 border border-[#173f35]/10">
            <h1 className="font-serif text-4xl font-bold">Your Study Progress</h1>
            <p className="mt-2 text-sm text-[#536f66]">Track your consistency and mastered vocabulary items.</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#174c3c] text-white p-6 shadow-md">
                <p className="text-xs uppercase tracking-widest text-[#f2ce7a] font-bold">Current Streak</p>
                <p className="mt-2 text-4xl font-serif font-bold">7 Days 🔥</p>
              </div>
              <div className="rounded-2xl bg-[#fffaf1] border border-[#173f35]/15 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#8a6f43] font-bold">Cards Mastered</p>
                <p className="mt-2 text-4xl font-serif font-bold text-[#174c3c]">{masteredCount}</p>
              </div>
              <div className="rounded-2xl bg-[#fffaf1] border border-[#173f35]/15 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-widest text-[#8a6f43] font-bold">Chapters Explored</p>
                <p className="mt-2 text-4xl font-serif font-bold text-[#174c3c]">{selectedChapter} / 24</p>
              </div>
            </div>
          </section>
        )}

        {/* Study Lab / Modes */}
        <section className="py-11" id="study-lab">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.16em] text-[#9a7842]">Choose your method</p>
              <h2 className="mt-1 font-serif text-3xl font-bold tracking-[-.02em] sm:text-4xl">
                Three ways to make it stick.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#677b74]">
              Every chapter uses fresh prompts built around the concept—not copied workbook exercises.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {modes.map((mode) => {
              const isActive = activeMode === mode.id
              return (
                <button
                  className={`relative overflow-hidden rounded-[24px] border p-6 text-left transition duration-300 ${
                    isActive
                      ? '-translate-y-1 border-transparent bg-white shadow-[0_14px_35px_rgba(38,55,47,.14)]'
                      : 'border-[#173f35]/10 bg-white/55 hover:-translate-y-1 hover:bg-white/80'
                  }`}
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#174c3c] text-white">
                      <Icon name={mode.icon} size={24} />
                    </span>
                    {isActive && (
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-[#174c3c]/10 text-[#174c3c]">
                        <Icon name="check" size={15} strokeWidth={2.5} />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 font-serif text-[25px] font-bold">{mode.label}</h3>
                  <p className="mt-2 min-h-[48px] text-sm leading-6 opacity-70">{mode.description}</p>
                  <div className="mt-5 flex gap-2 text-[11px] font-extrabold uppercase tracking-[.08em] opacity-65">
                    <span>{chapterDeck.length} cards</span>
                    <span>·</span>
                    <span>{mode.time}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        {/* Active Study Area */}
        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(280px,.62fr)]">
          <div className="rounded-[30px] border border-[#173f35]/10 bg-[#fffbf3] p-5 shadow-[0_15px_40px_rgba(52,43,28,.07)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold text-[#987641]">Chapter {selectedChapter} practice</p>
                <h2 className="mt-1 font-serif text-3xl font-bold">
                  {modes.find((mode) => mode.id === activeMode)?.label}
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#806f5c]">
                  {cardIndex + 1} / {chapterDeck.length}
                </span>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-[#e7dfd1]">
                  <div
                    className="h-full rounded-full bg-[#7a2639] transition-all"
                    style={{ width: `${((cardIndex + 1) / chapterDeck.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-7">
              {activeMode === 'flashcards' && (
                <>
                  <button
                    className={`group relative flex min-h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#174c3c]/10 bg-[#edf0e5] p-8 text-center transition ${
                      cardFlipped ? 'bg-[#e3ebd9]' : ''
                    }`}
                    onClick={() => setCardFlipped((value) => !value)}
                  >
                    <span className="absolute left-5 top-5 rounded-full bg-white/70 px-3 py-1 text-[10px] font-black uppercase tracking-[.14em] text-[#6b6f5d]">
                      {cardFlipped ? 'Meaning & notes' : `${card?.pos || 'Noun'} · Ch. ${selectedChapter}`}
                    </span>
                    <span className="absolute right-6 top-6 text-[#a9af98]">
                      <Icon name="spark" size={22} />
                    </span>
                    {!cardFlipped ? (
                      <>
                        <span className="greek-text font-serif text-6xl font-bold text-[#174c3c] sm:text-7xl">
                          {card?.greek || 'λόγος'}
                        </span>
                        <span className="mt-4 text-sm font-bold tracking-[.08em] text-[#708078]">
                          {card?.translit || 'logos'}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-serif text-4xl font-bold text-[#174c3c] sm:text-5xl">
                          {card?.gloss || 'word, speech'}
                        </span>
                        <span className="mt-4 rounded-full bg-[#dfe7d8] px-4 py-2 text-xs font-extrabold text-[#4d665d]">
                          {card?.stemCue || card?.note || 'Vocabulary item'}
                        </span>
                        {card?.pp && (
                          <span className="mt-4 max-w-xl text-xs font-bold leading-6 text-[#657068]">
                            Principal parts: {card.pp.join(' · ')}
                          </span>
                        )}
                      </>
                    )}
                    <span className="absolute bottom-5 text-[11px] font-bold text-[#899288]">
                      Tap card to {cardFlipped ? 'see the word' : 'reveal the answer'}
                    </span>
                  </button>
                  <div className="mt-4 flex gap-3">
                    <button
                      className="flex-1 rounded-[14px] border border-[#9e644e]/25 bg-[#f5e7df] px-4 py-3 text-sm font-extrabold text-[#743b29]"
                      onClick={() => nextCard(false)}
                    >
                      Study again
                    </button>
                    <button
                      className="flex-1 rounded-[14px] bg-[#174c3c] px-4 py-3 text-sm font-extrabold text-white shadow-[0_4px_0_#0c3228]"
                      onClick={() => nextCard(true)}
                    >
                      Got it ✓
                    </button>
                  </div>
                </>
              )}

              {activeMode === 'translation' && (
                <div className="min-h-[370px] rounded-[24px] border border-[#7a2639]/10 bg-[#f6e8e6] p-6 sm:p-8">
                  <div className="flex items-center justify-between text-xs font-extrabold uppercase tracking-[.12em] text-[#8c5b5d]">
                    <span>Greek → English</span>
                    <span className="rounded-full bg-white/70 px-3 py-1.5">Chapter {selectedChapter} Prompt</span>
                  </div>
                  <p className="greek-text my-10 text-center font-serif text-4xl font-bold leading-relaxed text-[#542435] sm:text-5xl">
                    {selectedChapter === 5 ? 'ὁ θεὸς φῶς ἐστιν' : 'ἐν ἀρχῇ ἦν ὁ λόγος'}
                  </p>
                  <label className="text-xs font-extrabold text-[#69474b]" htmlFor="translation-answer">
                    Your translation
                  </label>
                  <textarea
                    className="mt-2 h-24 w-full resize-none rounded-[15px] border border-[#7a2639]/15 bg-white/70 p-4 text-base outline-none transition placeholder:text-[#9d8a87]"
                    id="translation-answer"
                    value={translationInput}
                    onChange={(e) => setTranslationInput(e.target.value)}
                    placeholder="Type a natural English translation…"
                  />
                  <button
                    onClick={() => setTranslationChecked(true)}
                    className="mt-4 w-full rounded-[14px] bg-[#7a2639] px-4 py-3 text-sm font-extrabold text-white shadow-[0_4px_0_#511726]"
                  >
                    Check translation
                  </button>
                  {translationChecked && (
                    <p className="mt-3 text-center text-xs font-bold text-[#7a2639]">
                      ✓ Answer submitted! Keep practicing with flashcards for vocabulary depth.
                    </p>
                  )}
                </div>
              )}

              {activeMode === 'parsing' && (
                <div className="min-h-[370px] rounded-[24px] border border-[#174c3c]/10 bg-[#e7eee6] p-6 sm:p-8">
                  <p className="text-xs font-extrabold uppercase tracking-[.13em] text-[#5f776e]">Parse the highlighted form</p>
                  <p className="greek-text my-8 text-center font-serif text-4xl font-bold leading-relaxed text-[#174c3c] sm:text-5xl">
                    ἐν τῇ <span className="rounded-lg bg-[#f1ce7e] px-2 text-[#4a3423]">ἀρχῇ</span>
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {['Case', 'Number', 'Gender'].map((label) => (
                      <label className="text-xs font-extrabold text-[#567067]" key={label}>
                        {label}
                        <select className="mt-2 w-full appearance-none rounded-[13px] border border-[#174c3c]/15 bg-white/70 p-3 text-sm font-bold outline-none">
                          <option>Select…</option>
                          <option>Dative / Singular / Feminine</option>
                          <option>Nominative / Plural / Masculine</option>
                        </select>
                      </label>
                    ))}
                  </div>
                  <button
                    onClick={() => alert('Great parsing practice! Keep it up.')}
                    className="mt-5 w-full rounded-[14px] bg-[#174c3c] px-4 py-3 text-sm font-extrabold text-white shadow-[0_4px_0_#0c3228]"
                  >
                    Check parsing
                  </button>
                </div>
              )}
            </div>
          </div>

          <aside className="flex flex-col overflow-hidden rounded-[30px] bg-[#4a2b1e] text-white shadow-[0_15px_40px_rgba(64,37,27,.18)]">
            <div className="relative flex-1 p-7">
              <div className="absolute -right-14 -top-12 h-44 w-44 rounded-full border-[30px] border-white/[.035]" />
              <span className="grid h-12 w-12 place-items-center rounded-[15px] bg-[#f1cf80] text-[#4a2b1e]">
                <Icon name="book" size={24} />
              </span>
              <p className="mt-7 text-[11px] font-black uppercase tracking-[.17em] text-[#dfb967]">Optional practice</p>
              <h2 className="mt-2 font-serif text-3xl font-bold leading-tight">Go beyond<br />1 John.</h2>
              <p className="mt-4 text-sm leading-6 text-white/65">
                Keep your course path intact while practicing familiar concepts in the Gospel of John,
                Mark, and selected Psalms.
              </p>

              <div className="mt-7 flex items-center justify-between rounded-[16px] bg-white/[.07] p-4">
                <div>
                  <p className="text-sm font-extrabold">Scripture library</p>
                  <p className="mt-1 text-xs text-white/50">{showLibrary ? 'Expanded GNT cards on' : '1 John cards only'}</p>
                </div>
                <button
                  aria-label="Toggle Scripture library"
                  className={`relative h-7 w-12 rounded-full transition ${showLibrary ? 'bg-[#f1cf80]' : 'bg-white/20'}`}
                  onClick={() => setShowLibrary((value) => !value)}
                >
                  <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${showLibrary ? 'left-6' : 'left-1'}`} />
                </button>
              </div>
            </div>
            <div className="border-t border-white/10 bg-black/10 p-5">
              <button
                onClick={() => setActiveTab('Practice')}
                className="flex w-full items-center justify-between text-sm font-extrabold text-[#f1cf80]"
              >
                Browse practice texts
                <Icon name="chevron" size={18} />
              </button>
            </div>
          </aside>
        </section>
      </main>

      <footer className="border-t border-[#173f35]/10 px-5 py-7 text-center text-xs font-bold text-[#7c796f]">
        Merkle &amp; Plummer · 24-chapter Biblical Greek study path · Original practice interface
      </footer>
    </div>
  )
}

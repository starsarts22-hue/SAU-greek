export interface Chapter {
  ch: number
  title: string
  filter: string
  drillNote: string
}

export interface Lexeme {
  id: string
  greek: string
  translit: string
  gloss: string
  pos: string
  merkle_chapter: number
  in_1john: boolean
  note?: string
  stemCue?: string
  middleOnly?: boolean
  pp?: string[]
}

export const chapters: Chapter[] = [
  { ch: 1, title: "The Greek Alphabet", filter: "Complete Alphabet (Alpha to Omega)", drillNote: "Master letter recognition, forms, and sounds for all 24 letters." },
  { ch: 2, title: "First Declension Nouns", filter: "1st declension feminine nouns & articles", drillNote: "N-G-D-A-V case order; drill feminine articles & noun endings." },
  { ch: 3, title: "Second Declension Nouns", filter: "2nd declension masc./neut. nouns", drillNote: "Drill full 2-1-2 article paradigm alongside 2nd declension nouns." },
  { ch: 4, title: "The Basics of Greek Verbs", filter: "Verbal Aspect & Voice", drillNote: "Conceptual quiz on verbal aspect (imperfective, perfective, stative)." },
  { ch: 5, title: "Present Indicative Verbs", filter: "Present active/middle/passive indicative", drillNote: "Flag middle-only verbs (e.g., ἔρχομαι) and present forms." },
  { ch: 6, title: "Imperfect Indicative Verbs", filter: "Imperfect tense indicative", drillNote: "Highlight syllabic/temporal augments and secondary personal endings." },
  { ch: 7, title: "Contract Verbs", filter: "Present/imperfect contract verbs (-άω, -έω, -όω)", drillNote: "Show uncontracted stem hints after incorrect parsing." },
  { ch: 8, title: "Prepositions", filter: "Prepositions and case government", drillNote: "Drill how prepositions shift meaning depending on Gen/Dat/Acc." },
  { ch: 9, title: "Personal & Relative Pronouns", filter: "Personal & relative pronouns", drillNote: "Drill antecedent agreement vs. clause function." },
  { ch: 10, title: "Future Indicative Verbs", filter: "Future active/middle indicative", drillNote: "Unlock Principal Part 2 (Future Active/Middle)." },
  { ch: 11, title: "First Aorist Indicative Verbs", filter: "1st aorist active/middle indicative", drillNote: "Unlock Principal Part 3 (-σα stems)." },
  { ch: 12, title: "Second Aorist Indicative Verbs", filter: "2nd aorist active/middle indicative", drillNote: "Contrast 2nd aorist root stems against imperfect forms." },
  { ch: 13, title: "Liquid Verbs", filter: "Liquid future and aorist verbs", drillNote: "Highlight missing tense formative (σ) and circumflex shifts." },
  { ch: 14, title: "Third Declension Nouns", filter: "3rd declension consonant and vowel nouns", drillNote: "Display lexical nominative alongside genitive singular stem cue." },
  { ch: 15, title: "Perfect & Pluperfect Indicative", filter: "Perfect, pluperfect, and aorist passive", drillNote: "Unlock Principal Parts 4, 5, and 6." },
  { ch: 16, title: "Adjectives & Adverbs", filter: "Adjectives and adverbs", drillNote: "Identify Attributive, Predicate, or Substantival use." },
  { ch: 17, title: "Present Participles", filter: "Present participles (act/mid/pass)", drillNote: "Add 'Adjectival vs. Adverbial' tag options." },
  { ch: 18, title: "Aorist Participles", filter: "Aorist participles (act/mid/pass)", drillNote: "Include Genitive Absolute construction recognition." },
  { ch: 19, title: "Perfect Participles", filter: "Perfect participles", drillNote: "Include Periphrastic Construction identification." },
  { ch: 20, title: "Other Pronouns", filter: "Demonstrative, reflexive, interrogative", drillNote: "Contrast τίς vs. τις." },
  { ch: 21, title: "Infinitives", filter: "Present, aorist, and perfect infinitives", drillNote: "Drill articular infinitives and purpose clauses." },
  { ch: 22, title: "Subjunctives", filter: "Present and aorist subjunctive mood", drillNote: "Drill ἵνα purpose clauses and hortatory subjunctives." },
  { ch: 23, title: "Imperatives & Optatives", filter: "Imperative and optative moods", drillNote: "Include prohibition formulas (μή + present vs. aorist)." },
  { ch: 24, title: "Μι Verbs", filter: "Athematic (-μι) verbs", drillNote: "Dedicated conjugation trainer for -μι stems." }
];

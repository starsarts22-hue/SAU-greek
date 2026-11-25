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
    { ch: 1, title: "The Greek Alphabet", filter: "N/A (Phonology, breathing marks, accents, punctuation)", drillNote: "Letter recognition, diphthongs, and syllabification mini-game." },
    { ch: 2, title: "First Declension Nouns", filter: "pos = noun (1st declension stems) + feminine definite article", drillNote: "N-G-D-A-V case order; drill feminine articles & nouns." },
    { ch: 3, title: "Second Declension Nouns", filter: "pos = noun (2nd declension masc./neut. stems) + masc./neut. articles", drillNote: "Drill full 2-1-2 article paradigm alongside 1st/2nd declension nouns." },
    { ch: 4, title: "The Basics of Greek Verbs", filter: "Conceptual intro (Person, Number, Tense/Aspect, Voice, Mood)", drillNote: "Conceptual quiz on verbal aspect (imperfective, perfective, stative)." },
    { ch: 5, title: "Present Indicative Verbs", filter: "pos = verb, tense = present, mood = indicative, voice IN (act/mid/pass) + εἰμί", drillNote: "Flag middle_only verbs (e.g., ἔρχομαι) instead of 'deponent.'" },
    { ch: 6, title: "Imperfect Indicative Verbs", filter: "pos = verb, tense = imperfect, mood = indicative + εἰμί (imperfect)", drillNote: "Highlight syllabic/temporal augments and secondary personal endings." },
    { ch: 7, title: "Contract Verbs", filter: "pos = verb, tense IN (present, imperfect), mood = indicative (-άω, -έω, -όω)", drillNote: "Show uncontracted stem hints after an incorrect parsing attempt." },
    { ch: 8, title: "Prepositions", filter: "pos = preposition (with case-government validation on object noun)", drillNote: "Drill how prepositions shift meaning depending on Gen/Dat/Acc object." },
    { ch: 9, title: "Personal & Relative Pronouns", filter: "pos = pronoun (type IN (personal, relative)), e.g., ἐγώ, σύ, αὐτός, ὅς", drillNote: "Drill antecedent agreement (gender/number) vs. clause function (case)." },
    { ch: 10, title: "Future Indicative Verbs", filter: "pos = verb, tense = future, mood = indicative, voice IN (act/mid) + εἰμί", drillNote: "Unlock Principal Part 2 (Future Active/Middle) in verb flashcards." },
    { ch: 11, title: "First Aorist Indicative Verbs", filter: "pos = verb, tense = aorist, mood = indicative, voice IN (act/mid) (-σα stems)", drillNote: "Unlock Principal Part 3 (Aorist Active/Middle)." },
    { ch: 12, title: "Second Aorist Indicative Verbs", filter: "pos = verb, tense = aorist, mood = indicative, voice IN (act/mid) (root stems)", drillNote: "Contrast 2nd aorist stem changes against imperfect forms." },
    { ch: 13, title: "Liquid Verbs", filter: "pos = verb, tense IN (future, aorist), mood = indicative (stem ends in λ, μ, ν, ρ)", drillNote: "Highlight missing tense formative (σ) and circumflex accent shifts." },
    { ch: 14, title: "Third Declension Nouns", filter: "pos = noun (3rd declension consonant, ι/υ, and vowel stems)", drillNote: "Display lexical nominative alongside genitive singular stem cue." },
    { ch: 15, title: "Perfect & Pluperfect Indicative", filter: "pos = verb, tense IN (perfect, pluperfect) + Aorist/Future Passive Indicative", drillNote: "Unlock Principal Parts 4, 5, and 6 (Perf. Act., Perf. M/P, Aor. Pass.)." },
    { ch: 16, title: "Adjectives & Adverbs", filter: "pos IN (adjective, adverb) (1-2 and 3-1-3 patterns, comparative/superlative)", drillNote: "Prompt students to identify Attributive, Predicate, or Substantival use." },
    { ch: 17, title: "Present Participles", filter: "pos = verb, tense = present, mood = participle, voice IN (act/mid/pass)", drillNote: "Add 'Adjectival vs. Adverbial' tag option alongside Case/Number/Gender." },
    { ch: 18, title: "Aorist Participles", filter: "pos = verb, tense = aorist, mood = participle, voice IN (act/mid/pass)", drillNote: "Include Genitive Absolute construction recognition drills." },
    { ch: 19, title: "Perfect Participles", filter: "pos = verb, tense = perfect, mood = participle, voice IN (act/mid/pass)", drillNote: "Include Periphrastic Construction (εἰμί + participle) identification." },
    { ch: 20, title: "Other Pronouns", filter: "pos = pronoun (demonstrative, reflexive, reciprocal, interrogative, indefinite)", drillNote: "Contrast τίς (accented interrogative) vs. τις (enclitic indefinite)." },
    { ch: 21, title: "Infinitives", filter: "pos = verb, mood = infinitive (tense IN (present, aorist, perfect))", drillNote: "Drill articular infinitives (τό + infinitive) and purpose/result clauses." },
    { ch: 22, title: "Subjunctives", filter: "pos = verb, mood = subjunctive (tense IN (present, aorist))", drillNote: "Drill ἵνα purpose clauses, hortatory subjunctives, and conditional classes." },
    { ch: 23, title: "Imperatives & Optatives", filter: "pos = verb, mood IN (imperative, optative)", drillNote: "Include prohibition formulas (μή + present imperative vs. aorist subjunctive)." },
    { ch: 24, title: "Μι Verbs", filter: "pos = verb where lemma ends in -μι (δίδωμι, τίθημι, ἵστημι, ἀφίημι)", drillNote: "Dedicated conjugation trainer for athematic (-μι) stems." }
  ];


export const lexemes: Lexeme[] = [
    // Ch 1
    { id: "l1-1", greek: "ἀρχή", translit: "archē", gloss: "beginning, origin", pos: "concept", merkle_chapter: 1, in_1john: true, note: "Smooth breathing (ἀ) is silent; η is long e." },
    { id: "l1-2", greek: "ὑιός / υἱός", translit: "huios", gloss: "son", pos: "concept", merkle_chapter: 1, in_1john: true, note: "Rough breathing (῾) adds an 'h' sound before υ." },
    { id: "l1-3", greek: "αὐτός", translit: "autos", gloss: "self / he / same", pos: "concept", merkle_chapter: 1, in_1john: true, note: "Αὐ is an improper/true diphthong pronounced 'ow' as in owl." },
    { id: "l1-4", greek: "λόγος", translit: "logos", gloss: "word, message", pos: "concept", merkle_chapter: 1, in_1john: true, note: "Acute accent (΄) marks pitch/stress on the penult." },
    { id: "l1-5", greek: "φῶς", translit: "phōs", gloss: "light", pos: "concept", merkle_chapter: 1, in_1john: true, note: "Circumflex (῀) occurs only on long vowels/diphthongs." },
    // Ch 2
    { id: "l2-1", greek: "ἀγάπη, -ης, ἡ", translit: "agapē", gloss: "love", pos: "noun", merkle_chapter: 2, in_1john: true, note: "1st declension feminine noun (η-stem)." },
    { id: "l2-2", greek: "ζωή, -ῆς, ἡ", translit: "zōē", gloss: "life", pos: "noun", merkle_chapter: 2, in_1john: true, note: "1st declension feminine noun; frequent in 1 John." },
    { id: "l2-3", greek: "ἀλήθεια, -ας, ἡ", translit: "alētheia", gloss: "truth", pos: "noun", merkle_chapter: 2, in_1john: true, note: "1st declension feminine noun with -α nominative singular." },
    { id: "l2-4", greek: "ἐντολή, -ῆς, ἡ", translit: "entolē", gloss: "commandment", pos: "noun", merkle_chapter: 2, in_1john: true, note: "1st declension feminine noun." },
    { id: "l2-5", greek: "ἡ, τῆς, τῇ, τήν", translit: "hē, tēs, tēi, tēn", gloss: "the (fem. sg. N-G-D-A)", pos: "article", merkle_chapter: 2, in_1john: true, note: "Feminine definite article in N-G-D-A order." },
    // Ch 3
    { id: "l3-1", greek: "θεός, -οῦ, ὁ", translit: "theos", gloss: "God", pos: "noun", merkle_chapter: 3, in_1john: true, note: "2nd declension masculine noun." },
    { id: "l3-2", greek: "κόσμος, -ου, ὁ", translit: "kosmos", gloss: "world, ordered system", pos: "noun", merkle_chapter: 3, in_1john: true, note: "2nd declension masculine noun." },
    { id: "l3-3", greek: "υἱός, -οῦ, ὁ", translit: "huios", gloss: "son", pos: "noun", merkle_chapter: 3, in_1john: true, note: "2nd declension masculine noun." },
    { id: "l3-4", greek: "τέκνον, -ου, τό", translit: "teknon", gloss: "child", pos: "noun", merkle_chapter: 3, in_1john: true, note: "2nd declension neuter noun: Nom. and Acc. match (-ον / -α)." },
    { id: "l3-5", greek: "ἔργον, -ου, τό", translit: "ergon", gloss: "work, deed", pos: "noun", merkle_chapter: 3, in_1john: false, note: "2nd declension neuter noun (expanded GNT)." },
    // Ch 4
    { id: "l4-1", greek: "Ἀτελής (Imperfective)", translit: "atelēs", gloss: "ongoing / continuous action", pos: "aspect", merkle_chapter: 4, in_1john: true, note: "Views action internally as unfolding process." },
    { id: "l4-2", greek: "Συντελικός (Perfective)", translit: "syntelikos", gloss: "undefined / whole action", pos: "aspect", merkle_chapter: 4, in_1john: true, note: "Views action as a complete whole without internal focus." },
    { id: "l4-3", greek: "Στατικός (Stative)", translit: "statikos", gloss: "resulting state", pos: "aspect", merkle_chapter: 4, in_1john: true, note: "Focuses on a state resulting from a prior action." },
    // Ch 5
    { id: "l5-1", greek: "γράφω", translit: "graphō", gloss: "I write", pos: "verb", merkle_chapter: 5, in_1john: true, pp: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"] },
    { id: "l5-2", greek: "λέγω", translit: "legō", gloss: "I say, speak", pos: "verb", merkle_chapter: 5, in_1john: true, pp: ["λέγω", "ἐρῶ", "εἶπον", "εἴρηκα", "εἴρημαι", "ἐρρήθην"] },
    { id: "l5-3", greek: "ἔχω", translit: "echō", gloss: "I have, hold", pos: "verb", merkle_chapter: 5, in_1john: true, pp: ["ἔχω", "ἕξω / σχήσω", "ἔσχον", "ἔσχηκα", "—", "—"] },
    { id: "l5-4", greek: "ἔρχομαι", translit: "erchomai", gloss: "I come, go", pos: "verb", merkle_chapter: 5, in_1john: true, middleOnly: true, pp: ["ἔρχομαι", "ἐλεύσομαι", "ἦλθον", "ἐλήλυθα", "—", "—"] },
    { id: "l5-5", greek: "εἰμί", translit: "eimi", gloss: "I am, exist", pos: "verb", merkle_chapter: 5, in_1john: true, pp: ["εἰμί", "ἔσομαι", "—", "—", "—", "—"] },
    // Ch 6
    { id: "l6-1", greek: "ἔγραφον", translit: "egraphon", gloss: "I was writing / kept writing", pos: "verb", merkle_chapter: 6, in_1john: true, pp: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"] },
    { id: "l6-2", greek: "ἔλεγον", translit: "elegon", gloss: "I was saying", pos: "verb", merkle_chapter: 6, in_1john: true, pp: ["λέγω", "ἐρῶ", "εἶπον", "εἴρηκα", "εἴρημαι", "ἐρρήθην"] },
    { id: "l6-3", greek: "ἤμην", translit: "ēmēn", gloss: "I was", pos: "verb", merkle_chapter: 6, in_1john: true, pp: ["εἰμί", "ἔσομαι", "—", "—", "—", "—"] },
    // Ch 7
    { id: "l7-1", greek: "ἀγαπάω", translit: "agapaō", gloss: "I love", pos: "verb", merkle_chapter: 7, in_1john: true, pp: ["ἀγαπάω", "ἀγαπήσω", "ἠγάπησα", "ἠγάπηκα", "ἠγάπημαι", "ἠγαπήθην"] },
    { id: "l7-2", greek: "ποιέω", translit: "poieō", gloss: "I do, make", pos: "verb", merkle_chapter: 7, in_1john: true, pp: ["ποιέω", "ποιήσω", "ἐποίησα", "πεποίηκα", "πεποίημαι", "ἐποιήθην"] },
    { id: "l7-3", greek: "πληρόω", translit: "plēroō", gloss: "I fulfill, fill", pos: "verb", merkle_chapter: 7, in_1john: true, pp: ["πληρόω", "πληρώσω", "ἐπλήρωσα", "πεπλήρωκα", "πεπλήρωμαι", "ἐπληρώθην"] },
    // Ch 8
    { id: "l8-1", greek: "ἐν (+ dat.)", translit: "en", gloss: "in, by, with, among", pos: "preposition", merkle_chapter: 8, in_1john: true, note: "Takes dative only." },
    { id: "l8-2", greek: "εἰς (+ acc.)", translit: "eis", gloss: "into, to, for", pos: "preposition", merkle_chapter: 8, in_1john: true, note: "Takes accusative only." },
    { id: "l8-3", greek: "μετά (+ gen. / acc.)", translit: "meta", gloss: "with (+ gen.); after (+ acc.)", pos: "preposition", merkle_chapter: 8, in_1john: true, note: "Case shifts meaning: fellowship (Gen.) vs. sequence (Acc.)." },
    { id: "l8-4", greek: "διά (+ gen. / acc.)", translit: "dia", gloss: "through (+ gen.); because of (+ acc.)", pos: "preposition", merkle_chapter: 8, in_1john: true, note: "Case shifts meaning: agency/means (Gen.) vs. ground/cause (Acc.)." },
    // Ch 9
    { id: "l9-1", greek: "ἐγώ", translit: "egō", gloss: "I", pos: "pronoun", merkle_chapter: 9, in_1john: true, note: "1st person personal pronoun." },
    { id: "l9-2", greek: "σύ", translit: "sy", gloss: "you (sg.)", pos: "pronoun", merkle_chapter: 9, in_1john: true, note: "2nd person personal pronoun." },
    { id: "l9-3", greek: "αὐτός, -ή, -ό", translit: "autos", gloss: "he/she/it; self; same", pos: "pronoun", merkle_chapter: 9, in_1john: true, note: "Predicate position = intensive/identity; attributive = same." },
    { id: "l9-4", greek: "ὅς, ἥ, ὅ", translit: "hos", gloss: "who, which, that", pos: "pronoun", merkle_chapter: 9, in_1john: true, note: "Relative pronoun: gender/number from antecedent, case from own clause." },
    // Ch 10
    { id: "l10-1", greek: "γράψω", translit: "grapsō", gloss: "I will write", pos: "verb", merkle_chapter: 10, in_1john: true, pp: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"] },
    { id: "l10-2", greek: "ποιήσω", translit: "poiēsō", gloss: "I will do / make", pos: "verb", merkle_chapter: 10, in_1john: true, pp: ["ποιέω", "ποιήσω", "ἐποίησα", "πεποίηκα", "πεποίημαι", "ἐποιήθην"] },
    { id: "l10-3", greek: "ἔσομαι", translit: "esomai", gloss: "I will be", pos: "verb", merkle_chapter: 10, in_1john: true, middleOnly: true, pp: ["εἰμί", "ἔσομαι", "—", "—", "—", "—"] },
    // Ch 11
    { id: "l11-1", greek: "ἔγραψα", translit: "egrapsa", gloss: "I wrote", pos: "verb", merkle_chapter: 11, in_1john: true, pp: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"] },
    { id: "l11-2", greek: "ἠγάπησα", translit: "ēgapēsa", gloss: "I loved", pos: "verb", merkle_chapter: 11, in_1john: true, pp: ["ἀγαπάω", "ἀγαπήσω", "ἠγάπησα", "ἠγάπηκα", "ἠγάπημαι", "ἠγαπήθην"] },
    { id: "l11-3", greek: "ἐποίησα", translit: "epoiēsa", gloss: "I did, made", pos: "verb", merkle_chapter: 11, in_1john: true, pp: ["ποιέω", "ποιήσω", "ἐποίησα", "πεποίηκα", "πεποίημαι", "ἐποιήθην"] },
    // Ch 12
    { id: "l12-1", greek: "εἶπον", translit: "eipon", gloss: "I said, spoke", pos: "verb", merkle_chapter: 12, in_1john: true, pp: ["λέγω", "ἐρῶ", "εἶπον", "εἴρηκα", "εἴρημαι", "ἐρρήθην"] },
    { id: "l12-2", greek: "ἦλθον", translit: "ēlthon", gloss: "I came, went", pos: "verb", merkle_chapter: 12, in_1john: true, pp: ["ἔρχομαι", "ἐλεύσομαι", "ἦλθον", "ἐλήλυθα", "—", "—"] },
    { id: "l12-3", greek: "ἔλαβον", translit: "elabon", gloss: "I took, received", pos: "verb", merkle_chapter: 12, in_1john: true, pp: ["λαμβάνω", "λήμψομαι", "ἔλαβον", "εἴληφα", "εἴλημμαι", "ἐλήμφθην"] },
    // Ch 13
    { id: "l13-1", greek: "ἀποστέλλω", translit: "apostellō", gloss: "I send out", pos: "verb", merkle_chapter: 13, in_1john: true, pp: ["ἀποστέλλω", "ἀποστελῶ", "ἀπέστειλα", "ἀπέσταλκα", "ἀπέσταλμαι", "ἀπεστάλην"] },
    { id: "l13-2", greek: "μένω", translit: "menō", gloss: "I abide, remain", pos: "verb", merkle_chapter: 13, in_1john: true, pp: ["μένω", "μενῶ", "ἔμεινα", "μεμένηκα", "—", "—"] },
    { id: "l13-3", greek: "αἴρω", translit: "airō", gloss: "I take up, lift, remove", pos: "verb", merkle_chapter: 13, in_1john: true, pp: ["αἴρω", "ἀρῶ", "ἦρα", "ἦρκα", "ἦρμαι", "ἤρθην"] },
    // Ch 14
    { id: "l14-1", greek: "πατήρ, πατρός, ὁ", translit: "patēr, patros", gloss: "father", pos: "noun", merkle_chapter: 14, in_1john: true, stemCue: "Stem: πατερ- / πατρ-", note: "3rd declension r-stem noun." },
    { id: "l14-2", greek: "φῶς, φωτός, τό", translit: "phōs, phōtos", gloss: "light", pos: "noun", merkle_chapter: 14, in_1john: true, stemCue: "Stem: φωτ-", note: "3rd declension dental/tau stem neuter noun." },
    { id: "l14-3", greek: "πνεῦμα, πνεύματος, τό", translit: "pneuma, pneumatos", gloss: "spirit, wind", pos: "noun", merkle_chapter: 14, in_1john: true, stemCue: "Stem: πνευματ-", note: "3rd declension -ματ stem neuter noun." },
    { id: "l14-4", greek: "χάρις, χάριτος, ἡ", translit: "charis, charitos", gloss: "grace, favor", pos: "noun", merkle_chapter: 14, in_1john: false, stemCue: "Stem: χαριτ-", note: "3rd declension dental stem feminine noun." },
    // Ch 15
    { id: "l15-1", greek: "γέγραφα", translit: "gegrapha", gloss: "I have written (and it stands written)", pos: "verb", merkle_chapter: 15, in_1john: true, pp: ["γράφω", "γράψω", "ἔγραψα", "γέγραφα", "γέγραμμαι", "ἐγράφην"] },
    { id: "l15-2", greek: "οἶδα", translit: "oida", gloss: "I know (stative perfect)", pos: "verb", merkle_chapter: 15, in_1john: true, pp: ["οἶδα", "εἰδήσω", "—", "οἶδα", "—", "—"] },
    { id: "l15-3", greek: "ἐγεννήθην", translit: "egennēthēn", gloss: "I was begotten / born", pos: "verb", merkle_chapter: 15, in_1john: true, pp: ["γεννάω", "γεννήσω", "ἐγέννησα", "γεγέννηκα", "γεγέννημαι", "ἐγεννήθην"] },
    // Ch 16
    { id: "l16-1", greek: "ἅγιος, -α, -ον", translit: "hagios", gloss: "holy, consecrated", pos: "adjective", merkle_chapter: 16, in_1john: true, note: "1st/2nd declension adjective." },
    { id: "l16-2", greek: "πᾶς, πᾶσα, πᾶν", translit: "pas, pasa, pan", gloss: "all, every, whole", pos: "adjective", merkle_chapter: 16, in_1john: true, note: "3-1-3 adjective pattern." },
    { id: "l16-3", greek: "νῦν", translit: "nyn", gloss: "now", pos: "adverb", merkle_chapter: 16, in_1john: true, note: "Temporal adverb." },
    // Ch 17
    { id: "l17-1", greek: "λέγων, -ουσα, -ον", translit: "legōn", gloss: "saying, speaking", pos: "participle", merkle_chapter: 17, in_1john: true, note: "Present active participle (3-1-3)." },
    { id: "l17-2", greek: "μένων, -ουσα, -ον", translit: "menōn", gloss: "abiding, remaining", pos: "participle", merkle_chapter: 17, in_1john: true, note: "Present active participle of μένω." },
    // Ch 18
    { id: "l18-1", greek: "ἐλθών, -οῦσα, -όν", translit: "elthōn", gloss: "having come", pos: "participle", merkle_chapter: 18, in_1john: true, note: "2nd aorist active participle of ἔρχομαι." },
    { id: "l18-2", greek: "ποιήσας, -ασα, -αν", translit: "poiēsas", gloss: "having done / made", pos: "participle", merkle_chapter: 18, in_1john: true, note: "1st aorist active participle of ποιέω." },
    // Ch 19
    { id: "l19-1", greek: "γεγεννημένος, -η, -ον", translit: "gegennēmenos", gloss: "having been born / begotten", pos: "participle", merkle_chapter: 19, in_1john: true, note: "Perfect middle/passive participle (-μενος)." },
    { id: "l19-2", greek: "τετηρημένος, -η, -ον", translit: "tetērēmenos", gloss: "having been kept / guarded", pos: "participle", merkle_chapter: 19, in_1john: true, note: "Perfect middle/passive participle of τηρέω." },
    // Ch 20
    { id: "l20-1", greek: "οὗτος, αὕτη, τοῦτο", translit: "houtos", gloss: "this (near demonstrative)", pos: "pronoun", merkle_chapter: 20, in_1john: true, note: "Demonstrative pronoun with rough/smooth breathing shifts." },
    { id: "l20-2", greek: "τίς / τις", translit: "tis", gloss: "who? which? (interrog.) / someone (indef.)", pos: "pronoun", merkle_chapter: 20, in_1john: true, note: "τίς has acute accent on syllable 1; τις is enclitic." },
    // Ch 21
    { id: "l21-1", greek: "ποιεῖν", translit: "poiein", gloss: "to do, to make", pos: "infinitive", merkle_chapter: 21, in_1john: true, note: "Present active infinitive of contract verb ποιέω." },
    { id: "l21-2", greek: "γινώσκειν", translit: "ginōskein", gloss: "to know, come to know", pos: "infinitive", merkle_chapter: 21, in_1john: true, note: "Present active infinitive." },
    // Ch 22
    { id: "l22-1", greek: "ἵνα + subjunctive", translit: "hina", gloss: "in order that, so that", pos: "subjunctive", merkle_chapter: 22, in_1john: true, note: "Purpose/result construction using subjunctive mood." },
    { id: "l22-2", greek: "ποιήσωμεν", translit: "poiēsōmen", gloss: "let us do / make", pos: "subjunctive", merkle_chapter: 22, in_1john: true, note: "Hortatory aorist active subjunctive (1st pl.)." },
    // Ch 23
    { id: "l23-1", greek: "μένετε / μὴ μένετε", translit: "menete", gloss: "abide! / do not keep abiding!", pos: "imperative", merkle_chapter: 23, in_1john: true, note: "Present imperative vs. μή + present imperative prohibition." },
    { id: "l23-2", greek: "γένοιτο", translit: "genoito", gloss: "may it be! / far from it!", pos: "optative", merkle_chapter: 23, in_1john: false, note: "Aorist middle optative of wish (expanded GNT)." },
    // Ch 24
    { id: "l24-1", greek: "δίδωμι", translit: "didōmi", gloss: "I give", pos: "mi-verb", merkle_chapter: 24, in_1john: true, pp: ["δίδωμι", "δώσω", "ἔδωκα", "δέδωκα", "δέδομαι", "ἐδόθην"] },
    { id: "l24-2", greek: "τίθημι", translit: "tithēmi", gloss: "I place, lay down", pos: "mi-verb", merkle_chapter: 24, in_1john: true, pp: ["τίθημι", "θήσω", "ἔθηκα", "τέθεικα", "τέθειμαι", "ἐτέθην"] },
    { id: "l24-3", greek: "ἵστημι", translit: "histēmi", gloss: "I stand, set", pos: "mi-verb", merkle_chapter: 24, in_1john: false, pp: ["ἵστημι", "στήσω", "ἔστησα", "ἕστηκα", "—", "ἐστάθην"] }
  ];

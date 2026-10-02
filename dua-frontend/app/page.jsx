import Link from "next/link";
import getAllCategories from "@/lib/category/getAllCategories";
import ThemeToggle from "@/components/theme-toggle";
import {
  BookIcon,
  ChevronRightIcon,
  ClockIcon,
  GridIcon,
  HeartIcon,
  MoonIcon,
  PaletteIcon,
  PrayIcon,
  ShieldIcon,
  SpeakerIcon,
  SunIcon,
  getCategoryStyle,
} from "@/components/icons";

export const metadata = {
  title: "Dua & Ruqyah - Authentic Supplications from Quran and Sunnah",
  description:
    "A free collection of authentic duas and adhkar from the Quran and Sunnah, with Arabic, transliteration, translation, references and audio.",
};

const FEATURES = [
  {
    Icon: ShieldIcon,
    title: "Authentic Sources",
    text: "Every supplication is taken from the Quran and authentic Hadith, with its reference so you can verify it yourself.",
  },
  {
    Icon: BookIcon,
    title: "Arabic, Transliteration & Meaning",
    text: "Read the original Arabic, pronounce it with the transliteration, and understand it through the English translation.",
  },
  {
    Icon: SpeakerIcon,
    title: "Audio Recitation",
    text: "Listen to clear recitations and learn the correct pronunciation of each dua at your own pace.",
  },
  {
    Icon: GridIcon,
    title: "Organized for Daily Life",
    text: "From waking up to going to sleep, find the right dua for every moment, grouped by topic.",
  },
  {
    Icon: PaletteIcon,
    title: "Comfortable to Read",
    text: "A calm, distraction-free reading experience in light or dark mode, on phone, tablet or desktop.",
  },
  {
    Icon: HeartIcon,
    title: "Free for Everyone",
    text: "No sign-up and nothing to pay. Knowledge of dua belongs to the whole Ummah, so it is open to all.",
  },
];

const ETIQUETTE = [
  {
    title: "Begin with praise and salawat",
    text: "Start by praising Allah and sending blessings upon the Prophet ﷺ before asking for your need.",
    ref: "Jami' at-Tirmidhi 3477",
  },
  {
    title: "Raise your hands humbly",
    text: "Your Lord is Shy and Generous; He is shy to turn away empty the hands His servant raises to Him.",
    ref: "Sunan Abi Dawud 1488",
  },
  {
    title: "Be certain of the answer",
    text: "Call upon Allah while being certain of a response, and know that He does not answer a heedless heart.",
    ref: "Jami' at-Tirmidhi 3479",
  },
  {
    title: "Do not be hasty",
    text: "Your dua is answered as long as you do not grow impatient and say: “I prayed but was not answered.”",
    ref: "Sahih al-Bukhari 6340",
  },
  {
    title: "Pray for your brothers and sisters",
    text: "When you pray for someone in their absence, an angel says: “Ameen, and for you the same.”",
    ref: "Sahih Muslim 2733",
  },
  {
    title: "Repeat and persist",
    text: "The Prophet ﷺ would often repeat his supplication three times, asking Allah with sincerity and persistence.",
    ref: "Sahih Muslim 1794",
  },
];

const BEST_TIMES = [
  { Icon: MoonIcon, title: "The last third of the night", ref: "Sahih al-Bukhari 1145" },
  { Icon: ClockIcon, title: "Between the adhan and iqamah", ref: "Sunan Abi Dawud 521" },
  { Icon: PrayIcon, title: "While in sujood (prostration)", ref: "Sahih Muslim 482" },
  { Icon: SunIcon, title: "The special hour on Friday", ref: "Sahih al-Bukhari 935" },
  { Icon: HeartIcon, title: "The dua of the fasting person", ref: "Jami' at-Tirmidhi 3598" },
  { Icon: BookIcon, title: "The dua of the traveller", ref: "Sunan Abi Dawud 1536" },
];

const primaryButton =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/25 hover:scale-[1.03] active:scale-95 transition-transform";
const secondaryButton =
  "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-line bg-panel text-sm font-semibold hover:border-brand-500/40 transition-colors glass-card";

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-4">
        {eyebrow}
      </span>
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {children && <p className="text-muted mt-3 leading-relaxed">{children}</p>}
    </div>
  );
}

function AyahCard({ arabic, translation, reference, className = "" }) {
  return (
    <figure
      className={`rounded-2xl bg-panel border border-line glass-card p-6 md:p-8 shadow-xl ${className}`}
    >
      <p dir="rtl" lang="ar" className="font-quran text-2xl md:text-3xl leading-[2.1] text-center">
        {arabic}
      </p>
      <blockquote className="mt-4 text-center text-sm md:text-base text-muted leading-relaxed">
        &ldquo;{translation}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-center text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
        {reference}
      </figcaption>
    </figure>
  );
}

export default async function LandingPage() {
  const categories = await getAllCategories();
  const totalSubcats = categories.reduce((sum, c) => sum + c.no_of_subcat, 0);
  const totalDuas = categories.reduce((sum, c) => sum + c.no_of_dua, 0);

  return (
    <div className="relative overflow-x-clip">
      {/* Navigation */}
      <nav className="sticky top-3 z-30 mx-3 md:mx-auto md:max-w-6xl mt-3 rounded-2xl bg-panel border border-line shadow-lg glass-card px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-brand-500/25">
            <PrayIcon className="w-6 h-6" />
          </span>
          <span className="font-bold tracking-tight">Dua &amp; Ruqyah</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-muted">
          <a href="#features" className="hover:text-ink transition-colors">Features</a>
          <a href="#etiquette" className="hover:text-ink transition-colors">Etiquette</a>
          <a href="#best-times" className="hover:text-ink transition-colors">Best Times</a>
          <a href="#categories" className="hover:text-ink transition-colors">Categories</a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle className="w-10 h-10 rounded-full border border-line bg-field flex items-center justify-center text-muted hover:text-ink transition-colors" />
          <Link href="/categories" className={`${primaryButton} !px-4 !py-2.5`}>
            Open App
          </Link>
        </div>
      </nav>

      <main className="mx-3 md:mx-auto md:max-w-6xl">
        {/* Hero */}
        <section className="relative pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Free for everyone · No sign-up
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Speak to your Lord with the words of the{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                Sunnah
              </span>
            </h1>
            <p className="text-muted text-base md:text-lg mt-5 leading-relaxed max-w-xl">
              A growing collection of authentic duas and adhkar from the Quran and Hadith, with
              Arabic text, transliteration, translation, references and audio, so you can
              remember Allah in every moment of your day.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/categories" className={primaryButton}>
                Start Reading Duas
                <ChevronRightIcon className="w-4 h-4" />
              </Link>
              <a href="#etiquette" className={secondaryButton}>
                Learn the Etiquette
              </a>
            </div>
            <dl className="flex flex-wrap gap-8 mt-10">
              {[
                [categories.length, "Categories"],
                [totalSubcats, "Topics"],
                [totalDuas, "Authentic Duas"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{value}</dd>
                  <dd className="text-xs font-medium text-muted mt-0.5">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-emerald-500/15 to-teal-400/5 blur-2xl" />
            <AyahCard
              className="relative"
              arabic="وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ"
              translation="And when My servants ask you concerning Me, indeed I am near. I respond to the call of the caller when he calls upon Me."
              reference="Surah Al-Baqarah 2:186"
            />
            <div aria-hidden="true" className="absolute -right-4 -top-6 opacity-20 text-emerald-500 pointer-events-none">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 100 100">
                <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
              </svg>
            </div>
          </div>
        </section>

        {/* Hadith highlight */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-100/70 via-panel to-panel dark:from-emerald-950/50 dark:via-slate-900/80 dark:to-slate-900/60 border border-brand-500/20 glass-card p-8 md:p-12 text-center">
          <p dir="rtl" lang="ar" className="font-quran text-3xl md:text-5xl leading-[1.8]">
            الدُّعَاءُ هُوَ الْعِبَادَةُ
          </p>
          <p className="mt-4 text-lg md:text-xl font-semibold">&ldquo;Supplication is worship.&rdquo;</p>
          <p className="mt-2 text-sm text-muted">
            The Prophet Muhammad ﷺ · Sunan Abi Dawud 1479, Jami&apos; at-Tirmidhi 2969
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-muted leading-relaxed">
            Dua is the believer&apos;s direct line to Allah. There is no intermediary, no fixed
            time and no required language. Yet the words taught by the Prophet ﷺ are the most
            complete, the most beautiful and the most beloved to Allah.
          </p>
          <div aria-hidden="true" className="absolute -left-10 -bottom-10 opacity-10 text-emerald-500 pointer-events-none">
            <svg className="w-56 h-56" fill="currentColor" viewBox="0 0 100 100">
              <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
            </svg>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 py-20 md:py-28">
          <SectionHeading eyebrow="Why Dua & Ruqyah" title="Everything you need to make dua with confidence">
            Built to help you learn, understand and live with the supplications of the Prophet ﷺ.
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl bg-panel border border-line hover:border-brand-500/40 glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured dua */}
        <section className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2">
            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-4">
              Dua of the Day
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              The supplication the Prophet ﷺ made most often
            </h2>
            <p className="text-muted mt-3 leading-relaxed">
              Anas ibn Malik (may Allah be pleased with him) said that the most frequent
              supplication of the Prophet ﷺ was this comprehensive dua, asking for the good of
              both worlds. <span className="text-xs font-semibold">(Sahih al-Bukhari 6389)</span>
            </p>
          </div>
          <div className="lg:col-span-3 rounded-2xl bg-panel border border-line glass-card p-6 md:p-8 flex flex-col gap-5">
            <p dir="rtl" lang="ar" className="font-quran text-2xl md:text-3xl leading-[2.1] text-right rounded-xl bg-field border border-line px-5 py-4">
              رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ
            </p>
            <p>
              <span className="font-semibold">Transliteration: </span>
              <span className="italic text-muted">
                Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina &lsquo;adhaban-nar
              </span>
            </p>
            <p>
              <span className="font-semibold">Translation: </span>
              Our Lord, give us good in this world and good in the Hereafter, and protect us from
              the punishment of the Fire.
            </p>
            <div className="border-l-2 border-brand-500 pl-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Reference</p>
              <p className="text-sm font-medium mt-1">Surah Al-Baqarah 2:201</p>
            </div>
          </div>
        </section>

        {/* Etiquette */}
        <section id="etiquette" className="scroll-mt-24 py-20 md:py-28">
          <SectionHeading eyebrow="Adab of Dua" title="The etiquette of making dua">
            Small acts of sincerity that the Prophet ﷺ taught us, to bring our hearts closer when
            we call upon Allah.
          </SectionHeading>
          <ol className="grid md:grid-cols-2 gap-5">
            {ETIQUETTE.map(({ title, text, ref }, i) => (
              <li key={title} className="flex gap-5 rounded-2xl bg-panel border border-line glass-card p-6">
                <span className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{text}</p>
                  <p className="mt-2 text-xs font-semibold text-brand-600 dark:text-brand-400">{ref}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Best times */}
        <section id="best-times" className="scroll-mt-24">
          <SectionHeading eyebrow="Times of Acceptance" title="When duas are most likely to be answered">
            Allah hears every call at every moment, and the Sunnah tells us of special times when
            the doors of acceptance are open.
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BEST_TIMES.map(({ Icon, title, ref }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl bg-panel border border-line glass-card p-4">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-muted mt-0.5">{ref}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories preview */}
        <section id="categories" className="scroll-mt-24 py-20 md:py-28">
          <SectionHeading eyebrow="Explore" title="A dua for every moment of life">
            Browse supplications by topic, from the virtues of dua to the adhkar of morning,
            evening and sleep.
          </SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.slice(0, 6).map((category) => {
              const { Icon, tile } = getCategoryStyle(category.cat_id);
              return (
                <Link
                  key={category.cat_id}
                  href={`/${category.cat_id}`}
                  className="group flex items-center gap-4 rounded-2xl bg-panel border border-line hover:border-brand-500/40 glass-card p-4 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className={`w-12 h-12 rounded-2xl bg-gradient-to-br border ${tile} flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-sm font-bold truncate group-hover:text-brand-600 dark:group-hover:text-emerald-300 transition-colors">
                      {category.cat_name_en}
                    </span>
                    <span className="block text-xs text-muted mt-0.5">{category.no_of_dua} Duas</span>
                  </span>
                  <ChevronRightIcon className="w-5 h-5 text-muted group-hover:text-brand-500 group-hover:translate-x-0.5 transition-all" />
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/categories" className={secondaryButton}>
              View all {categories.length} categories
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Closing call to action */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-8 md:p-14 text-center shadow-2xl shadow-emerald-900/30">
          <p dir="rtl" lang="ar" className="font-quran text-3xl md:text-4xl leading-[1.8]">
            أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
          </p>
          <p className="mt-3 text-emerald-50/90">
            &ldquo;Verily, in the remembrance of Allah do hearts find rest.&rdquo; — Surah Ar-Ra&apos;d 13:28
          </p>
          <h2 className="mt-8 text-2xl md:text-3xl font-extrabold tracking-tight">
            Begin your journey of remembrance today
          </h2>
          <p className="mt-2 text-emerald-50/80">Free for everyone, always. No account needed.</p>
          <Link
            href="/categories"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-emerald-700 text-sm font-bold shadow-lg hover:scale-[1.03] active:scale-95 transition-transform"
          >
            Start Reading Duas
            <ChevronRightIcon className="w-4 h-4" />
          </Link>
          <div aria-hidden="true" className="absolute -right-12 -top-12 opacity-10 pointer-events-none">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 100 100">
              <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" />
            </svg>
          </div>
        </section>
      </main>

      <footer className="mx-3 md:mx-auto md:max-w-6xl mt-16 mb-8 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <PrayIcon className="w-5 h-5 text-brand-500" />
          <span>Dua &amp; Ruqyah · Content by IRD Foundation</span>
        </div>
        <p className="text-center">May Allah accept from us and from you. Ameen.</p>
      </footer>
    </div>
  );
}

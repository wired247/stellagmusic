<template>
  <main>
    <section id="about" class="hero-section relative overflow-hidden border-b border-ink/10">
      <div class="absolute inset-0" aria-hidden="true">
        <div class="hero-orb hero-orb--one"></div>
        <div class="hero-orb hero-orb--two"></div>
        <div class="hero-grid"></div>
      </div>

      <div class="page-shell relative flex min-h-[620px] flex-col justify-end pb-16 pt-40 md:min-h-[690px] md:pb-24">
        <div class="max-w-4xl">
          <p class="eyebrow mb-8">Composer · Sound artist · New York</p>
          <h1 class="max-w-4xl font-display text-6xl leading-[0.92] tracking-[-0.06em] text-ink sm:text-7xl md:text-[7.5rem]">
            Music for the
            <span class="text-coral">in-between.</span>
          </h1>
          <div class="mt-10 flex max-w-2xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p class="max-w-md text-lg leading-relaxed text-ink/65">
              Stella G. makes intimate, restless music for ensembles, voices, and the spaces where one sound becomes another.
            </p>
            <a class="arrow-link shrink-0" href="#works">
              Explore the works
              <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
        <div class="absolute bottom-8 right-0 hidden text-right font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45 md:block">
          <span class="block">Selected works</span>
          <span class="block">2010 — 2026</span>
        </div>
      </div>
    </section>

    <section id="works" class="bg-paper">
      <div class="page-shell py-20 md:py-28">
        <div class="mb-20 grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-24">
          <div>
            <p class="eyebrow mb-5 text-coral">The archive</p>
            <h2 class="font-display text-5xl leading-[0.95] tracking-[-0.05em] text-ink md:text-6xl">
              A catalogue<br />of curiosities.
            </h2>
            <p class="mt-7 max-w-sm text-base leading-relaxed text-ink/60">
              Works for soloists, chamber groups, and large ensembles. Each piece begins with a question and leaves room for the listener to answer it.
            </p>
          </div>

          <div class="flex flex-col justify-end">
            <div class="mb-7 flex items-center justify-between border-b border-ink/20 pb-4">
              <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Browse by form</p>
              <span class="font-mono text-[10px] text-ink/35">{{ totalWorks }} works</span>
            </div>
            <nav class="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3" aria-label="Work categories">
              <a
                v-for="(category, index) in categories"
                :key="category.id"
                class="category-link group"
                :href="`#${category.id}`"
              >
                <span class="mr-2 font-mono text-[10px] text-coral">0{{ index + 1 }}</span>
                <span>{{ category.name }}</span>
                <span class="category-arrow" aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        </div>

        <div class="space-y-24 md:space-y-32">
          <section
            v-for="(category, categoryIndex) in categories"
            :id="category.id"
            :key="category.id"
            class="scroll-mt-8"
          >
            <div class="mb-8 flex items-end justify-between border-b border-ink/20 pb-4">
              <div class="flex items-baseline gap-4">
                <span class="font-mono text-[10px] tracking-[0.18em] text-coral">0{{ categoryIndex + 1 }}</span>
                <h3 class="font-display text-4xl tracking-[-0.04em] text-ink md:text-5xl">{{ category.name }}</h3>
              </div>
              <a class="hidden text-xs text-ink/45 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-coral sm:block" href="#works">Back to index ↑</a>
            </div>

            <div class="grid gap-x-12 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              <article v-for="work in category.works" :key="work.title" class="work-card group">
                <div class="mb-4 flex items-center justify-between">
                  <span class="font-mono text-[10px] tracking-[0.15em] text-ink/35">{{ work.year }}</span>
                  <span v-if="work.featured" class="rounded-full bg-coral/15 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-coral">Featured</span>
                </div>
                <h4 class="text-lg leading-snug text-ink">
                  <a class="work-title" href="#contact">{{ work.title }}</a>
                </h4>
                <p class="mt-3 text-sm leading-relaxed text-ink/55">{{ work.instrumentation }}</p>
                <div class="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                  <span>{{ work.duration }}</span>
                  <span class="h-px w-5 bg-ink/20"></span>
                  <span>{{ work.format }}</span>
                </div>
              </article>
            </div>
          </section>
        </div>

        <div class="mt-24 border-t border-coral/50 pt-5 md:mt-32">
          <p class="max-w-2xl text-sm leading-relaxed text-ink/50">
            This is a living archive. Scores and recordings are available on request — for programming, performance, or simply to listen a little closer.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface Work {
  title: string
  year: string
  duration: string
  instrumentation: string
  format: string
  featured?: boolean
}

interface Category {
  id: string
  name: string
  works: Work[]
}

const categories: Category[] = [
  {
    id: 'orchestra',
    name: 'Orchestra',
    works: [
      { title: 'The Air Around Us', year: '2023', duration: '06′', instrumentation: 'Full orchestra with optional chorus', format: 'large ensemble', featured: true },
      { title: 'Soft Geometry', year: '2021', duration: '12′', instrumentation: 'Chamber orchestra and electronics', format: 'large ensemble' },
      { title: 'A Map of Small Weather', year: '2018', duration: '09′', instrumentation: 'String orchestra', format: 'large ensemble' },
    ],
  },
  {
    id: 'chamber',
    name: 'Chamber',
    works: [
      { title: 'Late Eclipses in the Sun and Moon', year: '2023', duration: '12′', instrumentation: 'Clarinet, trombone, percussion, piano, strings', format: 'sextet', featured: true },
      { title: 'Compromise in the Midst of Our Sorrow', year: '2024', duration: '10′', instrumentation: 'String quartet', format: 'quartet' },
      { title: 'Polystylistic Spring', year: '2022', duration: '03′', instrumentation: 'Clarinet, cello, and piano', format: 'trio' },
      { title: 'Concentricity', year: '2022', duration: '03′', instrumentation: 'Trumpet, violin, and piano', format: 'trio' },
      { title: 'On the Truth About an Incident', year: '2021', duration: '08′', instrumentation: 'Oboe and vibraphone', format: 'duo' },
      { title: 'A Shift in the Matrix', year: '2020', duration: '04′', instrumentation: 'Clarinet and cello', format: 'duo' },
    ],
  },
  {
    id: 'solo',
    name: 'Solo',
    works: [
      { title: 'Establishing Space', year: '2024', duration: '08′', instrumentation: 'Double bass', format: 'solo', featured: true },
      { title: 'Love Letter to the Contrabassoon', year: '2023', duration: '05′', instrumentation: 'Contrabassoon', format: 'solo' },
      { title: 'Shrouded Sound', year: '2023', duration: '02′', instrumentation: 'Piano', format: 'solo' },
      { title: 'Tumbling from the Winter Night Sky', year: '2022', duration: '04′', instrumentation: 'Piano', format: 'solo' },
      { title: 'Fugue #1: Arduous Joy', year: '2021', duration: '02′', instrumentation: 'Piano', format: 'solo' },
      { title: 'Solitude', year: '2020', duration: '02′', instrumentation: 'Guitar', format: 'solo' },
    ],
  },
  {
    id: 'vocal',
    name: 'Vocal',
    works: [
      { title: 'For Those Who Often Languish Unheard', year: '2026', duration: '07′', instrumentation: 'A cappella choir, SATB divisi', format: 'choral', featured: true },
      { title: 'From Shadow', year: '2023', duration: '04′', instrumentation: 'Female voice, cello, and percussion', format: 'trio' },
      { title: 'The Air Around Us', year: '2023', duration: '06′', instrumentation: '3–30 voices and piano', format: 'vocal ensemble' },
      { title: 'The Wind Has Abated', year: '2022', duration: '04′', instrumentation: 'A cappella choir, SATB divisi', format: 'choral' },
      { title: 'Stories of My Mother', year: '2021', duration: '08′', instrumentation: 'Soprano and piano', format: 'duo' },
      { title: 'Hineni, Prayer for Rosh Hashanah', year: '2012', duration: '05′', instrumentation: 'Soprano', format: 'solo voice' },
    ],
  },
  {
    id: 'arrangements',
    name: 'Arrangements',
    works: [
      { title: '“We Are Women” from Candide', year: '2020', duration: '03′', instrumentation: 'Voice, winds, rhythm section, and strings', format: 'arrangement', featured: true },
      { title: 'Happy Birthday to You', year: '2018', duration: '05′', instrumentation: 'Saxophones, guitar, piano, bass, and drums', format: 'arrangement' },
      { title: 'Three Songs for a Sunday Morning', year: '2016', duration: '11′', instrumentation: 'Voice, piano, and string quartet', format: 'arrangement' },
    ],
  },
]

const totalWorks = categories.reduce((total, category) => total + category.works.length, 0)
</script>

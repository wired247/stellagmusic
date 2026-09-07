<template>
    <footer id="contact" class="bg-ink text-paper">
      <div class="page-shell grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <p class="eyebrow mb-6 text-coral">Keep in touch</p>
          <h2 class="max-w-sm font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">Let’s make a little noise.</h2>
          <a class="mt-8 inline-flex items-center gap-3 text-sm text-paper/70 transition-colors hover:text-coral" href="mailto:studio@stellagmusic.com">
            studio@stellagmusic.com <span class="text-coral">↗</span>
          </a>
        </div>
        <div class="flex flex-col gap-3 text-sm text-paper/60">
          <p class="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">Explore</p>
          <a :class="['nav-link', { 'nav-link--active': route.path === '/about' }]" href="/about">About</a>
          <a :class="['nav-link', { 'nav-link--active': route.path === '/works' }]" href="/works">Works</a>
          <a :class="['nav-link', { 'nav-link--active': route.path === '/listen' }]" href="#listen">Listen</a>
        </div>
        <div id="listen" class="flex flex-col gap-3 text-sm text-paper/60">
          <p class="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/35">Elsewhere</p>
          <a class="footer-link" href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube ↗</a>
          <a class="footer-link" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a class="footer-link" href="https://www.bandcamp.com" target="_blank" rel="noreferrer">Bandcamp ↗</a>
        </div>
      </div>
      <div class="page-shell flex flex-col gap-3 border-t border-paper/10 py-5 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/30 sm:flex-row sm:items-center sm:justify-between">
        <span>© {{ new Date().getFullYear() }} Stella G. Music</span>
        <span>Sound is a place we can share</span>
      </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
	<header class="site-header absolute left-0 right-0 top-0 z-10">
      <div class="page-shell flex items-center justify-between py-6 md:py-8">
        <RouterLink class="brand-mark" to="/" aria-label="Stella G. home">
          <span class="brand-mark__symbol">S</span>
          <span class="brand-mark__name">Stella G.</span>
        </RouterLink>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <a :class="['nav-link', { 'nav-link--active': route.path === '/about' }]" href="/about">About</a>
          <a :class="['nav-link', { 'nav-link--active': route.path === '/works' }]" href="/works">Works</a>
          <a class="nav-link" href="#listen">Listen</a>
          <a class="nav-link" href="#contact">Contact</a>
        </nav>

        <a class="menu-link md:hidden" href="/works">Menu <span aria-hidden="true">↘</span></a>
      </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

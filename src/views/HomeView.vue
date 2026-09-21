<template>
  <main class="container">
    <article class="page-regions" id="page-regions">
      <!-- <section class="hero-section relative overflow-hidden border-b border-ink/10"> -->
      <section class="region">
        <section
          class='page-section 
          full-bleed-section
          layout-engine-section
          background-width--full-bleed
          section-height--small
          content-width--wide
          horizontal-alignment--center
          vertical-alignment--top
          has-background'>

          <div class="section-border">
            <div class="section-background">
              <img :src="homeImageUrl" alt="Stella G Gitelman Willoughby" width="4211" height="2233"
                style="display:block;object-position: 31.77% 51.22%"
              >
            </div>
            <div class="section-background-overlay" style="opacity: 0;">
                Home content
             </div>
          </div>
            
        </section>
      </section>
    </article>
  </main>
</template>

<script setup lang="ts">
  import homeImageUrl from '../assets/home/stella_home.jpg'
</script>
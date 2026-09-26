<template>
	<!-- <header class="site-header absolute left-0 right-0 top-0 z-10"> -->
  <header id="header" class="header theme-col--primary">
    <div class="header-announcement-bar-wrapper">
      <!-- skip to content for mobile -->
      <div class="header-border">
      </div>
      <div class="header-inner container--fluid
        header-mobile-layout-logo-left-nav-right
        header-layout-nav-right">
        <div class="header-display-desktop">
          <div class="header-title-nav-wrapper">

            <div class="header-title header-title--use-mobile-logo">
              <div v-if="route.meta.showHeaderLogo" class="header-title-logo">
                <RouterLink to="/" aria-label="Stella G. home">
                  <picture>
                    <img :src="headerImgUrl" alt="Stella G. Gitelman Willoughby" style="display:block">
                  </picture>
                </RouterLink>
              </div>
            </div>

            <div class="header-nav">
              <div class="header-nav-wrapper">
                <nav class="header-nav-list">
                  <div :class="['header-nav-item header-nav-item--collection', { 'header-nav-item--active': route.path === '/about' }]">
                    <a href="/about">About</a>
                  </div>
                  <div :class="['header-nav-item header-nav-item--collection', { 'header-nav-item--active': route.path === '/works' }]">
                    <a href="/works">Works</a>
                  </div>
                  <div class="header-nav-item header-nav-item--external">
                    <a href="https://www.youtube.com/@stellagmusic" target="_blank">Listen</a>
                  </div>
                  <div class="header-nav-item header-nav-item--collection">
                    <a href="#services">Services</a>
                  </div>
                  <div class="header-nav-item header-nav-item--collection">
                    <a href="#contact">Contact</a>
                  </div>
                </nav>
              </div>
            </div>

            <div class="header-actions header-actions--right">
              <div class="header-actions-action header-actions-action--social">
                <a class="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" 
                  href="https://www.facebook.com/stella.gitelmanwilloughby.1/" target="_blank">
                  <svg viewBox="23 23 64 64">
                    <use xlink:href="#facebook-unauth-icon" width="110" height="110"></use>
                  </svg>
                </a>
                <a class="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" 
                  href="https://www.youtube.com/@stellagmusic" target="_blank">
                  <svg viewBox="23 23 64 64">
                    <use xlink:href="#youtube-unauth-icon" width="110" height="110"></use>
                  </svg>
                </a>
                <a class="icon icon--fill  header-icon header-icon-border-shape-none header-icon-border-style-outline" 
                  href="https://www.instagram.com/stellawithag/" target="_blank">
                  <svg viewBox="23 23 64 64">
                    <use xlink:href="#instagram-unauth-icon" width="110" height="110"></use>
                  </svg>
                </a>
              </div>
            </div>
          
          
          </div>
        </div>
      </div>

    </div>
    </header>

    <!-- inline social-icons.svg to control with CSS  -->
    <div style="display:none" v-html="socialSvg"></div>

</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import headerImgUrl from '../assets/header_title.png'
import socialSvg from '@/assets/social-icons.svg?raw'

const route = useRoute()
</script>

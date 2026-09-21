<template>
  <!-- <div class="min-h-screen bg-paper text-ink"> -->
  <div id="siteWrapper" class="clearfix site-wrapper">
    <Header />

    <RouterView />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

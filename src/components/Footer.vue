<template>
    <!-- <footer v-if="route.meta.showFooter" id="contact" class="bg-ink text-paper"> -->
    <footer v-if="route.meta.showFooter" id="footer-sections" class="sections">
      <!-- not working? -->
      <div class="section-divider-display" style="--stroke-thickness: 2px; --stroke-dasharray: 0; 
        --stroke-linecap: square; --section-divider-stroke-color: rgb(88, 29, 62);"></div>
      <section class="page-section 
        full-bleed-section
        layout-engine-section
        background-width--full-bleed
        section-height--custom
        content-width--wide
        horizontal-alignment--center
        vertical-alignment--middle">
        <div class="section-border">
          <div class="section-background"></div>
        </div>
        <div class="content-wrapper" style='padding-top: calc(0vmax / 10); padding-bottom: calc(0vmax / 10);'>
          <div class="content">
            <div data-fluid-engine="true">
              <div class="fluid-engine fe-664264186df8c654081ebdaa">
                <div class="fe-block fe-block-b766b22c439c884a1940">
                  <div class="sqs-block sqs-block-html html-block">
                    <div class="sqs-block-content">
                      <div class="sqs-text-block-container">
                        <div class="sqs-html-content">
                          <p class="sqsrte-large" style="white-space:pre-wrap;">
                            <a href="/home">Home</a>
                          </p>
                          <p class="sqsrte-large" style="white-space:pre-wrap;">
                            <a href="/works">Works</a>
                          </p>
                          <p class="sqsrte-large" style="white-space:pre-wrap;">
                            <a href="/services">Services</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-fec68734b8c1d04e0bb1">
                  <div class="sqs-block sqs-block-html html-block">
                    <div class="sqs-block-content">
                      <div class="sqs-text-block-container">
                        <div class="sqs-html-content">
                          <p class="sqsrte-large" style="white-space:pre-wrap;">
                            <a href="/about">About</a>
                          </p>
                          <p class="sqsrte-large" style="white-space:pre-wrap;">
                            <a href="https://www.youtube.com/@stellagmusic" target="_blank">Listen</a>
                          </p>
                          <p class="sqsrte-large" style="white-space:pre-wrap;">
                            <a href="/contact">Contact</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-yui_3_17_2_1_1715626667043_24566">
                  <div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" 
                    data-definition-name="website.components.imageFluid" data-sqsp-block="image"
                    id="block-yui_3_17_2_1_1715626667043_24566">
                    <div class="sqs-block-content">
                      <div class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center image-component-container-fit combination-animation-site-default individual-animation-site-default">
                        <div class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper">
                          <div class="fluid-image-container sqs-image-content js-image-container visitor-mode">
                            <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
                              <a class="sqs-block-image-link js-content-mode-element content-fit" href="/home">
                                <img :src="footerImgUrl"
                                  sizes="auto, (max-width: 640px) 100.00vw, (max-width: 767px) 100.00vw, 33.33vw" 
                                  alt="Stella G. Gitelman Willoughby" width="1123" height="120" 
                                  style="display:block; object-position: 50% 50%; object-fit: contain;">
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-ccc27477e75f4d3f2b34">
                  <div class="sqs-block sqs-block-html html-block">
                    <div class="sqs-block-content">
                      <div class="sqs-text-block-container">
                        <div class="sqs-html-content">
                          <p class="sqsrte-large" style="white-space:pre-wrap;">Get Social With Stella:</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-yui_3_17_2_1_1715626667043_26337">
                  <div class="sqs-block sqs-block-socialaccountlinks social-account-links-block social-account-links-v2-block">
                    <div class="sqs-block-content">
                      <div class="sqs-block-socialaccountlinks-content">
                        <div class="sqs-svg-icon--outer social-icon-alignment-left social-icons-color-black social-icons-size-small social-icons-style-regular ">
                          <nav class="sqs-svg-icon--list">
                            <a href="https://www.facebook.com/stella.gitelmanwilloughby.1/"
                              target="_blank" class="sqs-svg-icon--wrapper facebook-unauth" aria-label="Facebook">
                              <div>
                                <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                                  <use class="sqs-use--icon" xlink:href="#facebook-unauth-icon"></use>
                                  <use class="sqs-use--mask" xlink:href="#facebook-unauth-mask"></use>
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.youtube.com/@stellagmusic"
                              target="_blank" class="sqs-svg-icon--wrapper youtube-unauth" aria-label="YouTube">
                              <div>
                                <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                                  <use class="sqs-use--icon" xlink:href="#youtube-unauth-icon"></use>
                                  <use class="sqs-use--mask" xlink:href="#youtube-unauth-mask"></use>
                                </svg>
                              </div>
                            </a>
                            <a href="https://www.instagram.com/stellawithag/"
                              target="_blank" class="sqs-svg-icon--wrapper instagram-unauth" aria-label="Instagram">
                              <div>
                                <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
                                  <use class="sqs-use--icon" xlink:href="#instagram-unauth-icon"></use>
                                  <use class="sqs-use--mask" xlink:href="#instagram-unauth-mask"></use>
                                </svg>
                              </div>
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      <!--
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
      -->
    </footer>
</template>

<style scoped>
@import '@/assets/works/works.css';
</style>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import footerImgUrl from '../assets/footer_title.png'

const route = useRoute()
</script>

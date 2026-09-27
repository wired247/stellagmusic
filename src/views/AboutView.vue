<template>
  <main class="container">
    <article class="page0regions">
      <section class="region">
        <section class='page-section 
          full-bleed-section
          layout-engine-section
          background-width--full-bleed
          section-height--small
          content-width--wide
          horizontal-alignment--center
          vertical-alignment--middle
          has-background'>

          <div class="section-border">
            <div class="section-background">
              <img :src="aboutImageUrl" alt="Stella G Gitelman Willoughby" width="5383" height="2256"
                style="display:block;object-position: 50% 50%" sizes="(max-width: 799px) 200vw, 100vw">
              <div class="section-background-overlay" style="opacity: 0;"></div>
            </div>
          </div>

          <div class="content-wrapper">
            <div class="content">
              <div data-fluid-engine="true">
                <div class="fluid-engine fe-664256d4da23e40741b7c461">
                  <div class="fe-block fe-block-yui_3_17_2_1_1717101058872_87365">
                    <div class="sqs-block markdown-block sqs-block-markdown">
                      <div class="sqs-block-content">
                        <h1><span data-preserve-html-node="true" style="color:white">When I am composing,<br>I am smiling. </span></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
        </section>

        <!-- repeated section here (for mobile?)
        <section class="page-section 
          full-bleed-section
          layout-engine-section
          background-width--full-bleed
          section-height--custom
          content-width--wide
          horizontal-alignment--center
          vertical-alignment--middle
          has-background">

        </section> -->

        <section class="page-section 
          full-bleed-section
          layout-engine-section
          background-width--full-bleed
          section-height--small
          content-width--wide
          horizontal-alignment--center
          vertical-alignment--middle
          white">

          <div class="section-border">
            <div class="section-background" style="background-color:rgb(255 251 249)">
            </div>
          </div>

          <div class="content-wrapper">
            <div class="content">
              <div class="fluid-engine fe-6642575815680233c4783107">

                <div class="fe-block fe-block-yui_3_17_2_1_1715623198647_8628">
                  <div class="sqs-block sqs-block-html html-block">
                    <div class="sqs-block-content">
                      <div class="sqs-text-block-container">
                        <div class="sqs-html-content">
                          <h1 style="text-align:center;white-space:pre-wrap;">Meet Stella</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-yui_3_17_2_1_1715623198647_9701">
                  <div class="sqs-block website-component-block sqs-block-website-component sqs-block-image image-block" 
                    data-definition-name="website.components.imageFluid" 
                    id="block-yui_3_17_2_1_1715623198647_9701">
                    <div class="sqs-block-content">
                      <div class="fluid-image-component-root image-block-outer-wrapper design-layout-fluid image-position-center image-component-container-fit">
                        <div class="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper">
                          <div class="fluid-image-container sqs-image-content js-image-container visitor-mode">
                            <div class="js-content-mode-element-wrapper js-content-mode-element-system_desktop">
                              <div class="js-content-mode-element content-fit">
                                <img :src="decorationUrl" width="1322" height="110`"
                                  style="display:block; object-position: var(--image-component-focal-point);object-fit: var(--image-component-object-fit);"">
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-yui_3_17_2_1_1717101058872_129389">
                  <div class="sqs-block markdown-block sqs-block-markdown" id="block-yui_3_17_2_1_1717101058872_129389">
                    <div class="sqs-block-content">
                      <center data-preserve-html-node="true">
                        <h4 data-preserve-html-node="true"> Stella G. Gitelman Willoughby (b. 2000) is a national and international award-winning 
                          composer from Cambridge, Massachusetts. </h4>
                          <p>Stella composes for solo instruments, voice, large and small chamber ensembles, and symphony orchestra. 
                            Dedicated to creative and interdisciplinary collaboration, Stella works with musicians, dancers, filmmakers, 
                            performance and fine artists. She writes music for concert performances, recording projects, music festivals, 
                            dance, performance and public art installations, audition repertoire, film, to accompany historical and liturgical 
                            text, for student musicians, and academic presentations. Stella highly values the individuality of each performer, 
                            and the unique qualities of each instrument. She creates works that highlight their distinct sound, bringing it to 
                            the forefront. </p>
                      </center>

                    </div>
                  </div>
                </div>

                <div class="fe-block fe-block-yui_3_17_2_1_1715624148929_6455">
                  <div class="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block" 
                    data-definition0name="website.components.button" data-sqsp-block="button">
                    <div class="sqs-block-content">
                      <div class="sqs-block-button-container sqs-button-block-container-system_desktop sqs-block-button-container--center">
                        <a href="https://drive.google.com/drive/folders/1rGCVeHsWdZEyIDQnt2wDJH9P7TSZMZkT?usp=sharing" 
                        class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" 
                        target="_blank" style="background-color:rgb(255 211 189);">
                          Download Bios
                        </a>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

      </section>

    </article>
  </main>
</template>

<style scoped>
@import '@/assets/about/about.css';
</style>

<script setup lang="ts">
  import aboutImageUrl from '../assets/about/about-above-the-fold.jpg'
  import decorationUrl from '../assets/about/about_decoration.png'
</script>

<template>
  <div class="wrapper">
    <top-bar />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>
<script>
import TopBar from '@/components/TopBar'
export default {
  name: 'Default',
  components: {
    TopBar,
  },
}
</script>

<style>
/* Fonts */
@font-face {
  font-family: 'Codec Pro';
  src: url('@/assets/fonts/CodecPro-Bold.eot');
  src: local('☺'), url('@/assets/fonts/CodecPro-Bold.woff') format('woff'),
    url('@/assets/fonts/CodecPro-Bold.ttf') format('truetype'),
    url('@/assets/fonts/CodecPro-Bold.svg') format('svg');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Codec Pro';
  src: url('@/assets/fonts/CodecPro-Light.eot');
  src: local('☺'), url('@/assets/fonts/CodecPro-Light.woff') format('woff'),
    url('@/assets/fonts/CodecPro-Light.ttf') format('truetype'),
    url('@/assets/fonts/CodecPro-Light.svg') format('svg');
  font-weight: normal;
  font-style: normal;
}

/* -------------------------------------------------------------------- */

/* Global Reset */
* {
  padding: 0;
  margin: 0;
  border: 0;
}
*,
* ::before,
* ::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a {
  text-decoration: none;
}
a:focus,
a:active {
  outline: none;
}
nav,
footer,
header,
aside {
  display: block;
}
html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  line-height: 1;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-family: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: 400;
}

/* --------------------------------------------------------------------- */

/* Modern browsers */
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template: minmax(auto, 144px) 1fr / 1fr;
  grid-template-areas: 'header' 'main';
}

@media (max-width: 760px) {
  .wrapper {
    grid-template: minmax(auto, 56px) 1fr / 1fr;
    grid-template-areas: 'header' 'main';
  }
}
</style>

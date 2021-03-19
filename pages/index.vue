<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.text">Nothing here</div>
      <div :class="$style.action">
        Click on the button to go to vehicles page
      </div>
      <button
        :class="$style.refresh"
        onfocus="true"
        onclick="location.href='/vehicles'"
      >
        Reload page
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
}
</script>
<style module>
.container {
  grid-area: main;
  background: #fcfcfc;
  display: grid;
  grid-template: 1fr / 1fr minmax(auto, 1312px) 1fr;
}
.content {
  grid-column: 2/3;
  background-color: #f3f4f6;
  border-radius: 32px;
  padding: 56px;
  margin-bottom: 48px;
  font-family: 'Codec Pro', serif;
  text-align: center;
}
.text {
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
  padding: 24px;
}
.action {
  font-size: 14px;
  line-height: 146%;
  color: #677b8f;
}
.refresh {
  width: 161px;
  height: 48px;
  background: #4959ff;
  border-radius: 12px;
  font-size: 16px;
  line-height: 14px;
  color: #fcfcfc;
  margin: 40px;
}
</style>

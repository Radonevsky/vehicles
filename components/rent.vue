<template>
  <div :class="$style.container">
    <div :class="$style.description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </div>
    <div :class="$style.description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </div>
    <div :class="$style.cond">
      <div :class="$style.title">Additional conditions:</div>
      <ul :class="$style.list">
        <li :class="$style.description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </li>
        <li :class="$style.description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </li>
        <li :class="$style.description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rent',
}
</script>

<style module>
.container {
  font-family: 'Codec Pro', serif;
}
.description {
  font-size: 14px;
  line-height: 146%;
  color: #677b8f;
  padding-bottom: 32px;
  text-align: left;
}
.title {
  font-weight: bold;
  font-size: 16px;
  line-height: 152%;
  color: #012345;
  padding-bottom: 24px;
}
.list li {
  padding-bottom: 16px;
}
</style>

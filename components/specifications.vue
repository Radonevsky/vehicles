<template>
  <div :class="$style.container">
    <div :class="$style.description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam
      consequat sunt nostrud amet.
    </div>
    <div :class="$style.features">
      <div :class="$style.featuresTitle">Features:</div>
      <div :class="$style.featuresItems">
        <div :class="$style.featuresIcon">
          <img src="@/assets/Images/feature_icon1.svg" />
        </div>
        <div :clas="$style.featuresInfo">
          <div :class="$style.featuresName">
            A challenge for a true champion
          </div>
          <div :class="$style.featuresDescription">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
      </div>
      <div :class="$style.featuresItems">
        <div :class="$style.featuresIcon">
          <img
            src="@/assets/Images/feature_icon2.svg"
            align="middle"
            width="80px"
          />
        </div>
        <div :clas="$style.featuresInfo">
          <div :class="$style.featuresName">
            A challenge for a true champion
          </div>
          <div :class="$style.featuresDescription">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Specifications',
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
.featuresTitle {
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;
  color: #012345;
  padding-bottom: 16px;
  text-align: left;
}
.featuresItems {
  display: flex;
  padding-top: 16px;
}
.featuresIcon {
  flex: 80px;
  margin-right: 24px;
}
.featuresIcon img {
  top: 0;
  left: 0;
  min-width: 80px;
  float: left;
}
.featuresInfo {
  flex: auto;
}
.featuresName {
  font-weight: 700;
  font-size: 16px;
  line-height: 152%;
  color: #012345;
  margin-top: 12px;
  padding-bottom: 8px;
  text-align: left;
}
.featuresDescription {
  font-size: 14px;
  line-height: 146%;
  color: #677b8f;
  text-align: left;
}
</style>

<template>
  <div :class="$style.container">
    <div :class="$style.description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </div>
    <div :class="$style.specialists">
      <div :class="$style.specTitle">Qualified specialists</div>
      <div :class="$style.specItems">
        <div :class="$style.specItem">
          <img src="@/assets/Images/s_photo.png" />
          <div :class="$style.specName">Marvin McKinney</div>
          <div :class="$style.specProfession">Pilot assistant</div>
        </div>
        <div :class="$style.specItem">
          <img src="@/assets/Images/pilot_photo.png" />
          <div :class="$style.specName">Savannah Nguyen</div>
          <div :class="$style.specProfession">Mechanic</div>
        </div>
        <div :class="$style.specItem">
          <img src="@/assets/Images/mechanic_photo.png" />
          <div :class="$style.specName">Courtney Henry</div>
          <div :class="$style.specProfession">Stewardess</div>
        </div>
      </div>
      <div :class="$style.description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
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
.specTitle {
  font-weight: bold;
  font-size: 24px;
  line-height: 21px;
  color: #012345;
  padding-bottom: 16px;
  text-align: left;
}
.specItems {
  display: flex;
  padding-top: 16px;
  margin-bottom: 32px;
  justify-content: space-between;
}
.specItem img {
  max-width: 162px;
}
.specItem {
  padding-right: 25px;
}
.specName {
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  color: #012345;
  padding-top: 16px;
}
.specProfession {
  font-size: 12px;
  line-height: 148%;
  color: #677b8f;
  padding-top: 8px;
}

@media (max-width: 760px) {
  .specItems {
    display: block;
    text-align: left;
  }
  .specItem {
    height: 108px;
  }
  .specItem img {
    float: left;
    margin-right: 16px;
  }
}
</style>

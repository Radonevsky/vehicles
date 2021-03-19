<template>
  <div :class="$style.header">
    <div :class="$style.logoImg">
      <img src="@/assets/Images/logo.svg" :class="$style.logoImages" />
    </div>
    <div :class="$style.logoTitle">
      <img src="@/assets/Images/logo_title.svg" :class="$style.logoTitle" />
    </div>
    <div :class="$style.description">World's first affordable airsharing</div>
    <div :class="$style.nightModeIcon">
      <img src="../assets/Images/icon_night_toggle.svg" />
    </div>
    <div :class="$style.nightMode">Night mode</div>
    <div :class="$style.message">
      <img src="../assets/Images/icon_message.svg" />
    </div>
    <div :class="$style.notification">
      <img src="../assets/Images/icon_notification.svg" />
    </div>
    <div :class="$style.userName">Bessie Cooper</div>
    <div :class="$style.userPhoto">
      <img src="../assets/Images/user_photo.png" />
    </div>
  </div>
</template>

<style module>
.header {
  font-family: 'Codec Pro', serif;
  background: #fcfcfc;
  padding: 52px 32px 44px;
  display: grid;
  grid-area: header;
  grid-template:
    1fr /
    1fr
    minmax(auto, 48px) minmax(auto, 122.1px) minmax(auto, 605.9px)
    minmax(auto, 24px) minmax(auto, 203px) minmax(auto, 24px)
    minmax(auto, 48px) minmax(auto, 165px) minmax(auto, 72px)
    1fr;
  align-items: center;
}
.logoImg {
  grid-column: 2/3;
  justify-self: start;
}
.logoTitle {
  padding-left: 17.9px;
}
.description {
  padding-left: 64.9px;
  font-size: 16px;
  line-height: 152%;
  color: #677b8f;
}
.nightMode {
  padding-left: 16px;
}
.userPhoto img {
  border-radius: 50%;
}
.notification {
  justify-self: end;
}
.userName {
  padding: 0 16px;
  justify-self: end;
  color: #012345;
  font-weight: 700;
  font-size: 16px;
  line-height: 152%;
}
.userPhoto {
  justify-self: end;
  align-content: center;
}
@media (max-width: 1110px) {
  .description {
    display: none;
  }
  .logoTitle {
    grid-column: span 2;
  }
}
@media (max-width: 820px) {
  .nightMode {
    display: none;
  }
  .userName {
    display: none;
  }
  .userPhoto {
    grid-column: 8/10;
    grid-column: span 2;
  }
  .nightModeIcon {
    grid-column: span 2;
    justify-self: end;
    padding-right: 24px;
  }
}
@media (max-width: 760px) {
  .userPhoto img {
    width: 32px;
  }
  .logoImg img {
    width: 32px;
  }
  .logoTitle img {
    width: 69.47px;
    padding-left: 0;
  }
  .nightModeIcon .message .notification img {
    width: 15px;
  }
  .logoTitle {
    padding-left: 0;
  }
  .header {
    font-family: 'Codec Pro', serif;
    background: #fcfcfc;
    padding: 12px 16px;
  }
}
</style>

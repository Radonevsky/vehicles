<template>
  <div>
    <server-error v-if="error" />
    <div v-if="currentVehicle" :class="$style.container">
      <div :class="$style.content">
        <img :src="currentVehicle.image" />
        <div :class="$style.info">
          <div :class="$style.name">
            {{ currentVehicle.name }}
          </div>
          <div :class="$style.nav">
            <span
              :class="{ [$style.activeSpan]: currentTab === 'specifications' }"
              @click="setTab('specifications')"
              >Specifications</span
            >
            <span
              :class="{ [$style.activeSpan]: currentTab === 'team' }"
              @click="setTab('team')"
              >Team</span
            >
            <span
              :class="{ [$style.activeSpan]: currentTab === 'rent' }"
              @click="setTab('rent')"
              >Rent terms</span
            >
          </div>
          <div :class="$style.tabs">
            <specifications v-if="currentTab === 'specifications'" />
            <team v-if="currentTab === 'team'" />
            <rent v-if="currentTab === 'rent'" />
          </div>
          <div :class="$style.rent">
            <span>{{ `${currentVehicle.rent} $/h` }}</span>
            <div :class="$style.but">
              <button>Rent now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import ServerError from '@/components/ServerError'
import specifications from '@/components/specifications'

export default {
  name: 'VehiclesVehicle',
  components: {
    ServerError,
    specifications,
  },
  computed: {
    ...mapState({
      currentVehicle: (state) => state.vehicles.currentVehicle,
      error: (state) => state.vehicles.error,
      currentTab: (state) => state.vehicles.currentTab,
    }),
    currentVehicleId() {
      return this.$route.params.vehicle
    },
  },
  mounted() {
    this.$store.dispatch(
      'vehicles/[vehicles] setCurrentVehicles',
      this.currentVehicleId
    )
  },
  methods: {
    setTab(tab) {
      this.$store.commit('vehicles/[vehicles] setCurrentTab', tab)
    },
  },
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
  display: grid;
  grid-template: minmax(auto, 700px) 1fr / minmax(500px, 700px) minmax(
      400px,
      auto
    );
  padding: 0 18px 56px 18px;
  margin-bottom: 48px;
  font-family: 'Codec Pro', serif;
}
.img {
  position: relative;
}
.content img {
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 24px;
}
.info {
  display: grid;
  grid-template-rows:
    minmax(auto, 136px)
    minmax(auto, 14px)
    1fr
    minmax(80px, auto);
  padding: 0 0 0 64px;
}
.name {
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
  padding-top: 56px;
}
.nav {
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #677b8f;
}
.rent span {
  text-align: left;
  flex: 50%;
  padding-left: 32px;
}
.nav span {
  display: inline-block;
  padding-right: 32px;
  transition-duration: 500ms;
}
.nav span:hover {
  color: #9ba4ff;
}
.activeSpan {
  color: #4959ff;
}
.tabs {
  padding-top: 32px;
}
.rent {
  height: 80px;
  background: #f3f4f7;
  border-radius: 16px;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: #012345;
  display: flex;
  align-items: center;
}
.but {
  flex: 50%;
  text-align: right;
  padding-right: 32px;
}
.rent button {
  padding: 0 32px;
  background: #4959ff;
  border-radius: 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 14px;
  color: #fcfcfc;
  width: 136px;
  height: 48px;
}

@media (max-width: 960px) {
  .container {
    display: block;
    text-align: center;
  }
  .content {
    grid-area: main;
    background: #fcfcfc;
    display: block;
  }
  .info {
    text-align: center;
  }
}

@media (max-width: 760px) {
  .content {
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 32px;
  }
  .info {
    padding: 0;
    grid-template-rows:
      minmax(auto, 40px)
      minmax(auto, 40px)
      1fr
      minmax(auto, 68px);
  }
  .name {
    font-size: 24px;
    padding: 22px 0 16px 0;
    height: 67px;
  }
  .rent {
    height: 68px;
    font-size: 16px;
  }
  .rent span {
    padding-left: 24px;
  }
  .rent button {
    width: 111px;
    height: 44px;
    padding: 0 12px;
  }
}
</style>

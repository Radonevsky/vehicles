<template>
  <div :class="$style.container">
    <div v-if="isLoading" :class="$style.loading">Loading...</div>
    <server-error v-if="error" />
    <div v-if="vehicles" :class="$style.vehicles">
      <div :class="$style.nav">
        <div :class="$style.filtr">
          <div>Rent <span>whatever</span></div>
          <img src="@/assets/Images/filtr.svg" />
        </div>
        <div :class="$style.addNew">
          <span>Add new</span>
          <img src="@/assets/Images/add_new.svg" />
        </div>
      </div>
      <div :class="$style.items">
        <vehicle-preview
          v-for="(item, index) in vehicles"
          :key="index"
          :vehicle="item"
          :class="$style.hover"
        />
      </div>
    </div>
  </div>
</template>
<script>
import VehiclePreview from '@/components/VehiclePreview'
import ServerError from '@/components/VehiclePreview'
import { mapState } from 'vuex'

export default {
  name: 'Vehicles',
  components: {
    VehiclePreview,
    ServerError,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.vehicles.isLoading,
      vehicles: (state) => state.vehicles.data,
      error: (state) => state.vehicles.error,
    }),
  },
  mounted() {
    this.$store.dispatch('vehicles/[vehicles] getVehicles')
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
.vehicles {
  grid-column: 2/3;
  background-color: #f3f4f6;
  border-radius: 32px;
  display: grid;
  grid-template: minmax(auto, 144px) 1fr / 1fr minmax(auto, 1248px) 1fr;
  padding-bottom: 56px;
  margin-bottom: 48px;
}

.nav {
  display: flex;
  justify-content: space-between;
  grid-column: 2/3;
  padding: 56px 32px 40px;
}

.filtr {
  font-family: 'Codec Pro', serif;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: #012345;
  display: flex;
  align-items: center;
}
.filtr div {
  display: inline-block;
}

.filtr span {
  color: #4959ff;
}

.filtr img {
  padding-left: 12px;
}

.addNew {
  font-family: 'Codec Pro', serif;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  display: flex;
  align-items: center;
}

.addNew span {
  padding-right: 20px;
}

.items {
  grid-row: 2/3;
  grid-column: 2/3;
  position: relative;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(343px, auto));
  grid-auto-rows: 1fr;
  padding: 0 32px;
}
.hover :hover {
  transition-duration: 500ms;
  background-color: #bcbfe1;
  box-shadow: 0 0 5px #959ad0;
}

.loading {
  font-weight: 700;
  font-size: 16px;
  color: #012345;
}
@media (max-width: 760px) {
  .addNew {
    font-size: 16px;
    line-height: 136%;
  }
  .addNew img {
    width: 32px;
  }
  .filtr {
    font-size: 24px;
    line-height: 120%;
  }
  .nav {
    padding: 26px 16px 25px;
  }
  .items {
    padding: 0 16px;
    grid-gap: 12px;
  }
  .vehicles {
    grid-template: minmax(auto, 56px) 1fr / 1fr minmax(auto, 1248px) 1fr;
    padding-bottom: 24px;
    margin: 8px 0 20px;
    border-radius: 24px;
  }
}
</style>

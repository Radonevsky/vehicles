<template>
  <nuxt-link :to="vehicleUrl">
    <div :class="$style.container">
      <div :class="$style.image">
        <img :src="vehicle.preview" />
      </div>
      <div :class="$style.info">
        <div :class="$style.name">{{ vehicle.name }}</div>
        <div :class="$style.description">{{ vehicle.description }}</div>
        <div :class="$style.rent">{{ `${vehicle.rent} $/h` }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'VehiclesPreview',
  props: {
    vehicle: {
      type: Object,
      required: true,
    },
  },
  computed: {
    vehicleUrl() {
      return `/vehicles/${this.vehicle.id}`
    },
  },
}
</script>

<style module>
.container {
  display: flex;
  background-color: #fcfcfc;
  border-radius: 32px;
}
.image {
  margin: 24px 24px 52px 32px;
  pointer-events: none;
}
.image img {
  width: 88px;
  height: 88px;
  border-radius: 24px;
}
.info {
  margin: 40px 32px 25px 0;
  align-self: stretch;
  pointer-events: none;
}
.name {
  font-family: 'Codec Pro', serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  color: #012345;
  padding-bottom: 12px;
}
.description {
  padding-bottom: 16px;
  font-family: 'Codec Pro', serif;
  font-size: 12px;
  line-height: 148%;
  color: #677b8f;
}
.rent {
  font-family: 'Codec Pro', serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 148%;
  color: #f84ab3;
}
</style>

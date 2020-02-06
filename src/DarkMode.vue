<template>
  <a class="action" @click="toggleDarkMode(darkMode)">
    <b v-if="!$slots.lightIcon && darkMode">🌞</b>
    <slot name="lightIcon" v-if="$slots.lightIcon && darkMode"></slot>
    <b v-if="!$slots.darkIcon && !darkMode">🌜</b>
    <slot name="darkIcon" v-if="$slots.darkIcon && !darkMode"></slot>
  </a>
</template>

<script>
export default {
  name: "DarkMode",
  data() {
    return {
      darkMode: localStorage.getItem("darkMode") || false
    };
  },
  mounted() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.toggleDarkMode(false);
    }
  },
  methods: {
    toggleDarkMode(bool) {
      this.darkMode = !bool;
      let el = document.querySelector("body");
      if (this.darkMode) {
        localStorage.setItem("darkMode", this.darkMode);
        el.classList.add("theme-dark");
      } else {
        localStorage.removeItem("darkMode");
        el.classList.remove("theme-dark");
      }
    }
  }
};
</script>

<style lang="scss">
.action {
  cursor: pointer;
}
</style>
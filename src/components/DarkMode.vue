<template>
  <a class="action" @click="darkMode = !darkMode">
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
      darkMode: null
    };
  },
  mounted() {
    if (localStorage.getItem("darkMode") == 'true') {
      this.darkMode = true;
    } else {
      this.darkMode = false;
    }
    this.checkColorScheme();
  },
  methods: {
    switchColorScheme(bool) {
      const el = document.querySelector("body");
      if (bool) {
        localStorage.setItem("darkMode", true);
        el.classList.add("theme-dark");
      } else {
        localStorage.setItem("darkMode", false);
        el.classList.remove("theme-dark");
      }
    },
    checkColorScheme() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches &&
        localStorage.getItem("darkMode") === null
      ) {
        this.darkMode = true;
      }
    }
  },
  watch: {
    darkMode: function(val) {
      console.log("eseguo");
      this.switchColorScheme(val);
    }
  }
};
</script>

<style lang="scss">
.action {
  cursor: pointer;
}
</style>
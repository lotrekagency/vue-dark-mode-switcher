<template>
  <div id="app">
    <div class="wrapper">
      <!--  -->

      <div class="canvas">
        <div class="block day">
          <div class="icon">🌞</div>
        </div>
        <div class="block night">
          <div class="icon">🌜</div>
        </div>
      </div>
      <div class="content">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <h1>Vue Dark Mode Switcher</h1>
        <DarkMode>
          <div slot="darkIcon">
            <button>Dark</button>
          </div>
          <div slot="lightIcon">
            <button>Light</button>
          </div>
        </DarkMode>
      </div>
    </div>
  </div>
</template>

<script>
import DarkMode from "./components/DarkMode";
export default {
  name: "App",
  components: {
    DarkMode
  }
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css");

body {
  background: rgb(6, 0, 101);
  background: linear-gradient(
    180deg,
    rgb(5, 25, 54) 0%,
    rgb(133, 171, 252) 100%
  );
  background-size: 100% 200%;
  background-position:center bottom;
  transition: background 0.3s ease;
  will-change: background;

  &.theme-dark {
    background-position: center top;
    color: white;
    .canvas {
      transform: rotate(180deg);
    }
  }
}

.wrapper {
  /* position: absolute; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  overflow: hidden;
  position: relative;
  .canvas {
    z-index: -1;
    position: absolute;
    height: 200%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    transition: transform 0.3s ease;
    will-change: transform;
    top: 0;
    .block {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;

      &.day {
      }
      &.night {
        transform: rotate(180deg);
      }
      .icon {
        margin-top: -35%;

        @media all and(max-width: 640px) {
          margin-top: -80%;
        }
        font-size: 6rem;
      }
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.logo {
  max-width: 4rem;
}
</style>

<template>
  <div id="app">
    <div class="wrapper">
      <!--  -->
      <div class="canvas-container">
        <div class="canvas">
          <div class="block day">
            <div class="icon">🌞</div>
          </div>
          <div class="block night">
            <div class="icon">🌜</div>
          </div>
        </div>
      </div>
      <div class="content">
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <h1>Vue Dark Mode Switcher</h1>
        <DarkMode>
          <div slot="darkIcon">
            <button class="main-action">Dark</button>
          </div>
          <div slot="lightIcon">
            <button class="main-action">Light</button>
          </div>
        </DarkMode>

        <pre>

yarn add vue-dark-mode-switcher

npm install vue-dark-mode-switcher
        </pre>
        <div class="buttons">
          <gh-btns-watch slug="lotrekagency/vue-dark-mode-switcher" show-count></gh-btns-watch>
          <gh-btns-star slug="lotrekagency/vue-dark-mode-switcher" show-count></gh-btns-star>
          <gh-btns-fork slug="lotrekagency/vue-dark-mode-switcher" show-count></gh-btns-fork>
          <gh-btns-follow user="lotrekagency" show-count></gh-btns-follow>
        </div>
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
@import url("https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap");

body {
  font-family: "Cutive Mono", monospace;

  &.theme-dark {
    color: white;
    .wrapper {
      .canvas-container {
        &::before {
          top: 0%;
        }
      }
    }
    .main-action,
    pre {
      background: rgba($color: #000000, $alpha: 0.6);
      color: #ffffff;
    }
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
  min-height: 100vh;
  z-index: 1;

  position: relative;

  .canvas-container {
    z-index: -1;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    &::before {
      content: "";
      z-index: -2;
      background: rgb(6, 50, 77);
      background: linear-gradient(
        180deg,
        rgba(6, 50, 77, 1) 0%,
        rgba(34, 193, 195, 1) 74%,
        rgba(253, 187, 45, 1) 100%
      );

      position: absolute;
      height: 200%;
      width: 100%;
      top: -100%;
      left: 0;
      transition: top 0.3s ease;
      will-change: top;
    }
    .canvas {
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
        align-items: flex-start;
        justify-content: center;
        width: 100vw;
        height: 100vh;

        &.day {
        }
        &.night {
          transform: rotate(180deg);
        }
        .icon {
          margin-top: 5%;
          text-shadow: 0px 0px 50px #fdbb2d;
          font-size: 6rem;
        }
      }
    }
  }
}

pre {
  min-width: 0px;
  background: rgba($color: #ffffff, $alpha: 0.6);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  transition: background 0.3s ease;
  will-change: background;
}

.main-action {
  font-family: "Cutive Mono", monospace;
  margin-top: 0.25rem;
  background: rgba($color: #ffffff, $alpha: 0.6);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: none;
  font-size: 1.25rem;
  transition: background 0.3s ease;
  will-change: background;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
}

.logo {
  max-width: 4rem;
}

.buttons {
  margin-top: 1rem;
}

h1 {
  text-align: center;
  font-size: 3rem;
}
</style>

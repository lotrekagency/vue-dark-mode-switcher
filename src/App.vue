<template>
  <div id="app">
    <nav>
      <div class="main-logo">
        <span>v.{{packageJson.version}}</span>
      </div>
      <DarkMode>
        <div slot="darkIcon">
          <button class="main-action">Dark</button>
        </div>
        <div slot="lightIcon">
          <button class="main-action">Light</button>
        </div>
      </DarkMode>
    </nav>
    <header class="wrapper">
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
        <br />

        <pre>

yarn add vue-dark-mode-switcher

npm install vue-dark-mode-switcher
        </pre>
        <br />
        <a class="link" :href="packageJson.repository.url" target="blank">
          <GitHub />
        </a>
      </div>
      <div class="city">
        <city />
      </div>
      <div class="city city-lights">
        <cityLights />
      </div>
    </header>
    <main class="container">
      <vue-simple-markdown :source="fileContent"></vue-simple-markdown>
    </main>

    <footer>
      <div class="buttons">
        <gh-btns-watch slug="lotrekagency/vue-dark-mode-switcher" show-count></gh-btns-watch>
        <gh-btns-star slug="lotrekagency/vue-dark-mode-switcher" show-count></gh-btns-star>
        <gh-btns-follow user="lotrekagency" show-count></gh-btns-follow>
      </div>
    </footer>
  </div>
</template>

<script>
import DarkMode from "./components/DarkMode";
import city from "./assets/city.svg";
import cityLights from "./assets/city_lights.svg";

import GitHub from "./assets/github.svg";
export default {
  name: "App",
  components: {
    DarkMode,
    city,
    cityLights,
    GitHub
  },
  data() {
    return {
      packageJson: require("../package.json"),
      fileToRender:
        "https://raw.githubusercontent.com/lotrekagency/vue-dark-mode-switcher/master/README.md",
      fileContent: null
    };
  },
  created: function() {
    this.getContent();
  },
  methods: {
    getContent() {
      this.fileContent = "rendering ";
      // var self;
      this.$http.get(this.fileToRender).then(
        response => {
          // get body data

          this.fileContent = response.body;
          console.log(this.fileContent);
        },
        response => {
          // error callback
          console.log(response);
          response = "An error ocurred";
          this.fileContent = response;
        }
      );
    }
  }
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css");
@import url("https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Cutive+Mono&display=swap");

$dark: #06324d;
$light: #fac044;
body {
  font-family: "Inconsolata", monospace;
  font-size: 18px;
  color: $dark;
  background: $light;
  &.theme-dark {
    color: $light;
    background: $dark;
    .wrapper {
      .canvas-container {
        &::before {
          top: 0%;
        }
      }
      .city {
        svg {
          fill: $dark;
        }
      }
      .city-lights {
        svg {
          filter: drop-shadow(0 0 50px $light);
          fill: $light;
        }
      }
    }
    .main-action,
    pre {
      background: rgba($color: $dark, $alpha: 0.6);
      color: $light;
    }
    .canvas {
      transform: rotate(180deg);
    }
    .link {
      color: $light;
      svg {
        fill: $light;
      }
    }
    .markdown-body {
      color: $light !important;
      pre {
        background: rgba($color: $light, $alpha: 0.6) !important;
        color: $dark;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        border-bottom: 1px solid rgba($color: $light, $alpha: 0.2) !important;
      }
    }
    footer {
      background: $light;
      color: $dark;
    }
    .main-logo {
      &::before {
        content: "🌜";
      }
    }
    nav {
      background: rgba($dark, 30%);
    }
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 85vh;
  z-index: 1;
  max-width: 100%;
  position: relative;
  margin: 0;
  overflow: hidden;
  .canvas-container {
    z-index: -1;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    overflow: hidden;
    &::before {
      content: "";
      z-index: -2;
      background: rgb(6, 50, 77);
      background: linear-gradient(
        180deg,
        #06324d 0%,
        #22c1c3 74%,
        #fdbb2d 100%
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
          margin-top: 10%;
          margin-left: -50%;
          text-shadow: 0px 0px 50px #fdbb2d;
          font-size: 10rem;
          @media all and(max-width:640px) {
            margin-top: 10%;
            font-size: 5rem;
          }
        }
      }
    }
  }
}

pre {
  min-width: 0px;
  background: rgba($color: $light, $alpha: 0.6);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  transition: background 0.3s ease;
  will-change: background;
}

.main-action {
  font-family: "Cutive Mono", monospace;
  margin-top: 0.25rem;
  background: rgba($color: $light, $alpha: 0.6);
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
  position: relative;
  z-index: 1;
}

.logo {
  align-items: center;
  max-width: 4rem;
}

.buttons {
  text-align: center;
  margin-top: 1rem;
  margin: 0 auto;
  display: block;
}

.wrapper {
  h1 {
    text-align: center;
    font-size: 3rem;
  }
}

.link {
  font-weight: bold;
  text-decoration: none;
  color: $light;
  svg {
    fill: $dark;
    height: 2rem;
    width: 2rem;
  }
}

main,
footer {
  z-index: 1;
  position: relative;
}

footer {
  background: $dark;
  color: $light;
  padding: 1rem;
  display: flex;
}
.container {
  padding: 3rem 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.markdown-body {
  color: $dark !important;
  font-family: "Inconsolata", monospace !important;

  pre {
    margin-top: 1rem !important;
    background: rgba($color: $dark, $alpha: 0.6) !important;
    color: $light;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    border-bottom: 1px solid rgba($color: $dark, $alpha: 0.2) !important;
  }
}
nav {
  position: fixed;
  padding: 1rem;
  background: rgba($light, 30%);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: calc(100% - 2rem);
  z-index: 10;
}

.main-logo {
  font-size: 2rem;
  display: flex;
  align-items: center;
  span {
    font-size: 1.25rem;
  }
  &::before {
    margin-right: 0.5rem;
    content: "🌞";
  }
}

.city {
  position: absolute;
  width: 100%;
  bottom: -6px;
  z-index: 0;

  svg {
    fill: $light;
  }
}

.city-lights {
  z-index: 0;
  z-index: -1;
  svg {
    filter: drop-shadow(0 0 50px $dark);
    fill: $dark;
  }
}
</style>

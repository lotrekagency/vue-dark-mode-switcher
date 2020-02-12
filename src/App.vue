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
        <a class="link" :href="packageJson.repository.url" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
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
export default {
  name: "App",
  components: {
    DarkMode
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
$light: #fdbb2d;
body {
  font-family: "Inconsolata", monospace;

  font-size: 18px;
  color: $dark;
  &.theme-dark {
    color: $light;
    background: $dark;
    .wrapper {
      .canvas-container {
        &::before {
          top: 0%;
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
      svg{
        fill:$light;
      }
    }
    .markdown-body {
      color: $light !important;
      pre {
        background: $light !important;
        color: $dark;
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
    nav{
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
}

.logo {
 
  align-items:center;
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
  svg{
    fill:$dark;
    height:2rem;
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
  padding: 2rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.markdown-body {
  color: $dark !important;
  pre {
    background: $dark !important;
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
   display:flex;
   align-items:center;
   span{
     font-size:1.25rem;
   }
  &::before {
    margin-right:.5rem;
    content: "🌞";
  }
}
</style>

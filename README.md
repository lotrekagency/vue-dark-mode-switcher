## 🎬Getting started

```
yarn add vue-dark-mode-switcher
npm install vue-dark-mode-switcher
```

## 👨‍💻Usage

If you love emoticons you can use base version with 🌞and 🌜

```
import DarkMode from "vue-dark-mode-switcher";
Vue.component('yourcomponentName', {
  components: {
    DarkMode
  }
}
template:{'
    ...
    <DarkMode></Darkmode>
    ...
'}
```

if you want to customize it

```
<DarkMode>
    <em slot="lightIcon"><b><em>light!</em></b></em>
    <em slot="darkIcon"><img src="..."/>></em>
</DarkMode>
```

## 💅 Styling!
You only have to create styles for **.theme-dark** class
```
.theme-dark{
    background: black;
    color: white;
}
```
the class is added to body element.
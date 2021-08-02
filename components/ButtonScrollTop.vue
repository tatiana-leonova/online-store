<template>
  <a
    @click="scrollTop"
    v-show="visible"
    class="button-top"
    aria-label="Вернуться в начало страницы">
    &uarr;
  </a>
</template>

<script>
export default {
  name: "ButtonScrollTop",

  data() {
    return {
      visible: false,
      scrollSpeed: 100,
      valueAppearanceButton: 350,
    };
  },

  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.scrollSpeed);
      }, 20);
    },
    scrollListener() {
      this.visible = window.scrollY > this.valueAppearanceButton;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss" scoped>
.button-top {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 34px;
  color: white;
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 50%;
  border: 2px solid $color_black;
  background-color: $color_black;
  outline: none;
  cursor: pointer;
  transition: 0.5s ease;
  margin: 0 auto;

  &:hover {
    color: $color_black;
    background-color: $color_white;
  }

  &:active {
    opacity: 1;
    color: white;
    background-color: $color_black;
  }
}
</style>

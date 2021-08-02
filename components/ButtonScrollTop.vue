<template>
  <a
    @click="scrollTop"
    v-show="visible"
    class="button-top"
    aria-label="Вернуться в начало страницы"
  >
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
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  margin: 0 auto;
  font-size: 34px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid $color_black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: white;
  background-color: $color_black;
  outline: none;
  transition: 0.5s ease;

  &:hover {
    color: $color_black;
    background-color: $color_white;
  }

  &:active {
    background-color: $color_black;
    color: white;
    opacity: 1;
  }
}
</style>

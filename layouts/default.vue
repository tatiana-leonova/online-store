<template>
  <div style="position: relative">
    <page-header></page-header>
    <Nuxt/>
    <button-scroll-top></button-scroll-top>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ButtonScrollTop from "@/components/ButtonScrollTop.vue";

export default {
  components: {
    'page-header': PageHeader,
    'button-scroll-top': ButtonScrollTop,
  },
};
</script>

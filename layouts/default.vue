<template>
  <div>
    <page-header></page-header>
    <Nuxt/>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";

export default {
  components: {
    'page-header': PageHeader,
  },
};

</script>
<style>

</style>

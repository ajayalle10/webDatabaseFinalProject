<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.header {
  background-color: rgb(246, 234, 219);
  color: black;
  text-align: center;
  padding: 20px 0;
}
</style>

<template>
  <!-- Iterate directly over blogs -->
  <div v-for="blog in blogs" :key="blog.id">
    <SubBlogComponent :blog="blog" />
  </div>
</template>

<script>
import SubBlogComponent from './SubBlogComponent.vue';

export default {
  name: "BlogComponent",
  props: {
    blogs: {
      type: Array, // Validate that blogs is an array
      required: true
    }
  },
  components: {
    SubBlogComponent
  }
};
</script>

<style>
/* Add styles here if necessary */
</style>

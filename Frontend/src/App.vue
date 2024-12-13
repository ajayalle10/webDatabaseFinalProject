<template>
  <div id="app">
    <HeaderComponent title="AJAY BLOGGING PLATFORM" />
    <div class="blog-container">
      <BlogComponent :blogs=blogs />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    BlogComponent,
    FooterComponent,
  },
  data(){
    return {
      blogs: []
    }
  },
  methods:{
    //promises
    async fetchblogs(){
      const res = await fetch('https://ajay-blogging-platform-backend.onrender.com/api');
      const data = await res.json()
      console.log(data)
      console.log(res)
      return data
    }
  },
  async created(){
      this.blogs = await this.fetchblogs();
  }
}
</script>

<style>
.blog-container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adds space between blog cards */
  padding: 20px;
}
</style>

<template>

  <div class="blog-card" :style="{ backgroundImage: `url(${blog.blogPicture})` }">
      <div class="blog-content">
      <h2>{{ blog.blogTitle }}</h2>
      <p class="author">By: {{ blog.authorName }}</p>
      <p class="date">Published: {{ new Date(blog.createdDate).toLocaleDateString() }}</p>
      <p class="description">{{ blog.blogDescription }}</p>
      </div>
  </div>

</template>

<script>
export default {
name: "FooterComponent",
props:{
  blog:Array
}
};
</script>

<style>
.blog-card {
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
color: white;
background-size: cover;
background-position: center;
border-radius: 10px;
height: 400px; /* Increased height for more content */
width: 90%; /* Ensures the blog takes up most of the page width */
margin: 20px auto; /* Adds spacing between blogs and centers them */
padding: 20px;
position: relative;
overflow: hidden;
text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
transition: transform 0.3s, box-shadow 0.3s;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Adds subtle shadow for better separation */
}
.blog-card:hover {
transform: scale(1.02);
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
}
.blog-content {
background: rgba(0, 0, 0, 0.6);
padding: 10px;
border-radius: 10px;
}
.blog-card h2 {
font-size: 1.8em;
margin: 10px 0;
}
.blog-card .author,
.blog-card .date {
font-size: 1em;
margin: 5px 0;
}
.blog-card .description {
margin: 10px 0;
font-size: 1.1em;
}

</style>
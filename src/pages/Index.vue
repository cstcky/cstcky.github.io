<template>
  <HeaderAndFooter>
    <section>
      <div v-for="year in getYears()">
        <h3>{{year}}</h3>
        <ul>
          <!-- using seperate component to render individual posts to avoid monolithic Index component -->
          <PostRenderer :posts="$page.posts.edges" :year="year"/>
        </ul>
      </div>
    </section>
  </HeaderAndFooter>
</template>

<script>
import PostRenderer from '~/components/PostRenderer.vue'

export default {
  components: {
    PostRenderer 
  },
  metaInfo: {
    title: "Blog" 
  },
  methods: {
    //sorts years descending (for year header)
    getYears(){
      let edges = this.$page.posts.edges;
      let years = [];
      for(var i = 0; i < edges.length; i++){
        if(years.indexOf(edges[i].node.year) === -1){
          years.push(edges[i].node.year) 
        }
      }
      return years.sort((a, b)=>{
        return b - a 
      })
    }
  }
}
</script>

<page-query>
query {
  posts: allBlogEntry{
    edges{
      node{
        path,
        year,
        month,
        date,
        content,
        title
      } 
    }
  }     
}
</page-query>

<style>
body {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  font-style: normal;
  font-family: consolas, monaco, courier, "courier new", fixed-width; 
  color: #333333;
}

section {
  max-width: 500px;
  margin: 0 auto 50px auto;
  display: block;
}

section ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}*/

h3 {
  color: #333333;
  display: block;
  font-family: courier;
  font-weight: bold;
  margin: 35px 0 15px;
}

.blogPost {
  font-family: courier;
  text-decoration: none;
  color: #333333;
}

.blogPost:visited {
  color: #333333;
 }

.blogPost:hover{
  color: #f14e32;
}

</style>

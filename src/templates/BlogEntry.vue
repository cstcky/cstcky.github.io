<template>
  <HeaderAndFooter>
    <main>
      <article>
        <div class="center">
					<h1>{{$page.post.title}}</h1>
					<time class="monthDate">{{formatMonth()}} {{$page.post.date}}, {{$page.post.year}}</time>
        </div>
        <div class="divider"></div>
        <div class="content" v-html="$page.post.content"></div>
      </article>
    </main>
  </HeaderAndFooter>
</template>

<page-query>
query BlogEntry($id: ID!) {
  post: blogEntry(id: $id) {
    title
    content
    month
    date 
    year
    content  
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Post" 
  },
  methods: {
    formatMonth(){
      let pageMonth = this.$page.post.month
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
      return months[pageMonth - 1]
    }
  }
}
</script>

<style>
body {
  font-family: courier;
}

article {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.center {
  margin: 0 auto;
}

h1 {
  color: #333333;
  font-weight: bold;
  margin-bottom: 10px;
}

.monthDate {
  font-family: courier;
  color: #555;
  font-size: 14px;
}

.divider {
  height: 1px;
  background: linear-gradient(to right, rgba(255,255,255,0), #ccc, rgba(255,255,255,0));
  margin: 2em 0;
}

.content p {
  text-align: left;
  font-size: 14px;
}

</style>

<template>
  <div>
    <li class="post" v-for="post in filterByYear()">
      <div>
        <g-link class="blogPostLink" :to="post.path">
          <span>
            {{post.title}}
          </span>
        </g-link>
        <span class="monthDate">
          {{formatMonth(post.month)}} {{post.date}}
        </span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  methods: {
    //convert month to abbreviation from number 
    formatMonth(month){
      let months = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"] 
      return months[month - 1]
    },
    //filter posts via year passed as prop
    filterByYear(){
      let postArr = []
      for(var i = 0; i < this.posts.length; i++){
        if(this.posts[i].node.year === this.year){
          postArr.push(this.posts[i].node);
        }
      }
      return postArr
    }
  },
  props: ["year", "posts"]
}
</script>

<style>
.post {
  line-height: 35px;
}

.blogPostLink {
  text-decoration: none;
  color: #333333;
}

.blogPostLink:hover {
  color: #f14e32; 
}

span.monthDate {
  color: #757575;
  letter-spacing: 1px;
  float: right;
}
</style>

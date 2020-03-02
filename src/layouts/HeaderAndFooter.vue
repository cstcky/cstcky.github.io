<template>
  <div class="layout"> 
    <div class="header">
      <div class="border">
        <g-link :to="getPath()">
          <img src="../assets/OldFashionedBike.jpg">
        </g-link>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default{
  methods:{
    //'dynamic' nav for header image
    getPath(){
      let currentPath = this.$route
      if(currentPath.path === '/'){
        return '/about' 
      }else{
        return '/' 
      }
    }
  }
}
</script>

<style>
.header {
  text-align: center;
}

.border {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;  
  height: 90px;
  width: 90px;
  background-color: lightgrey;
}

div .border:hover {
  background-color: #f14e32; 
}

.header img {
  margin-top: 5px;
  border-radius: 90px;
}
</style>

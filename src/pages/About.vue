<template>
  <HeaderAndFooter>
    <div class="aboutContent">
      <h1>About</h1>
      <div class="divider"></div>
      <p>Greetings</p>
      <p>I'm Charles, I'm an aspiring software developer. I enjoy cooking, music, biking, and coding. My resume can be found <a href="/resume">here</a>.</p> 
    </div>
  </HeaderAndFooter>
</template>

<page-query>
</page-query>

<script>
export default {
  metaInfo: {
    title: "About"
  }
}
</script>

<style>
body {
  font-size: 14px;
  line-height: 20px;
  font-weight: normal;
  font-style: normal;
  color: #333333;
  font-family: consolas, monaco, courier, "courier new", fixed-width;
}

.aboutContent {
  max-width: 800px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

a {
  color: #333333;
}

a:hover {
  color: #f14e32; 
}

h1 {
  text-align: center;
  font-size: 20px;
}

.divider {
  background: linear-gradient(to right,rgba(255, 255, 255, 0), #ccc, rgba(255,255,255,0));
  height: 1px;
  margin: 2em 0;
}
</style>

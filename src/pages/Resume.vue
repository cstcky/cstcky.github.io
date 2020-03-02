<template>
  <HeaderAndFooter>
    <div class='contact'>                     
      <p>Charles Thomas Stocky</p>
      <p>108 N Utica</p>
      <p>Lubbock, TX 79416</p>
      <p>5125966620</p>
      <p>cstcky@protonmail.com</p>
    </div>
    <div class='experience'>
    <h2>Javascript Projects</h2>
    <p class='date'>Aug 2016 – present</p>
      <h4><a href='https://github.com/devtools-html/debugger'><b>Debugger.html</b></a> - Firefox's debugger</h4>
      <ul> 
        <p>Debugged and fixed front-end bugs.</p> 
        <p>Improved UI/UX design.</p>
        <p>Gained familiarity with a large codebase on the fly.</p>
        <p>Deepened understanding of React component's lifecycle and state management.</p>
        <p>Introduced the use of functional programming as a method of sane data mutation and maintaining code readability.</p>
        <p>Added tools to JS utility-belt.</p>
      </ul>
      <h4><b><a href="https://github.com/cstcky/coupizza">COUPIZZA</a></b> - Pizza coupon finder that's filterable by zip code (no longer in development)</h4> 
      <ul>
        <p>Used external REST APIs (Facebook GraphAPI, TwitterAPI) as a source of data, parsed data using string manipulating-algorithms. Implemented CRUD operations using MongoDB.</p>
        <p>Setup an Nginx proxy server for added security, proxied requests to Node (Express) server.</p>
        <p>Implemented client-side React code for UI. Used React-router to maintain client-sidedness. Setup GET requests to API endpoint for relevant data.</p>
        <p>Increased development work-flow productivity/efficiency with the use of build-tools. Setup HMR/automated page-refresh using Webpack.</p>
        <p>Successfully setup virtual hosting environment using DigitalOcean's droplets. Implemented various automated shell operations.</p>
      </ul>
    </div>
    <div class='skills'>
      <h2>Skills</h2>
      <ul>
        <p>Programming - Experienced with Javascript/Python and object-oriented/functional code design, Node.js and asynchronous concepts, as well as imperative/declarative programming paradigms. Experienced in building user interfaces using HTML/CSS/CGI.</p>	
        <p>Platforms – Very familiar with Windows, MacOS, and Linux (Kali,
           Ubuntu, and Debian).</p>
        <p>Communication – Able to write and speak clearly, skilled at using clear and concise
          language to convey pertinent information to others.</p>
      </ul>
    </div>
    <div class='libraries'>
      <h2>Libraries/Frameworks</h2>
      <p>React</p> 
      <p>Vue</p>
      <p>Node.js runtime environment (Express, socket.io)</p>
      <p>Backbone</p>
      <p>Jquery</p>
      <p>Redux</p>
      <p>Jest, Selenium (as well as other automated testing libraries)</p>
    </div>
    <div class='tools'>
      <h2>Tools</h2>
      <p>Text editors - Sublime, Atom, VIM</p>
      <p>Git - Version control</p>
      <p>Chrome/React/Firefox/etc devtools</p>
      <p>Postman - API debugging</p>
      <p>Docker - Isolated environment/dependencies management</p>
      <p>Webpack - Code bundling/HMR</p>
      <p>Jest - Automated JS testing</p>
      <p>PM2 - Node process manager</p>
      <p>Webflow - CMS</p>
    </div>
  </HeaderAndFooter>
</template>

<style>
body {
  font-family: courier;
  font-size: 14px;
  padding-left: 20px;
}

h2 {
  font-weight: 200;
  text-decoration: underline;
}

ul {
  list-style: none;
}

.contact p {
  text-align: center;
  font-size: 20px;
}
</style>

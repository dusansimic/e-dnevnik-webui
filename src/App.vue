<template>
  <div id="app">
    <div id="wrapper">
      <nav class="navbar navbar-toggleable-md navbar-expand-lg navbar-dark bg-primary" id="navbar">
        <router-link class="navbar-brand" to="/">Elektronski dnevnik</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Home<!-- <span class="sr-only">(current)</span>--></router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/student/search">Student Search</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/addstudent">Add Student</router-link></li>
          </ul>
        </div>
      </nav></br>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
#wrapper {
  width: 700px;
  margin-left: calc((100% - 700px)/2);
}
#navbar {
  border-radius: 10px;
}
</style>

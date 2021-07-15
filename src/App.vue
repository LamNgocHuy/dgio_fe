<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body {
  margin: 0 !important;
  padding: 0 !important;
  font-size: 15px;
}

.btn-primary {
  background: #C80064 !important;
  color: #fff !important;
  border: none !important;
  font-size: 1.2rem !important;
  padding: 10px 20px !important;
}

.btn-draft {
  background: #D7DAE7 !important;
  color: #3f4254 !important;
  border: none !important;
  font-size: 1.2rem !important;
  padding: 10px 20px !important;
}

.btn-cancel {
  background: #7e8299 !important;
  color: #fff !important;
  border: none !important;
  font-size: 1.2rem !important;
  padding: 10px 20px !important;
}

.btn, .accordion-button {
  &:focus, &:active {
    box-shadow: none !important;
    // border-color: #C80064 !important;
  }
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}

.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
  --bs-gutter-x: 0px !important;
}

[data-tooltip] {
  position: relative;
  cursor: pointer;
}

[data-tooltip]::after {
  position: absolute;
  width: 100px;
  left: calc(50% - 50px);
  bottom: 125%;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  content: attr(data-tooltip);
  color: #fff;
  background: #333;
  padding: 8px;
  font-size: 0.9rem;
  font-weight: bold;
  visibility: hidden;
  opacity: 0;
  translate: translateY(10px);
  transition: opacity 0.3s, transform 0.2s;
}

[data-tooltip]:hover::after {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

textarea:focus,
.form-control,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
box-shadow: none !important;
outline: 0 none;
}

input:read-only {
    background: #fff !important;
}
</style>

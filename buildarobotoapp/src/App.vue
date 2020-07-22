<template>
<div id="main">
  This is the main page.
<a href="#/dashboard1">Go to Dashboard 1</a>
<router-view/>

</div>
</template>

<script>

import Dashboard1 from './components/Dashboard1.vue'

export default {
  name: 'App',
  components: {
    Dashboard1
  },

  data(){
    return {
      selectedContact:{}
    }
  },

  methods:{

     HandleContactSelected(contact){

             this.selectedContact = contact;
     
     }

  }
}
</script>

<style>
#mainComp{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

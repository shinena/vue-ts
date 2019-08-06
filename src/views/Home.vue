<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <MyTest msg="123456" add-feature="add" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import MyTest from '@/components/MyTest.vue'

@Component({
  components: {
    // HelloWorld,
    MyTest
  },
})
export default class Home extends Vue {}
</script>

<script setup>
import {  RouterView } from 'vue-router'
import {onMounted, onUpdated, ref, watch} from "vue";
import {useScroll} from './stores/scroll'
import {useCareer} from "./stores/career";
const carreer = useCareer()

const scroll = useScroll()
document.title = __env.app.title

window.addEventListener('scroll',()=>{
     scroll.scroll = window.scrollY
})


</script>

<template>
  <RouterView />
</template>

<style scoped>
*{
  margin: 0;
  font-family: "Poppins", "sans-serif";
  padding: 0;
  box-sizing: border-box;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}

</style>

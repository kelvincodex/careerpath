<template>
  <div class="w-full h-screen  border border-red-500">
    <nav-bar />
    <div  class="w-[70%] mx-auto  mt-20 ">
        <step-welcome v-if="false" />
        <step />
    </div>

  </div>
</template>
<script setup>
import NavBar from "../../components/home/NavBar.vue";
import StepWelcome from "../../components/page/StepWelcome.vue";
import Step from "../../components/page/Step.vue";

</script>
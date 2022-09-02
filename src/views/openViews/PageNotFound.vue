<template>
  <div>
    <section class="w-full h-screen flex justify-center items-center">
      <div class="text-center">
        <h1 class="font-[700] text-[30px] text-primary">Ooooops.......</h1>
        <p class="font-[400] text-[20px] text-dark-text">Page Not Found</p>
        <router-link :to="{name: ActionUtil.route.page.home}" class="text-blue-500 hover:text-primary">Click To Go Back To Home</router-link>
      </div>
    </section>
  </div>
</template>

<style>


</style>
<script setup>

import {ActionUtil} from "../../util/baseUtils/ActionUtil";


</script>
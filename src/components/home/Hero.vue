<template>
  <div  class="w-full  md:h-screen h-screen bg-gradient-to-r from-[#ffffff] to-[#ffffff] md:bg-white">
    <NavBar />
      <!-- Item 1 -->
        <div class="flex flex-col-reverse md:flex-row justify-between md:justify-end md:mt-20">

          <div class="w-100 md:w-1/2 md:ml-14 mt-24 text-gray-400 px-4 ">
            <h2 class="font-extrabold  text-4xl md:text-5xl leading-10 mb-4">Searching for Answers?</h2>
            <p class="text-xl leading-2 md:leading-10 md:text-3xl md:mt-7 md:mb-7 mb-2 text-gray-500">
              Are you confused on What to Study in the country?
              do you know what you have interest in.
              we guide you to figure our what you have interest in
              and would love to study in the university
            </p>
            <div class="flex  p-2 mt-4 md:justify-start ">
            <router-link :to="{name: ActionUtil.route.page.about}" class="bg-transparent hover:bg-pink-400 hover:text-white border border-red-500   p-2.5 text-xl rounded-2xl mr-5 md:mr-2">
              Learn More
            </router-link>
              <router-link :to="{name: ActionUtil.route.auth.register}" class="bg-pink-400 text-white hover:animate-pulse border border-red-500 p-2.5 text-xl rounded-2xl" v-if="!authStore.isLogin">Sign up</router-link>
              <router-link :to="{name: ActionUtil.route.page.step}" class="bg-pink-400 text-white hover:animate-pulse border border-red-500 p-2.5 text-xl rounded-2xl" v-if="authStore.isLogin">Get Started</router-link>

            </div>
          </div>
          <div class="w-1/2 mx-auto md:mt-14 hidden md:block">
<!--            <img src="../assets/38067-questioning.gif" class="w-3/4   mx-auto z-20" />-->
            <img src="../../assets/path.gif" class="w-100 scale-150 translate-x-2  mx-auto z-20" alt="...">
          </div>
        </div>
      </div>

</template>

<script setup>
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {useAuth} from "../../stores/auth";
import NavBar from "./NavBar.vue";
const authStore = useAuth();


</script>

<style scoped>

</style>
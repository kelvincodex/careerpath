<template>
  <div class="w-full   px-9 py-5">
    <div class="flex justify-between">
      <router-link to="/">
        <h2 class="text-pink-400 text-3xl font-bold">
          <font-awesome-icon :icon="['fas', 'location-dot']" class="mr-1" />CareerPath
        </h2>
      </router-link>
      <button v-if="hidden" class="block md:hidden text-2xl" @click="handleMenuOpen">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
      <button v-else class="block md:hidden text-2xl" @click="handleMenuClose">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </button>
      <div class="md:block hidden list-none text-sm">
        <ul class="flex sm">
          <li
            class=" mr-2 text-[18px] border-b-pink-600 hover:border-b-2  transition  ease-in-out delay-150 duration-300">
            <router-link :to="{ name: ActionUtil.route.page.home }">Home</router-link>
          </li>
          <li
            class=" mr-2 text-[18px] border-b-pink-600 hover:border-b-2  transition  ease-in-out delay-150 duration-300">
            <router-link :to="{ name: ActionUtil.route.page.about }">About</router-link>
          </li>
          <li
            class=" mr-2 text-[18px] border-b-pink-600 hover:border-b-2  transition  ease-in-out delay-150 duration-300">
            <router-link :to="{ name: ActionUtil.route.page.home }">Course</router-link>
          </li>
          <li
            class=" mr-2 text-[18px]  border-b-pink-600 hover:border-b-2  transition  ease-in-out delay-150 duration-300">
            <router-link :to="{ name: ActionUtil.route.page.home }">Contact</router-link>
          </li>
          <li
            class="text-[15px] ring-2 ring-pink-600 rounded-full px-3 py-[2px] hover:bg-pink-600 hover:text-white shadow-xl ml-9 "
            v-if="!authStore.isLogin">
            <router-link :to="{ name: ActionUtil.route.auth.login }">Sign in</router-link>
          </li>
          <li
            class="text-[15px] ring-2 ring-pink-600 rounded-full px-3 py-[2px] hover:bg-pink-600 hover:text-white shadow-xl ml-9 "
            v-if="authStore.isLogin">
            <router-link :to="{ name: ActionUtil.route.auth.register }" @click="authStore.logout">Logout</router-link>
          </li>
        </ul>
      </div>
      <div :class="{ show: show, hide: hidden }"
        class="block list-none text-sm absolute w-full right-0 top-[75px] bg-pink-200 z-50 py-7">
        <ul class="flex flex-col justify-center text-center w-full">
          <li class=" p-3 text-xl hover:cursor-pointer hover:bg-pink-400">
            <router-link :to="{ name: ActionUtil.route.page.home }" class="border p-3 ">Home</router-link>
          </li>
          <li class="p-3 text-xl hover:cursor-pointer hover:bg-pink-400">
            <router-link :to="{ name: ActionUtil.route.page.about }" class="border p-3 ">About</router-link>
          </li>
          <li class="p-3 text-xl hover:cursor-pointer hover:bg-pink-400">
            <router-link :to="{ name: ActionUtil.route.page.home }" class="border p-3 ">Course</router-link>
          </li>
          <li class="p-3 text-xl hover:cursor-pointer hover:bg-pink-400">
            <router-link :to="{ name: ActionUtil.route.page.home }" class="border p-3 ">Contact</router-link>
          </li>
          <li class="p-3 text-xl hover:cursor-pointer hover:bg-pink-400" v-if="!authStore.isLogin">
            <router-link :to="{ name: ActionUtil.route.auth.login }" class="border p-3 ">Sign in</router-link>
          </li>
          <li class="p-3 text-xl hover:cursor-pointer hover:bg-pink-400" v-if="authStore.isLogin">
            <router-link :to="{ name: ActionUtil.route.auth.login }" @click="authStore.logout">Logout</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ActionUtil } from "../../util/baseUtils/ActionUtil";
import { ref } from "vue";
import { useAuth } from "../../stores/auth";
import { sweetToast } from "../../util/mixin/sweet";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";



const show = ref(false)
const hidden = ref(true)

const authStore = useAuth();
console.log("is login: " + authStore.getIsLogin)
const handleMenuOpen = () => {
  show.value = true
  hidden.value = false
}
const handleMenuClose = () => {
  hidden.value = true
  show.value = false

}
</script>

<style scoped>
.show {
  display: block;
}

.hide {
  display: none;
}
</style>

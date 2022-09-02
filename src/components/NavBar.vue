<template>
  <section class="fixed     w-full md:h-[100px] transition- delay-150 duration-300  ease-in-out"
           :class="[scroll.scroll === 0 ? scrolls : 'bg-white !text-black']">
    <div class="flex  w-full items-center justify-around  sr-only md:not-sr-only" :class="md" >
      <div class="flex gap-1 p-5">
        <router-link :to="{name: ActionUtil.route.page.home }" class="flex">
        <font-awesome-icon :icon="['fas', 'location-dot']"
                           class="text-[#fe4066] leading-[32px] text-[24px] font-[600]"/>
        <h2 class="text-[22px] leading-[36px] font-[400]">Career Path</h2>
        </router-link>
      </div>
      <div class="p-5">
        <ul class="flex justify-between">
          <li class="mr-5 hover:text-[#fe4066] text-[16px] leading-[36px] font-[400]">
            <router-link :to="{name: ActionUtil.route.page.home }">Home</router-link>
          </li>
          <li class="mr-5 hover:text-[#fe4066] text-[16px] leading-[36px] font-[400]">
            <router-link :to="{name: ActionUtil.route.page.about }">About</router-link>
          </li>
          <li class="mr-5 hover:text-[#fe4066] text-[16px] leading-[36px] font-[400]">
            <router-link :to="{name: ActionUtil.route.page.courses }">Courses</router-link>
          </li>
        </ul>
      </div>
      <div class="p-5" v-if="!auth.isLogin">
        <router-link :to="{name: ActionUtil.route.auth.login}" class="mr-5 text-[16px] hover:text-[#fe4066] leading-[36px] font-[400]"  >Login
        </router-link>
        <router-link :to="{name: ActionUtil.route.auth.register }"
                     class="rounded-md p-3.5 leading-[32px] text-[16px] font-[400] drop-shadow-2xl  transition- delay-150 duration-300  ease-in-out"
                     :class="[scroll.scroll === 0 ? 'bg-gray-500 hover:bg-[#fe4066]': 'bg-[#fe4066] text-white']">Get
          Started
        </router-link>
      </div>
      <div class="p-5" v-else>
        <button class="mr-5 text-[16px] hover:text-[#fe4066] leading-[36px] font-[400]" @click="auth.logout" >Logout
        </button>
        <router-link :to="{name: ActionUtil.route.page.step }"
                     class="rounded-md p-3.5 leading-[32px] text-[16px] font-[400] drop-shadow-2xl  transition- delay-150 duration-300  ease-in-out"
                     :class="[scroll.scroll === 0 ? 'bg-gray-500 hover:bg-[#fe4066]': 'bg-[#fe4066] text-white']">Get
          Start
        </router-link>
      </div>
    </div>

    <div class="flex w-full justify-between items-center p-5 not-sr-only md:sr-only" v-if="show">
      <div class="">
        <router-link :to="{name: ActionUtil.route.page.home }" class="flex gap-2" >
        <font-awesome-icon :icon="['fas', 'location-dot']"
                           class="text-[#fe4066] leading-[32px] text-[18px] font-[600]"/>
        <h2 class="text-[22px] leading-[16px] font-[400]">Career Path</h2>
        </router-link>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'bars']"
                           class="hover:text-[#fe4066] hover:cursor-pointer leading-[32px] text-[29px] font-[600]" @click="show = false" />
      </div>
    </div>

    <div class="z-50 h-screen w-full h-screen bg-white not-sr-only md:sr-only" v-else >
      <div class="">
        <div class="flex justify-between items-center border-r shadow p-4">
          <div class="">
            <router-link :to="{name: ActionUtil.route.page.home }" class="flex gap-2 justify-center items-center" >
            <font-awesome-icon :icon="['fas', 'location-dot']"
                               class="text-[#fe4066] leading-[32px] text-[18px] font-[600]"/>
            <h2 class="text-[22px] leading-[16px] font-[400]">Career Path</h2>
            </router-link>
          </div>
          <div>
            <font-awesome-icon :icon="['fas', 'xmark']"
                               class="hover:text-[#fe4066] hover:cursor-pointer leading-[32px] text-[29px] font-[600]" @click="show = true" />
          </div>
        </div>
        <ul class=" w-full mb-5 text-center">
         <router-link :to="{name: ActionUtil.route.page.home }"> <li class="hover:bg-[#fe4066] hover:text-white p-4">Home</li></router-link>
         <router-link :to="{name: ActionUtil.route.page.about }"> <li class="hover:bg-[#fe4066] hover:text-white p-4">About</li></router-link>
         <router-link :to="{name: ActionUtil.route.page.courses }"> <li class="hover:bg-[#fe4066] hover:text-white p-4">courses</li></router-link>
        </ul>
        <ul class="w-full text-center" v-if="!auth.isLogin">
          <router-link :to="{name: ActionUtil.route.auth.login }"><li class="p-4 hover:text-[#fe4066]">Login</li></router-link>
          <router-link :to="{name: ActionUtil.route.auth.register }"><li class="p-4 hover:text-[#fe4066]">Get Started</li></router-link>
        </ul>
        <ul class="w-full text-center" v-else>
          <li class="p-4 hover:text-[#fe4066] hover:cursor-pointer" @click="auth.logout">Logout</li>
          <router-link :to="{name: ActionUtil.route.page.step }"><li class="p-4 hover:text-[#fe4066]">Get Started</li></router-link>
        </ul>
      </div>
    </div>
  </section>

</template>

<script setup>
import {useScroll} from "../stores/scroll";
import {ActionUtil} from "../util/baseUtils/ActionUtil";
import {useAuth} from "../stores/auth";
import {ref} from "vue";
const scroll = useScroll()
const auth = useAuth()
let show = ref(true)

defineProps({
  scrolls: {
    type: String,
    default: 'text-gray-400'
  },
  md: {
    type: String,
    default: 'text-gray-400'
  },
})
</script>
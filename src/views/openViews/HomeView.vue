<template>
  <div class="w-full h-full p-0 m-0">
    <nav-bar  />
    <section
        class="w-full p-50  flex flex-col  items-center justify-center bg-mobile-hero-image  bg-cover  h-screen  text-white">

      <div class=" mb-100 p-5 mx-w-[700px] pl-5 pr-5 mx-auto text-center">
        <h1 class="leading-[50px] md:leading-[63px]  text-[26px] md:text-[52px] font-[700] tracking-wide">Are you confused on What to Study in the country?</h1>
        <p class="leading-[27px] text-[20px] font-[400] ">we guide you to figure our what you have interest in
          and would love to study in the university</p>
      </div>
      <div class="mt-10">
        <router-link :to="{name: ActionUtil.route.auth.register}" class="leading-[56px] text-[16px] font-[400] rounded-md bg-pink-400 p-5 hover:animate-pulse" v-if="!auth.isLogin">Get Started
        </router-link>
        <router-link :to="{name: ActionUtil.route.page.step}" class="leading-[56px] text-[16px] font-[400] rounded-md bg-pink-400 p-5 hover:animate-pulse" v-else>Get Started
        </router-link>
      </div>

    </section>

    <section class="p-10 mt-10 bg-white w-full mb-5">
      <div class="flex items-center mx-auto md:flex-row flex-col justify-center gap-10 w-[90%]">
        <div class="md:min-w-[50%] md:min-h-[500px] w-[350px] ">
          <img src="../../assets/about2.jpg" class="w-full h-full"/>
        </div>
        <div class=" md:min-w-[50%] md:min-h-[500px] w-[350px]">

          <h2 class="text-[#000000] leading-[64px] text-[42px] font-[600] text-center md:text-start">About Us</h2>
          <p class="text-[#333333] leading-[32px] font-[400] text-[17]">
            Skillachi Limited (RC 1369564) is a consulting and training firm specialized in public health system
            strengthening and career improvement. Our mission is to provide targeted improvement measures based on
            systems and individual assessment outcomes through training, coaching and mentorship packages that impact
            skills which are compatible with 21st century work place and capable of delivering sustainable improvement
            in the ever expanding public health supply chain in Africa.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white px-1 mb-10 h-auto">
      <h2 class="text-[52px] leading-[68px] font-[700] text[#0b1e33] text-center">Meet Our Team</h2>
      <div class="flex overflow-x-scroll gap-5 mt-10">
          <div class=" flex-col justify-center  mb-5">
            <div class=" rounded w-[400px] h-[400px] border-[40px]">
              <img src="../../assets/team.jpeg"
                   class="object-cover  hover:cursor-pointer"/>
            </div>
            <div class="text-center mt-2">
              <h2 class="font-[700] text-[16px] leading-[16px] text-[#fe4066]">John Doe</h2>
              <p class="text-[#5c5758] font-[400] text-[14px]">Designer</p>
            </div>
          </div>
        <div class=" flex-col justify-center  mb-5">
          <div class=" rounded w-[400px] h-[400px] border-[40px]">
            <img src="../../assets/team.jpeg"
                 class="object-cover  hover:cursor-pointer"/>
          </div>
          <div class="text-center mt-2">
            <h2 class="font-[700] text-[16px] leading-[16px] text-[#fe4066]">John Doe</h2>
            <p class="text-[#5c5758] font-[400] text-[14px]">Designer</p>
          </div>
        </div>
        <div class=" flex-col justify-center  mb-5">
          <div class=" rounded w-[400px] h-[400px] border-[40px]">
            <img src="../../assets/team.jpeg"
                 class="object-cover  hover:cursor-pointer"/>
          </div>
          <div class="text-center mt-2">
            <h2 class="font-[700] text-[16px] leading-[16px] text-[#fe4066]">John Doe</h2>
            <p class="text-[#5c5758] font-[400] text-[14px]">Designer</p>
          </div>
        </div>
        <div class=" flex-col justify-center  mb-5">
          <div class=" rounded w-[400px] h-[400px] border-[40px]">
            <img src="../../assets/team.jpeg"
                 class="object-cover  hover:cursor-pointer"/>
          </div>
          <div class="text-center mt-2">
            <h2 class="font-[700] text-[16px] leading-[16px] text-[#fe4066]">John Doe</h2>
            <p class="text-[#5c5758] font-[400] text-[14px]">Designer</p>
          </div>
        </div>
        <div class=" flex-col justify-center  mb-5">
          <div class=" rounded w-[400px] h-[400px] border-[40px]">
            <img src="../../assets/team.jpeg"
                 class="object-cover  hover:cursor-pointer"/>
          </div>
          <div class="text-center mt-2">
            <h2 class="font-[700] text-[16px] leading-[16px] text-[#fe4066]">John Doe</h2>
            <p class="text-[#5c5758] font-[400] text-[14px]">Designer</p>
          </div>
        </div>
      </div>
    </section>
    <testimony />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "../../components/NavBar.vue";
import Testimony from "../../components/Testimony.vue";
import Footer from "../../components/Footer.vue"
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {useAuth} from "../../stores/auth";
const auth = useAuth()
</script>

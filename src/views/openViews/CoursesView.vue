<template>
  <div>
    <NavBar scrolls="text-gray-700" />
    <section class="w-full flex justify-center items-center text-white h-[400px] bg-mobile-hero-image  bg-cover">
      <h1 class="font-[600] text-[24px] tracking-widest">Courses</h1>
    </section>


    <section class=" mt-14 mb-10">
      <div class="w-full p-10 text-left ">
        <h2 class="text-[32px] font-[400]">CAREER ASSESSMENT</h2>
        <h2 class="text-[14px] font-[400] leading-2">The exercise below will help align
          interests to different groups of occupations/careers. A set of options, grouped in twos, are below. Choose an
          option that you would prefer to do from each set, by ticking the alphabet close to it. Even if you prefer both of
          them or strongly dislike them, you would need to choose just one. In other words, if you MUST choose
          either, which one would it be?
        </h2>
      </div>
      <div class="w-full md:w-1/2  pl-10">
        <div class="mb-10" v-for="(interest, i) in career.AllInterest.response_msg" :key="i">
          <h1 class="font-[700] text-[14px] mb-2">{{ interest.name}}</h1>
          <ul class="text-[12px]" v-for="(course, i) in interest.courses" :key="i">
            <li>{{ course.course }}</li>
          </ul>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script setup>
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import {onMounted} from "vue";
import {useCareer} from "../../stores/career";

const career = useCareer()
onMounted(()=>{
  career.getAllInterest()
  console.log(career.AllInterest)
})
</script>
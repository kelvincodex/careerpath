<template>
  <div>
    <NavBar scrolls="text-gray-400" />
    <section class="w-full flex justify-center items-center text-white h-[400px] bg-mobile-hero-image  bg-cover">
      <h1 class="font-[600] text-[24px] tracking-widest">About Us</h1>
    </section>

    <section class="flex flex-col w-full  mt-14 mb-16 justify-around items-start">
      <div class="flex md:flex-row flex-col justify-center gap-10 w-full p-10">
        <div class="w-full">
          <img src="../../assets/about1.jpg"  />
        </div>
        <div class="w-full">
          <h1 class="font-[400]  text-[32px] text-primary">About Us</h1>
          <p class="leading-[44px] text-[14px] text-dark-text">
            Skillachi Limited (RC 1369564) is a consulting and training firm specialized in public health system
            strengthening and career improvement. Our mission is to provide targeted improvement measures based on systems
            and individual assessment outcomes through training, coaching and mentorship packages that impact skills which
            are compatible with 21st century work place and capable of delivering sustainable improvement in the ever
            expanding public health supply chain in Africa.
          </p>
        </div>
      </div>
      <div class="flex justify-between md:flex-row flex-col items-center gap-5 w-full p-10">
        <div class="w-full">
          <h2 class="leading-[24px] text-[18px] font-[700] p-4">We provide solutions in 3 basic areas:</h2>
          <h3 class="leading-[24px] text-[16px] font-[500] p-2">Assessment of Supply Chains and Implementation of Recommendations</h3>
          <ul class="leading-[44px] text-[14px] text-dark-text list-disc">
            <li>Assessment of supply chains </li>
            <li>Implementation of solutions to enhance the strengths and eliminate the weaknesses</li>
            <li>Complete redesign of supply of supply chains</li>
          </ul>

          <h3 class="leading-[24px] text-[16px] font-[500] p-2">Education and professional development:</h3>
          <ul class="leading-[44px] text-[14px] text-dark-text list-disc">
            <li>Hard skill: Procurement planning, Inventory management, warehousing, transportation</li>
            <li>Soft skills: Self-management, leadership & motivation, teamwork, change management,
              Interpersonal relationship, communication skills and more
            </li>
          </ul>
      </div>
        <div class="w-full">
          <img src="../../assets/about2.jpg">
        </div>
      </div>
      <div class="flex justify-around md:flex-row flex-col gap-10 w-full p-10">
        <div class="p-3 w-full">
          <img src="../../assets/about3.jpg" />
        </div>
        <div class="w-full">
          <h3 class="leading-[24px] text-[16px] font-[500] p-2">Expert pool</h3>
          <ul class="leading-[44px] text-[14px] text-dark-text list-disc">
            <li>We have in our employment pharmacists with long years of hospital experience, with MIT certification in supply chain management among other international certifications. </li>
            <li>We also have USAID/DELIVER/SCMS/JSI certified master trainers and training partners in our expert pool. </li>
            <li>In our pool, we have HELP Logistics (Kuehne Foundation) training consultants</li>
            <li>We have experts who are training partners with GAVI in our employment with expertise in GAVI STEP training methods who have trained in Nigeria and in countries other than Nigeria</li>
            <li>Also, we have as training partners, supply chain lecturers from higher institutions. </li>
            <li>We have in our employ experts who consult for various public health organisations including Public sector health alliance of Nigeria.   </li>
            <li>Over all, we have over 15 years of experience in system strengthening and career development.</li>
            <li>We have expertise in curriculum designing in our organization.</li>
          </ul>
        </div>
      </div>

    </section>

    <Footer />
  </div>
</template>

<style>


</style>
<script setup>

import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
</script>
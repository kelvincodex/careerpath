<template>
  <div>
    <NavBar scrolls="text-gray-700" />
    <section class="w-full flex justify-center items-center text-white h-[400px] bg-mobile-hero-image  bg-cover">
      <h1 class="font-[600] text-[24px] tracking-widest">Contact Us</h1>
    </section>


    <section class=" mt-14 mb-10">
      <div class="w-full text-center">
        <h2 class="text-[32px] font-[400]">Contact Us</h2>
      </div>
      <div class="w-full md:w-1/2 mx-auto p-4">
        <form class="w-full flex flex-col justify-center items-center ">
            <input type="text" placeholder="Name*" class="form-input mb-5 w-full " />
            <input type="email" placeholder="Email*" class="form-input mb-5 w-full" />
            <textarea class="form-textarea w-full h-[200px]" placeholder="message*" ></textarea>
          <button type="submit" class="p-2 bg-primary rounded mt-2">Send</button>
        </form>
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
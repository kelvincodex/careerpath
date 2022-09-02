<template>

    <section class="p-10 flex flex-col justify-between gap-10">
      <div class="">
        <h2 class="text-[32px] font-[600] leading-10">Welcome, {{ auth.user.first_name }} {{ auth.user.last_name }}</h2>
      </div>
      <div class="">
        <p class="text-[15px] font-[400] leading-10">
          Career satisfaction comes from giving serious thought to what interests you.
        </p>
      </div>
      <div class="">
        <button @click="route" class="p-3 bg-primary text-white rounded">Continue</button>

      </div>
    </section>

</template>
<script setup>
import {useCareer} from "../../stores/career";
import {useAuth} from "../../stores/auth";
const career = useCareer()
const auth = useAuth()
const route = ()=>{
  career.steps.first = false
  career.steps.second = true
  location.reload()
}
</script>
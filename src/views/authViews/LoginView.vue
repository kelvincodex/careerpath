<template>
  <div class="w-full h-screen">
    <nav-bar />
    <div class="md:w-[70%] mx-auto  mt-20 ">
      <div class=" bg-white  shadow-xl flex justify-center md:justify-end">
        <div class="self-center hidden md:block">
          <img src="../../assets/login.gif" class="w-3/4" />
        </div>
        <div>
          <h2 class="text-2xl font-bold text-center mt-10  mb-10">Login</h2>

          <form class="p-9" @submit.prevent="authStore.login(LoginRequest.request)">
            <div class="mb-5 flex justify-between" >
              <label class="font-bold text-sm self-center mr-2">Email Address:</label>
              <input type="email" class="form-input" v-model="LoginRequest.request.email">
            </div>
            <div class="mb-5 flex justify-between " >
              <label class="font-bold text-sm self-center">Password:</label>
              <input type="password" class="form-input" v-model="LoginRequest.request.password">
            </div>
            <div class="w-full flex justify-center">
              <button type="submit" class="bg-pink-600 p-2 px-4 text-white rounded">Submit</button>
            </div>
          </form>
          <p class="text-center mb-2">Don't have an account? <router-link :to="{name:ActionUtil.route.auth.register }" class="text-blue-500">Sign up</router-link></p>
        </div>
      </div>


    </div>
  </div>
</template>
<script setup>
import NavBar from "../../components/home/NavBar.vue";
import {ActionUtil} from '../../util/baseUtils/ActionUtil'
import {useAuth} from "../../stores/auth";
import {LoginRequest} from "../../model/request/LoginRequest"
const authStore = useAuth()

</script>
<template>
  <div class="m-0 w-full h-[100vh] bg-white">
    <div class="h-full flex flex-col justify-center items-center bg-black bg-opacity-70">
      <div class="mb-5 mt-20">
        <h2 class="text-white  font-[700]   text-[32px] md:text-[24px]">Register</h2>
      </div>
      <div class="bg-opacity-70 bg-white p-5 md:p-11 w-[90%] md:w-1/3 rounded drop-shadow mb-20 ">
        <form @submit.prevent="handleRegister" class="flex flex-col">
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px] font-[400]">First Name</label>
            <input type="text" class="form-input w-full "  v-model="RegisterRequest.request.first_name" @focus="error.firstname = false" :class="[error.firstname ? 'border border-primary' : '']" />
            <span v-if="error.firstname" class="text-primary text-[16px]">required!</span>
          </div>
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px] font-[400]">Last Name</label>
            <input type="text" class="form-input w-full" v-model="RegisterRequest.request.last_name"  @focus="error.lastname = false" :class="[error.lastname ? 'border border-primary' : '']" />
            <span v-if="error.lastname" class="text-primary text-[16px]">required!</span>
          </div>
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px]  font-[400]">Email Address</label>
            <input type="email" class="form-input w-full" v-model="RegisterRequest.request.email"  @focus="error.email = false" :class="[error.email ? 'border border-primary' : '']" />
            <span v-if="error.email" class="text-primary text-[16px]">required!</span>
          </div>
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px]  font-[400]">Password</label>
            <input type="password" class="form-input w-full" v-model="RegisterRequest.request.password"  @focus="error.password = false" :class="[error.password ? 'border border-primary' : '']" />
            <span v-if="error.password" class="text-primary text-[16px]" >required!</span>
          </div>
          <div class="mb-4">
            <label class="text-[14px] md:text-[18px] font-[400]">Retype-Password</label>
            <input type="password" class="form-input w-full" v-model="error.passwordRR"  @focus="error.rePassword = false" :class="[error.rePassword ? 'border border-primary' : '']" />
            <span v-if="error.rePassword" class="text-primary text-[16px]">password mismatch!</span>
          </div>
          <div class=" self-center p-3">
              <button v-if="!auth.isLoading" type="submit" class="bg-primary p-2 rounded">Submit</button>
             <Loader v-else />
          </div>
          <p>have an account? <router-link :to="{name: ActionUtil.route.auth.login}" class="hover:text-primary text-blue-700">sign in</router-link></p>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import Loader from "../../components/reuse/Loader.vue";
import {ActionUtil} from "../../util/baseUtils/ActionUtil";
import {reactive, ref} from "vue";
import {ErrorsService} from "../../service/ErrorsService";
import {RegisterRequest} from "../../model/request/RegisterRequest";
import {useAuth} from "../../stores/auth";
import {getRandomInt} from "../../util/mixin/random";
import {sweetToast} from "../../util/mixin/sweet";
const error = reactive({
      firstname: false,
      lastname: false,
      email: false,
      password: false,
      rePassword: false,
     passwordRR: ''
})
const auth = useAuth()
const isLoading = ref(false)

const handleRegister = ()=>{
     const er = ErrorsService.register(RegisterRequest, error)

    if(error.passwordRR !== RegisterRequest.request.password){
      error.rePassword = true
      return 0
  }
    if (er){
      const username = RegisterRequest.request.email.split('@')
      RegisterRequest.request.username = username[0] + getRandomInt(1, 5000)
      auth.register(RegisterRequest.request)
    }else {
      sweetToast.fire({
        icon: "error",
        text: "Check Your Credential amd try again!!"
      })
    }


}
</script>
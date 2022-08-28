<template>
  <div  class="w-full md:h-72 h-auto  bg-gradient-to-tr from-pink-300 to-pink-400 p-9 mt-24">
      <div class="md:grid md:grid-cols-3 flex-col  content-center w-full place-items-center px-2">
        <div class="flex md:flex-row flex-col w-ful ">
          <div class="w-10 mr-2">
            <font-awesome-icon :icon="['fas', 'location-dot']" class="md:w-full  w-5  h-16 shadow-xl shadow-black animate-bounce outline-0 border-0" />
          </div>
          <div class="w-52 flex">
            <h2 class="font-extrabold md:text-2xl text-xl self-center">CareerPath</h2>
          </div>
        </div>

        <div class="flex-col   w-full ">
          <h5 class="text-xl font-bold text-center mb-3">Key Course</h5>
          <div class="flex justify-center">
            <ul class="text-xl ">
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
            </ul>
          </div>
        </div>

        <div class="flex-col   w-full ">
          <h5 class="text-xl font-bold text-center mb-3">Key Course</h5>
          <div class="flex justify-center">
            <ul class="text-xl ">
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
              <li class="mb-3 hover:list-disc">standard dummy</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>
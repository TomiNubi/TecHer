<template>
<div class="flex justify-center items-center">
  <div class="flex px-5 flex-col w-full md:w-3/4 justify-center items-center pt-10" id="app">
     <div class="flex justify-start ">
     <NLink to="/" class=" px-5 py-3  bg-indigo-500 text-white text-sm font-bold tracking-wide rounded-md">
                               &#60;  Back to homepage
    </NLink> 
     </div>
    <div class="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full mt-4 md:mt-8">
        <h1 class="font-bold text-5xl sm:text-4xl md:text-5xl text-center text-indigo-700 mb-5">
                    Links
                </h1>

                
                        <div v-for="(link, i) in links" :key="i" class="bg-green-300   m-5 p-2 rounded-lg  flex justify-center items-center mt-4">
                          <a :href="link.url" class="font-semibold text-center" target="_blank"> {{link.name}}</a>
                        </div>
                
    </div>

  </div>
</div>
</template>

<script>
export default {
  data(){
      return{
          links: [
              {name: "Implicit Associations Test", url:"https://implicit.harvard.edu/implicit/takeatest.html"},
              {name: "Code.org", url:"http://code.org/"},
              {name: "Black Girls Code", url:"https://girlswhocode.com/programs/code-at-home"},
              {name: "Girls in Tech", url:"https://www.instagram.com/girlsintech.global/"},
              {name: "Afro Girls in Tech", url:"https://www.afrotechgirls.org/blog"},
              {name: "Katherine Johnson", url:"https://youtu.be/nKxgieXQ82w"},
              {name: "RASHMA Sauja", url:"https://www.ted.com/talks/reshma_saujani_teach_girls_bravery_not_perfection/up-next"},
              {name: "Women in Tech", url:"https://youtu.be/8VZTtRX4HIk"},
              

          ]
      }
  }
}
</script>
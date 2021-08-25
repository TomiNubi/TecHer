<template>
   <div class="flex flex-wrap">
       <div class="flex justify-center w-full mb-4"><h2 class="font-extrabold text-3xl ">Well done!</h2></div>
    <div class="w-full bg-green-300 p-4 rounded-md">
        
        <div class="bg-green-300 p-4 rounded-md">
        <h2 class="text-green-900 font-bold">
            Just like a lot of girls drew men asked to think about successful scientists,
            
         we rarely think of women we considering successful computer scientists. 
         <br />
         <br/>
         
        </h2>
        <p> Here are some influential women in tech of the past and present:</p>

         </div>
         <div class= "align-middle">
             <div class="flex mb-0  list-none flex-wrap flex-col pt-3 pb-4 min-h-full align-middle items-center">
                    <div class="-mb-px mr-2 last:mr-0 flex-auto flex-wrap text-center cursor-pointer">
                         <iframe :src="videos[index]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="flex flex-row space-x-3 my-3">
                        <div class="-mb-px mr-2 flex last:mr-0 flex-auto text-center cursor-pointer">
                            <a class="text-lg w-full font-black px-5 py-3 shadow-lg rounded block leading-normal text-indigo-600 bg-white" v-on:click="prev()" >
                            &#60;
                            </a>
                        </div>
                 <div class="-mb-px mr-2 w-full flex last:mr-0 flex-auto text-center cursor-pointer">
                    <a class="text-lg font-black px-5 py-3 shadow-lg rounded block leading-normal text-indigo-600 bg-white" v-on:click="prev()" v-bind:class="{'text-indigo-600 bg-white': openTab !== 3, 'text-white bg-indigo-600': openTab === 3}">
                        &gt;
                    </a>
                 </div>

                    </div>
             </div>
           
         </div>

   <!-- Some Did you knows -->
    <hr class="m-3"/>
   <div class="flex flex-wrap">
    <div class="w-full">
        <h2 class="text-green-900 font-extrabold text-2xl text-center">
           Did you know?
         <br />
         <br/>
         
        </h2>
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-indigo-600 bg-white': openTab !== 1, 'text-white bg-indigo-600': openTab === 1}">
           Did you Know #1
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-indigo-600 bg-white': openTab !== 2, 'text-white bg-indigo-600': openTab === 2}">
            Did you know #2
          </a>
        </li>
      
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                 <h3 class="font-bold"> 
                      ... that unmotivated teachers can reduce the interest of girls in STEM?
                 </h3>
                 <br />
              <p>  
                
               So Technically it might not be Computer science that's boring, maybe just the way you were taught: Here are some links again:
                </p>
               
               <br />
               <div class= "flex flex-wrap flex-row justify-center items-center">

                   <a href = "http://code.org/" class="font-bold no-underline bg-green-900 rounded-full text-green-400 m-4 p-4" target="_blank"> Code.org </a>
                   <a href = "http://www.blackgirlscode.com/" class="font-bold no-underline bg-green-900 rounded-full text-green-400 m-4 p-4" target="_blank"> Black Girls Code </a>
                   <a href="https://girlswhocode.com/programs/code-at-home"  class="font-bold no-underline bg-green-900 rounded-full text-green-400 m-4 p-4" target="_blank"> Girls Who Code </a>

               </div>
              
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                 <h3 class="font-bold"> 
                       ... that 33% of girls in high school drop out of STEM courses because their friends don't take them? 
                 </h3>
             <p>

              If that sounds like you, check out a community:
                
                <br />
              </p>

              <div class= "flex flex-wrap flex-row justify-center items-center">
                   <a href = "https://www.instagram.com/girlsintech.global/" class="font-bold no-underline bg-green-900 rounded-full text-green-400 m-4 p-4" target="_blank"> Girls in Tech </a>
                   <a href = "https://www.afrotechgirls.org/blog" class="font-bold no-underline bg-green-900 rounded-full text-green-400 m-4 p-4" target="_blank"> Afro Girls in Tech </a>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  

   </div>
   </div>

</template>

<script>
export default {
data(){
    return{
        openTab: 1,
        index: 0,
        count: 3,
        videos: ["https://www.youtube.com/embed/nKxgieXQ82w",
                  "https://embed.ted.com/talks/reshma_saujani_teach_girls_bravery_not_perfection",
                  "https://www.youtube.com/embed/8VZTtRX4HIk"
        ]
    }
},
methods:{
    next(){
        if(this.index == this.count-1){
            this.index = 0
        }
        else{
            this.index++
        }
    },
    prev(){
        if(this.index == 0){
            this.index = this.count-1
        }
        else{
            this.index--
        }
    },
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
}
}
</script>
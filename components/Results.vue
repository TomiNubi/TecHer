<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-indigo-600 bg-white': openTab !== 1, 'text-white bg-indigo-600': openTab === 1}">
            Potential/ Interest
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-indigo-600 bg-white': openTab !== 2, 'text-white bg-indigo-600': openTab === 2}">
            Misconception
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-indigo-600 bg-white': openTab !== 3, 'text-white bg-indigo-600': openTab === 3}">
            Male-Science Association
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <h3 class="font-bold"> This score estimates how much your characteristics and interests fit with Computer Science </h3>
              <p>  
                <br />
               You may be interested in exploring opportunities and events. Find out more in Stage 2.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <h3 class="font-bold">  This score estimates how many misconceptions you may have about computer science. 
            </h3>
             <p>
                  <br />
               Here are some general facts :
                <br />
                <ul class="list-disc mx-6 my-3 space-y-3">
                    <li> 
                        <span class="font-semibold text-purple-400">Computer Science is more than coding. </span>It includes: cybersecurity, data science, artificial intelligence, game design and many more.</li>
                    <li><span class="font-semibold text-purple-400">Girls may become more demotivated in STEM subjects than boys. </span> Reasons may include: teaching methods in school and low participation from their friends.</li>
                    <li><span class="font-semibold text-purple-400">Computer Science is devoted to solving problems. </span> It also aims to make an influence on a global scale.</li>
                </ul>
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
               <h3 class="font-bold">  This score estimates the extent to which you associate males with science
            </h3>
            <br />
                 <p>

                This quiz tested 'explicit bias', but to discover more unconscious biases, try out this <a target="_blank" href="https://implicit.harvard.edu/implicit/takeatest.html" class=" underline text-purple-400"> Harvard Implicit Associations Test</a>. 
                <br /> <br/> Select the 'Gender-Science' option to take the test!
                
                <br />
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indigo-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
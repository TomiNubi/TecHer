<template>
    <div class="flex w-full justify-center  pt-10 items-center" id="app">
        <div class="w-full" :class="index < count? 'max-w-xl' : 'max-w-3xl'">
            <h1 v-if="index < count" class="font-bold text-4xl sm:text-5xl text-center text-indigo-700">
            Stage 2
        </h1>

        <h1 v-if="index >= count" class="font-bold text-4xl sm:text-5xl text-center text-indigo-700">
            Stage 2 Summary
        </h1>

        <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
            <div v-if="loading" class="flex justify-center items-center"> 
                    <h1 class="font-normal text-xl">
                        Loading..
                    </h1>
            </div>
                
            <div v-else>
                <div v-if="started== false">
                            <Welcome stage="2" v-on:start="start()" />
                    </div>
                <div v-else>
                    <div v-if="index < count">
                        <p class="text-2xl font-bold">
                            {{ questions[index]['question'] }}
                        </p>
                        <label
                            :key="key"
                            class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
                            v-for="answer,key in questions[index]['answers']"
                            :class="selectedAnswer == '' ? 'hover:bg-gray-100 cursor-pointer':key == questions[index]['correctAnswer']? 'bg-green-200': 'bg-red-200' "
                        >
                            <input
                                type="radio"
                                :id="key"
                                class="hidden"
                                :value="key"
                                @change="answered($event)"
                                v-model="selectedAnswer"
                                :disabled="selectedAnswer != ''"
                            />
                            {{ answer }}
                        </label>

                         <div  v-show="selectedAnswer != '' && index < count-1" class=" min-w-0 text-blue-900 font-semibold break-words w-full mt-6 shadow-md rounded border-2 border-indigo-900">
                                <div class="px-4 py-5 flex-auto">
                                    <div class="tab-content tab-space">
                                        
                                            {{questions[index]['explanation']['text']}}
                                            <br />
                                            <br />
                                            <a v-if="questions[index]['explanation']['link']!== ''" :href="questions[index]['explanation']['link']" class="font-bold underline text-green-400" target="_blank">READ MORE HERE</a>
                                    </div>
                                </div>
                         </div>
                         <!-- Progress bar -->
                         <div class="pt-1 m-4">
                            <div class="h-2 mb-4 text-xs flex rounded bg-green-200">
                                <div :style="{width: this.progress}"  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded bg-green-500"></div>
                            </div>
                        </div>
                        <!-- Next / Finish buttons -->
                        <div class="mt-6 flow-root">
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                v-show="selectedAnswer != '' && index < count-1"
                                @click="nextQuestion"
                            >
                                Next &gt;
                            </button>
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                v-show="selectedAnswer != '' && index == count-1"
                                @click="showResults"
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        
                        
                        <div> 
                            <Summary2/>
                        </div>
                        <hr class="m-3"/>

                          <div class="flex justify-center">
                            <NLink to="/stage-3/" class=" px-5 py-3  bg-green-700 text-white text-sm font-bold tracking-wide rounded-md">
                                    Move on the last Stage &gt;
                                </NLink>
                          </div>
                    </div>
                </div>
            </div>
        </div>
                
            </div>
        </div>
</template>


<script>
import questionText from '~/static/question2.txt'

export default {
       
    data() {
            return {
                index: 0,
                selectedAnswer: '',
                correctAnswer: 0,
                wrongAnswer: 0,
                count: 0,
                loading: true,
                started: false,
                progress: '0%'
            }
        },

    methods:{
        answered(e) {
            this.selectedAnswer = e.target.value
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++
        },
        start(){
            this.started = true
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
            this.progress = Math.round((this.index+1)/this.count *100).toString() + "%"
        },
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        },

        loadQuestions(){
      
            var questionGroups = questionText.split("#")    
            var questions = []

            //the array starts from i=1 since the first element is blank
            //for each question
            
            console.log(questionGroups.length)
        
            for(var i= 1; i < questionGroups.length; i++){

            
                var questionGroupObject = {}
                var answers = questionGroups[i].trim().split('>')
                
                questionGroupObject['question'] = answers[0]
                //questionGroupObject[answers[0]] = {}
                questionGroupObject['answers'] = {}

                //for each answer
            
                for (var j =1; j<answers.length; j++){
                
                //questionGroupObject[answers[0]][answers[j]]  = []
                //var answersObject ={}
                //var keywordsLists = "N/A
                var trimmedSubkeys = answers[j].trim().split('*')
                var key = trimmedSubkeys[0].trim()
                

                if(key!== "correctAnswer" && key!=="explanation"){
                    var answer =trimmedSubkeys[1].trim()
                    questionGroupObject['answers'][key] = answer
                }

                else if (key == "explanation") {
                    var text = trimmedSubkeys[1].trim()
                    var link = ''
                    if(trimmedSubkeys.length> 2){
                         var link = trimmedSubkeys[2].trim()
                    } 
                    questionGroupObject[key] = {}
                    questionGroupObject[key]['text'] = text
                    questionGroupObject[key]['link'] = link
                }
                else{
                    var answer = trimmedSubkeys[1].trim()
                    questionGroupObject[key] = answer
                }
                //questionGroupObject[answers[0]][answers[j]] = keywords
                }
                
            
                questions.push(questionGroupObject)
                
                
            } 
            console.log(questions)
            this.questions = JSON.parse(JSON.stringify(questions)) 
            this.count = this.questions.length
            this.loading = false
        }   
    },

    mounted(){
        this.loadQuestions()
    }
}

</script>
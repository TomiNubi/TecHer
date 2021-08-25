<template>
  
  <div class="flex w-full justify-center items-center pt-10" id="app">
    
            <div class="w-full" :class="index < count? 'max-w-xl' : 'max-w-3xl'">
                <h1 v-if="index < count" class="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-indigo-700">
                    Stage 3
                </h1>

                <h1 v-if="index >= count" class="font-bold text-3xl sm:text-4xl md:text-5xl  text-center text-indigo-700">
                    Stage 3 Summary
                </h1>

                <div class="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full mt-4 md:mt-8">

                  <div v-if="loading">
                    <h1 class="font-normal text-xl">
                        Loading..
                    </h1>
                  </div>
                <div v-else>

                    <div v-if="started== false">
                            <Welcome stage="3" v-on:start="start()" />
                    </div>
                <div v-else>
                  <div v-if="index < count">
                   
                        <p class="text-2xl font-bold">
                            {{ questions[index]['question'] }}
                        </p>
                        <label
                            :key="i"
                            class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
                            v-for="(answer,i) in questions[index]['answers']"
                            :class="selectedAnswer == '' ? 'hover:bg-gray-100 cursor-pointer': selectedAnswer== i? 'bg-blue-300 text-white'  : '' "
                        >
                            <input
                                type="radio"
                                :id="i"
                                class="hidden"
                                @change="answered($event)"
                                :value="i"
                                v-model="selectedAnswer"
                            />
                          {{answer}}
                        </label>

                        <!-- Progress bar -->
                     <div class="pt-1 m-4">
                            <div class="h-2 mb-4 text-xs flex rounded bg-green-200">
                                <div :style="{width: this.progress}"  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded bg-green-500"></div>
                            </div>
                        </div>
                        
                        <div class="mt-6 flow-root">
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                v-if="selectedAnswer != '' && index < count-1"
                                @click="nextQuestion()"
                            >
                                Next &gt;
                            </button>
                            
                            <button
                                class="float-right px-5 py-2 bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full"
                                v-show="selectedAnswer != '' && index == count-1"
                                @click="showResults()"
                            >
                                Finish
                            </button>
                        </div>
                    </div>
                    <div v-else>
                        
        
                        <div class="bg-green-300 p-4 my-4 rounded-md flex flex-wrap justify-center">
                           <h3 class="font-bold text-xl">This is the end. Thanks for taking part!</h3>
                            <p>

                                <br/>
                                <br/>
                                Like we said, there are no scores for this stage, we just wanted to know your final thoughts :)

                                <br/>
                                <br/>

                                You can access all the links shown in this quiz <NLink to="/links/" class="font-bold underline text-indigo-700">here</NLink>

                                <br/>
                                <br/>

                                If you know any friend that would benfit from this quiz, do share the link with them.

                                
                            </p>
                              <h3 class="font-bold text-xl">Goodbye!</h3>


                        </div>
                    
                             
                            
                            <div class="flex justify-center">
                          
                            <NLink to="/" class=" px-5 py-3  bg-indigo-500 text-white text-sm font-bold tracking-wide rounded-md">
                                 Back to homepage
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
import questionText from '~/static/question3.txt'

export default {
  data(){
    return{
  
      questions : [],
      loading: true,
      started: false,
      selectedAnswer : '',
      count: 0,
      index: 0,  
      answers: [],
      progress: "0%"
    
    }
  }, 
  methods: {
    answered(e){
      //this is the index value of the chosen answer
      this.selectedAnswer = e.target.value
    },

    start(){
            this.started = true
    },
    

    nextQuestion(){
      
      this.answers.push(this.questions[this.index]['answers'][this.selectedAnswer])
      this.progress = Math.round((this.index+1)/this.count *100).toString() + "%"
      this.index++
      this.selectedAnswer = ''
    },

    resetQuiz(){
      this.index = 0
      this.selectedAnswer = ''
    },

    showResults(){
      this.index++
      console.log(this.answers) //this answers would normally be sent to a db for analysis of the diagnostic
    },

    loadQuestions(){
      
    var questionGroups = questionText.split("#")    
    var questions = []

    //the array starts from i=1 since the first element is blank
    //for each question
   
   
    for(var i= 1; i < questionGroups.length; i++){

      
        var questionGroupObject = {}
        var answers = questionGroups[i].trim().split('>')
        
        questionGroupObject['question'] = answers[0]
        //questionGroupObject[answers[0]] = {}
        questionGroupObject['answers'] = []

        //for each answer
      
      for (var j =1; j<answers.length; j++){
          
          questionGroupObject['answers'].push(answers[j].trim())
        }
        questions.push(questionGroupObject)    
      } 
      this.questions = JSON.parse(JSON.stringify(questions)) 
      this.count = this.questions.length
      this.loading = false

      console.log(JSON.parse(JSON.stringify(questions)))
      },

  },

  mounted(){
    this.loadQuestions();
  }

}
</script>

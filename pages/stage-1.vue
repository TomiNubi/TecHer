<template>
  
  <div class="flex w-full justify-center items-center pt-10" id="app">
    
            <div class="w-full" :class="index < count? 'max-w-xl' : 'max-w-3xl'">
                <h1 v-if="index < count" class="font-bold text-3xl sm:text-4xl md:text-5xl text-center text-indigo-700">
                    Stage 1
                </h1>

                <h1 v-if="index >= count && started" class="font-bold text-3xl sm:text-4xl md:text-5xl  text-center text-indigo-700">
                    Stage 1 Results
                </h1>

                <div class="bg-white p-6 md:p-12 rounded-lg shadow-lg w-full mt-4 md:mt-8">

                  <div v-if="loading">
                    <h1 class="font-normal text-xl">
                        Loading..
                    </h1>
                  </div>
                <div v-else>
                    <div v-if="started== false">
                            <Welcome stage="1" v-on:start="start()" />
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
                            :class="selectedAnswer == '' ? 'hover:bg-gray-100 cursor-pointer': selectedAnswer== i? 'bg-blue-400 text-white'  : '' "
                        >
                            <input
                                type="radio"
                                :id="i"
                                class="hidden"
                                @change="answered($event)"
                                :value="i"
                                v-model="selectedAnswer"
                            />
                          {{answer.text}}
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
                       <!-- <h1 class="font-bold text-xl text-center text-indigo-700">
                          Results
                      </h1> -->
                        
                        <div class = "flex flex-wrap justify-center px:5 md:px-10">
                            
                            <div class="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800 m-5">                                
                                    <p class="text-md text-gray-700 dark:text-gray-50 ml-2">
                                        Potential
                                    </p>       
                                <div class="flex flex-col justify-start">
                                    <p class="text-green-700 text-4xl text-left dark:text-white font-bold my-4">
                                        {{finalScores.potential}} %
                                    </p>
                                </div>
                            </div>

                            <div class="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800 m-5" >                                
                                    <p class="text-md text-gray-700 dark:text-gray-50 ml-2">
                                        Misconception
                                    </p>       
                                <div class="flex flex-col justify-start">
                                    <p class="text-green-700 text-4xl text-left dark:text-white font-bold my-4">
                                        {{finalScores.misconception}} %
                                    </p>
                                </div>
                            </div>
                            <div class="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800 m-5">                                
                                    <p class="text-md text-gray-700 dark:text-gray-50 ml-2">
                                        Male Science Association
                                    </p>       
                                <div class="flex flex-col justify-start">
                                    <p class="text-green-700 text-4xl text-left dark:text-white font-bold my-4">
                                        {{finalScores.maleScienceAssociation}} %
                                    </p>
                                </div>
                            </div>


                    
                        </div>
                        <div class="mt-6 flow-root flex justify-center items-center">

                          <h2 class="font-bold">What do your scores mean? Click each tab to find out</h2>

                          <diV> 
                             <Results/>
                          </diV>
                            
                            <div class="flex justify-center">
                          
                            <NLink to="/stage-2/" class=" px-5 py-3  bg-green-500 text-white text-sm font-bold tracking-wide rounded-md">
                                   Move on to Stage 2 &gt;
                            </NLink> 
                          
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
import questionText from '~/static/questions.txt'
import keywordsList from '~/static/keywords.js'
import Welcome from '../components/Welcome.vue'


export default {
  components: { Welcome },
  data(){
    return{
  
      questions : [],
      loading: true,
      started: false,
      selectedAnswer : '',
      count: 0,
      index: 0,
      progress: "0%",
      userScores: {
        potential: 0,
        misconception: 0,
        maleScienceAssociation:0
      },
      maxPoints:{
        potential: 0,
        misconception: 0,
        maleScienceAssociation:0
      },

    finalScores:{
        potential: 0,
        misconception: 0,
        maleScienceAssociation:0
      },
      tempUserScores: {},
    
    }
  }, 
  methods: {
    answered(e){
      //this is the index value of the chosen answer
      this.selectedAnswer = e.target.value
      this.computeScore()
    },

    start(){
        this.started = true

    },
    
    computeScore(){

     var tempUserScores= {
        potential: 0,
        misconception: 0,
        maleScienceAssociation:0
      }
   
      //loop through the three main keys, 'potential', 'misconception' and 'male-science correlation'
      var answers = this.questions[this.index]['answers']
      var userKeywords = answers[this.selectedAnswer].keywords
    
     for (var key in keywordsList){
       
        if(keywordsList.hasOwnProperty(key)){
          //loop through the subkeys (the keywords) in each main key
          for (var subKey in keywordsList[key]){
            var occurredKeywords = []
            if(keywordsList[key].hasOwnProperty(subKey)){
                
                if(userKeywords.includes(subKey)){
                    occurredKeywords.push(subKey)
                    tempUserScores[key] += keywordsList[key][subKey]                   
                    
                }

            }
          }
        }
      }

      this.tempUserScores = tempUserScores
    },

    nextQuestion(){
      for (var key in this.tempUserScores){
          if(this.tempUserScores.hasOwnProperty(key)){
            this.userScores[key] += this.tempUserScores[key]
          }
      }
      this.progress = Math.round((this.index+1)/this.count *100).toString() + "%"
      this.index++
      this.selectedAnswer = ''
    },

    resetQuiz(){
      this.index = 0
      this.selectedAnswer = ''
    },

    showResults(){
       for (var key in this.userScores){
         this.finalScores[key] = Math.round((this.userScores[key]/this.maxPoints[key]) * 100)
       }
      this.index++
    },

    getMaxPoints(){
      var maxPoints= {potential:0,misconception:0,maleScienceAssociation: 0}
      
      for(var question of this.questions){
        var maxAnswer= {potential:0,misconception:0,maleScienceAssociation: 0}
        
        for (var answer of  question.answers){
          var answerScore = {potential:0,misconception:0,maleScienceAssociation: 0}
          
          for (var keyword of answer.keywords){
            
            if (keyword in keywordsList.potential){
        
            
            answerScore.potential+= keywordsList["potential"][keyword]
            
            }
            else if (keyword in keywordsList.misconception){
              answerScore.misconception+= keywordsList["misconception"][keyword]
            }
            else if (keyword in keywordsList.maleScienceAssociation){
              answerScore.maleScienceAssociation+= keywordsList["maleScienceAssociation"][keyword]
            }
          }
          
          for (var key in answerScore){
            if (answerScore[key] > maxAnswer[key]){
              maxAnswer[key] = answerScore[key]
            }
          }

        }
        for (var key in maxPoints){
            maxPoints[key] += maxAnswer[key]
        }
      }
     
      this.maxPoints = maxPoints
      
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
          
          //questionGroupObject[answers[0]][answers[j]]  = []
          var answersObject ={}
          var keywordsLists = "N/A"

          if(answers[j].split('*').length > 1){
          
            keywordsLists = answers[j].split('*')[1]
          }

          var keywords = keywordsLists.trim().replace(/\s/g, "").split(',')

          answersObject["text"] = answers[j].split('*')[0]
          answersObject["keywords"] = keywords
          questionGroupObject['answers'].push(answersObject)

          //questionGroupObject[answers[0]][answers[j]] = keywords
        }
        
      
        questions.push(questionGroupObject)
        
        
      } 
      this.questions = JSON.parse(JSON.stringify(questions)) 
      this.count = this.questions.length
      this.getMaxPoints()
      this.loading = false
  },

  },

  mounted(){
    this.loadQuestions();
  }

}
</script>

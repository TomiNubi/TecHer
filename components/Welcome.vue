<template>
    <div class=" p-4 my-4 rounded-md flex flex-wrap justify-center">
                        <div class="bg-green-300 p-6 md:p-12 rounded-lg shadow-lg w-full mt-4 md:mt-8">
                            
                            <h3 class="font-bold"> Welcome to Stage {{stage}} </h3> <br/><br/>
                            <p v-if="stage==1">
                               Stage 1 is just about your opinions and your choices. There are absolutely no right or wrong answers, just what you believe.
                            </p>
                            
                            <p v-if="stage==2">
                              This time it's a little different. Now there <b>are</b> wrong and right answers. Let's see how much you get. Good luck.
                            </p>
                            <p v-if="stage==3">
                              Now there are no stakes again. No wrong or right answers. Nor are there scores. Just your opinions!
                            </p>
                            
                        </div>
                        <div class="flex w-full p-4 justify-end">
                          
                            <button @click.prevent="$emit('start', stage)" class=" px-5 py-3  bg-indigo-500 text-white text-sm font-bold tracking-wide rounded-md">
                                   Start &gt;
                            </button> 
                          
                            </div>
                </div>
</template>


<script>
    
    export default {
       props: ['stage'],
        data() {
            return {
                
            }
        },
    }

</script>
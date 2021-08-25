<template>
  <div class="flex w-full h-screen flex-col justify-center items-center pt-10" id="app">
    
    
        <h1 class="font-bold text-5xl sm:text-4xl md:text-5xl text-center text-indigo-700">
                    TecHer
                </h1>

                <div class=" p-4 my-4 rounded-md flex flex-wrap justify-center">
                        <div class="bg-green-300 p-6 md:p-12 rounded-lg shadow-lg w-full mt-4 md:mt-8">
                            <h3 class="font-bold">Hello girls! This a simple quiz of opinions, facts and fables. </h3> <br/><br/>
                            <p>There are no stakes just <b>3 stages</b> that could possibly bring you ‘something’ vital at the end. The only way to find out is by trying. Be honest and enjoy!</p>

                            
                        </div>
                        <div class="flex w-full p-4 justify-end">
                          
                            <NLink to="/stage-1/" class=" px-5 py-3  bg-indigo-500 text-white text-sm font-bold tracking-wide rounded-md">
                                   Start &gt;
                            </NLink> 
                          
                            </div>
                </div>
  

  </div>
</template>

<script>
export default {
  
}
</script>
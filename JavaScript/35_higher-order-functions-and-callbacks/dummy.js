console.log('Higher Order Functions and Callbacks in JavaScript')

// higher order function
  function learnJavaScript(b) {
  // console.log('Namaste JavaScript')
    // console.log(typeof b)
    
  console.dir(b)
    b()
}

//call back function

function anuragPlayList() {
    console.log('Namsthe JavaScript')
  }
  learnJavaScript(anuragPlayList)

  anuragPlayList.userName = 'Sumanth'
  anuragPlayList.userAge = 25


//   write as a named function

  learnJavaScript(function anuragPlayList() {
    console.dir('Namsthe JavaScript')
    anuragPlayList.userName = 'Sumanth'
    anuragPlayList.userAge = 25
})

// actually the below one is anonymous function

learnJavaScript(function() {
    console.dir('Namsthe JavaScript')
})
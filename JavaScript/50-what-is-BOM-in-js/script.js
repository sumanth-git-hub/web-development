// setTimeout(() => {
//     location.reload()
// },2000)

// location.reload()  // used location under location

// location.href = 'find-bom-in-js'  // used href under location
// location.href = 'script.js'
// location.href = 'https://developer.mozilla.org/en-US/' // used href under location, this is how redirection is done on website


// window.history
// history.back()  // navigates back 
// history.forward() // navigate forward
// history.go(1) // navigate forward
// history.go(-1) // navigate back

console.log(innerHeight) // just to check the inner height of the webpage
console.log(innerWidth) // to check the inside width of the webpage

// open('script.js') // to open links in new tab
open('script.js', 'whyNot','resizable') // first element stand for to open the links in new tab, and the second one declared as name that one can able to see in the newly opened window by the influence of open()

// close() // used to close the tab which is opened in new tab by using 'open()' and also close() object should be applied in the newly opened window to close that (Self window closing tag in simple words)

resizeTo(300,200) // to resize the window and this elements should be added on the console of newly opened window and it only applicable for the new window which is opened by the help of open() and inserted the 'resizable' keyword in the 3rd place

moveTo(0,0) // to move the newly opened window towards x axis and y axis

scrollBy(0,100) // used to set the scroll to the current page

scroll({  // used to set the scroll with behavior(smooth,instant,auto)
    top: 200,
    left: 0,
    behavior: "smooth",
  });

  print() // used to get the print of webpage


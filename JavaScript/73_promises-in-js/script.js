const resolveBtn = document.getElementById('resolveBtn')
const rejectBtn = document.getElementById('rejectBtn')


const promo = new Promise((resolve, reject)=>{
  resolveBtn.addEventListener('click', () => {
    resolve('Promise Resolved')
    // console.log(p)
  })
  rejectBtn.addEventListener('click', () => {
    reject('Promise Rejected')
  })
})

promo.then((data) => {
  console.log(data)
  return 'Successfully Resolved'
}).then((data) => {
  console.log(data)
}).catch((error) => {
  console.log(error)
  return 'Failed to keep the Promise'
}).finally(() => {
  console.log('Final Results')
})


// setTimeout(() => {
//   console.log('Hello')
// })

/*
const promo = new Promise((resolve, reject)=> {
  resolve('Promise Resolved')
})

const  promo2 = promo.then((data) => {
  console.log(data)
  return 'is it resolved?'
}).then((data) => {
  console.log(data)
  return 'Yes! it is'
}).catch((error) => {
  console.log(error)
})
*/

// promo.then((data) => {
//   console.log(data)
//   return 'Successfully Resolved'
// }).then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// })
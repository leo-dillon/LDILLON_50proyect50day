const counters = document.querySelectorAll('.counterText')

counters.forEach((counter) => {
  counter.innerText = '0'
  const updateCount = () => {
    let maxNumber = counter.getAttribute('data-target')
    let number = parseInt(counter.innerText)
    let inc = maxNumber / 200 
    if(number < maxNumber){
      counter.innerText = `${Math.ceil(number + inc)}`
      setTimeout(updateCount, 30)
    }
    else{
      counter.innerText = maxNumber
    }
  }
  updateCount()
})

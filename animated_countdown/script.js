const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMsg = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
  counter.classList.remove('hide')
  finalMsg.classList.remove('show')

  nums.forEach((item) => {
    item.classList.value = ''
  })

  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((item, idx) => {
    const penultimate = item.length - 1

    item.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== penultimate) {
        item.classList.remove('in')
        item.classList.add('out')
      } else if (e.animationName === 'goOut' && item.nextElementSibling) {
        item.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMsg.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  setTimeout(resetDOM, 300)
  runAnimation()
})
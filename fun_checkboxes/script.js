const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
  doTheTrick(e.target)
}))

function doTheTrick(theClick) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClick) {
      fast.checked = false
    }

    if (cheap === theClick) {
      good.checked = false
    }

    if(fast === theClick) {
      cheap.checked = false
    }
  }
}
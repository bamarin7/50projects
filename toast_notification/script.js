const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Thanks for clicking me!',
  'Do you enjoy clicking the button?',
  'Please do not click it again',
  'Stop clicking!',
  'YOU WON!'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
  const notification = document.createElement('div')
  notification.classList.add('toast')
  notification.classList.add(type ? type : getRandomType())

  notification.innerText = message ? message : getRandomMsg()

  toasts.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)]
}
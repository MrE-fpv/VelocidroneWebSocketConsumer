const client = require('./proxy.js')

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}),  and Electron (v${versions.electron()})`

const runProxy = document.getElementById('run')
runProxy.addEventListener('click', client)


const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }  
  func()
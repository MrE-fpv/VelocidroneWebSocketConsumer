const information = document.getElementById('info')
if (information) {
  information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}),  and Electron (v${versions.electron()})`
}

const runProxy = document.getElementById('run')
if (runProxy) {
  console.log(runProxy);
  runProxy.addEventListener('click', () => {
    window.electronApi.runClient();
  })
}
const stopProxy = document.getElementById('stop')
if (runProxy) {
  console.log(stopProxy);
  runProxy.addEventListener('click', () => {
    window.electronApi.runClient();
  })
}


const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}
func()
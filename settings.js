//fetch('./settings.json')
//    .then((response) => response.json())
//    .then((json) => console.log(json));
// const settingsJson = (await readFile("./settings.json")).toString();
const settingsJson = (fetch('./settings.json').toString())
//const settings = settingsJson != null && settingsJson.length > 0 ? JSON.parse(settingsJson) : null;
console.log(settingsJson);

document.getElementById("localIp").value="127.0.0.1"
document.getElementById("apiServer").value="https://API-Server.com"
document.getElementById("apiKey").value=settingsJson
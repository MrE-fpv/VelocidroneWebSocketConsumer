const settingsJson = (fetch('./settings.json').toString())

console.log("settingsJson", settingsJson);
const localIp = "192.168.0.10";
const apiServer = "https://API-Server.com";

document.getElementById("localIp").value=localIp
document.getElementById("apiServer").value=apiServer
document.getElementById("apiKey").value=settingsJson.apiKey
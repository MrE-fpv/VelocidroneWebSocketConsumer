(fetch('./settings.json').then(p => p.json()).then(q => {
    const settings = q;
    console.log("settingsJson", settings);
    const localIp = "192.168.0.10";
    const apiServer = settings.httpUrl;

    document.getElementById("localIp").value = localIp
    document.getElementById("apiServer").value = apiServer
    document.getElementById("apiKey").value = settings.apiKey
}));

// function myFunction() {
//     var x = document.getElementById("apiKey").value
//     if (x.type === "password") {
//       x.type = "text";
//     } else {
//       x.type = "password";
//     }
//   } 
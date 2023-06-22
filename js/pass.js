const name = decodeURIComponent(location.href.split("?")[1]);

document.getElementById("name").innerText = name;

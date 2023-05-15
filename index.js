const body = document.body;

const div = document.createElement("div");

const img = document.createElement("img");

div.classList.add("container");

img.setAttribute("src",
"https://images.pexels.com/photos/16578957/pexels-photo-16578957.jpeg");


div.append(img)
body.append(div)
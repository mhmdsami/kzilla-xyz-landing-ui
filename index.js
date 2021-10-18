const desc = document.querySelector(".description");
console.log(desc.innerHTML);

const features = [
  " snappy",
  " breezy",
  "n uniterupted",
  "n unlimited",
  " blazing fast",
];

var counter = 0;
function changeDescription() {
  if (counter === features.length) counter = 0;
  desc.innerHTML = features[counter];
  counter++;
}

setInterval(changeDescription, 2000);

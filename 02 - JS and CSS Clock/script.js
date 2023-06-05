const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const digitalSecond = document.querySelector("#digital-sec");
const digitalMin = document.querySelector("#digital-min");
const digitalHour = document.querySelector("#digital-hour");

const setDate = () => {
  const now = new Date();

  const second = now.getSeconds();
  let secondDegree = (second / 60) * 360 + 90;
  if (secondDegree === 444 || secondDegree === 90) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 0.5s";
  }

  secondHand.style.transform = "rotate(" + secondDegree + "deg)";
  console.log(secondDegree);
  digitalSecond.innerText = second < 10 ? "0" + second : second;

  const minute = now.getMinutes();
  const minuteDegree = (minute / 60) * 360 + 90;
  if (minuteDegree === 444 || minuteDegree === 90) {
    minHand.style.transition = "none";
  } else {
    minHand.style.transition = "all 0.5s";
  }

  minHand.style.transform = "rotate(" + minuteDegree + "deg)";
  digitalMin.innerText = minute < 10 ? "0" + minute : minute;

  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  //   if (hourDegree === 444 || hourDegree === 90) {
  //     hourHand.style.transition = "none";
  //   } else {
  //     hourHand.style.transition = "all 0.5s";
  //   }

  hourHand.style.transform = "rotate(" + hourDegree + "deg)";
  digitalHour.innerText = hour < 10 ? "0" + hour : hour;
};

setInterval(setDate, 1000);

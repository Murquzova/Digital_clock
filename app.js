function count() {
    let now = new Date();
    document.getElementById("hours").innerHTML =
      now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
    document.getElementById("minutes").innerHTML =
      now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
    document.getElementById("seconds").innerHTML =
      now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
  }
  count();
  setInterval(count, 1000);
  
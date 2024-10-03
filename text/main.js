//bot token
var telegram_bot_id = "7936925474:AAEyRMSOYBasGM8344x_RrkP62WbxRSjdNM"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 6526228411; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, lname, message, nike;
var ready = function () {
  u_name = document.querySelector("#fname").value;
  lname = document.querySelector("#lname").value;
  message = document.querySelector("#manzil").value;

  message =
    "🔴 Телефон раками:" +
    lname +
    "\n⚪️ Исми: " +
    u_name +
    "\n🔴 Саволи:" +
    message;
};
var sendtelegram = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {});
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("manzil").value = "";
  alert(
    "🔴 просто аличога хабарингиз борди тез орада сизга жавобини йозади ⚪️"
  );
  window.location.href = "../index.html";
  return false;
};

// Audio elementni olamiz
const music = document.querySelector("#backgroundMusic");

// Faqat bir marta boshlanishini ta'minlash uchun flag
let isPlaying = false;

// Sichqoncha harakatini kuzatamiz
document.body.addEventListener("mousemove", () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  }
});

// Browserni tashlab ketganda yoki yangi sahifaga o'tganda musiqa to'xtaydi
window.addEventListener("blur", () => {
  music.pause();
  isPlaying = false;
});

// Browserga qaytib kelsak, musiqa yana boshlanadi
window.addEventListener("focus", () => {
  if (!isPlaying) {
    music.play();
    isPlaying = true;
  }
});

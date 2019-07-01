var searchfield = document.querySelector(".searchfield-top");

var popup  = document.querySelector(".hotels-search-wrapper");

var form = popup.querySelector(".hotels-search");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = llocalStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = llocalStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

searchfield.addEventListener("click", function (evt) {
  evt.preventDefault();
  if(popup.classList.contains("hotels-search-wrapper-visible"))
  {
    popup.classList.add("hotels-search-wrapper-hide");
    popup.classList.remove("hotels-search-wrapper-visible");
  }
  else
  {
    popup.classList.add("hotels-search-wrapper-visible");
    popup.classList.remove("hotels-search-wrapper-hide");};
  });


  form.addEventListener("submit", function (evt) {
    if (!adults.value || !children.value) {
      evt.preventDefault();
      console.log("Введите количество");
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("adults", adults.value);
        localStorage.setItem("children", children.value);
      }
    }
  });

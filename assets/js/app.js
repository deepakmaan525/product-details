
    let count = 1
    let add = document.getElementById("add");
    let sub = document.getElementById("sub");
    let num = document.getElementById("num");
    let addtocart = document.getElementById("addtocart")
    add.addEventListener("click", function () {
      count++;
      num.innerHTML = count;
    });
    sub.addEventListener("click", function () {
      if (count > 1) {
        count--;
        num.innerHTML = count;
      }
    });
    addtocart.addEventListener("click", function () {
      alert(count + " Items added to your cart")
    })
    // tabs
    function openTab(evt, Id) {
      let i = null;
      let tabContent = document.querySelectorAll(".tabContent");
      let tabLabel = document.querySelectorAll(".tabLabel");
      tabContent.forEach(function (item) {
        item.style.display = 'none';
      });
      tabLabel.forEach(function (item2) {
        item2.classList.remove("tabLabelActive");
      });
      document.getElementById(Id).style.display = "block";
      evt.currentTarget.className += " tabLabelActive";
    }
    document.getElementById("defaultOpen").click();







    let a = document.getElementById("nav");
let flow = document.querySelector(".flow");
let cross4 = document.querySelector(".cross-4");
let cross5 = document.querySelector(".cross-5");
let cross6 = document.querySelector(".cross-6");
let menuicon = document.querySelector("#menuIcon");
let Home = document.querySelector(".Home");
let Kopen = document.querySelector(".Kopen");
let Interview = document.querySelector(".Interview");
let Sale = document.querySelector(".Sale");
let Van = document.querySelector(".Van");
let Sneaker = document.querySelector(".Sneaker");
let Blog = document.querySelector(".Blog");
// navbar
menuicon.addEventListener("click", function () {
    if (a.classList !== document.querySelector("fix-lft")) {
        a.classList.toggle("fix-lft");
        flow.classList.toggle("flow-hidden");
        cross4.classList.toggle("cross-1");
        cross5.classList.toggle("cross-2");
        cross6.classList.toggle("cross-3")
    }
});

Home.addEventListener("click", function () {
    a.classList.toggle("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Kopen.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Interview.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Sale.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Van.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});

Sneaker.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
Blog.addEventListener("click", function () {
    a.classList.remove("fix-lft");
    flow.classList.remove("flow-hidden");
    cross4.classList.toggle("cross-1");
    cross5.classList.toggle("cross-2");
    cross6.classList.toggle("cross-3");
});
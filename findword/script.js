let box = document.querySelectorAll(".box");
let text = document.getElementById("text");
let res = document.getElementById("res");

box.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.toggle("br");
    let selectText = ele.innerHTML;
    let f_text = text.innerHTML;
    if (ele.classList.contains("br")) {
      res.innerHTML += selectText;

      if (f_text === res.innerHTML) {
        let dis = document.querySelectorAll(".box:not(.br)");
        dis.forEach((dis) => {
          dis.classList.add("disable");
        });
      }
    } else if (ele.classList.contains("br") === false) {
      let resText = res.innerHTML;
      newString = resText.replace(selectText, "");
      res.textContent = newString;
    }
  });
});

let box1 = document.querySelectorAll(".box1");
let text1 = document.getElementById("text1");
let res1 = document.getElementById("res1");

box1.forEach((ele1) => {
  ele1.addEventListener("click", () => {
    ele1.classList.toggle("br");
    let selectText1 = ele1.innerHTML;
    let f_text1 = text1.innerHTML;
    if (ele1.classList.contains("br")) {
      res1.innerHTML += selectText1;

      if (f_text1 === res1.innerHTML) {
        let dis1 = document.querySelectorAll(".box1:not(.br)");
        dis1.forEach((dis1) => {
          dis1.classList.add("disable");
        });
      }
    } else if (ele1.classList.contains("br") === false) {
      let resText1 = res1.innerHTML;
      newString1 = resText1.replace(selectText1, "");
      res1.textContent = newString1;
    }
  });
});

let box2 = document.querySelectorAll(".box2");
let text2 = document.getElementById("text2");
let res2 = document.getElementById("res2");

box2.forEach((ele2) => {
  ele2.addEventListener("click", () => {
    ele2.classList.toggle("br");
    let selectText2 = ele2.innerHTML;
    let f_text2 = text2.innerHTML;
    if (ele2.classList.contains("br")) {
      res2.innerHTML += selectText2;

      if (f_text2 === res2.innerHTML) {
        let dis2 = document.querySelectorAll(".box2:not(.br)");
        dis2.forEach((dis2) => {
          dis2.classList.add("disable");
        });
      }
    } else if (ele2.classList.contains("br") === false) {
      let resText2 = res2.innerHTML;
      newString2 = resText2.replace(selectText2, "");
      res2.textContent = newString2;
    }
  });
});

let box3 = document.querySelectorAll(".box3");
let text3 = document.getElementById("text3");
let res3 = document.getElementById("res3");

box3.forEach((ele3) => {
  ele3.addEventListener("click", () => {
    ele3.classList.toggle("br");
    let selectText3 = ele3.innerHTML;
    let f_text3 = text3.innerHTML;
    if (ele3.classList.contains("br")) {
      res3.innerHTML += selectText3;

      if (f_text3 === res3.innerHTML) {
        let dis3 = document.querySelectorAll(".box3:not(.br)");
        dis3.forEach((dis3) => {
          dis3.classList.add("disable");
        });
      }
    } else if (ele3.classList.contains("br") === false) {
      let resText3 = res3.innerHTML;
      newString3 = resText3.replace(selectText3, "");
      res3.textContent = newString3;
    }
  });
});

let box4 = document.querySelectorAll(".box4");
let text4 = document.getElementById("text4");
let res4 = document.getElementById("res4");

box4.forEach((ele4) => {
  ele4.addEventListener("click", () => {
    ele4.classList.toggle("br");
    let selectText4 = ele4.innerHTML;
    let f_text4 = text4.innerHTML;
    if (ele4.classList.contains("br")) {
      res4.innerHTML += selectText4;

      if (f_text4 === res4.innerHTML) {
        let dis4 = document.querySelectorAll(".box4:not(.br)");
        dis4.forEach((dis4) => {
          dis4.classList.add("disable");
        });
      }
    } else if (ele4.classList.contains("br") === false) {
      let resText4 = res4.innerHTML;
      newString4 = resText4.replace(selectText4, "");
      res4.textContent = newString4;
    }
  });
});

let box5 = document.querySelectorAll(".box5");
let text5 = document.getElementById("text5");
let res5 = document.getElementById("res5");

box5.forEach((ele5) => {
  ele5.addEventListener("click", () => {
    ele5.classList.toggle("br");
    let selectText5 = ele5.innerHTML;
    let f_text5 = text5.innerHTML;
    if (ele5.classList.contains("br")) {
      res5.innerHTML += selectText5;

      if (f_text5 === res5.innerHTML) {
        let dis5 = document.querySelectorAll(".box5:not(.br)");
        dis5.forEach((dis5) => {
          dis5.classList.add("disable");
        });
      }
    } else if (ele5.classList.contains("br") === false) {
      let resText5 = res5.innerHTML;
      newString5 = resText5.replace(selectText5, "");
      res4.textContent = newString4;
    }
  });
});

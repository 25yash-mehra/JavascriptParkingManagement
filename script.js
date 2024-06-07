const inputText = document.getElementById("inputText");
const veichalType = document.getElementById("veichalType");
const timing = document.getElementById("timing");
const bill = document.getElementById("bill");
const count = document.getElementById("count")
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});
let val = 1;
document.getElementById("confirm").addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Please write name");
  } else if (veichalType.value === "") {
    alert("Please mention veichal type");
  } else if (timing.value === "") {
    alert("Please choose time limit");
  } else {
    if (veichalType.value === "4WD" && count.value === count.value) {
      let item = 0;
      const price = () => {
        item++;
        billTag2.addEventListener("click", () => {
          clearInterval(interval);
          bill.innerHTML = ` Early Exit Amount ₹ ${item}`;
          // billTag2.remove()
          // billTag.remove()
        });
        console.log(item);
        if (item === 5) {
          clearInterval(interval);
        }
        billTag.addEventListener("click", () => {
          bill.innerHTML = `Total Amount ₹ ${item}`;
          // billTag.remove()
          // billTag2.remove()
        });
      };
      let interval = setInterval(price, 1000);
    }
    // owner name
    let ownerTag = document.createElement("h4");
    ownerTag.textContent = inputText.value;
    document.getElementById("ownerItem").appendChild(ownerTag);
    inputText.value = "";
    // veichal Type
    let veichalTag = document.createElement("h4");
    veichalTag.textContent = veichalType.value;
    document.getElementById("veichalMode").appendChild(veichalTag);
    veichalType.value = "";
    // timing
    let timingTag = document.createElement("h4");
    timingTag.textContent = timing.value;
    document.getElementById("veichalTiming").appendChild(timingTag);
    timing.value = "";
    // count
    let countTag = document.createElement("h4");
    countTag.textContent = val++;
    countTag.className = "countTag";
   count.appendChild(countTag);

    //button design
    const allButton = document.createElement("div");
    allButton.className = "allButtons";
    //billing button
    let billTag = document.createElement("button");
    billTag.textContent = "total";
    billTag.className = "totalButton";
    allButton.appendChild(billTag);
    // delet button
    let billTag2 = document.createElement("button");
    billTag2.textContent = "Exit";
    billTag.className = "deletButton";
    allButton.appendChild(billTag2);
    document.getElementById("billing").appendChild(allButton);
    //delet  items
    billTag2.addEventListener("dblclick", () => {
      ownerTag.remove();
      countTag.remove();
      allButton.remove();
      veichalTag.remove();
      timingTag.remove();
      bill.remove();
      document.querySelectorAll(".countTag").forEach((ele, index) => {
        ele.textContent = index + 1;
      });
    });
  }
});

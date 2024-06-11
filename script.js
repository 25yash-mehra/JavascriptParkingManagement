const inputText = document.getElementById("inputText");
const veichalType = document.getElementById("veichalType");
const entries = document.getElementById("entries");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

let val = 1;

document.getElementById("confirm").addEventListener("click", () => {
  if (inputText.value === "") {
    alert("Please write name");
  } else if (veichalType.value === "") {
    alert("Please mention vehicle type");
  } else {

    const container = document.createElement("div");
    container.className = "entryContainer";

    // timing functionality
    let date = new Date();

    // Count
    let countTag = document.createElement("h4");
    countTag.textContent = val++;
    container.appendChild(countTag);

    // Owner name
    let ownerTag = document.createElement("h4");
    ownerTag.textContent = inputText.value;
    container.appendChild(ownerTag);
    inputText.value = "";

    // Vehicle Type
    let vehicleType = veichalType.value; 
    let veichalTag = document.createElement("h4");
    veichalTag.textContent = vehicleType;
    container.appendChild(veichalTag);
    veichalType.value = "";

    // Total Time (initially empty)
    let totalTimeTag = document.createElement("h4");
    container.appendChild(totalTimeTag);

    // Total Bill (initially empty)
    let totalBillTag = document.createElement("h4");
    container.appendChild(totalBillTag);

    // Billing button
    let billButton = document.createElement("button");
    billButton.textContent = "Bill";
    billButton.className = "billButton";
    container.appendChild(billButton);

    // Delete button
    let delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.className = "delButton";
    container.appendChild(delButton);

    entries.appendChild(container);

    // Delete items
    delButton.addEventListener("click", () => {
      container.remove();
    });

    billButton.addEventListener("click", () => {
      if (vehicleType === "4WD") { 
        totalBillTag.textContent = "20 rupee";
      }else if(vehicleType === "6WD"){
        totalBillTag.textContent = "40rupee"
      }else if(vehicleType === "8WD"){
totalBillTag.textContent = "60 rupee"
      }else if(vehicleType === "2WD"){
totalBillTag.textContent = "10 rupee"
      }

      let exitTime = new Date();
      let setDate = Math.floor((exitTime - date) / 60000);
      totalTimeTag.textContent = `${setDate} minutes`;

      billButton.remove();
    });

  }
});

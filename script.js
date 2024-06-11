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


// timing funcnality

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString()
  
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; 
  hours = hours.toString()
  let currentTime = `${hours}:${minutes} ${ampm}`;
  console.log(currentTime);


// Count
let countTag = document.createElement("h4");
countTag.textContent = val++;
    countTag.className = "countTag";
    container.appendChild(countTag);
    
    // Owner name
    let ownerTag = document.createElement("h4");
    ownerTag.textContent = inputText.value;
    container.appendChild(ownerTag);
    inputText.value = "";
    
    // Vehicle Type
    let veichalTag = document.createElement("h4");
    veichalTag.textContent = veichalType.value;
    container.appendChild(veichalTag);
    veichalType.value = "";
    
    // Billing button
    let billButton = document.createElement("button");
    billButton.textContent = "Bill";
    billButton.className = "billButton";
    billButton.addEventListener("click", () => {
      container.remove();
      });
      container.appendChild(billButton);
      
      // Append entry container to the main container
      entries.appendChild(container);
      billButton.addEventListener( "click",()=>{
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes().toString()
      
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      hours = hours.toString()
      let currentTime = `${hours}:${minutes} ${ampm}`;
      console.log(currentTime);
      if(veichalType){

      }
   
    })
      }
      });
      
console.log("hello everyone");
shownote();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let addColor = document.getElementById("addColor");
  let addPin = document.getElementById("addPin");
  let addDate = document.getElementById("addDate");
  let notes = localStorage.getItem("notes");

  console.log(addPin.checked);
  if (notes == null) {
    notesarr = [];
  } else {
    notesarr = JSON.parse(notes);
  }

  if (addDate.value == "") {
    addDate.value = new Date().toISOString().slice(0, 10);
  }

  let myobj = {
    title: addTitle.value,
    text: addTxt.value,
    color: addColor.value,
    pin: addPin.checked,
    date: addDate.value,
  };
  notesarr.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesarr));
  addTxt.value = "";
  addTitle.value = "";
  addColor.value = "#ffffff";
  addDate.value = "";
  addPin.checked = false;

  console.log(notesarr);
  shownote();
});

function shownote(element) {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesarr = [];
  } else {
    notesarr = JSON.parse(notes);
  }

  notesarr
    .sort(function (a, b) {
      return a.pin - b.pin;
    })
    .reverse();
  let html = "";

  notesarr.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem; background-color: ${element.color};">
                <div class="card-body">
                    <h5 class="card-title" id="h55">${element.title}</h5>
                    <h7> Pinned: ${element.pin} </h7>
                    <p class="card-text">${element.text}</p>
                    <p class="card-date">${element.date}</p>
                    <button  id="${index}" onclick="delnote(this.id)" class="btn btn-primary" >Delete Note</button>
                    <button  id="${index}" onclick="editnote(this.id)" class="btn btn-primary" >Edit Note</button>
                    </div>
            </div>
        `;
  });
  let noteelem = document.getElementById("notes");
  if (notesarr.length != 0) {
    noteelem.innerHTML = html;
  } else {
    noteelem.innerHTML = "There is no Notes Yet , Use above section to create.";
  }
}

function delnote(index) {
  let notes = localStorage.getItem("notes");
  console.log("im del this note", index);

  if (notes == null) {
    notesarr = [];
  } else {
    notesarr = JSON.parse(notes);
  }

  notesarr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesarr));

  shownote();
  console.log(`u have clicked on this index ${index} and u r del this note`);
}

function editnote(index) {
  let notes = localStorage.getItem("notes");
  console.log("im edit this note", index);

  if (notes == null) {
    notesarr = [];
  } else {
    notesarr = JSON.parse(notes);
  }

  const note = notesarr[index];
  console.log(note.title);
  addTitle.value = note.title;
  addTxt.value = note.text;
  addColor.value = note.color;
  addDate.value = note.date;
  addPin.checked = note.pin;
  localStorage.setItem("notes", JSON.stringify(notesarr));
  delnote(index);
  shownote();
}

let searchb = document.getElementById("searchbox");
searchb.addEventListener("input", function () {
  let inputval = searchb.value.toLowerCase();

  let cards = document.getElementsByClassName("noteCard");
  Array.from(cards).forEach(function (element) {
    let cardtxt = element.getElementsByTagName("div")[0].innerText;
    if (cardtxt.includes(inputval)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

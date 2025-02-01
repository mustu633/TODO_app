var noteData = document.getElementById("noteData");
var noteArea = document.getElementById("noteArea");


function createNote() {
  var note = document.createElement("div");
  var para = document.createElement("p");
  var dltBtn = document.createElement("button");
  dltBtn.className = "dltBtn";
  dltBtn.innerText = "Delete";
  para.innerText = noteData.value;
  note.className = "notes";
  noteArea.appendChild(note).appendChild(para).appendChild(dltBtn);
  dltBtn.addEventListener("click", () => {
    noteArea.removeChild(note);
  });
}

// dltBtn.addEventListener("click", () => {
//   noteArea.removeChild(note);
// });

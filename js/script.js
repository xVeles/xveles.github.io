let bingo = [];

let addButton = document.getElementById("add-criteria");
let createButton = document.getElementById("create");


let criterias1 = document.getElementById("criterias-1");
let criterias2 = document.getElementById("criterias-2");

let input = document.getElementById("bingo-criteria");

let table = document.getElementById("bingo");

function init()
{
  addButton.addEventListener("click", () =>
  {
      addCriteria();
  });

  createButton.addEventListener("click", () =>
  {
    createBingo();
  });
}

function addCriteria()
{
  if (input.value == "") return;

  bingo.push(input.value);

  makeList();

  input.value = "";
}

function remove(index)
{
  criterias1.innerHTML = "";
  criterias2.innerHTML = "";

  let bingoList = [];
  for (let i = 0; i < bingo.length; i++)
  {
    if (i != index)
    {
      bingoList.push(bingo[i]);
    }
  }

  bingo = bingoList;

  makeList();
}

function makeList()
{
  let content1 = "";
  let content2 = "";

  for (let i = 0; i < bingo.length; i++)
  {
    if (i < 12)
    {
      content1 += "<li class=\"collection-item\">" + (i+1) + " " + bingo[i] +  "<a class=\"black-text\" href=\"#\"><i class=\"material-icons right\" onmousedown=\"remove(" + i + ")\">close</i></a></li>";
    }
    else 
    {
      content2 += "<li class=\"collection-item\">" + (i+1) + " " + bingo[i] +  "<a class=\"black-text\" href=\"#\"><i class=\"material-icons right\" onmousedown=\"remove(" + i + ")\">close</i></a></li>";
    }
  }

  criterias1.innerHTML = content1;
  criterias2.innerHTML = content2;

  validBingo();

  if (bingo.length == 24)
  {
    input.setAttribute("disabled", "");
    addButton.setAttribute("class", "btn disabled");
  }
  else
  {
    input.removeAttribute("disabled");
    addButton.setAttribute("class", "btn");
  }

  
}

function validBingo()
{
  if (bingo.length == 24)
  {
    addButton.setAttribute("class", "btn disabled");
    createButton.setAttribute("class", "btn red accent-4");
    input.setAttribute("disabled", "");
  }
  else
  {
    addButton.setAttribute("class", "btn");
    createButton.setAttribute("class", "btn red accent-4 disabled");
    input.removeAttribute("disabled");
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function createBingo()
{
  let shuffledBingo = bingo.slice();
  shuffle(shuffledBingo);

  console.log(bingo);
  console.log(shuffledBingo);
  let content = "<tr>";

  for (let i = 0; i < 25; i++)
  {
    if (i % 5 == 0) content += "</tr><tr>";

    if (i == 12)
    {
      content += "<td style=\"border: 3px solid gold;\"><img src=\"https://pbs.twimg.com/media/D84-il_WwAA267p.jpg\" width=\"128px\" height=\"128px\"></td>";
    }
    else if (i == 24)
    {
      content += "<td width=\"128px\" height=\"128px\">" + shuffledBingo[12] + "</td>";
    }
    else
    {
      content += "<td width=\"128px\" height=\"128px\">" + shuffledBingo[i] + "</td>";
    }
  }

  table.innerHTML = content + "</tr>";
}

init();
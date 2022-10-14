const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished",
  },
  {
    term: "Tautology",
    definition:
      "logical argument constructed in such a way that it is logically irrefutable",
  },
  {
    term: "Oxymoron",
    definition:
      "figure of speech that juxtaposes elements that appear to be contradictory",
  },
];

const contentDiv = document.getElementById("content");

const definitionList = document.createElement("dl");

for (let i = 0; i < words.length; i++) {
  const term = words[i].term;
  const definition = words[i].definition;

  const termDiv = document.createElement("dt");
  const strong = document.createElement("strong");
  strong.textContent = term;
  termDiv.appendChild(strong);
  definitionList.appendChild(termDiv);

  const definitionDiv = document.createElement("dd");
  definitionDiv.textContent = definition;
  definitionList.appendChild(definitionDiv);
}

contentDiv.appendChild(definitionList);

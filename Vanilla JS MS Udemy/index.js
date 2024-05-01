const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

const btnwhyreact = document.getElementById("btn-why-react");
const btncorefeatures = document.getElementById("btn-core-features");
const btnrelatedresources = document.getElementById("btn-related-resources");
const tabContent = document.querySelector("#tab-content");

function highlightButton(btn) {
  btnwhyreact.className = "";
  btncorefeatures.className = "";
  btnrelatedresources.className = "";
  btn.className = "active";
}

function displayContent(items) {
  let listItems = "";
  for (const item of items) {
    listItems += `<li>${item}</li>`;
  }
  const list = document.createElement("ul");
  list.innerHTML = listItems;
  tabContent.innerHTML = "";
  tabContent.append(list);
}

function handleclick(event) {
  const btnId = event.target.id;
  highlightButton(event.target);

  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else {
    displayContent(content[2]);
  }
}
displayContent(content[0]);

btnwhyreact.addEventListener("click", handleclick);
btncorefeatures.addEventListener("click", handleclick);
btnrelatedresources.addEventListener("click", handleclick);

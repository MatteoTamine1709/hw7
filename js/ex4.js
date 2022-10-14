const linksUl = document.getElementById("links");

const insertLinkAfter = (link, text, after) => {
  const linkLi = document.createElement("li");
  const linkA = document.createElement("a");
  linkA.href = link;
  linkA.textContent = text;
  linkLi.appendChild(linkA);
  after.parentNode.insertBefore(linkLi, after.nextSibling);
}

insertLinkAfter("https://www.csulb.edu/college-of-business", "College Of Business", linksUl.children[0]);
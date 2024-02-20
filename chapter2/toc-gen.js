const TOC_ID = "toc"
const CLASS_NAME = "toc-entry"
const TOC_NAME = "Table Of Contents"
const ENTRY_CLASS = "toc-entry";
const HREF_CLASS = "toc-entry-href";
const TITLES_CLASS = "section-title";

main()

function main() {
  const elementArray = document.getElementsByClassName(TITLES_CLASS)
  const toc = document.getElementById(TOC_ID)
  
  if (elementArray.length < 1) {
    console.error("No chapter headers found :(")
    return
  }

  if (toc == null) {
    console.error(`no element with '${TOC_ID}' tag found`)
    return
  } 
  
  createToc(elementArray)
}

function createToc(elementArray) {
  for (let index = 0; index < elementArray.length; index++) {
    const element = elementArray.item(index)

    if (element.textContent == TOC_NAME) {
      continue
    }

    if (index != 0) {
      toc.appendChild(document.createElement('br'))
    }

    const normalizedName = normalizeName(element.textContent)
    const div = document.createElement("div")
    div.className = ENTRY_CLASS
    div.textContent = element.textContent

    const entryNode = document.createElement("a")
    entryNode.href = "#" + normalizedName
    entryNode.className = HREF_CLASS

    entryNode.appendChild(div)

    element.id = normalizedName

    toc.appendChild(entryNode)
  }
}

function normalizeName(name) {
  return name.toLowerCase().replaceAll(" ", "-").replaceAll(":", "")
}
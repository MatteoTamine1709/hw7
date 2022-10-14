// Select all paragraphs
const paragraphs = document.querySelectorAll('p');

const changeNodesStyle = (nodes, properties) => {
    for (let i = 0; i < nodes.length; i++) {
        for (let prop of properties) {
            nodes[i].style[prop.property] = prop.value;
        }
    }
}

changeNodesStyle(paragraphs, [{ property: 'backgroundColor', value: 'yellow'}, { property: 'fontWeight', value: 'bold'}]);
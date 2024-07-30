
function customRender(elementToRender, container) {
    const domElement = document.createElement(elementToRender.type);
    
    domElement.innerHTML = elementToRender.children;
    //* Not Generic. Only works for props namd href and target. See below approach for generic.
    // domElement.setAttribute('href', elementToRender.props.href)
    // domElement.setAttribute('target', elementToRender.props.target)

    for (const prop in elementToRender.props) {
        // Early return for not working on children prop
        if(prop === 'children') continue;
        domElement.setAttribute(prop, elementToRender.props[prop]);
    }

    container.appendChild(domElement);
}

const mainContainer = document.getElementById('root')

// Custom Type of element understood by our customRender method 
// This is also how react maintains the tree.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Go to google.com',
}

customRender(reactElement, mainContainer);
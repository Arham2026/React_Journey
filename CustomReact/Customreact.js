
function customRender(reactElement,container){
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        // Here we use if to not include the children into the props
        if(prop === 'children') continue;

        element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(element)
}

const reactElement = {
    type:'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const MainContainer = document.getElementById('root')

customRender(reactElement,MainContainer)
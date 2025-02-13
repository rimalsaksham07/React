
function customRender(reactElement ,Container ){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for( i in reactElement.props){
        if(i == reactElement.children ) continue
        domElement.setAttribute(i , reactElement.props[i])
    }
    Container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.getElementById('root')


customRender(reactElement , mainContainer)


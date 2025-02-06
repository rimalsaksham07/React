// yp react ko afnai libarary banauna lagera natra estia hunxa back ma react ko
function customRender(reactElement, mainContainer) {
  //   const domElement = document.createElement(reactElement.type); // elle element create garyo euta new html based on the type ma hamro ma a xa type
  //   domElement.innerHTML = reactElement.children; // click me to visit google lai add garyo esma
  //   domElement.setAttribute("href", reactElement.props.href);
  //     domElement.setAttribute("target", reactElement.props.target);// attribute add gareko a ma

  //     mainContainer.appendChild(domElement) // last ma tellai hamro main container ma append gardeko

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == 'children') continue;
    domElement.setAttribute(prop , reactElement.props[prop])
  }
  mainContainer.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);

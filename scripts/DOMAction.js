const _getDOMElem = id =>{
    return document.getElementById(id)
}

export const mapListOfDOMElements = listOfIds =>{
    const _viewElems = {}
    for(const id of listOfIds){
        _viewElems[id] = _getDOMElem(id)
    }
    return _viewElems
}
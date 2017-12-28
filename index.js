var recipes = {'sample1': 1, 'sample2':2}

function updateObjectWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function updateObjectWithKeyAndValue1(object, key, value){
    var newObj = Object.assign({}, obj)
    newObj[key] = value
    return newObj
}

export function arrayTest(array) {
    return array.length;
}

export function returnThirdSpotInArray(array) {
    return array[2];
}

export function firstKeyLastValue(obj) {
    const keys = Object.keys(obj);
    const firstKey = keys[0];
    const lastKey = keys[keys.length - 1];
    const lastValue = obj[lastKey];
    
    
    return {
        firstKey,
        lastValue };
    
}
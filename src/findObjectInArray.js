function findObjectInArray(key, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].dataKey == key) {
            return i;
        }
    }
}

export default findObjectInArray;
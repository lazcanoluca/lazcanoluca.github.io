export {
    test,
    assertEqual,
    assertFalse,
    assertTrue,
    assertEqualArrays,
    assertEqualObjects
}

async function test(description, asyncTestFunction) {
    try {
        await asyncTestFunction();
        console.log('%c✔ %s', "color:green", description);
    } catch (error) {
        console.log("%c✘ %s \n %s", "color:red", description, error);
    }
}

function assertEqual(x, y) {
    if (
        x === y || (
            typeof x === 'object' &&
            typeof y === 'object' &&
            x.length === y.length &&
            x.every((element, index) => element === y[index])
        )
    ) {
        return;
    } else {
        throw new Error(`Expected "${y}" but got "${x}".`);
    }
}

/**
 * 
 * @param {Array} arr1
 * @param {Array} arr2 
 * @returns {boolean} true if equal 
 * @throws
 */
function assertEqualArrays(arr1, arr2) {

    if (!Array.isArray(arr1)) {
        throw new Error(`${arr1} no es un array.`)
    } else if (!Array.isArray(arr2)) {
        throw new Error(`${arr2} no es un array.`)
    } else if (arr1.length !== arr2.length) {
        throw new Error('arr1.length != arr2.length')
    } else if (!arr1.every((element, index) => element === arr2[index])) {
        throw new Error('arr1 != arr2')
    }

    return true;
}

function assertEqualObjects(obj1, obj2) {
    if (!deepEqual(obj1, obj2)) {
        throw new Error('obj1 != obj2')
    }

    return true;
}

function assertTrue(x) {
    assertEqual(x, true);
}

function assertFalse(x) {
    assertEqual(x, false);
}

/* UTILS */

function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
            areObjects && !deepEqual(val1, val2) ||
            !areObjects && val1 !== val2
        ) {
            return false;
        }
    }

    return true;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}
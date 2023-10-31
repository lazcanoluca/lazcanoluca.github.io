export { test, assertEqual, assertFalse, assertTrue }

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

function assertTrue(x) {
    assertEqual(x, true);
}

function assertFalse(x) {
    assertEqual(x, false);
}
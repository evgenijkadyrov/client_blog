export const getRandomElements = <T>(
    constantArray: T[],
    numItems: number
): T[] => {
    if (numItems > constantArray.length) {
        throw new Error(
            "Cannot generate more unique elements than the array length."
        );
    }

    const randomArray: T[] = [];
    const usedIndices: Set<number> = new Set();

    while (randomArray.length < numItems) {
        const randomIndex: number = Math.floor(
            Math.random() * constantArray.length
        );

        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            randomArray.push(constantArray[randomIndex]);
        }
    }

    return randomArray;
};

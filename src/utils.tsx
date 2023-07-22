export const randomInteger = (min : number, max : number) : number => {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

export const getDirection = () => {
    return randomInteger(0, 1) === 0 ? 1 : -1;
}
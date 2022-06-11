// code your solution here
function superbowlWin(array) {
    const result = array.find((element) => element.result === "W");
    if (result) {
        return result.year;
        
    } else {
        return undefined;

    }
}
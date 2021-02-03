// There is a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.
// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or .
// The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud.
// It is always possible to win the game.

function jumpingOnClouds(arr) {

    if(arr.length === 1){
        return 0;
    }

    if(arr.length === 2){
        return 1;
    }

    let steps1 = null;
    let steps2 = null;
    if(c[1] === 0){
        steps1 = 1 + jumpingOnClouds(arr.slice(1));

    }

    if(c[2] === 0){
        steps2 = 1 + jumpingOnClouds(arr.slice(2));
    }

    if(steps1 === null){
        return steps2;
    }

    if (steps2 === null){
        return steps1;
    }
    return Math.min(steps1, steps2);

}

console.time("Starting: ");
console.log(sockMerchant([0, 0, 1, 0, 0, 1, 0]));
console.timeEnd("Finalizing: ");

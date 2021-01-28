// Question: Order a list of number by pairs. Your output is the number of pair that there is.

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    let socks = new Set();
    for (let i = 0; i < n; i++){
        if (socks.has(ar[i])){
            pairs +=1;
            socks.delete(ar[i]);
        }else{
            socks.add(ar[i]);
        }
    }
    return pairs;
}

console.time("Starting: ");
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.timeEnd("Finalizing: ");

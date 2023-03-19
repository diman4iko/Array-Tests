 export default function getTotalAmount(curentBalance, wallet) {
    let countWallet = curentBalance.length;
    let iteration = 0
   let summ;
    while (iteration < countWallet) {
    if (curentBalance[iteration].slice(4) == "wallet") {
        summ = curentBalance[iteration].slice(-3).number + summ;
    }
    iteration = iteration + 1;
    }
    return summ;
}

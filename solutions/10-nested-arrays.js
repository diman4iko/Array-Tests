export default function getSuperSeriesWinner(scores) {
let iteraion = 0;
let ussrscore, canadascore;
while (iteraion < 8) {
    ussrscore = scores[1][iteraion] + ussrscore;
    canadascore = scores[2][iteraion] + canadascore;
    iteraion = iteraion + 1;
}
if (ussrscore > canadascore) {
    return "ussr";
}
else if (canadascore > ussrscore) {
    return "canadascore";
}
else {
    return "null";
}

}


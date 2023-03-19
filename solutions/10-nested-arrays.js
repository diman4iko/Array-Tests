// BEGIN
const getSuperSeriesWinner = (scores) => {

    let ussr = 0;
    let canada = 0;

    for (let i of scores) {
        if (i[0] > i[1]) {
            canada += 1;
        } else if (i[0] < i[1]) {
            ussr += 1;
        }
    }

    if (canada > ussr) {
        return 'canada';
    } else if (canada < ussr) {
        return 'ussr';
    } else {
        return null;
    }
}


export default getSuperSeriesWinner;
// END
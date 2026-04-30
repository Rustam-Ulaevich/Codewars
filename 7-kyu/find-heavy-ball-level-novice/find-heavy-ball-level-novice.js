function findBall(scales) {
    let left = 0, right = 7;
    let res1 = scales.getWeight([0,1,2], [3,4,5]);
    if (res1 === 0) {
        let res2 = scales.getWeight([6], [7]);
        if (res2 === -1) return 6;
        if (res2 === 1) return 7;
    }
    else if (res1 === -1) {
        let res2 = scales.getWeight([0], [1]);
        if (res2 === -1) return 0;
        if (res2 === 1) return 1;
        return 2;
    }
    else {
        let res2 = scales.getWeight([3], [4]);
        if (res2 === -1) return 3;
        if (res2 === 1) return 4;
        return 5;
    }
}
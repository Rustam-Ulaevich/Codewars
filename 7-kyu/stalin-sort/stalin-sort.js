function stalinSort(array) {
    if (array.length === 0) return;
    
    let lastApproved = array[0];
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] < lastApproved) {
            array.splice(i, 1);
            i--;
        } else {
            lastApproved = array[i];
        }
    }
    
    return;
}
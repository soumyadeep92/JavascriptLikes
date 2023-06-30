function isSuperior(a1, a2) {
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] > a2[i]) {
            return true;
        }
    }
    return false;
}
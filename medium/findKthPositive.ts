function findKthPositive(arr: number[], k: number): number {
    if (arr[arr.length - 1] === arr.length) {
        return arr[arr.length - 1] + k;
    }

    let inf = 0;
    let suf = arr.length - 1;
    let pos = arr.length;

    while (inf <= suf) {
        const mid = Math.floor((inf + suf) / 2);
        const missing = arr[mid] - mid - 1;

        if (missing < k) {
            inf = mid + 1;
        } else {
            suf = mid - 1;
            pos = mid;
        }
    }

    if (pos === 0) {
        return k;
    }

    return k - (arr[pos - 1] - pos) + arr[pos - 1];
};
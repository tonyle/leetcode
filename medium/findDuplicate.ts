function findDuplicate(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        let count = 0;
        for (let num of nums) {
            if (num <= mid) {
                count++;
            }
        }

        if (mid < count) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
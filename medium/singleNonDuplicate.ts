function singleNonDuplicate(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);

        if (mid % 2 == 1) {
            mid--;
        }

        if (nums[mid] != nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 2;
        }
    }

    return nums[left];
};
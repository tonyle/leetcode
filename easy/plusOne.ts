function plusOne(digits: number[]): number[] {
    const newNumber = BigInt(digits.join('')) + BigInt('1');
   return newNumber.toString().split('').map(Number);
};
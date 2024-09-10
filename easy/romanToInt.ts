function romanToInt(s: string): number {
    let total = 0;
    for(let i=1; i <= s.length; i++) {
        let c1 = covertCharToInt(s[i-1]);
        let c2 = covertCharToInt(s[i]);
        if (c1 >= c2) {
            total += c1;
        } else {
            if (c2 > 100) {
                total += c2 - 100;
            } else if(c2 > 10) {
                total += c2 - 10;
            } else {
                total += c2 - 1;
            }
            i++;
        }
    }
    return total;
};

function covertCharToInt(c){
    let value = 0;
    switch(c) {
        case 'I': value = 1; break;
        case 'V': value = 5; break;
        case 'X': value = 10; break;
        case 'L': value = 50; break;
        case 'C': value = 100; break;
        case 'D': value = 500; break;
        case 'M': value = 1000; break;
    }
    return value;
}
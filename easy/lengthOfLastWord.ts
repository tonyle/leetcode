function lengthOfLastWord(s: string): number {
    s = s.trim();
    if (s == '') return 0;
    return s.split(' ').pop().length;
};
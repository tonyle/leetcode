function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
   if (strs.length === 1) return strs[0];

   strs.sort();

   let firstItem = strs[0];
   let lastItem = strs[strs.length - 1];

   let i = 0;
   while (i < firstItem.length && firstItem[i] === lastItem[i]) {
       i++;
   }

   return firstItem.slice(0, i);
};
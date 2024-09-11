function isValid(s: string): boolean {
    let openBrackets: string[] = [];

    for (let char of s) {
        if (char == '(' || char == '{' || char == '[') {
            openBrackets.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            if (openBrackets.length == 0) {
                return false;
            }

            const lastOpen = openBrackets.pop();

            if ((char == ')' && lastOpen != '(') ||
                (char == '}' && lastOpen != '{') ||
                (char == ']' && lastOpen != '[')) {
                return false;
            }
        }
    }

    return openBrackets.length == 0;

};
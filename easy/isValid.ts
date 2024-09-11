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

function isValid_solution2(s: string): boolean {
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ])

    const stack: string[] = [];
    for(let char of s) {
        if (map.has(char)) {
            stack.push(map.get(char) ?? '')
        } else {
            if(stack.pop() !== char) return false
        }
    }
    return stack.length == 0;
};
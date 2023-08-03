function reverseString(str) {
    let answer = "";
    for (let i = str.length - 1; i >= 0; i--) {
        answer += str[i];
    }
    return answer;
};

let input = "pw skills";
setTimeout(() => {
    console.log(reverseString(input));
}, 2000);

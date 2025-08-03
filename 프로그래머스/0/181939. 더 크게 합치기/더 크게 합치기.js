function solution(a, b) {
    var answer = 0;
    const str1 = Number(`${a}${b}`)
    const str2 = Number(`${b}${a}`)
    if(str1>=str2) {
        answer =  str1;
    } else {
        answer = str2;
    }
    return answer;
}
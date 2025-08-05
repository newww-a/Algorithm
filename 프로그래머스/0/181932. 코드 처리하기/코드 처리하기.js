function solution(code) {
    var answer = "";
    var mode = 0;
    var arr = code.split("");
    arr.map((i, k) => {
        if(i ==='1') {
            mode = 1 - mode;  
        } else if(mode === 0 && k % 2 === 0) {
            answer +=i;
        } else if (mode ===1 && k % 2 === 1) {
            answer +=i;
        } 
    });
    if(answer === '') {
        answer = 'EMPTY';
    }
    return answer;
}
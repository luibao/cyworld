let result = 
document.getElementById("myword").value;
console.log(result);

//왜 안돼냐?

const startWord = () => {
    let myword = document.getElementById("myword").value;
    //input 태그 - 입력창 자체 값 value
    let word = document.getElementById("word").innerText;
    //span태그 - 시작과 종료사이에 있음 (innerText).
    let lastWord = word[word.length -1]
    let firstWord = myword[0]
    if(firstWord == lastWord){
        document.getElementById('result').innerText = '정답입니다!';
        document.getElementById('word').innerText = myword;
        document.getElementById('myword').value = "";
    } else{
        document.getElementById('result').innerText = '오답입니다!';
        document.getElementById('myword').value = "";
    }
}

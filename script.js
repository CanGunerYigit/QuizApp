const quizData=[{
    question: "Dünyanın en uzun yapısı nedir?",
    a: "Burç Halife",
    b: "Şanghay Kulesi",
    c: "Eyfel Kulesi",
    d: "Özgürlük Anıtı",
    correct: "a",
},
{
    question: "Hangisi Fransız asıllı bir şairdir?",
    a: "Torquato Tasso",
    b: "Michelangelo",
    c: "Dante Alighieri",
    d: "Victor Hugo",
    correct: "d",
},
{
    question: "Zübük isimli kitap hangi yazarın eseridir?",
    a: "Aziz Nesin",
    b: "Halide Edip Adıvar",
    c: "Yaşar Kemal",
    d: "Sabahattin Ali",
    correct: "a",
},
{
    question: "Türk futbol tarihinde hangi takım ilk 4 yıldızı almıştır?",
    a: "Beşiktaş",
    b: "Galatasaray",
    c: "Fenerbahçe",
    d: "Trabzonspor",
    correct: "b",
}
];




const quiz = document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberOfQuestion = document.getElementById("tol-num-que");
const questionnumber = document.getElementById("question-number");
const questiontitle = document.getElementById("question");
const answerlabel = document.querySelectorAll(".answer-label");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitquiz =document.getElementById("submit");
const resultel=document.getElementById("result");
const scoreel=document.getElementById("score");

let currentQtn=0;
let answered=0;

const loadQuiz = ()=>{
    countQuestion.innerHTML = `${currentQtn +1}`;
    tottleNumberOfQuestion.innerHTML = quizData.length;
    questionnumber.innerHTML=`${currentQtn +1}`;
    questiontitle.innerHTML=quizData[currentQtn].question;
    answerlabel[0].innerHTML=quizData[currentQtn].a;
    answerlabel[1].innerHTML=quizData[currentQtn].b;
    answerlabel[2].innerHTML=quizData[currentQtn].c;
    answerlabel[3].innerHTML=quizData[currentQtn].d;

    reset();
    if(currentQtn==quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitquiz.style.display="block";
    }

}
const reset=()=>{
  allInputs.forEach((allInputs)=>{
    allInputs.checked=false;
  })
}
nextQuestionbtn.addEventListener("click",()=>{
    let answer=getSelected();
    if (answer){
        if(answer===quizData[currentQtn].correct){
            answered++;
    }
    currentQtn++;
    if(currentQtn<quizData.length){
        loadQuiz();
    }
}

});

submitquiz.addEventListener("click",()=>{
    let answer=getSelected();
    if(answer===quizData[currentQtn].correct){
        answered++;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultel.style.display="block";
        scoreel.innerHTML=`Sorular doğru cevaplandı ${answered} / ${quizData.length}`;
    }
})
const getSelected=()=>{
    let answer;
    allInputs.forEach((allInputs)=>{
        if(allInputs.checked){
            answer=allInputs.value;
        }
    });
    return answer;
}


loadQuiz();
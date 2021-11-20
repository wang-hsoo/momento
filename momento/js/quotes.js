const quotes = [

{
    quotes : "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다.",
    author : "월트 디즈니"
},
{
    quotes :  "우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다.",
    author : "존 F. 케네디"
},
{
    quotes : "변화는 우리가 누군가나 무엇, 혹은 후일을 기다린다고 찾아오지 않는다. 우리 자신이 우리가 기다리던 사람이고 우리가 바로 우리가 추구하는 변화이다",
    author : "버락 오바마 대통령"
},
{
    quotes : "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다",
    author : "오프라 윈프리"
},
{
    quotes : "남들이 할 수 있거나 하려는 일을 하지 말고 남들이 할 수 없거나 하지 않으려는 일을 하라",
    author : "최초로 대서양을 횡단한 여성 비행사 아멜리아 에어하트"
},
{
    quotes : "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다",
    author : "스티브 잡스"
},
{
    quotes : "행동은 모든 성공의 가장 기초적인 핵심이다.",
    author : "파블로 피카소"
},
{
    quotes : "용기란 죽을만큼 두려워도 무언가 해보는 것이다.",
    author : "영화배우 존 웨인"
},
{
    quotes : "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라.",
    author : "헬렌 켈러"
},
{
    quotes : "너는 머뭇거릴 수 있지만, 시간은 그렇지 않다.",
    author : "벤자민 프랭클린"
}
];


const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");


//round 반올림  ceil 올림  floor 버림

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
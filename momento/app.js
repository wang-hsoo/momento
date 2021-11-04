// const loginForm = document.querySelector("#login-form")//getElementById or querySelector 둘 중 하나 querySelector로는 classname,tagname 모두 검색이 가능해서 사용할 대상을 명확히 해야된다 
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){

    if()
    console.dir("hello" + loginInput.value);
    
}

loginButton.addEventListener("click", onLoginBtnClick);
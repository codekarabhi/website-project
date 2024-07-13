const formOpenBtn = document.querySelector("#form-open"),
Home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => Home.classList.add("show"));
formCloseBtn.addEventListener("click",() => Home.classList.remove("show"));

 pwShowHide.forEach(icon=> {
   icon.addEventListener("click",() => {
    let getPwInput = icon.parentElement.querySelector("input");
   if(getPwInput === "password"){
    getPwInput.type = "text";
    icon.classList.replace("uil-eye-slash","uil-eye")
   }
   else{ getPwInput.type = "password";
   icon.classList.replace("uil-eye-","uil-eye-slash")

   }
    console.log(getPwInput);
   })
 })
signupBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});
let navbar = document.getElementById("navbar");
let switche = document.getElementById("flexSwitchCheckDefault");
let userName = document.getElementById('userName');
let pass = document.getElementById('pass');
let web = document.getElementById('web');
let submit = document.getElementById("submit");
let get = document.getElementById("get");
const passBox = document.getElementById("passBox");
const body = document.getElementById("body");
let passWords = document.getElementById("passWords");
let deleteBtn = document.getElementById("delete")

passWords.innerHTML = localStorage.getItem("passWords");

var darkMode = false;

switche.addEventListener("click", function () {
    if (darkMode == false) {
        navbar.classList.add("bg-dark");

        document.body.classList.add("text-white", "dm");

        userName.classList.add("text-white", "dm");
        pass.classList.add("text-white", "dm");
        web.classList.add("text-white", "dm");


        darkMode = true;
    }
    else {
        navbar.classList.remove("bg-dark");

        document.body.classList.remove("text-white", "dm");
        document.body.classList.add("lm");

        userName.classList.remove("text-white", "dm");
        pass.classList.remove("text-white", "dm");
        web.classList.remove("text-white", "dm");

        darkMode = false;
    };
});

submit.addEventListener("click", () => {
    if (userName.value && pass.value && web.value) {
        let nameValue = userName.value;
        let passValue = pass.value;
        let webValue = web.value;

        if (webValue.startsWith("www.") == true) {
            let passDiv = document.createElement("div");
            let userNameBox = document.createElement("div");
            let passwordBox = document.createElement("div");
            let webBox = document.createElement("div");

            passDiv.classList.add("passDiv");

            userNameBox.innerHTML = nameValue;
            passwordBox.innerHTML = passValue;
            webBox.innerHTML = webValue;

            passBox.appendChild(passWords);
            passWords.appendChild(passDiv);
            passDiv.appendChild(userNameBox);
            passDiv.appendChild(passwordBox);
            passDiv.appendChild(webBox);

            userNameBox.classList.add("smthn")
            passwordBox.classList.add("smthn")
            webBox.classList.add("smthn", "last")

            localStorage.setItem("passWords", passWords.innerHTML);
            window.scrollTo(0, body.scrollHeight);

            setTimeout(() => {
                userName.value = "";
                pass.value = "";
                web.value = "";
            }, 1);
        }

        else {
            alert("invalid website");
        };

        if (passValue.length < 12) {
            alert("Your password is not secure! Make it longer than 8 characters");
        };
    }
    else {
        alert("Fill all first you IDIOT!!");
    };
});

deleteBtn.addEventListener("click", () => {
    localStorage.clear();
    passWords.innerHTML = localStorage.getItem("passWords");
    setTimeout(() => {
        alert("deleted everything!!!")
    }, 100);
})
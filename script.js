let btn = document.querySelector("button");
let dosti = document.querySelector("h4");
let flag = "ADD";

let frnd = btn.addEventListener("click", () => {
    if (flag === "ADD") {
        flag = "REMOVE";
        dosti.innerHTML = "Friends";
        dosti.style.color = "green";
        btn.style.backgroundColor = "gray";
        btn.innerHTML = "Remove";
    } else {
        flag = "ADD";
        dosti.innerHTML = "Stranger";
        dosti.style.color = "red";
        btn.style.backgroundColor = "cadetblue";
        btn.innerHTML = "Add Friend";
    }
});

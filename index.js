document.querySelector("form").addEventListener("submit", fun);

function fun() {
    event.preventDefault();
    var name = document.querySelector("#task").value;
    var priority = document.querySelector("#priority").value;
    var tr = document.createElement("tr")
    var tag1 = document.createElement("td")
    var tag2 = document.createElement("td")
    var tag3 = document.createElement("td")
    tag1.innerText = name;
    tag2.innerText = priority;
    tag3.innerText = "Delete";
    tr.append(tag1, tag2, tag3);
    document.querySelector("tbody").append(tr)
    if (priority == "High") {
        tag2.style.backgroundColor = "red"
    } else {
        tag2.style.backgroundColor = "green"
    }
    tag3.style.color = "red"
    tag3.style.cursor = "pointer"
    tag3.addEventListener("click", fun1);



}
function fun1() {
    this.parentElement.remove();
}



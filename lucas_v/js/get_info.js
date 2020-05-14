window.onload = function load_json() {
    document.getElementById("json").innerHTML = JSON.parse(localStorage.getItem("0")).title;
}
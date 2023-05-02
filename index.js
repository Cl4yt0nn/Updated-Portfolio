function changePage(x) {
    console.log("changed")
    for (let i = 0;  i < 3; i++) {
        document.getElementsByClassName("page")[i].style.display = "none";
    }
    document.getElementsByClassName("page")[x].style.display = "inline";
}
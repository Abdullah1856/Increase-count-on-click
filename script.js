let countbtn = document.getElementById("count_no")
let counts = 0
function increase_count() {
    counts = counts + 1
    countbtn.innerText = counts
}
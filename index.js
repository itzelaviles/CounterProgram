let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");
let counter = document.getElementById("countLbl"); 
count = 0;

decreaseBtn.onclick = function() {
    count--;
    counter.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    counter.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    counter.textContent = count;
}

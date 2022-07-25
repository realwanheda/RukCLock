let time = document.getElementById("time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
check = true;

let arr = [0, 0, 0];
num = 0;




start.addEventListener("click", () => {
    if (check) {
        timeRef = setInterval(() => {
            check = false;
            if (arr[2] < 10) {
                arr[2] = "0" + arr[2];
            }
            if (arr[1] < 10) {
                arr[1] = "0" + arr[1];
            }
            if (arr[0] < 10) {
                arr[0] = "0" + arr[0];
            }

            time.innerHTML = `${arr[0]}:${arr[1]}:${arr[2]}`;
            arr[0] = parseInt(arr[0]);
            arr[1] = parseInt(arr[1]);
            arr[2] = parseInt(arr[2]);

            arr[2]++;

            if (arr[2] > 59) {
                arr[1]++;

                arr[2] = 0;
            }
            if (arr[1] > 59) {
                arr[0]++;
                arr[1] = 0;
            }


        }, 1000);
    }


})
stop.addEventListener("click", () => {
    check = true;
    clearInterval(timeRef);

})

reset.addEventListener("click", () => {
    check = true;
    num = 0;
    time.innerHTML = "00:00:00";
    arr[0] = 0;
    arr[1] = 0;
    arr[2] = 0;
    clearInterval(timeRef);
})

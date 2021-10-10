window.addEventListener("load", (event) => {
    let Winapprove = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let xWinnerVal = 0;
    let oWinnerVal = 0;
    let x = true;
    let o = false;
    let active;
    let squares = document.querySelectorAll("#board > div");
    let bton = document.querySelector(".btn");

    squares.forEach((sq) => {
        sq.classList.add("square");
        sq.innerHTML = " ";

    });
    squares.forEach((sq) => {
        sq.onclick = (event) => {
            if (x && sq.innerHTML == " ") {
                sq.classList.add("X");
                sq.innerHTML = 'X';
                x = false;
                o = true;
            } else if (o && sq.innerHTML == " ") {
                sq.classList.add("O");
                sq.innerHTML = 'O';
                o = false;
                x = true;
            }

            active = checkWinner();

            if (active == 1) {
                document.querySelector("div#status").classList.add("you-won");
                document.querySelector("div#status").innerHTML = `Congratulations! ${sq.innerHTML} is the Winner!`;

                squares.forEach((square) => {
                    square.onclick = (event) => {
                        event.preventDefault();
                    }
                })

            }

        }

        sq.onmouseover = (event) => {
            sq.style.transition = "all .3s ease-in-out"
            sq.classList.add("hover");
        }

        sq.onmouseout = (event) => {
            sq.classList.remove("hover");
        }
        let checkWinner = () => {

            for (item = 0; Winapprove.length; item++) {

                Winapprove[item].forEach(element => {
                    if (squares[element].classList.contains("X")) {
                        xWinnerVal++;
                    } else if (squares[element].classList.contains("O")) {
                        oWinnerVal++;
                    }
                });
                if (xWinnerVal == 3 || oWinnerVal == 3) {
                    return 1;
                }
                xWinnerVal = 0;
                oWinnerVal = 0;
                if (item < Winapprove.length - 1) {
                    continue;
                }
                return 0;

            }
        }


    });

    bton.addEventListener('click', (event) => {
        squares.forEach((sq) => location.reload());
    })
});
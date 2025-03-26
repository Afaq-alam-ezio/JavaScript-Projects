let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");

// console.log(buttons);

buttons.forEach((n) => {

    // console.log(n);
    n.addEventListener('click', (e) => {     // parameter " e " represents the current clicked colored box, also arrow function is used here

        switch (e.target.id) {

                case "grey":
                    body.style.backgroundColor = e.target.id;
                    break;
                
                case "purple":
                    body.style.backgroundColor = e.target.id;
                    break;

                case "blue":
                    body.style.backgroundColor = e.target.id;
                    break;

                case "yellow":
                    body.style.backgroundColor = e.target.id;
                    break;
            }
    })
})

    

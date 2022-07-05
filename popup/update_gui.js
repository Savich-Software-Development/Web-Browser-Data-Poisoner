let x = 1;

function listenForClicks() {

    document.addEventListener("click", (e) => {

        function changePopup(){
            location.href=`popup${x}.html`;
        }

        if (e.target.classList.contains("option")) {
            x++;
            changePopup();
        }
        if (e.target.classList.contains("return")) {
            x = 1;
            changePopup();
        }
    });
}
listenForClicks();

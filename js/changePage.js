function changePage() {

    document.addEventListener("click", (e) => {

        function changePopup(x){
            location.href=`popup_${x}.html`;
        }
        if (e.target.getAttribute('id') === "poison-browser-history-option") {
            changePopup("browser_history");
        }
        if (e.target.getAttribute('id') === "main-page") {
            changePopup("main");
        }
/*
        Browser reading .querySelector('#main-page') as null and throwing an error

        document.querySelector('#main-page').addEventListener('click', () => {
            changePopup("main");
        });
        document.querySelector('#poison-browser-history-option').addEventListener('click', () => {
            changePopup("browser_history");
        });

 */

    });
}
changePage();


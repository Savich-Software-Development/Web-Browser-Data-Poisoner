function changePage() {

    document.addEventListener("click", (e) => {

        function changePopup(x){
            location.href=`popup_${x}.html`;
        }
        if (e.target.getAttribute('id') === "browser_history") {
            changePopup("browser_history");
        }
        if (e.target.getAttribute('id') === "main") {
            changePopup("main");
        }
    });
}
changePage();


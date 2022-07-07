//TODO Implement Features
const urlList = ["https://twitter.com", "https://example.org"];
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));


function browserHistoryPoisoner() {
    function createTab(x) {
        browser.tabs.create({url: x});
    }

    function removeTab() {
        const gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
        gettingActiveTab.then((tabs) => {
            browser.tabs.remove(tabs[0].id);
        });
    }

    const tabLoop = async () => {
        for (const a of urlList) {
            createTab(a);
            await wait(3000)
            removeTab();
        }
    }
    tabLoop();
}

document.addEventListener("click", (e) => {
    if (e.target.getAttribute('id') === "browser_history_poisoner") {
        browserHistoryPoisoner();
    }
});
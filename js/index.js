const urlList = ["https://twitter.com", "https://example.org"];
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

document.querySelector('#browser-history-poisoner-run').addEventListener("click", () => {
        browserHistoryPoisoner();
});
document.querySelector('#open-new-window').addEventListener("click", () => {
    openNewWindow();
});

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
            await wait(2000);
            removeTab();
        }
    }
    tabLoop();
}

function openNewWindow() {
    browser.windows.create();
}
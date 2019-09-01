let search = {};

function getJson(url) {
    return fetch(url).then(response => response.json()).catch(error => [])
}

function searchEvent(event) {
    const { target } = event;
    
    if (target.classList.contains("site__search-bar")) {
        const searchResultsNode = target.parentNode.parentNode.querySelector(".site__search-bar-results");
        
        if (!searchResultsNode) {
            return;
        }

        while (searchResultsNode.firstElementChild) {searchResultsNode.removeChild(searchResultsNode.firstElementChild)}
        
        const searchResults = search.search(target.value)
        
        for (const searchResult of searchResults) {
            const searchResultItemElement = document.createElement("a");
            searchResultItemElement.classList.add("search-results__item");
            searchResultItemElement.href = searchResult.url
            searchResultItemElement.textContent = searchResult.name

            searchResultsNode.appendChild(searchResultItemElement);
        }
    }
}

async function loadIndex(url, container) {
    const json = await getJson(url);
    const options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "name"
        ]
    }

    const fuse = new Fuse(json, options);
    search = fuse;
    
    const searchBars = document.querySelectorAll(".site__search");

    for (const searchBar of searchBars) { 
        const searchBarNode = searchBar.querySelector(".site__search-bar.form__input");
        searchBar.addEventListener("input", searchEvent);
    }
}

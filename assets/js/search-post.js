let search = {};

function getJson(url) {
    return fetch(url).then(response => response.json()).catch(error => console.error(error))
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

        if (event.key === "Escape") {
            target.value = "";
            target.blur();
            while (searchResultsNode.firstElementChild) {searchResultsNode.removeChild(searchResultsNode.firstElementChild)}
            return;
        }
        else if (event.key === "Enter" && searchResults.length === 1) {
            window.location.href = searchResults[0].url
        }
        
        for (const searchResult of searchResults) {
            const searchResultItemElement = document.createElement("a");
            searchResultItemElement.classList.add("search-results__item");
            searchResultItemElement.href = searchResult.url
            searchResultItemElement.textContent = searchResult.title

            searchResultsNode.appendChild(searchResultItemElement);
        }
    }
}

async function loadIndex(url, container) {
    const json = await getJson(url);
    
    console.log("Search index successfully fetched.")
    
    const options = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "title",
            "url"
        ]
    }
    
    const searchBars = document.querySelectorAll(".site__search");

    if (searchBars.length <= 0) {
        console.error("There's no site search widgets. Cancelling search engine activation.");
        return;
    }

    // Setting up Fuse search engine
    const fuse = new Fuse(json, options);
    search = fuse;
    

    for (const searchBar of searchBars) { 
        const searchBarNode = searchBar.querySelector(".site__search-bar.form__input");
        searchBar.addEventListener("keyup", searchEvent);
    }

    console.log("Site-wide search engine successfully activated.")
}

loadIndex("{{ $.Site.BaseURL }}/index.search.json"); 

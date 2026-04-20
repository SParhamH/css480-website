function sortList() {
    let ul = document.getElementById("interestList");   // get the list
    let items = Array.from(ul.getElementsByTagName("li"));  // get all items in the list and put it in an Array                  

    items.sort(function(a, b) { // Sort the list in alphabetical
        return a.textContent.localeCompare(b.textContent);
    });

    ul.innerHTML = "";  // Clear the old list

    for (let i = 0; i < items.length; i++) {    // Add the sorted items
        ul.appendChild(items[i]);
    }
}
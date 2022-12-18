let firstPage = document.querySelector(".first-page")
let secondPage = document.querySelector(".second-page")

// References: 
// http://jsfiddle.net/GSA2A/2/
// https://jqueryui.com/resources/demos/sortable/display-grid.html
// https://api.jqueryui.com/sortable
// https://api.jqueryui.com/sortable/#option-connectWith
// https://icssort.netlify.app/

function init(){
    let itemsContainer = document.querySelector("#masterList")

    itemsContainer.innerHTML = "";
    for(let i=0; i<itemList.length; i++){
        itemsContainer.innerHTML += 
        '<li class="menu-item" id='+i+'><span>'+ itemList[i] +'</span></li>'
    }
}

$( function() {
    init();
});

function nextPage(){
    firstPage.style.display = "none";
    secondPage.style.display = "block";
    let sortableContainer = $(".sortable-container");
    let resultsContainer = $(".results-container");
    for(let i=2; i<sortableContainer.children()[0].children.length; i++){
        sortableContainerRow=sortableContainer.children()[0].children[i].children; 
        for(let j=1; j<sortableContainerRow.length; j++){ 
            let cell = sortableContainerRow[j]; 
            resultsContainer.children()[0].children[i].children[j].innerHTML = cell.innerHTML;
        } 
      }
    window.scrollTo(0, 0);
}

function goToMainPage(){
    window.location.href = "https://www.senseofdirection.com.au/";
}

function prevPage(){
    firstPage.style.display = "block";
    secondPage.style.display = "none";
    window.scrollTo(0, document.body.scrollHeight);
}
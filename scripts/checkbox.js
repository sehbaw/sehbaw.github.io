/*let checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']")); 
let galleryGrid = document.getElementById("gallery");  

checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
    checkbox.addEventListener("change", () => filterCards());
}); 

function filterCards() {
    let checked = Array.from(document.querySelectorAll("input[type='checkbox']:checked"));

    // Remove all classes from galleryGrid
    galleryGrid.className = "";

    // Add classes based on checked checkboxes
    checked.forEach((checkbox) => {
        galleryGrid.classList.add(checkbox.id);
    });
}*/ 

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
  checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
          const selectedFilters = Array.from(checkboxes)
              .filter((checkbox) => checkbox.checked)
              .map((checkbox) => checkbox.id);
          
          console.log("Selected Filters:", selectedFilters);

          const cards = document.querySelectorAll(".card");
          cards.forEach(function (card) {
              const cardClasses = card.className.split(" ");
              console.log("Card Classes:", cardClasses);

              card.style.display = selectedFilters.every((filter) => cardClasses.includes(`type-${filter}`)) ? "block" : "none";
          });
      });
  });
});

/*new cursoreffects.trailingCursor({
  particles: 15,
  rate: 0.8,
  baseImageSrc: "data:image/png;base64,iVB...",
});*/


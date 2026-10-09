/*====================================================
  SOMMERS DESIGN — ARTWORK GALLERY
====================================================*/

/* Artwork information */

const artworks = {

    "against-the-current": {
        image: "images/against-the-current-2018.jpg",
        title: "AGAINST THE CURRENT",
        details: '24" x 46" ACRYLIC ON CANVAS'
    },

    "blue-sentinel": {
        image: "images/blue-sentinel-print-2018.jpg",
        title: "BLUE SENTINEL",
        details: '24" x 26" ACRYLIC ON CANVAS'
    },

    "on-the-green": {
        image: "images/on-the-green-2018.jpg",
        title: "ON THE GREEN",
        details: '24" x 46" ACRYLIC ON CANVAS'
    },

    "blue-summit": {
        image: "images/blue-summit-2006.jpg",
        title: "BLUE SUMMIT",
        details: '24" x 46" ACRYLIC ON CANVAS'
    },

    "blue-summit-ii": {
        image: "images/blue-summit-ii-2019.jpg",
        title: "BLUE SUMMIT II",
        details: '24" x 46" ACRYLIC ON CANVAS'
    },

    "kerry-hill-portrait": {
        image: "images/kerry-hill-portrait-2018.jpg",
        title: "KERRY HILL PORTRAIT",
        details: '24" x 46" ACRYLIC ON CANVAS'
    },

    "the-weight-of-blue": {
        image: "images/the-weight-of-blue-2018.jpg",
        title: "THE WEIGHT OF BLUE",
        details: '24" x 46" ACRYLIC ON CANVAS'
    },

    "the-rabbit-with-no-name": {
        image: "images/no-name-rabbit-cover.jpg",
        title: "THE RABBIT WITH NO NAME",
        details: "CHILDREN'S BOOK ILLUSTRATION"
    },

    "the-rabbit-with-no-name-cover": {
        image: "images/no-name-rabbit.jpg",
        title: "THE RABBIT WITH NO NAME",
        details: "CHILDREN'S BOOK ILLUSTRATION"
    },

    "cassanova-cover": {
        image: "images/casanova-cover.jpg",
        title: "CASSANOVA THE SWAN WHO EXPLORED CASCO BAY",
        details: "CHILDREN'S BOOK ILLUSTRATION"
    }

};


/*====================================================
  GALLERY ELEMENTS
====================================================*/

const galleryView = document.getElementById("gallery-view");
const artworkView = document.getElementById("artwork-view");

const artworkImage = document.getElementById("artwork-image");
const artworkTitle = document.getElementById("artwork-title");
const artworkDescription = document.getElementById("artwork-description");

let galleryScrollPosition = 0;
let lastHotspot = null;


/*====================================================
  OPEN ARTWORK
====================================================*/

document.querySelectorAll(".gallery-hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const artworkId = button.dataset.artwork;
        const artwork = artworks[artworkId];

        if (!artwork) return;

        galleryScrollPosition = window.scrollY;
        lastHotspot = button;

        artworkImage.src = artwork.image;
        artworkImage.alt = artwork.title;

        artworkTitle.textContent = artwork.title;
        artworkDescription.textContent = artwork.details;

        // Measure gallery height before hiding it
        const galleryHeight = galleryView.offsetHeight;

        // Switch from gallery to individual artwork
        galleryView.hidden = true;
        artworkView.hidden = false;

        // Preserve the page height and scroll position
        artworkView.style.minHeight = galleryHeight + "px";

        window.scrollTo(0, galleryScrollPosition);

        artworkImage.focus({ preventScroll: true });

    });

});

/*====================================================
  RETURN TO GALLERY
====================================================*/

function closeArtwork() {

    artworkView.hidden = true;
    galleryView.hidden = false;

    window.scrollTo(0, galleryScrollPosition);

    if (lastHotspot) {
        lastHotspot.focus({ preventScroll: true });
    }

}


/* Tap artwork to return */

artworkImage.addEventListener("click", closeArtwork);


/* Keyboard accessibility */

artworkImage.addEventListener("keydown", event => {

    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        closeArtwork();
    }

});


/* Escape key returns to gallery */

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && !artworkView.hidden) {
        closeArtwork();
    }

});
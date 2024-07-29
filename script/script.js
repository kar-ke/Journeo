
// Navbar functions 
function openSearchbar() { document.querySelector('.search-bar').classList.add('open') };
function closeSearchBar() { document.querySelector('.search-bar').classList.remove('open') };

function openMainNav() { document.querySelector('.main-nav').classList.add('open') };
function closeMainNav() { document.querySelector('.main-nav').classList.remove('open') };

// scroll animation
const article = document.getElementById('article');
const quote = document.getElementById('quote1');
const features = document.getElementById('features-1');
const places = document.getElementById('places-grid');
const otherFeatures = document.getElementById('other-features-section');
const blogs = document.getElementById('blogs-section');

window.onscroll = function () {
    documentTopVal = window.scrollY;
    let minusVal = 700;
    let articleTopVal = article.offsetTop;
    let quoteTopVal = quote.offsetTop;
    let featuresTopVal = features.offsetTop;
    let placesTopVal = places.offsetTop;
    let otherFeaturesTopVal = otherFeatures.offsetTop;
    let blogsTopVal = blogs.offsetTop;


    if (documentTopVal > articleTopVal - minusVal) {
        sectionAnim(article, articleTopVal, "horizontal_slide_animation");
    }
    if (documentTopVal > quoteTopVal - minusVal) {
        sectionAnim(quote, quoteTopVal, "vertical_slide_animation"); 
    }
    if (documentTopVal > featuresTopVal - minusVal) {
        sectionAnim(features, featuresTopVal, "horizontal_slide_animation");
    }
    if (documentTopVal > placesTopVal - minusVal) {
        sectionAnim(places, placesTopVal, "vertical_slide_animation");
    }
    if (documentTopVal > otherFeaturesTopVal - minusVal) {
        sectionAnim(otherFeatures, otherFeaturesTopVal, "horizontal_slide_animation");
    }
    if (documentTopVal > blogsTopVal - minusVal) {
        sectionAnim(blogs, blogsTopVal, "vertical_slide_animation");
    }
};

function sectionAnim(section, sectionTopVal, bottom_anim) {
    if (documentTopVal > sectionTopVal - 600) {
        section.classList.add(bottom_anim);
    }
};


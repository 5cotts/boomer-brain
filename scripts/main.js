const PATH = "assets/2022_01_15_First_Design";
const IMAGES = [
    PATH + "/bloated.png",
    PATH + "/og_text.png",
    PATH + "/spotlight.png",
    PATH + "/20_20_vision.png",
    PATH + "/swirly.png",
];

function setImage(imgPath) {
    document.getElementById("imgClickAndChange").src = imgPath;
}

function randomImage() {
    var num = Math.floor( Math.random() * IMAGES.length );
    var img = IMAGES[ num ];
    setImage(img);
};

function changeImage() {
    let img = IMAGES.shift();
    IMAGES.push(img)
    setImage(img);
};

function contact(contactEmail) {
    // TODO: Email to come. Need to set up DNS.
    var emailStr = `<strike><a href="">${contactEmail}</a></strike>`;
    return emailStr;
};

function makeObjClickable(htmlObj, url) {
    return `<a href=${url}>${htmlObj}</a>`;
};

function randomImgFromArray(arr) {
    var num = Math.floor( Math.random() * arr.length );
    var img = arr[ num ];
    var imgStr = `<img src="${img}" alt="${img}" class="centered-img">`;
    return imgStr;
};

function contact(contactEmail) {
    // TODO: Email to come. Need to set up DNS.
    var emailStr = `<strike><a href="">${contactEmail}</a></strike>`;
    return emailStr;
};

function makeObjClickable(htmlObj, url) {
    return `<a href=${url}>${htmlObj}</a>`;
};

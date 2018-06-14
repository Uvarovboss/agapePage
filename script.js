var images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];
var img_element = document.getElementById("img_slider");
 var counter = 0;
img_element.src = images[counter];

function next() {
    if (counter + 1 == images.length) {
        counter = 0;
    }
    counter++;
    img_element.src = images[counter];
};

// function prev() {
//     if (counter - 1 == -1) {
//         counter = images.length;
//     }
//     counter--;
//     img_element.src = images[counter];
// };
var timerId = setInterval(function() {
    document.getElementById('img_slider');
    next()
}, 2000);
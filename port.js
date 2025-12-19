const pics = [
    './image/pics-1.jpg',
    './image/pics-2.jpg',
    './image/pics-3.jpg',
    './image/pics-4.jpg',
    './image/pics-5.jpg',
];

const nextbtn = document.querySelector(".btn-text");
const img = document.querySelector(".image");
let counter = 1;

nextbtn.addEventListener('click', function () 
{
    if (counter === pics.length) {
        counter = 0;
    }
    img.src = pics[counter];
    counter++;
});

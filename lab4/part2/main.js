/*
Name: Thomas McLean
File: main.js
Date: August 1st 2025

Javascript used for an image gallery
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];

/* Declaring the alternative text for each image file */
const imageAlts = {
    "pic1.jpg" : "A close up picture of a blue eye on a white person with blonde eyebrows",
    "pic2.jpg" : "A picture of an odd, wavy rock formation caused by erosion",
    "pic3.jpg" : "A picture of purple and white flowers blooming",
    "pic4.jpg" : "A picture of an ancient Egyptian mural, depicting the gods Iris, wearing rainbow wings, Anubis, having the head of the Jackal, and Ra, wearing clothing of a Pharoah",
    "pic5.jpg" : "A picture of a beautiful brown butterfly resting on a large green leaf with its wings spread"
}

/* Looping through images */

for( file of imageFiles){

    const imageLink = file;
    const imageAlt = imageAlts[file];

    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageLink);
    newImage.setAttribute('alt', imageAlt);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */

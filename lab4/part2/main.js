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

//Constant to store the filepath to the image folder
const imageFilePath = "images/";

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

    //Store the image link and alt text in consts
    const imageLink = imageFilePath+file;
    const imageAlt = imageAlts[file];

    //Create new image element and set its src and alt to the values stored above
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageLink);
    newImage.setAttribute('alt', imageAlt);
    
    //Add event listener to change the displayed image when the new image is clicked in the thumbBar
    newImage.addEventListener("click", function(){
        displayedImage.setAttribute('src', imageLink);
        displayedImage.setAttribute('alt', imageAlt);
    });

    //Append image to thumbbar
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(){

    //Declare variables to hold the new values
    let newClass, newText, newColour;

    //Get the buttons current class
    const btnClass = btn.getAttribute("class");
    
    //Change values based on which class is detected
    if(btnClass == "dark"){

       newClass = "light";
       newText = "Lighten";
       newColour = "rgb(0 0 0 / 50%)"

    } else if (btnClass == "light"){

        newClass = "dark";
        newText = "Darken";
        newColour = "rgb(0 0 0 / 0%)"
    }

    //Change the button and overlay according to the new values
    btn.setAttribute("class", newClass);
    btn.setAttribute("textContent", newText);
    overlay.style.backgroundColor = newColour;
});
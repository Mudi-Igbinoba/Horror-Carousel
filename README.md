# Horror Carousel
This is a remix of the Carousel Project from [Scrimba's Frontend Developer Career Path](https://scrimba.com/learn/frontend).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   Change slides automatically
-   Change slides using the previous and next button
-   Change slides using the thumbnails at the bottom of the slide
-   Hover over a slide to see more information about that slide
-   Pause the automatic scroll by hovering over a slide

### Screenshot

![download](https://user-images.githubusercontent.com/65790714/186096060-9137fa83-f4d9-4f3b-8e9e-5373dbcc5981.jpg)


### Links
-   Solution URL: [https://github.com/Mudi-Igbinoba/Horror-Carousel/](https://github.com/Mudi-Igbinoba/Horror-Carousel/)
-   Live Site URL: [https://mudi-igbinoba.github.io/Horror-Carousel/](https://mudi-igbinoba.github.io/Horror-Carousel/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   JavaScript
-   The DOM

### What I learned

I learned how to use `setInterval` as shown below:
```js
let carouselTimer = setInterval(() => {
        goToNextSlide()
    }, 2000);
    
    //pauses scroll on slides on hover
    const pause = () => {
        clearInterval(carouselTimer);
    }

    //resumes scroll on slides
    const resume = () => {
        clearInterval(carouselTimer);        
        carouselTimer = setInterval(() => {
            goToNextSlide()
        }, 2000);
    }
    
    carousel.addEventListener('mouseenter', pause)
    carousel.addEventListener('mouseleave', resume) 
```

## Author

-   Twitter - [@Mudi_Igbinoba](https://www.twitter.com/mudi_igbinoba)
-   Github - [@mudi-igbinoba](https://github.com/mudi-igbinoba)
-   LinkedIn - [Osamudiame Igbinoba](https://www.linkedin.com/in/osamudiame-igbinoba/)

## Acknowledgments

A big shoutout goes out to my mentor [@msarit](https://github.com/msarit) for introducing me to this [Course](https://scrimba.com/learn/frontend).

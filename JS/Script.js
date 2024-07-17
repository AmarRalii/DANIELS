
$('.bars').click(function(){
    $('.links').slideToggle(600)
})

$('.link').click(function(){
    $('.links').slideUp()
})

$('.nav-link').click(function(){
    $('.nav-link').removeClass('active');
    $(this).toggleClass('active');
});

$('.nav-item').click(function(){
    $('.nav-item').removeClass('active');
    $(this).toggleClass('active');
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-text');
    const textArray = ['Amar Reda', 'Front End Developer','Software Engineer'];
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[currentIndex].length && !isDeleting) {
            currentText += textArray[currentIndex].charAt(charIndex);
            charIndex++;
            textElement.textContent = currentText;
            setTimeout(type, 50); // faster typing speed
        } else if (charIndex > 0 && isDeleting) {
            currentText = currentText.substring(0, currentText.length - 1);
            charIndex--;
            textElement.textContent = currentText;
            setTimeout(type, 50); // faster deleting speed
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                currentIndex = (currentIndex + 1) % textArray.length;
            }
            setTimeout(type, 500); // shorter pause before typing/deleting again
        }
    }

    type();
});

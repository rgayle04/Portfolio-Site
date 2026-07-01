document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I'm Ryel Gayle!";
    const element = document.getElementById("animated-text");
    let index = 0;

    function type() {
        if (index < text.length){
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 75);
        }
    }
    type();
});

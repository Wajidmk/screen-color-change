document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', function(event) {
        // Get the mouse position
        const x = event.clientX;
        const y = event.clientY;
        
        // Calculate color values based on mouse position
        const red = Math.round((x / window.innerWidth) * 255);
        const green = Math.round((y / window.innerHeight) * 255);
        const blue = 150; // You can adjust this value for different effects
        
        // Set the background color
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
});

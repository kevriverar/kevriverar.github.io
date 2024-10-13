    const images = [
        'images/background.jpeg',
        'images/background2.jpeg',  
    ];
    let currentIndex = 0;

    function changeImage() {
        const imgElement = document.getElementById('about');
        imgElement.style.opacity = 0; 

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; 
            imgElement.src = images[currentIndex]; 
            imgElement.style.opacity = 1; 
        }, 1000); 
    }

    setInterval(changeImage, 5000);
const thumbnails = document.querySelectorAll('.thumbnail');
const fullImage = document.getElementById('fullImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const fullImageUrl = thumbnail.getAttribute('data-full');
        fullImage.setAttribute('src', fullImageUrl);
        fullImage.setAttribute('alt', thumbnail.alt);
    });
});
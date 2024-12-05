const ratingScreen = document.getElementById('rating');
const sucessScreen = document.getElementById('success');
const ratingValue = document.getElementById('rating-value');

document.getElementById('submit').addEventListener('click', 
    function(event) {
        event.preventDefault();
        
        let rating = document.querySelector('input[name="rating"]:checked');

        if(rating == null){
            alert('Please select a rating');
        } else {
            ratingScreen.classList.add('hidden');
            sucessScreen.classList.remove('hidden');
            ratingValue.innerHTML = rating.value;
        }

});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
});



const hidden_elements = document.getElementsByTagName('section');



for (let i = 0; i < hidden_elements.length; i++) {
    if (hidden_elements[i].id !== "pricing"){
        observer.observe(hidden_elements[i]);
    }else{
        hidden_elements[i].classList.add('active');
    }
}
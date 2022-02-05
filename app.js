const acordingHeader = document.querySelectorAll('.faccordion-header');
const acordingBody = document.querySelectorAll('.faccordion-body');


acordingHeader.forEach( data => {
    data.addEventListener('click', function(){
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    
    });
});


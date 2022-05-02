if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {


    let button = document.getElementsByClassName('btn-light')[0];
    button.addEventListener('click', () => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', output);
        xhr.open('GET', 'JS/AJAX_requests/faq.txt');
        xhr.send();
        console.log(xhr)
    })
}

function output(data){
    let Faq = document.getElementsByClassName("faq")[0];
    Faq.innerHTML = this.responseText;
    }

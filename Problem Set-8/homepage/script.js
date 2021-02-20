function sendMessage()
{
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if (name === '' || email === '' || message === '')
    {
        document.querySelector('.alert').style.display = 'block';
    }
    else
    {
        alert("ERROR 500: We will learn backend on the next lesson. Sorry this message could NOT be send.")
    }
}

function hidde(){
    document.querySelector('.alert').style.display = 'none';
}
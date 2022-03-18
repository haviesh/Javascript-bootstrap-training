document.querySelector('.get-jokes').addEventListener('click',getJokes);

function getJokes(e){
const number = document.querySelector('input').value;
console.log(number);

const xhr = new XMLHttpRequest();
xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

xhr.onload = function(){
    if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        
        let output= '';
        console.log(response.value);
        if(response.type === "success"){

            response.value.forEach(function(joke) {
                output += `<li>${joke.joke}</li>`;
                this.number ='';
            });

            document.querySelector('.jokes').innerHTML =output;
            console.log(response.value.joke);
        }
        else{
            output+='<li>Something went wrong</li>'
        }
    }
}


xhr.send();
e.preventDefault();

}
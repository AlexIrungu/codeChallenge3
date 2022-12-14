const url = 'http://localhost:3000/films'
const listHolder = document.getElementById('films')
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementsByClassName('film item')[0].remove()
    fetchMovies(url)
})
//Create fetch function to get the data from the db.json
function fetchMovies(url){
    fetch(url)
    .then(resp => resp.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}
//function to display the titles of the movies as a list
function displayMovie(movie){
    const list = document.createElement('li')
    list.style.cursor="flex"
    list.textContent= (movie.title)
    listHolder.appendChild(list)
    addClickEvent()
}
//Adding the click event listener
function addClickEvent(){
    let children=listHolder.children
    for(let i=0; i<children.length; i++){
        let child=children[i]
        // console.log(child) <= to check if have the right child
        child.addEventListener('click',() => {
            fetch(`${url}/${i+1}`)
            .then(res => res.json())
            .then(movie => {
                document.getElementById('buy-ticket').textContent = 'Buy Ticket'
                setUpMovieDetails(movie)
            })
        })
    }
}
//Posting the movie details
// the poster to be dispalyed on the div with poster id
function setUpMovieDetails(funMovie){
    const preview = document.getElementById('movie-poster')
    preview.src = funMovie.poster;
//title
    const movieTitle = document.querySelector('#title');
    movieTitle.textContent = funMovie.title;
    //runtime
    const movieTime = document.querySelector('#runtime');
    movieTime.textContent = `${funMovie.runtime} minutes`;
    //description
    const movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = funMovie.description;
    //Showtime
    const showTime = document.querySelector('#showtime')
    showTime.textContent = funMovie.showtime;
    // available tickets =capacity - tickets sold
    const tickets  = document.querySelector('#ticket-number')
    tickets.textContent = funMovie.capacity -funMovie.tickets_sold;
}
// //Sold out
const btn = document.getElementById('buy-ticket')
        btn.addEventListener('click', function(event){
            let remainingTickets = document.querySelector('#ticket-number').textContent
            event.preventDefault()
            if(remainingTickets > 0){
                document.querySelector('#ticket-number').textContent  = remainingTickets-1
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })
 //
// function displayFirstMovie(loadFirstMovie){
//     const preview = document.getElementById('movie-poster')
//     preview.src = loadFirstMovie.poster;
// //title
//     const movieTitle = document.querySelector('#title');
//     movieTitle.textContent = loadFirstMovie.title;
//     //runtime
//     const movieTime = document.querySelector('#runtime');
//     movieTime.textContent = `${loadFirstMovie.runtime} minutes`;
//     //description
//     const movieDescription = document.querySelector('#film-info');
//     movieDescription.textContent = loadFirstMovie.description;
//     //Showtime
//     const showTime = document.querySelector('#showtime')
//     showTime.textContent = loadFirstMovie.showtime;
//     // available tickets =capacity - tickets sold
//     const tickets  = document.querySelector('#ticket-number')
//     tickets.textContent = loadFirstMovie.capacity -funMovie.tickets_sold;
// }

// function loadFirstMovie(nameMovie){
//     fetch(url)
//         .then(res=>res.json())
//         .then((data)=>{
            
//         })
// }
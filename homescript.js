class post {
    constructor(title, type, date, content, image) {
        this.title = title; 
        this.type = type;
        this.date = date;
        this.content = content;
        this.image = image;
    }
}

// date is new Date( year, month, day, time) e.g. new Date(2025, 6,7,12); = noon of jan 1st 2025

var post1con = "If you’re in Midtown Toronto, Paris Baguette is a must-visit. This cute little bakery has a wide range of beautiful pastries and baked goods. Perfect for a sweet treat while exploring the area! ";
var post2con = "A yummy bowl with taco-seasoned ground beef, roasted sweet potato chunks, cottage cheese, and fresh avocado, all topped with a hot-honey drizzle. This meal is a great option for meal prepping! ";
var post3con = "I spent a relaxing day at the beach club in Qatar with my mom.";
var post4con = "I enjoy doing Pilates at home by following YouTube videos, using a light set of dumbbells to target my arms with plenty of repetitions. It’s a fun, budget-friendly way to stay active, build strength, and get a good workout without needing a gym.";
var post5con = "During my trip to Qatar, I visited the Mina District, known for its colorful, pastel buildings. Although it’s a popular tourist spot, it wasn’t very busy when I went, which made it perfect for taking photos. The bright sun made the colors even more vibrant!";
var post6con = "I enjoy strength training at the gym and usually split my workouts into separate leg and upper-body days. My upper-body routines often vary, but leg days are my favorite. Focusing on different muscle groups keeps my workouts balanced, challenging, and fun.";
var post7con = "I just finished reading the first book in the ACOTAR series by Sarah J. Maas — my very first fantasy novel! I usually stay away from this genre, but after seeing so many good reviews and hearing everyone on BookTok talk about it, I decided to give it a try. I couldn’t put it down once I started and I’m already on the second book. I’m excited to see where the story goes!";
var post8con = "Another highlight from my trip to Qatar was visiting one of the malls. I was blown away by the grand architecture and design—it was even more impressive than I expected! The space felt luxurious and beautifully crafted, making it a memorable spot to explore and take photos.";
var post9con = "I’ve been running at a track near my apartment recently. It’s super convenient being so close, and I feel safe running alongside other people. I enjoy going in the mornings before work or in the evenings after, and I know I’m going to miss it during the winter!";
var post10con = "One of my favorite parts of my trip to Qatar was getting henna done at Souq Waqif. I used to love getting henna done whenever I visited India as a child and have started doing it myself, but there’s nothing like having it done by a professional. It was a fun and memorable experience that brought back childhood memories.";
var post11con = "During my vacation in Doha, I captured this beautiful building on Pearl Island. I loved how the light bounced off the structure, making it look so majestic. The symmetry in the building caught my eye, and I’m really pleased with how this photo turned out.";
var post12con = "I went to the National Bank Open in Toronto with my boyfriend, and it was so much fun! We got to see some highly ranked players in action and even made it onto the jumbotron. We’re already excited to go again next year for the women’s tournament!";

const post1 = new post("Bakery", "Food", new Date(2025, 9, 5, 12), post1con, 'images/Food/pastries.jpeg');
const post2 = new post("Ground Beef Bowls", "Food", new Date(2025, 8, 3, 12), post2con, 'images/Food/bowl.jpeg');
const post3 = new post("Qatar Beach day", "Fun", new Date(2025, 7, 3, 12), post3con, 'images/Fun/beach.JPG');
const post4 = new post("At-home pilates", "Workouts", new Date(2025, 1, 26, 12), post4con, 'images/Workouts/pilates.jpeg');
const post5 = new post("Mina District", "Photography", new Date(2025, 1, 19, 12), post5con, 'images/Photography/building.JPG');
const post6 = new post("Gym Workout", "Workouts", new Date(2025, 1, 12,12), post6con, 'images/Workouts/gym.JPG');
const post7 = new post("ACOTAR", "Fun", new Date(2025, 1, 5, 12), post7con, 'images/Fun/book.jpg');
const post8 = new post("Qatar Mall", "Photography", new Date(2025, 0, 29, 12), post8con, 'images/Photography/mall.JPG');
const post9 = new post("Run", "Workout", new Date(2025, 0, 22, 12), post9con, 'images/Workouts/run.jpeg');
const post10 = new post("Henna", "Fun", new Date(2025, 0, 15, 12), post10con, 'images/Fun/henna.jpeg');
const post11 = new post("Pearl Island", "Photpgraphy", new Date(2025, 0, 8, 12), post11con, 'images/Photography/tower.JPG');
const post12 = new post("National Bank Open", "Fun", new Date(2025, 5, 2, 12), post12con, 'images/Fun/tennis.jpeg');

let array = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12];

const targetDiv= document.getElementById('posts'); // target div for posts 

function addposts(array){
    for (let i=0; i<13; i++) {
        var postDiv = document.createElement('div'); // new post div
        targetDiv.appendChild(postDiv); //append new post
        postDiv.id = array[i].title; // post id = post title 
        postDiv.classList.add('eachPost');

        var postHeader = document.createElement('div'); //header of post
        postHeader.id = 'postHeader';
        var postBody = document.createElement('div'); //body of post
        postBody.id= 'postBody';

        postDiv.appendChild(postHeader); //append header to post div
        postDiv.appendChild(postBody); // append body to post div

        var postTitle = document.createElement('h4'); // post title
        postTitle.id = 'postTitle';
        postTitle.textContent = array[i].title;

        var postDate = document.createElement('p'); // post date
        postDate.id= 'postDate';
        postDate.textContent= array[i].date.toDateString();

        postHeader.appendChild(postTitle);
        postHeader.appendChild(postDate);

        var postImg = document.createElement('img');
        postImg.id = 'postImg';
        postImg.src = array[i].image;

        var postContent = document.createElement('p');
        postContent.id= 'postContent';
        postContent.textContent= array[i].content;

        postBody.appendChild(postImg);
        postBody.appendChild(postContent);

    }
}

document.addEventListener('DOMContentLoaded', () => {
    addposts(array);
});



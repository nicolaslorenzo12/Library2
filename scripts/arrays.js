var martijnsList = 	[
						{book : "War and Peace", author : "Leo Tolstoy" }, 
						{book : "Song of Solomon", author : "Toni Morrison" },
						{book : "The Shadow of the Wind", author : "Carlos Ruiz Zafon" },
						{book : "The Lord of the Rings", author : "J.R.R. Tolkien" },
						{book : "The Satanic Verses", author : "Salman Rushdie" },
						{book : "Don Quixote", author : "Miguel de Cervantes" },
						{book : "The Golden Compass", author : "Philip Pullman" },
						{book : "1984", author : "George Orwell" },
						{book : "The Kite Runner", author : "Khaled Hosseini" },
						{book : "Little Women", author : "Louisa May Alcott" },
						{book : "The Cloud Atlas", author : "David Mitchell" },
						{book : "The Picture of Dorian Gray", author : "Oscar Wilde" },
						{book : "Lolita", author : "Vladimir Nabokov" },
						{book : "The Help", author : "Kathryn Stockett" },
						{book : "The Liar’s Club", author : "Mary Karr" },
						{book : "Moby-Dick", author : "Herman Melville" },
						{book : "Moby-Dick", author : "Thomas Pynchon" },
					]

function myFunction(){
	text = "<ol>";
	for (i = 0; i < martijnsList.length; i++) {
		text += "<li>" + martijnsList[i].book + " of " + martijnsList[i].author + "</li>";
	}
	text += "</ol>";
	document.getElementById("demo").innerHTML = text;
} 


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}   
   for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activ", "");
  }
  slides[slideIndex-1].style.display = "block"
  dots[slideIndex-1].className += " activ"
  setTimeout(showSlides, 2000);
}

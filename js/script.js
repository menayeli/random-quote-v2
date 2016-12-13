// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var viewedQuotes = [];

function getRandomQuote() {
    var quotation = Math.floor(Math.random() * (quotes.length));
    
 // For quotes not to repeat
	var splicedQuote = quotes.splice(quotation, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
}


function printQuote() {
  var selectedRandomQuote = getRandomQuote();
  var html = 
  '<p class="quote">' + selectedRandomQuote.quote + '</p>'
  + '<p class="source">' + selectedRandomQuote.source +
  '<span class="citation">' + selectedRandomQuote.citation + '</span>'
  + '<span class="year">' + selectedRandomQuote.year + '</span>' + ' '+'<span class="tags">' + selectedRandomQuote.tags + '</span>' + ' </p>';
  document.getElementById('quote-box').innerHTML = html;


}




// Array to hold quotes, source, citation & year
var quotes = [
  {
    quote: 'Be with a man that loves your soul',
    source: 'r.h. Sin',
    citation: 'Online',
    year: '2016',
    tags: 'Love',

  },
  {
    quote: 'You Gain Strength, Courage, and Confidence by every experience in which you really stop to look fear in the face. You must do the things you think you cannot do',
    source: 'Elenor Roosevelt',
    citation: 'Online',
    year: 'Unknown',
    tags: 'Inspiration'
  
  },
    {
    quote: 'Wars will begin where you will, but they do not end where you please',
    source: 'Niccolo Machiavelli',
    citation: 'Online',
    year: 'Unknown',
    tags: 'Inspiration',
   
  },
      {
    quote: 'Regard your soldiers as your children, and they will follow you into the deepest valleys; look upon them as your own beloved sons, and they will stand by you even unto death',
    source: 'Sun Tzu',
    citation: 'Online',
    year: 'Unknown',
    tags: 'Inspiration',
 
  },
      {
    quote: 'Strive not to be a sucess but rather to be of value',
    source: 'Albert Einstein',
    citation: 'Online',
    year: 'Unknown',
    tags: 'Inspiration',
 
  }
];






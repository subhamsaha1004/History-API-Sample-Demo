window.onload = function(){
	// Content for the pages.
  // Note: You would probably want to load the page content using AJAX in a 
  // real application.
  var pages = {
  	index: {
  		title: "Home PAge",
  		content: "This is the home page. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, facilis."
  	},
  	about: {
  		title: "About Page",
  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, repellat."
  	},
  	products: {
  		title: "Products PAge",
  		content: "This is the home page. \n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, facilis."
  	},
  	contact: {
  		title: "Contact Page",
  		content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, repellat."
  	}
  };

  var navLinks = document.querySelectorAll('.load-content'),
  		titleElement = document.getElementById('title'),
  		contentElement = document.getElementById('content');

  function updateContent(stateObj){
  	if(stateObj){
  		document.title = stateObj.title;
  		titleElement.innerHTML = stateObj.title;
  		contentElement.innerHTML = stateObj.content;
  	}
  }

  [].forEach.call(navLinks, function(link){
  	link.addEventListener('click', function(e){
  		e.preventDefault();

  		// Fetch the page data from the url of the link
  		var pageUrl = this.getAttribute('href'), // could have done this.href OR this.attributes['href'].value
  				pageData = pages[pageUrl.split('.')[0]];

  		// Update the content and title
  		updateContent(pageData);

  		// Create a new history item
  		window.history.pushState(pageData, pageData.title, pageUrl);
  	}, false);
  });

  // Update the page content and title when popstate is called like when 'back' or 'forward' button is pressed
  window.addEventListener('popstate', function(e){
  	updateContent(e.state);
  });

  // Load the home page initially
  updateContent(pages.index);
  // Update the history event so that the state object contains data for the home page
  window.history.replaceState(pages.index, pages.index.title, '');
};
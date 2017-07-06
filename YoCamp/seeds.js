var mongoose 		= require("mongoose");
var	Campground 	= require("./models/campground");
var Comment		= require("./models/comment");

var campgrounds = [
	{name:'Post 1', image:'https://source.unsplash.com/MthLYI2WLCs', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
	{name:'Post 2', image:'https://source.unsplash.com/vrqa96bolAc', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
	{name:'Post 3', image:'https://source.unsplash.com/SoC1ex6sI4w', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
]

function seedDB(){
  Campground.remove({}, function(err){
    if(err) {  console.log(err);                      }
    else    {
      console.log("removed campgrounds") ;
      campgrounds.forEach(function(seed){
        Campground.create(seed,	function(err, campground){
        		if(err){
        			console.log(err);
        		} else {
							Comment.remove({}, function(err){
								if(err) {console.log(err);	}
								else{
									console.log("New Campground ");
		              Comment.create({
		                  text: 'first comment',
		                  author: 'Homer'
		                },  function(err, comment){
		                  if(err){ console.log(err); }
		                  else{
		                    campground.comments.push(comment);
		                    campground.save();
		                    console.log("craeted new comment");
		                	}
										});
								}
							});
              }
        		 });
      });
    }
  });
}

module.exports = seedDB;

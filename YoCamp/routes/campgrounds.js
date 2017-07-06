var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

//INDEX Route
router.get('/', function(req, res){
	//Get all campgrounds
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		} else {
			res.render("campgrounds/campgrounds", {campgrounds: allcampgrounds});
		}
	});
});

// NEW Route
router.get('/new', isLoggedIn, function(req, res){
	res.render('campgrounds/new');
});

//CREATE Route
router.post('/', isLoggedIn, function(req, res){
	//get data from form and add to db
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var author = {
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {
		name: name,
		image: image,
		description:description,
		author: author

	}
	Campground.create(newCampground, function(err, newcamp){
		if(err){ console.log(err)}
		else{ res.redirect("campgrounds/campground");}
	});
});

//SHOW Route
router.get('/:id', function(req, res){
		//find the cg with provided ID
		Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
			if(err){ console.log(err);}
			else {
				//render show template
				console.log(foundCampground);
				res.render("campgrounds/show", {campground: foundCampground});
			}
		});
});

//EDIT Route
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
		Campground.findById(req.params.id, function(err, foundCampground){
				res.render("campgrounds/edit", {campground: foundCampground});
		});
});

//UPDATE Route
router.put("/:id", checkCampgroundOwnership, function(req, res){

	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){	res.redirect("campgrounds");	}
		else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

// DESTROY Route
router.delete('/:id', checkCampgroundOwnership, function(req, res){
		Campground.findByIdAndRemove(req.params.id, function(err){
			if(err){
				res.redirect("/campgrounds");
			} else {
				res.redirect("/campgrounds");
			}
		});
});

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please Login First!");
	res.redirect("/login");
}

function checkCampgroundOwnership(req, res, next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){ console.log(err); res.redirect("back");	}
			else {
				if(foundCampground.author.id.equals(req.user._id)){
					next();
				} else{
					req.flash("error", "You don't have permission to do that!");
					res.redirect("back");
				}
			}
		});
	}	else {
		res.redirect("back");
	}
}

module.exports = router;

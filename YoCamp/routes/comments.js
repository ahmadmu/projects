var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

//			====
// Comments Routes
//			====

router.get("/new", isLoggedIn, function(req, res){
		Campground.findById(req.params.id, function(err,campground){
			if(err){	console.log(err);			}
			else {
				res.render("comments/new", {campground: campground});
			}
		});
});

router.post("/", isLoggedIn, function(req, res){
		var comment = req.body.comment;
		Campground.findById(req.params.id, function(err, campground){
			if(err){	console.log(err);			}
			else{
					Comment.create(comment, function(err, comment){
						if(err){ console.log(err);	}
						else {
							comment.author.id = req.user._id;
							comment.author.username = req.user.username;
							comment.save();
							campground.comments.push(comment);
							campground.save();
							res.redirect("/campgrounds/" + campground._id);
						}
					});
			}
		});
});

router.get("/:comment_id/edit", checkCommentOwnership, function(req, res){
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){ console.log(err);	res.redirect("back");}
			else {
				res.render("comments/edit", {campground_id: req.params.id, comment: foundComment})
			}
		});
});

router.put("/:comment_id/", checkCommentOwnership, function(req, res){
		Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment){
			if(err){	console.log(err); res.redirect("back");	}
			else {
				res.redirect("/campgrounds/" + req.params.id);
			}
		});
});

router.delete("/:comment_id", checkCommentOwnership, function(req, res){
		Comment.findByIdAndRemove(req.params.comment_id, function(err){
			if(err){	log.console(err);}
			res.redirect("/campgrounds/" + req.params.id);
		});
})

function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please Login First!");
	res.redirect("/login");
}

function checkCommentOwnership(req, res, next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){ console.log(err); res.redirect("back");	}
			else {
				if(foundComment.author.id.equals(req.user._id)){
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

var express 					= require("express"),
		app								=	express(),
		mongoose 					= require("mongoose"),
		bodyParser	 			= require("body-parser"),
		passport					= require("passport"),
		LocalStrategy 		= require("passport-local"),
		methodOverride		= require("method-override"),
		flash							= require("connect-flash");

var	Campground 				= require("./models/campground"),
		seedDB						=	require("./seeds"),
		Comment						= require("./models/comment"),
		User							= require("./models/user");

var commentRoutes 		=	require("./routes/comments"),
		campgroundRoutes	= require("./routes/campgrounds"),
		indexRoutes				= require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static"));

// seedDB();

// PASSPORT Config
app.use(require("express-session")({
	secret: "Secret Session",
	resave: false,
	saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});


app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, function () {
  console.log('Server started!');
});

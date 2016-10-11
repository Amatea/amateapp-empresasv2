
'use strict';


var	user = require('../../app/controllers/huellaController');
var passport = require('passport');


module.exports = function(app) {
	
  app.get('/', user.render);
	
  app.route('/api/articles')
	   .get(user.list)
	   .post(user.create);
	
	app.route('/api/articles/:userId')
	   .get(user.read)
	   .put(user.update)
	
	app.param('userId', user.userByID);

	//Configurar las rutas 'signup'
  app.route('/signup')
     .get(user.renderSignup)
     .post(user.signup);

  //Configurar las routes 'signin'
  app.route('/signin')
     .get(user.renderSignin)
     .post(passport.authenticate('local', {
       successRedirect: '/',
       failureRedirect: '/signup',
       failureFlash: true
     }));
     
 // Configurar las rutas Google OAuth 
  app.get('/oauth/google', passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
    failureRedirect: '/signin'
  }));
  app.get('/oauth/google/callback', passport.authenticate('google', {
    failureRedirect: '/signin',
    successRedirect: '/'
  }));

  // Configurar las rutas Facebook

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook',{ 
    successRedirect: '/', 
    failureRedirect: '/signin' 
  }));

  //Configurar la route 'signout'
  app.get('/signout', user.signout);

	};
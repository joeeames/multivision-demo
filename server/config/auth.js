

exports.authenticate = function(req, res, next) {
  var auth = req.passport.authenticate('local', function(err, user) {
    if(err) { return next(err);}
    if(!user) { res.send({success: false});}
    req.logIn(user, function(err) {
      if(err) { return next(err);}
      res.send({success:true, user: user});
    });
  });
  auth(req, res, next);
};

exports.requiresApiLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    res.status(403);
    res.end();
  } else {
    next()
  }
};
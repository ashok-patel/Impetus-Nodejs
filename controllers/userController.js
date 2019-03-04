
// Display list of all Users.
exports.list = function(req, res) {

    res.send('User list');
};

// Display detail page for a specific User.
exports.detail = function(req, res) {
    res.send(' User detail: ' + req.params.id);
};
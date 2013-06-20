clinImmuneApp.factory('Page', function() {
    var title = "You Should Not Be Seeing This!";
    return {
        title: function() {return title;},
        setTitle: function(newTitle) { title = newTitle }
    };
});
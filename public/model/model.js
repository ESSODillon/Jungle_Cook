var MODEL = (function () {
    var _getView = function (viewScreen) {

        $.get(`/views/${viewScreen}/${viewScreen}.html`, 
        
        function (value) {
            $("#landing").html(value);    
        });  

    };

    return {
        getView: _getView,
    };

})();
Template.search.helpers({
    searchPeople: function() {
        /*if ($("#searchBar").val() !== "") {
            var searchContents =$("#searchBar").val();
        } else {
            var searchContents = Session.get("searchValue");
        }

        var reg = new RegExp("/^.*",searchContents,".*$/");
        console.log(searchContents);*/
        return Session.get("resultSet");
    }
});
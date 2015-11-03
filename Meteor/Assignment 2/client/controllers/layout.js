Template.layout.events({
    "click #showAdd": function() {
        Session.set("showAdd", true);
    },
    "click #showEdit": function() {
        Session.set("showEdit", true);
    },
    "click #searchButton": function() {
        Session.set("resultSet","");
        console.log($("#searchBar").val());
        Session.set("searchField", $("#searchBar").val());
        searchContents = Session.get("searchField");
        var reg = new RegExp("^.*" + searchContents + ".*$", "i");
        console.log(reg);
        var cursorPos = people.find({$or:[
                                    {firstName:   {$regex: reg}},
                                    {lastName:    {$regex: reg}},
                                    {gender:      {$regex: reg}},
                                    {phoneNember: {$regex: reg}},
                                    {email:       {$regex: reg}}
                                    ]});
        item = cursorPos.fetch();
        Session.set("resultSet",item);
    }
});
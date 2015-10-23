 /*global people*/
 
Meteor.startup(function(){
    if (people.find().count() === 0) {
      people.insert({firstName: "Jimmy", lastName: "Barnes", gpa: 5});
      people.insert({firstName: "GabeN", lastName: "ewell", gpa: 4});
      people.insert({firstName: "Barry", lastName:"Longbottom", gpa: 5});
      people.insert({firstName: "Gary", lastName:"Shortbottom", gpa: 2});
      people.insert({firstName: "Harry", lastName:"Longtop", gpa: 7});
      people.insert({firstName: "Larry", lastName:"Shorttop", gpa: 6});
      people.insert({firstName: "John", lastName:"Cena", gpa: "4"});
      people.insert({firstName: "Ayy", lastName:"Lmao", gpa: "4"});
    }
});
if(Meteor.isServer) {
    Meteor.startup(function(){
        people.remove({});
        if (people.find().count() === 0) {
            people.insert({UUID: "c53c0676-00ad-4fe1-9620-e8535c6f50d2", image: "default.png", firstName: "Elnora", lastName: "Dibello", gender: "female", latitude: 27.5969, longitude: 77.0214, phoneNumber: "4108930083", email: "shraddha@treponematous.co.uk"});
            people.insert({UUID: "3ed3981b-aac9-49a9-9e7e-bb8296c029c5", image: "default.png", firstName: "Denny", lastName: "Ruddle", gender: "female", latitude: 53.713, longitude: 144.634, phoneNumber: "0437274404", email: "tricar@petition.com"});
            people.insert({UUID: "01239308-84cd-46f9-a745-f04babaa4c56", image: "default.png", firstName: "Lloyd", lastName: "Hingston", gender: "female", latitude: 69.592, longitude: 40.0511, phoneNumber: "6316518624", email: "perisplanchnic@unluted.org"});
            people.insert({UUID: "3341c912-31ba-42b2-b094-03acf0afa48b", image: "default.png", firstName: "Tyra", lastName: "Wiersteiner", gender: "female", latitude: 55.7513, longitude: 135.461, phoneNumber: "4923433672", email: "pallette@leucocyte.co.uk"});
            people.insert({UUID: "8c52644b-a529-434b-9dda-ba6d7cbd1298", image: "default.png", firstName: "Abbey", lastName: "Hardison", gender: "female", latitude: 69.2307, longitude: 64.5772, phoneNumber: "8010768490", email: "lethe@megatypy.net"});
            people.insert({UUID: "28d91775-d116-4e9e-af9f-8ecc338d6253", image: "default.png", firstName: "Louanne", lastName: "Borreta", gender: "female", latitude: 25.0445, longitude: 155.764, phoneNumber: "0036139652", email: "philotria@senci.co.uk"});
            people.insert({UUID: "5d44767f-cf9a-4d1b-bb1b-8c26c3513902", image: "default.png", firstName: "Rana", lastName: "Lambermont", gender: "female", latitude: 77.8424, longitude: 55.0229, phoneNumber: "4373861110", email: "hairtail@aegerian.co.uk"});
            people.insert({UUID: "28743e67-526e-4e15-86ae-0ea90130f981", image: "default.png", firstName: "Ling", lastName: "Margot", gender: "female", latitude: 13.6888, longitude: 117.952, phoneNumber: "4403049324", email: "thomaean@alco.org"});
            people.insert({UUID: "3bece268-1ffc-4dee-a505-026b4e705bb7", image: "default.png", firstName: "Luanna", lastName: "Weghorst", gender: "female", latitude: 35.3047, longitude: 120.344, phoneNumber: "7189400589", email: "precommissure@bless.net"});
            people.insert({UUID: "561b767e-8ba5-40c4-a21b-1824ced0afb4", image: "default.png", firstName: "Tesha", lastName: "Blomme", gender: "female", latitude: 34.4704, longitude: 35.7732, phoneNumber: "2983630669", email: "pseudencephalic@raia.co.uk"});
            people.insert({UUID: "a1cbaf45-9a4d-431b-aa1e-020d9b88ba51", image: "default.png", firstName: "Blair", lastName: "Fallie", gender: "female", latitude: 43.8788, longitude: 129.453, phoneNumber: "7079224876", email: "selfist@bucklum.net"});
            people.insert({UUID: "559179aa-8f77-45ca-9a71-e28ad6d956cd", image: "default.png", firstName: "Barry", lastName: "Desilets", gender: "female", latitude: 52.3761, longitude: 111.181, phoneNumber: "4186069779", email: "antapodosis@fermentable.org"});
            people.insert({UUID: "af6d6324-377f-4227-8dd5-19fc5cbc33e1", image: "default.png", firstName: "Colby", lastName: "Peed", gender: "female", latitude: 70.1158, longitude: 13.4099, phoneNumber: "3306328428", email: "depend@snoutish.org"});
            people.insert({UUID: "422a9882-480a-43c1-8208-728798d932ce", image: "default.png", firstName: "Selina", lastName: "Inches", gender: "female", latitude: 20.51, longitude: 17.0572, phoneNumber: "7819705226", email: "cerebellipetal@unexemplary.org"});
            people.insert({UUID: "ad17eb7e-3dab-46c0-92f7-d69cfa4eaba1", image: "default.png", firstName: "Melonie", lastName: "Swarthout", gender: "female", latitude: 70.8638, longitude: 12.2623, phoneNumber: "9743268888", email: "impressionable@categorization.co.uk"});
            people.insert({UUID: "e2f0703f-8299-4066-902f-380327b113e7", image: "default.png", firstName: "Chang", lastName: "Skorcz", gender: "female", latitude: 27.3197, longitude: 12.3995, phoneNumber: "0252861934", email: "theoricon@unisotropic.com"});
            people.insert({UUID: "692d401c-f6ca-42bf-8034-646ffba2469a", image: "default.png", firstName: "Page", lastName: "Fredric", gender: "female", latitude: 53.5072, longitude: 155, phoneNumber: "5622223788", email: "stationery@unpossessing.org"});
            people.insert({UUID: "7c26e145-3d23-4ccc-a932-b1184860f4ec", image: "default.png", firstName: "Bernetta", lastName: "Abron", gender: "female", latitude: 14.8982, longitude: 89.7049, phoneNumber: "9598071788", email: "congest@geologist.org"});
            people.insert({UUID: "80ee14e8-b792-4b60-b468-c61d5a43c548", image: "default.png", firstName: "Karissa", lastName: "Colabrese", gender: "female", latitude: 74.815, longitude: 178.435, phoneNumber: "0827490940", email: "UUIDlehood@calycophoran.edu"});
            people.insert({UUID: "4b1f6328-c2c5-497c-b9e3-2cc4511f7aa9", image: "default.png", firstName: "Dorthy", lastName: "Michaeli", gender: "female", latitude: 6.56958, longitude: 119.597, phoneNumber: "6885602982", email: "zirconifluorUUIDe@gUUIDdea.org"});
            people.insert({UUID: "b80a2561-223d-402a-a233-6f7fe5e063f5", image: "default.png", firstName: "Rickie", lastName: "Capra", gender: "female", latitude: 80.9682, longitude: 74.7422, phoneNumber: "0790041909", email: "titularly@irretraceable.com"});
            people.insert({UUID: "b3fad368-37b3-47b2-82d8-eef5af67dcbe", image: "default.png", firstName: "Magdalene", lastName: "Zaharchuk", gender: "female", latitude: 30.6896, longitude: 131.128, phoneNumber: "0009110959", email: "prelectorship@synthesist.edu"});
            people.insert({UUID: "c907d2a7-1769-48ba-b00d-d20b5d9f6816", image: "default.png", firstName: "Jaclyn", lastName: "Minacci", gender: "female", latitude: 10.1352, longitude: 177.027, phoneNumber: "7312158742", email: "cephalochordata@reafforestation.edu"});
            people.insert({UUID: "919ab7e4-e0d5-4569-9936-0042856879f1", image: "default.png", firstName: "Gerald", lastName: "SUUIDman", gender: "female", latitude: 36.4519, longitude: 63.0728, phoneNumber: "4308335490", email: "loyally@gaiety.edu"});
            people.insert({UUID: "8ea48bd5-f05a-4509-a96c-b2ff094b13d0", image: "default.png", firstName: "Jonell", lastName: "Ramsdale", gender: "female", latitude: 33.916, longitude: 21.4684, phoneNumber: "7523165902", email: "overinsistence@urostegal.org"});
            people.insert({UUID: "fd6871c5-b9fe-46a6-a74f-4cdf7a53644b", image: "default.png", firstName: "Boyce", lastName: "Hopperstad", gender: "female", latitude: 1.03544, longitude: 174.691, phoneNumber: "0789385503", email: "artocarpad@outlearn.edu"});
            people.insert({UUID: "38b2f468-4393-4b6f-8822-95c9b365f760", image: "default.png", firstName: "Louella", lastName: "Dannenfelser", gender: "female", latitude: 45.2098, longitude: 71.3015, phoneNumber: "8726337475", email: "unfructified@hucksterage.co.uk"});
            people.insert({UUID: "33bc3d2d-2c52-402f-8477-c0394aa022ce", image: "default.png", firstName: "Scot", lastName: "Kundinger", gender: "female", latitude: 37.5086, longitude: 4.44085, phoneNumber: "7917147400", email: "supramoral@izdubar.co.uk"});
            people.insert({UUID: "71c731ae-fb95-42a7-8860-da081b5da409", image: "default.png", firstName: "Dot", lastName: "Breitenbach", gender: "female", latitude: 29.1774, longitude: 12.8472, phoneNumber: "2438506292", email: "dissemblance@unplatted.org"});
            people.insert({UUID: "7a1f3c84-720d-4f93-a3f2-6daf15270de3", image: "default.png", firstName: "Thad", lastName: "Vissering", gender: "female", latitude: 57.5136, longitude: 113.208, phoneNumber: "6977614812", email: "trebellian@forefinger.net"});
            people.insert({UUID: "73f8b7a5-8503-48f7-b2ac-fa1222f3aa1a", image: "default.png", firstName: "Lincoln", lastName: "Haugen", gender: "female", latitude: 4.86677, longitude: 82.0759, phoneNumber: "2691713084", email: "proviso@meteorgraph.org"});
            people.insert({UUID: "33804f85-057a-4339-9417-fdc6d1575770", image: "default.png", firstName: "Ursula", lastName: "Redmond", gender: "female", latitude: 39.2811, longitude: 162.688, phoneNumber: "5556710836", email: "arrestable@tripetaloUUID.org"});
            people.insert({UUID: "07ae75ee-64a8-41a4-992b-db4acbbf48e8", image: "default.png", firstName: "Willodean", lastName: "Hannemann", gender: "female", latitude: 72.6808, longitude: 149.772, phoneNumber: "6638806852", email: "quaverer@sanguinarily.net"});
            people.insert({UUID: "c189a134-1f9e-443b-92ff-1b9cda44f9b3", image: "default.png", firstName: "Chanel", lastName: "Lush", gender: "female", latitude: 55.563, longitude: 121.377, phoneNumber: "1722513406", email: "apocatharsis@thickskin.edu"});
            people.insert({UUID: "21c7bcd9-8ae6-4809-9134-1032d796ee6d", image: "default.png", firstName: "Robbie", lastName: "Hockensmith", gender: "female", latitude: 40.9058, longitude: 162.607, phoneNumber: "9805231343", email: "unplump@heathenism.org"});
            people.insert({UUID: "266ad37a-a8f9-4f40-a787-524d2e56c7bd", image: "default.png", firstName: "Robena", lastName: "Beaudin", gender: "female", latitude: 11.6652, longitude: 86.3542, phoneNumber: "7402738583", email: "paretically@nonleprous.net"});
            people.insert({UUID: "71c01ea4-a3b7-46fa-b3e9-12d9bba465c6", image: "default.png", firstName: "Micheal", lastName: "Weger", gender: "female", latitude: 18.0813, longitude: 156.108, phoneNumber: "5568194316", email: "kinology@synchronology.net"});
            people.insert({UUID: "ceb6f0e6-dc02-4159-95ff-c57f7ae66417", image: "default.png", firstName: "Regenia", lastName: "Pitchford", gender: "female", latitude: 50.2961, longitude: 155.491, phoneNumber: "2131466370", email: "untense@aglauros.net"});
            people.insert({UUID: "5599c626-8cca-42d6-9b99-8ff06dbb4af7", image: "default.png", firstName: "Sammie", lastName: "Hakim", gender: "male", latitude: 77.3619, longitude: 76.8533, phoneNumber: "7765461512", email: "mightnt@steady.co.uk"});
            people.insert({UUID: "8bc0fee9-fe0b-4199-8bf5-5ca880b15691", image: "default.png", firstName: "Shayne", lastName: "Rizzotto", gender: "male", latitude: 35.2917, longitude: 39.0201, phoneNumber: "2672422657", email: "joseph@incircumspection.com"});
            people.insert({UUID: "de71159d-7abf-4a9b-b2a7-972ba22892d5", image: "default.png", firstName: "Particia", lastName: "Marinelli", gender: "male", latitude: 44.9983, longitude: 52.03, phoneNumber: "8957826550", email: "codirector@procompromise.edu"});
            people.insert({UUID: "58df97a3-e263-49a1-bfbc-30ae9f0724c4", image: "default.png", firstName: "Lezlie", lastName: "Thamann", gender: "male", latitude: 53.9308, longitude: 87.7825, phoneNumber: "7421307789", email: "locker@tenantableness.co.uk"});
            people.insert({UUID: "16a8af61-8778-42d9-9bed-699c2c0ce2f8", image: "default.png", firstName: "Domenica", lastName: "Alderton", gender: "male", latitude: 25.5807, longitude: 71.207, phoneNumber: "9347732235", email: "whussle@cookishly.edu"});
            people.insert({UUID: "76c804cf-8823-421f-8fd2-6b00bf534a11", image: "default.png", firstName: "Dwayne", lastName: "Kirkey", gender: "male", latitude: 2.52418, longitude: 57.0355, phoneNumber: "5965547748", email: "ashthroat@treatyite.net"});
            people.insert({UUID: "4b2a8c2a-ea81-4b22-a2d0-68f7831d3652", image: "default.png", firstName: "Krystal", lastName: "Licalzi", gender: "male", latitude: 68.0353, longitude: 35.4296, phoneNumber: "1858668027", email: "da@animize.edu"});
            people.insert({UUID: "9bc4e4f4-b1fb-4396-b543-80c5b18888ff", image: "default.png", firstName: "Delinda", lastName: "Swick", gender: "male", latitude: 47.6543, longitude: 140.888, phoneNumber: "2123601881", email: "taffymaking@noah.org"});
            people.insert({UUID: "65cf10d2-5a4b-4892-87fd-81b84cd58c19", image: "default.png", firstName: "Alvera", lastName: "Daley", gender: "male", latitude: 8.88535, longitude: 49.5584, phoneNumber: "6172249250", email: "ofttimes@varicolorous.edu"});
            people.insert({UUID: "111a1d43-ba21-43c2-9dd3-a7108a492d1d", image: "default.png", firstName: "Deneen", lastName: "Soravilla", gender: "male", latitude: 81.6774, longitude: 109.899, phoneNumber: "2744124956", email: "picksmith@updart.net"});
            people.insert({UUID: "ad7e2319-867c-4322-a7bf-a3b0d1eca20b", image: "default.png", firstName: "Janiece", lastName: "Mesrobian", gender: "male", latitude: 35.8814, longitude: 95.7897, phoneNumber: "4893750144", email: "vagnera@dumbbeller.com"});
            people.insert({UUID: "344a912f-f610-41ed-ba5f-8d474ba911d9", image: "default.png", firstName: "Dawn", lastName: "Zinser", gender: "male", latitude: 40.6837, longitude: 171.755, phoneNumber: "1614660641", email: "betrumpet@herbaria.com"});
            people.insert({UUID: "8070172d-fb7d-473a-9c5b-cd028657826a", image: "default.png", firstName: "Cheri", lastName: "Felice", gender: "male", latitude: 15.4924, longitude: 60.1156, phoneNumber: "5737392454", email: "politied@poesie.com"});
            people.insert({UUID: "f88d9e32-ecef-488b-b3e5-f418de50e3a9", image: "default.png", firstName: "Detra", lastName: "Reckard", gender: "male", latitude: 62.5139, longitude: 57.8811, phoneNumber: "9236229104", email: "knowledged@claustration.co.uk"});
            people.insert({UUID: "7851addf-a054-4155-bcb3-5ba53980726e", image: "default.png", firstName: "Calandra", lastName: "Newbert", gender: "male", latitude: 39.5766, longitude: 74.1278, phoneNumber: "8954455023", email: "ophthalmostasis@coaita.co.uk"});
            people.insert({UUID: "adfdb69d-ff8b-4ae6-81d6-48e8246b4ecb", image: "default.png", firstName: "Juliane", lastName: "Reuther", gender: "male", latitude: 33.3662, longitude: 165.306, phoneNumber: "1318579673", email: "entrancedly@profitable.co.uk"});
            people.insert({UUID: "a4a4c748-a13c-4908-8af6-2b2b2f25c82c", image: "default.png", firstName: "Suzie", lastName: "Kravs", gender: "male", latitude: 10.9088, longitude: 86.7942, phoneNumber: "4860627699", email: "solve@argol.co.uk"});
            people.insert({UUID: "578720e1-c3a0-4421-a826-b616f0d8f4d3", image: "default.png", firstName: "Gregg", lastName: "Hanington", gender: "male", latitude: 31.5154, longitude: 93.0586, phoneNumber: "7240535799", email: "ghatwal@patriarched.org"});
            people.insert({UUID: "48975abf-a979-471e-9540-3abf1ed119ca", image: "default.png", firstName: "Gene", lastName: "Yearby", gender: "male", latitude: 81.087, longitude: 97.0163, phoneNumber: "3226706800", email: "consocies@paroptesis.net"});
            people.insert({UUID: "97160648-1204-4bf9-9aa2-7ac94d4917ef", image: "default.png", firstName: "Flora", lastName: "Caraker", gender: "male", latitude: 5.4306, longitude: 178.332, phoneNumber: "9477517660", email: "scissiparity@sporangites.org"});
            people.insert({UUID: "28485446-dbcc-4ff2-86fb-67b7e2df5349", image: "default.png", firstName: "Lara", lastName: "Umnus", gender: "male", latitude: 73.8974, longitude: 145.654, phoneNumber: "4006819500", email: "leafless@introtraction.com"});
            people.insert({UUID: "7b58f229-0e7c-41a8-aa10-156f9a15c459", image: "default.png", firstName: "Linda", lastName: "Camarena", gender: "male", latitude: 60.9715, longitude: 168.839, phoneNumber: "2144791404", email: "showerful@synagogal.co.uk"});
            people.insert({UUID: "c2ce7d29-af94-4c8a-96fe-d33f380b6720", image: "default.png", firstName: "Hyacinth", lastName: "Cruell", gender: "male", latitude: 71.1882, longitude: 122.127, phoneNumber: "0394452922", email: "louter@unpensionableness.com"});
            people.insert({UUID: "7fd8ef01-5210-4abe-945e-5c85d669bf70", image: "default.png", firstName: "Hyo", lastName: "Ransdell", gender: "male", latitude: 66.2791, longitude: 88.1544, phoneNumber: "7725057378", email: "euthycomi@unshepherded.edu"});
            people.insert({UUID: "1541eab5-cc86-4a4b-bbd1-b010db12d9ed", image: "default.png", firstName: "Adalberto", lastName: "Tulley", gender: "male", latitude: 25.7703, longitude: 170.46, phoneNumber: "5605102520", email: "mesosomatic@baconist.co.uk"});
            people.insert({UUID: "3f0b3090-adfc-4747-9034-f064b4e0a3c4", image: "default.png", firstName: "Lillia", lastName: "Kreh", gender: "male", latitude: 69.3782, longitude: 117.99, phoneNumber: "6055172798", email: "spiny@sieva.edu"});
            people.insert({UUID: "681d903e-3309-4adf-8f18-b8b1b8b05d39", image: "default.png", firstName: "Elsie", lastName: "Bengelsdorf", gender: "male", latitude: 23.6415, longitude: 31.6398, phoneNumber: "1343739240", email: "unencumberedly@vertigines.net"});
            people.insert({UUID: "fdc7a626-f902-4dc0-8d3a-7391d121270d", image: "default.png", firstName: "Rhona", lastName: "Dakins", gender: "male", latitude: 74.1746, longitude: 116.679, phoneNumber: "3635776061", email: "scoon@porcupinish.edu"});
            people.insert({UUID: "d7b2be20-3b6e-43ab-a0a9-51b6fce3e99a", image: "default.png", firstName: "Verona", lastName: "Nghe", gender: "male", latitude: 12.3626, longitude: 23.1268, phoneNumber: "5756137308", email: "karyochylema@undertenure.com"});
            people.insert({UUID: "2bebf5f6-7dba-49fd-886d-0938ba63b658", image: "default.png", firstName: "Chere", lastName: "Courter", gender: "male", latitude: 84.7089, longitude: 122.617, phoneNumber: "3436444451", email: "perceivingness@solUUIDarist.edu"});
            people.insert({UUID: "2e6e2845-0415-409d-8370-febc55028abf", image: "default.png", firstName: "Twana", lastName: "Mcsweeney", gender: "male", latitude: 2.40071, longitude: 100.025, phoneNumber: "3847124699", email: "monotremate@oversad.edu"});
            people.insert({UUID: "b52bd618-8322-4829-a06b-d070cd10a3e6", image: "default.png", firstName: "Sherlyn", lastName: "Placeres", gender: "male", latitude: 42.2584, longitude: 159.909, phoneNumber: "1797608776", email: "mermithUUIDae@alcantarines.com"});
            people.insert({UUID: "035b41fb-17f2-46bf-af1a-8bc4d30a1721", image: "default.png", firstName: "Evangelina", lastName: "Cumber", gender: "male", latitude: 24.976, longitude: 11.7808, phoneNumber: "7081994655", email: "corallike@becumber.edu"});
            people.insert({UUID: "a0360c3d-6355-47e5-a739-e81eb1ae80d5", image: "default.png", firstName: "Catalina", lastName: "Pujol", gender: "male", latitude: 8.13308, longitude: 150.18, phoneNumber: "8182128490", email: "waistcoat@voluntariness.net"});
            people.insert({UUID: "618f5d85-356c-4940-8cb6-cb8020e115b9", image: "default.png", firstName: "Ashley", lastName: "Guinther", gender: "male", latitude: 58.3684, longitude: 174.883, phoneNumber: "9729056156", email: "kyung@intrinse.org"});
            people.insert({UUID: "8b2e0d9d-51cb-41b9-8778-d39e030320dd", image: "default.png", firstName: "Shirley", lastName: "Turnpaugh", gender: "male", latitude: 77.0062, longitude: 176.98, phoneNumber: "6146921277", email: "unmeasurably@inexpert.com"});
            people.insert({UUID: "4f64dce3-a6a3-4311-954a-5e89efdbc68c", image: "default.png", firstName: "Lyndsay", lastName: "Valotta", gender: "male", latitude: 2.15636, longitude: 45.9272, phoneNumber: "9349213862", email: "amphichroic@linea.co.uk"});
            people.insert({UUID: "cebac473-7e8f-4feb-b3aa-df8d23732e92", image: "default.png", firstName: "Wanita", lastName: "Meiser", gender: "male", latitude: 54.8826, longitude: 93.5252, phoneNumber: "4412561216", email: "pyrenomycete@graminifolious.com"});
        }
    });
    Meteor.methods({
        "addNewPerson": function(person) {
            people.insert({UUID: person.UUID, image: person.image, firstName: person.firstName, lastName: person.lastName, gender: person.gender, latitude: person.latitude, longitude: person.longitude, phoneNumber: person.phoneNumber, email: person.email});
        },
        "removePerson": function(UUID) {
            people.remove({UUID: UUID});
        },
        "log": function(person) {
            console.log(person.UUID, person.image, person.firstName, person.lastName, person.gender, person.latitude, person.longitude, person.phoneNumber, person.email);
        }
    });
}
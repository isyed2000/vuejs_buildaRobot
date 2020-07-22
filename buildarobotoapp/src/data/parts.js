var images = require.context('./images', true, /\.jpg$/); //web pack command to build some informaiton from a directory.
var personDB = {
    PeopleList:
    [{
    id:"1",
    FirstName:"Iftikhar",
    LastName:"Ali",
    PhoneNumber:"111-111-1111",
    src:images('./iftikhar.jpg')
},

{
    "id":"2",
    FirstName:"Asma",
    LastName:"Naweed",
    PhoneNumber:"111-111-1111",
    src:images('./asma.jpg')
}]

}

export default personDB;
// Simulated database
const users = [
  {"id": 1, "fname": "Jim", "lname": "Smith", "username": "jsmith", "passwd": "pass123"},
  {"id": 2, "fname": "Jack", "lname": "Kennedy", "username": "jkennedy", "passwd": "pass123"},
  {"id": 3, "fname": "Linda", "lname": "Nelson", "username": "lnelson", "passwd": "pass123"},
  {"id": 4, "fname": "Kayli", "lname": "Williams", "username": "kwilliams", "passwd": "pass123"},
  {"id": 5, "fname": "Seth", "lname": "Walters", "username": "swalters", "passwd": "pass123"},
  {"id": 6, "fname": "Brandon", "lname": "Jones", "username": "bjones", "passwd": "pass123"},
  {"id": 7, "fname": "Ally", "lname": "Smith", "username": "asmith", "passwd": "pass123"},
  {"id": 8, "fname": "Jordan", "lname": "Wilson", "username": "jwilson", "passwd": "pass123"}
];

function getUsers(callback){
  setTimeout(function(){
    callback(users);
  },1000);
}

module.exports = { getUsers };
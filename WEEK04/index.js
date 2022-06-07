let user = {
    firstName: 'First',
    lastName: 'Last',
    isLoggedIn: false,
    age: 19, 
    list: [1, 2, 3, 4], 
    pref: {
        colour: 'red',
        width: 1024
    },
    score: null, 
    login: function(){
        this.isLoggedIn = true;
    }
};

user.score=43;
user.login();

user.logout = function(){
    this.isLoggedIn = false;
}


let user2;
user2.firstName = user.firstName;
user2.login =user.login;
user2.login();


let user2 = {
    firstName: 'First2',
    lastName: 'Last2',

}


function User(fname, lname) {
    this.firstName = firsName;
    this.lastName =lastName;
    this.isLoggedIn = false;
    this.age = age;
    this.pref = {
        colour: 'red', 
        width: 1024
    };
    this.score = 0;

}
User.prototype.login = function(){
    this.isLoggedIn = true;
}
User.prototype.logout =function() {
    this.isLoggedIn = false;
}


let user =new User('Dave', 'Humphrey');
let user2 = new User('Frank', 'Lee');
let user3 = new User('Jen', 'Smith');
//....
let user999 = new User('ED', 'Wu');

user.login = function(){

}

user2.login();
user3.login();
user2.logout();

///////////////////////////////////////////////////////////////////////////
//Multi-Line Template Literal to wrap the CSV inches
var csvData = `0134134,John Smith, 555-567-2341, 62 inches
0134135    , June    Lee     , 5554126347  ,     149cm
0134136,      Kim Thomas     , 5324126347, 138cm`;

function PhoneNumber(value){
    this.value = value;
}

PhoneNumber.prototype.getAreaCode= function(){
    let phoneNumber = this.value;
    let matches = phoneNumber.match(/(\d{3})-?\d{3}-?\d{4}/);
    if(matches){
        return matches[1];
    }
    return phoneNumber;
}

// let phoneNumber = new PhoneNumber('555-567-2341');
// let areaCode = phoneNumber.getAreaCode();
function Height(inches){
    this.inches = inches;
}
Height.prototype.toString = function(){
    //54.31 inches
    return `${this.inches.toFixed(2)} inches`;
}

Height.parse = function(value) {
    let inches;

    if(value.endsWith('inches')){
        inches = parseFloat(value);
    }
    else{
        inches = parseFloat(value) * 0.39;
    }
    return new Height(inches);
};
// let height = new Height(54);
// let height2 = Height.parse('54 inches');
// let height3 = Height.parse('134 cm');
// console.log(height); // '54 inches'

/*
*0134134, John Smith, 555-567-2341, 62 inches\n
0134135    , June    Lee     , 5554126347  ,     149cm\n
0134136,      Kim Thomas     , 5324126347, 138cm\n
*/

function Customer(id, name, phoneNumber, height){
    this.id = id;
    this.name = removeExtraWhitespace(name);
    this.phoneNumber = new PhoneNumber(removeExtraWhitespace(phoneNumber));
    this.height = Height.parse(removeExtraWhitespace(height));
}

function removeExtraWhitespace(s) {
    return s.replace(/\s+/, ' ');
}
function splitIntoRows(s) {
    return s.split(/\r?\n/);
}
// function normalizeHeight(height) {
//     //Height is already in inches, return it
//     if(height.endsWith('inches')) {
//         return height;
//     }
//     //get the height in cm as a Number
//     let cm = parseFloat(height);
//     let inches = cm*0.39;

//     // 'XX inches'
//     return '${inches} inches';
// }

function rowToCustomer(row) {
    //Split on, with or without whitespace on either side
    let fields = row.split(/\s*, \s*/);
    // ['id', 'name', 'phonenumber', 'height']
    
    return new Customer(fields[0], fields[1], fields[2], fields[3]);

    // //Remove extra whitespace from name
    // fields[1] = removeExtraWhitespace(fields[1]);

    // //Extract area code from 555-555-5555 or 5555555555
    // fields[2] = extractAreaCode(fields[1]);

    // //Normalize Height to inches and format as a String
    // fields[3] = removeExtraWhitespace(fields[3]);

    // return fields.join(',');
}
function processCSV(csv) {
    //step1 - break the csv into rows
    let rows = splitIntoRows(csv);

    //step2 - split all rows into array of fields
    return rows.map(rowToCustomer);
}

//Log output of processing
let customers = processCSV(csvData);
console.log(customers);

customers.forEach(function(customer){
    console.log(customer.name, customer.height.toString(), customer.phoneNumber, getAreaCode());
});

// Empty Array Literal
let l = [];
let list=[1,2,3];

let i=1
list[i]

for(let i=0;i<list.length;i++){
    let item = list[i];
}

// Empty Object Literal
let o={};

// Empty literal with a key/value pair
let o2 = { course: 'web222'};

// Empty literal with a key/value pair
let o3 = { course: 'web222', section: 'ncc'};
let courseInfo = { 
course: 'web222', 
section: 'ncc', 
school: 'Seneca'
};

console.log(courseInfo.course, courseInfo.section);
//Dot Notation
courseInfo.key
//Index Notation
courseInfo['course']
courseInfo['for']//keyword
courseInfo['@abc'] // add characters
courseInfo.SomeName

let k='course';
courseInfo[k];

courseInfo.k
courseInfo['k']

//Position of Toronto on a Map
//43.6532, -79.3832

//Set Of Numbers
let torontoLat = 43.6532;
let torontoLng = 79.3832;

//Array of Numbers
let torontoArray = [ 43.6532, -79.3832 ];
torontoArray[0]

//Object Literal
let toronto = {
    lat: 43.6532, 
    lng: -79.3832 };

    toronto.lat;

    let user = {
        firstName: 'First',
        lastName: 'Last',
        email: 'first.last@email.com',
        loggedIn: false,
        lastLogin: new Date('...'),
        level: 3
    }

    function login(user) { // user = firstname, lastname... 
        
    }

    function f(options) {
        if(options.a) {
            // do something
        }
    }
    function calculate() {
        return {total: 120, average: 56};
    }
    let result = calculate();
    result.total;
    result.average;

let points= [
    [ 43.6532, -79.3832 ],
    [ 43.6532, -79.3832 ],
    [ 43.6532, -79.3832 ],
];
points[1][1]


[
    {lat: 43.6532, lng: -79.3832 },
    {lat: 43.6532, lng: -79.3832 },
    {lat: 43.6532, lng: -79.3832 }

];
(points[1]).lng


let users = [
    {
        firstName: 'First',
        lastName: 'Last',
        email: 'first.last@email.com',
        loggedIn: false,
        lastLogin: new Date('...'),
        level: 3
    },
    {
        firstName: 'First',
        lastName: 'Last',
        email: 'first.last@email.com',
        loggedIn: false,
        lastLogin: new Date('...'),
        level: 3 
    },
    {
        firstName: 'First',
        lastName: 'Last',
        email: 'first.last@email.com',
        loggedIn: false,
        lastLogin: new Date('...'),
        level: 3 
    }
]
users[2].email; 
users.forEach(function(user){
    console.log(user.email);
})

//=====================================================

let = { name: 'web222'};
//getter
o.name;
if(o.school) {}

//setter
o.name ='WEB222'; // update an existing key's value
o.school = 'Seneca'; // create and store a new key/value
o.school = null;  // storing null at key=school
delete o.school; // remove school key, and associated value


    
    

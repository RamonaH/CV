// add your code here
console.info("page loaded");

var person = {
    employed: true,
    age: 29,
    name: 'First Last',
    skills: ['html', 'css', 'js']

};
console.debug(person);
console.info(person.name);
console.warn(person.age);
console.debug(person.employed);

// declaration
function getInfo(name) {
    var msg = "Hello " + name + ", " +
        "welcome at FastTrackIT.";
    return msg;
}
// store result of call to function
var info = getInfo("Ramona");
console.info(info);

// var element = ... (get elements)
var motto, favorite, links;
motto    = document.getElementById('motto');
favorite = document.getElementsByClassName("base-center");
links    = document.getElementsByTagName("a");


favorite[1].style.display = 'none';
links[0].onclick = function () {
    console.info('click on link', this);
    motto.style.color = 'red';
};
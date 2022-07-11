
let arrayStudent = [];

let student1 = {
	yearOfStuding: 2020,
    facultyName: 'historical'
};
let student2 = {
	yearOfStuding: 2021,
    facultyName: 'mathematical'
};
let student3 = {
	yearOfStuding: 2010,
    facultyName: 'psychological'
};
let student4 = {
	yearOfStuding: 2012,
    facultyName: 'economic'
};
let student5 = {
	yearOfStuding: 2015,
    facultyName: 'geographical'
};
let student6 = {
	yearOfStuding: 2010,
    facultyName: 'faculty of Law'
};
let student7 = {
	yearOfStuding: 2018,
    facultyName: 'linguistics'
};
let student8 = {
	yearOfStuding: 2019,
    facultyName: 'international law'
};
let student9 = {
	yearOfStuding: 2021,
    facultyName: 'journalism'
};
let student10 = {
	yearOfStuding: 2010,
    facultyName: 'marketing'
};
arrayStudent.push(student1,student2,student3,student4,student5,student6,student7,student8,student9,student10);
console.log(arrayStudent);

let arrayFacName = arrayStudent.map(function(obj){
	return obj.facultyName;
});
console.log(arrayFacName);

let sumYear = arrayStudent.reduce(function(sumOfAge, obj){
	return sumOfAge+obj.yearOfStuding;
},0);
console.log(sumYear);


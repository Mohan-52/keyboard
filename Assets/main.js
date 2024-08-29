const student=[
    {sno:1,name:"Ashok",Maths:45,Computers:40,	Physics:47,	English:55,	Sanskrit:70, image:"../Assets/images/img1.jpg",Result:"Pass",remove:'<i class="fa-solid fa-x icon"></i>'},
    {sno: 2, name: "Rahul", Maths: 33, Computers: 50, Physics: 40, English: 60, Sanskrit: 75, image: "../Assets/images/img2.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 3, name: "Anita", Maths: 56, Computers: 45, Physics: 48, English: 63, Sanskrit: 80, image: "../Assets/images/img3.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 4, name: "Vikram", Maths: 25, Computers: 35, Physics: 37, English: 49, Sanskrit: 60, image: "../Assets/images/img4.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 5, name: "Sonal", Maths: 65, Computers: 75, Physics: 78, English: 85, Sanskrit: 90, image: "../Assets/images/img5.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 6, name: "Ramesh", Maths: 22, Computers: 15, Physics: 30, English: 40, Sanskrit: 50, image: "../Assets/images/img6.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 7, name: "Priya", Maths: 72, Computers: 68, Physics: 70, English: 77, Sanskrit: 82, image: "../Assets/images/img7.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 8, name: "Manoj", Maths: 31, Computers: 55, Physics: 50, English: 47, Sanskrit: 60, image: "../Assets/images/img8.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 9, name: "Meena", Maths: 64, Computers: 62, Physics: 60, English: 66, Sanskrit: 72, image: "../Assets/images/img9.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 10, name: "Arun", Maths: 58, Computers: 35, Physics: 42, English: 50, Sanskrit: 55, image: "../Assets/images/img10.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 11, name: "Kiran", Maths: 29, Computers: 38, Physics: 34, English: 41, Sanskrit: 46, image: "../Assets/images/img11.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 12, name: "Neha", Maths: 80, Computers: 78, Physics: 85, English: 88, Sanskrit: 90, image: "../Assets/images/img12.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 13, name: "Amit", Maths: 47, Computers: 40, Physics: 42, English: 53, Sanskrit: 60, image: "../Assets/images/img13.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 14, name: "Rajesh", Maths: 30, Computers: 28, Physics: 25, English: 32, Sanskrit: 35, image: "../Assets/images/img14.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 15, name: "Geeta", Maths: 70, Computers: 65, Physics: 68, English: 73, Sanskrit: 80, image: "../Assets/images/img15.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 16, name: "Vishal", Maths: 48, Computers: 42, Physics: 46, English: 50, Sanskrit: 52, image: "../Assets/images/img16.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 17, name: "Aarti", Maths: 85, Computers: 90, Physics: 88, English: 87, Sanskrit: 89, image: "../Assets/images/img17.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 18, name: "Shyam", Maths: 35, Computers: 30, Physics: 25, English: 40, Sanskrit: 45, image: "../Assets/images/img18.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 19, name: "Divya", Maths: 55, Computers: 60, Physics: 65, English: 70, Sanskrit: 75, image: "../Assets/images/img19.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 20, name: "Suresh", Maths: 20, Computers: 25, Physics: 30, English: 35, Sanskrit: 40, image: "../Assets/images/img20.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 21, name: "Monika", Maths: 60, Computers: 55, Physics: 58, English: 63, Sanskrit: 70, image: "../Assets/images/img21.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 22, name: "Nitin", Maths: 40, Computers: 45, Physics: 47, English: 50, Sanskrit: 55, image: "../Assets/images/img22.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 23, name: "Sonia", Maths: 28, Computers: 35, Physics: 32, English: 36, Sanskrit: 40, image: "../Assets/images/img23.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 24, name: "Pankaj", Maths: 42, Computers: 47, Physics: 45, English: 50, Sanskrit: 55, image: "../Assets/images/img24.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 25, name: "Sheetal", Maths: 75, Computers: 80, Physics: 85, English: 90, Sanskrit: 95, image: "../Assets/images/img25.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 26, name: "Ravi", Maths: 36, Computers: 33, Physics: 30, English: 40, Sanskrit: 45, image: "../Assets/images/img26.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 27, name: "Seema", Maths: 65, Computers: 70, Physics: 75, English: 80, Sanskrit: 85, image: "../Assets/images/img27.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 28, name: "Gaurav", Maths: 45, Computers: 50, Physics: 55, English: 60, Sanskrit: 65, image: "../Assets/images/img28.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    {sno: 29, name: "Sneha", Maths: 30, Computers: 35, Physics: 40, English: 45, Sanskrit: 50, image: "../Assets/images/img29.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    { sno: 30, name: "Vikas", Maths: 40, Computers: 45, Physics: 50, English: 55, Sanskrit: 60, image: "../Assets/images/img30.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 31, name: "Kavita", Maths: 25, Computers: 30, Physics: 20, English: 35, Sanskrit: 40, image: "../Assets/images/img31.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 32, name: "Naveen", Maths: 65, Computers: 60, Physics: 70, English: 75, Sanskrit: 80, image: "../Assets/images/img32.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 33, name: "Pooja", Maths: 38, Computers: 35, Physics: 40, English: 42, Sanskrit: 45, image: "../Assets/images/img33.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 34, name: "Rohit", Maths: 50, Computers: 55, Physics: 60, English: 65, Sanskrit: 70, image: "../Assets/images/img34.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 35, name: "Anjali", Maths: 20, Computers: 25, Physics: 30, English: 35, Sanskrit: 40, image: "../Assets/images/img35.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 36, name: "Suraj", Maths: 45, Computers: 50, Physics: 48, English: 55, Sanskrit: 60, image: "../Assets/images/img36.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 37, name: "Neetu", Maths: 30, Computers: 35, Physics: 38, English: 42, Sanskrit: 45, image: "../Assets/images/img37.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 38, name: "Ravi", Maths: 60, Computers: 65, Physics: 70, English: 75, Sanskrit: 80, image: "../Assets/images/img38.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 39, name: "Megha", Maths: 35, Computers: 40, Physics: 45, English: 50, Sanskrit: 55, image: "../Assets/images/img39.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 40, name: "Aman", Maths: 25, Computers: 28, Physics: 30, English: 32, Sanskrit: 35, image: "../Assets/images/img40.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 41, name: "Simran", Maths: 70, Computers: 75, Physics: 80, English: 85, Sanskrit: 90, image: "../Assets/images/img41.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>'},
    { sno: 42, name: "Yash", Maths: 30, Computers: 35, Physics: 38, English: 42, Sanskrit: 45, image: "../Assets/images/img42.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 43, name: "Preeti", Maths: 60, Computers: 65, Physics: 70, English: 75, Sanskrit: 80, image: "../Assets/images/img43.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 44, name: "Rohan", Maths: 40, Computers: 45, Physics: 50, English: 55, Sanskrit: 60, image: "../Assets/images/img44.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 45, name: "Asha", Maths: 20, Computers: 25, Physics: 30, English: 35, Sanskrit: 40, image: "../Assets/images/img45.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 46, name: "Vijay", Maths: 55, Computers: 60, Physics: 65, English: 70, Sanskrit: 75, image: "../Assets/images/img46.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 47, name: "Kiran", Maths: 30, Computers: 35, Physics: 40, English: 45, Sanskrit: 50, image: "../Assets/images/img47.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 48, name: "Raj", Maths: 25, Computers: 30, Physics: 35, English: 40, Sanskrit: 45, image: "../Assets/images/img48.jpg", Result: "Fail", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 49, name: "Sakshi", Maths: 70, Computers: 75, Physics: 80, English: 85, Sanskrit: 90, image: "../Assets/images/img49.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' },
    { sno: 50, name: "Aakash", Maths: 60, Computers: 65, Physics: 70, English: 75, Sanskrit: 80, image: "../Assets/images/img50.jpg", Result: "Pass", remove: '<i class="fa-solid fa-x icon"></i>' }
];

 let table="";
 student.forEach((value)=>{
    table+=`
            <tr class="table-tow">
                <td>${value.sno}</td>
                <td>${value.name}</td>
                <td>${value.Maths}</td>
                <td>${value.Computers}</td>
                <td>${value.Physics}</td>
                <td>${value.English}</td>
                <td>${value.Sanskrit}</td>
                <td><img src="${value.image}" class="student-img"></img></td>
                <td>${value.Result}</td>
                <td>${value.remove}</td>

            </tr>`
            document.querySelector(".table-body").innerHTML=table;

 });

const passFilter=student.filter((value)=>{
    return value.Result=="Pass";

});

 let table2="";
passFilter.forEach((value)=>{
    table2+=`
            <tr class="table-tow">
                <td>${value.sno}</td>
                <td>${value.name}</td>
                <td>${value.Maths}</td>
                <td>${value.Computers}</td>
                <td>${value.Physics}</td>
                <td>${value.English}</td>
                <td>${value.Sanskrit}</td>
                <td><img src="${value.image}" class="student-img"></img></td>
                <td>${value.Result}</td>
                <td>${value.remove}</td>

            </tr>`
            document.querySelector(".table-body-passed").innerHTML=table2;

});
 

 const failFilter=student.filter((value)=>{
    return value.Result=="Fail";
});
let table3=""
failFilter.forEach((value)=>{
    table3+=`
     <tr class="table-tow">
                <td>${value.sno}</td>
                <td>${value.name}</td>
                <td>${value.Maths}</td>
                <td>${value.Computers}</td>
                <td>${value.Physics}</td>
                <td>${value.English}</td>
                <td>${value.Sanskrit}</td>
                <td><img src="${value.image}" class="student-img"></img></td>
                <td>${value.Result}</td>
                <td>${value.remove}</td>
    `
    document.querySelector(".table-body-failed").innerHTML=table3;
}); 

function showtable(tableId){
    const tables = document.querySelectorAll('.table-container');
    tables.forEach(function(table) {
        table.style.display = 'none';
    });

    document.getElementById(tableId).style.display = 'block';
}


const stateCities = {
    "andhra_pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"],
    "karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Belagavi"],
    "tamil_nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    "maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
    "kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"]
};

function popularCities() {
    const stateDropdown = document.getElementById("states");
    const cityDropdown = document.getElementById("cities");
    const selectedState = stateDropdown.value;

    cityDropdown.innerHTML = '<option value="">Select City</option>';

    if (selectedState in stateCities) {
        stateCities[selectedState].forEach(function(city) {
            const option = document.createElement("option");
            option.value = city;
            option.text = city;
            cityDropdown.add(option);
        });
    }
}
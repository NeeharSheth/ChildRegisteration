var Name_Of_Students=[];

function submit(){
    Name_Of_Students.push(document.getElementById("Student_1").value);
    Name_Of_Students.push(document.getElementById("Student_2").value);
    Name_Of_Students.push(document.getElementById("Student_3").value);
    Name_Of_Students.push(document.getElementById("Student_4").value);
    console.log(Name_Of_Students);
    document.getElementById("dispayName").innerHTML=Name_Of_Students;
    document.getElementById("button_submit").style.display="none";
    document.getElementById("Button_Sort").style.display="inline-block";
}
function sorting(){
    Name_Of_Students.sort();
    document.getElementById("dispayName").innerHTML=Name_Of_Students;
}
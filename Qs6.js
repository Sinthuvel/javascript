// create object
const course = {
    courseName : "BIT",
    courseFee : "Rs 150 000",
    startDate : "12.06.2018",
    center : "Our Office"
};

  var con = ("Course Name: " + course.courseName + "<br>" + "Fee: " + course.courseFee + "<br>" + "Start Date: " + course.startDate + "<br>" +  "Center: " + course.center);

  document.getElementById("q6").innerHTML = (con);

console.log("My chart.js file is loaded");

const lineChart = new Chart(
document.getElementById("lineChart"),
{
type:"line",

data:{
labels:[
"Jan","Feb","Mar","Apr",
"May","Jun","Jul","Aug",
"Sep","Oct","Nov","Dec"
],

datasets:[{
label:"Books Issued",
data:[
50,60,70,68,
82,90,76,62,
71,78,66,74
],

tension:.4,
fill:false,
borderWidth:3
}]
},

options:{
responsive:true,
plugins:{
legend:{
display:false
}
}
}
}
);
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
const activities = [
    {
        icon: "📚",
        text: "Simon Tamang borrowed Chemistry",
        time: "10 minutes ago"
    },
    {
        icon: "↩️",
        text: "John Rai returned Physics",
        time: "30 minutes ago"
    },
    {
        icon: "👤",
        text: "New member registered",
        time: "1 hour ago"
    },
    {
        icon: "📖",
        text: "Java Programming book added",
        time: "2 hours ago"
    }
];

const activityList = document.getElementById("activity-list");

activities.forEach(activity => {
    activityList.innerHTML += `
        <div class="activity-item">
            <span class="icon">${activity.icon}</span>
            <div>
                <p>${activity.text}</p>
                <small>${activity.time}</small>
            </div>
        </div>
    `;
});
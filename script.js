const activities = [
  { name: "Drawing and Coloring", type: "indoor", age: "preschool", cost: "free" },
  { name: "Visit the Zoo", type: "outdoor", age: "school-age", cost: "paid", link: "https://www.mandai.com/en/singapore-zoo.html" },  
  { name: "Building Blocks", type: "indoor", age: "toddler", cost: "free" },
  { name: "Scavenger Hunt", type: "outdoor", age: "school-age", cost: "free" },
  { name: "Story Time", type: "indoor", age: "toddler", cost: "free" },
  { name: "Visit the National Gallery", type: "indoor", age: "school-age", cost: "free", link: "https://www.nationalgallery.sg/gallerykids/" },
  { name: "Watch a Play", type: "indoor", age: "school-age", cost: "paid" }
  // Add more activities here
];

function displayActivities(filter = {}) {
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = '';

  const filteredActivities = activities.filter(activity => {
    return (filter.age === 'all' || activity.age === filter.age) &&
           (filter.type === 'all' || activity.type === filter.type);
  });

  filteredActivities.forEach(activity => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    activityItem.textContent = activity.name;
    activityList.appendChild(activityItem);
  });
}

function getRandomActivity() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  alert(`Try this activity: ${activities[randomIndex].name}`);
}

// Filter and display activities on change
document.getElementById('age-group').addEventListener('change', (e) => {
  const ageGroup = e.target.value;
  const activityType = document.getElementById('activity-type').value;
  displayActivities({ age: ageGroup, type: activityType });
});

document.getElementById('activity-type').addEventListener('change', (e) => {
  const ageGroup = document.getElementById('age-group').value;
  const activityType = e.target.value;
  displayActivities({ age: ageGroup, type: activityType });
});

document.getElementById('generate-activity').addEventListener('click', getRandomActivity);
// Create a new link element
let link = document.createElement("a");
link.href = "https://www.mandai.com/en/singapore-zoo.html";
link.innerText = "Visit the Zoo";
document.body.appendChild(link);

// Initial display of activities
displayActivities({ age: 'all', type: 'all' });


const activities = [
  { name: "Drawing and Coloring", type: "indoor", age: "preschool", cost: "free" },
  { name: "Visit the Zoo", type: "outdoor", age: "school-age", cost: "paid" },  
  { name: "Building Blocks", type: "indoor", age: "toddler", cost: "free" },
  { name: "Scavenger Hunt", type: "outdoor", age: "school-age", cost: "free" },
  { name: "Story Time", type: "indoor", age: "toddler", cost: "free" },
  { name: "Visit the National Gallery", type: "indoor", age: "school-age", cost: "free" },
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

// Initial display of activities
displayActivities({ age: 'all', type: 'all' });

// Create a new link element
let link = document.createElement("a");
link.href = "https://example.com";
link.innerText = "Visit Example Site";
document.body.appendChild(link);
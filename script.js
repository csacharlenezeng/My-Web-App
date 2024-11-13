const activities = [
  { name: "Drawing and Coloring", type: "indoor", age: "preschool", cost: "free", link: "https://www.roomrecess.com/pages/ColoringPagesForKids.html" },
  { name: "Visit the Zoo", type: "outdoor", age: "school-age", cost: "paid", link: "https://www.mandai.com/en/singapore-zoo.html" },  
  { name: "Scavenger Hunt", type: "outdoor", age: "school-age", cost: "free", link: "https://www.goodhousekeeping.com/life/parenting/g32050844/scavenger-hunt-ideas-for-kids/" },
  { name: "Story Time", type: "indoor", age: "toddler", cost: "free", link: "https://www.storyberries.com/" },
  { name: "Visit the National Gallery", type: "indoor", age: "school-age", cost: "free", link: "https://www.nationalgallery.sg/gallerykids/" },
  { name: "Watch a Play", type: "indoor", age: "school-age", cost: "paid", link: "https://www.srt.com.sg/children" },
  { name: "Visit a Park", type: "outdoor", age: "school-age", cost: "paid", link: "https://beta.nparks.gov.sg/visit/parks/park-detail/fort-canning-park" },
  { name: "Go to an Outdoor Playground", type: "outdoor", age: "school-age", cost: "free", link: "https://www.gardensbythebay.com.sg/en/things-to-do/attractions/far-east-organization-childrens-garden.html" },
  { name: "Go to the Children's Museum", type: "indoor", age:"preschool", cost: "free", link: "https://www.nhb.gov.sg/childrensmuseum" }

];

function displayActivities(filter = {}) {
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = ''; // Clear existing activities

  // Filter activities based on selected criteria
  const filteredActivities = activities.filter(activity => {
    return (filter.age === 'all' || activity.age === filter.age) &&
           (filter.type === 'all' || activity.type === filter.type) &&
           (filter.cost === 'all' || activity.cost === filter.cost);
  });

  // Loop through filtered activities and display them
  filteredActivities.forEach(activity => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';

    // Check if the activity has a link, and create a clickable link if it does
    if (activity.link) {
      activityItem.innerHTML = `<a href="${activity.link}" target="_blank">${activity.name}</a>`;
    } else {
      activityItem.textContent = activity.name; // Just text if no link is available
    }

    activityList.appendChild(activityItem);
  });
}

// Function to display a random activity with a popup alert
function getRandomActivity() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  const selectedActivity = activities[randomIndex];
  if (selectedActivity.link) {
    alert(`Try this activity: ${selectedActivity.name} - ${selectedActivity.link}`);
  } else {
    alert(`Try this activity: ${selectedActivity.name}`);
  }
}

// Filter and display activities when dropdowns change
document.getElementById('age-group').addEventListener('change', (e) => {
  const ageGroup = e.target.value;
  const activityType = document.getElementById('activity-type').value;
  const activityCost = document.getElementById('activity-cost').value;
  displayActivities({ age: ageGroup, type: activityType, cost: activityCost });
});

document.getElementById('activity-type').addEventListener('change', (e) => {
  const ageGroup = document.getElementById('age-group').value;
  const activityType = e.target.value;
  const activityCost = document.getElementById('activity-cost').value;
  displayActivities({ age: ageGroup, type: activityType, cost: activityCost });
});

document.getElementById('activity-cost').addEventListener('change', (e) => {
  const ageGroup = document.getElementById('age-group').value;
  const activityType = document.getElementById('activity-type').value;
  const activityCost = e.target.value;
  displayActivities({ age: ageGroup, type: activityType, cost: activityCost });
});

document.getElementById('generate-activity').addEventListener('click', getRandomActivity);

// Initial display of all activities
displayActivities({ age: 'all', type: 'all', cost: 'all' });


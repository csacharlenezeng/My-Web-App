// Sample activities data with 'cost' property added
const activities = [
  { ageGroup: "toddler", type: "indoor", cost: "free", description: "Build a fort with blankets and pillows!" },
  { ageGroup: "toddler", type: "outdoor", cost: "free", description: "Go on a nature walk and collect leaves." },
  { ageGroup: "preschool", type: "indoor", cost: "paid", description: "Visit a local play center." },
  { ageGroup: "preschool", type: "outdoor", cost: "free", description: "Go to a playground and play tag." },
  { ageGroup: "school-age", type: "indoor", cost: "free", description: "Do a home science experiment." },
  { ageGroup: "school-age", type: "outdoor", cost: "paid", description: "Enroll in a rock climbing class." }
];

// Function to filter and display activities
function displayActivities() {
  const ageGroup = document.getElementById("age-group").value;
  const activityType = document.getElementById("activity-type").value;
  const activityCost = document.getElementById("activity-cost").value;

  const filteredActivities = activities.filter(activity => {
    return (ageGroup === "all" || activity.ageGroup === ageGroup) &&
           (activityType === "all" || activity.type === activityType) &&
           (activityCost === "all" || activity.cost === activityCost);
  });

  // Display a random activity from the filtered list
  const activityList = document.getElementById("activity-list");
  activityList.innerHTML = "";
  if (filteredActivities.length > 0) {
    const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
    activityList.innerHTML = `<p>${randomActivity.description}</p>`;
  } else {
    activityList.innerHTML = `<p>No activities found for the selected filters.</p>`;
  }
}

// Event listener for button click
document.getElementById("generate-activity").addEventListener("click", displayActivities);

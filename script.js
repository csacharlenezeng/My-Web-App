const activities = [
    { name: "Drawing and Coloring", type: "creative", age: "preschool" },
    { name: "Visit the Zoo", type: "outdoor", age: "school-age" },
    { name: "Building Blocks", type: "educational", age: "toddler" },
    { name: "Scavenger Hunt", type: "outdoor", age: "school-age" },
    { name: "Story Time", type: "indoor", age: "toddler" },
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
  
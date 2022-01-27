export async function getAllEvents() {
  const response = await fetch(
    "https://next-project-11416-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  console.log("data is : ", data);

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  // console.log("all data is ", allEvents)
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvent = await getAllEvents();
  return allEvent.find((event) => event.id === id);
}

// we are in node enviroment
// see in browser=> domain/.netlify/functions/hello => http://localhost:8888/.netlify/functions/hello
const data = {
  data: [
    {
      ratingsAverage: 5,
      guides: [
        {
          photo: "user-10.jpg",
          role: "lead-guide",
          _id: "5c8a21d02f8fb814b56fa189",
          name: "Steve T. Scaife",
          email: "steve@example.com",
        },
        {
          photo: "user-7.jpg",
          role: "guide",
          _id: "5c8a201e2f8fb814b56fa186",
          name: "Kate Morrison",
          email: "kate@example.com",
        },
        {
          photo: "user-5.jpg",
          role: "guide",
          _id: "5c8a1f292f8fb814b56fa184",
          name: "leo@example.com",
          email: "leo@example.com",
        },
      ],
      _id: "5c88fa8cf4afda39709c2951",
      name: "The Forest Hiker",
      duration: 5,
      difficulty: "easy",
      price: 397,
      summary: "Breathtaking hike through the Canadian Banff National Park",
      durationWeeks: 0.7142857142857143,
      id: "5c88fa8cf4afda39709c2951",
    },
    {
      ratingsAverage: 4.8,
      guides: [
        {
          photo: "user-12.jpg",
          role: "lead-guide",
          _id: "5c8a22c62f8fb814b56fa18b",
          name: "Miyah Myles",
          email: "miyah@example.com",
        },
        {
          photo: "user-6.jpg",
          role: "guide",
          _id: "5c8a1f4e2f8fb814b56fa185",
          name: "Jennifer Hardy",
          email: "jennifer@example.com",
        },
      ],
      _id: "5c88fa8cf4afda39709c2955",
      name: "The Sea Explorer",
      duration: 7,
      difficulty: "medium",
      price: 497,
      summary: "Exploring the jaw-dropping US east coast by foot and by boat",
      durationWeeks: 1,
      id: "5c88fa8cf4afda39709c2955",
    },
    {
      ratingsAverage: 4.4,
      guides: [
        {
          photo: "user-12.jpg",
          role: "lead-guide",
          _id: "5c8a22c62f8fb814b56fa18b",
          name: "Miyah Myles",
          email: "miyah@example.com",
        },
        {
          photo: "user-13.jpg",
          role: "guide",
          _id: "5c8a23412f8fb814b56fa18c",
          name: "Ben Hadley",
          email: "ben@example.com",
        },
      ],
      _id: "64ede055891cd7004f1da4cd",
      name: "The Mountain Biker",
      duration: 5,
      difficulty: "easy",
      price: 825,
      summary:
        "Exquisite wines, scenic views, exclusive barrel tastings,  and much more",
      durationWeeks: 0.7142857142857143,
      id: "64ede055891cd7004f1da4cd",
    },
    {
      ratingsAverage: 4.5,
      guides: [
        {
          photo: "user-10.jpg",
          role: "lead-guide",
          _id: "5c8a21d02f8fb814b56fa189",
          name: "Steve T. Scaife",
          email: "steve@example.com",
        },
        {
          photo: "user-13.jpg",
          role: "guide",
          _id: "5c8a23412f8fb814b56fa18c",
          name: "Ben Hadley",
          email: "ben@example.com",
        },
        {
          photo: "user-6.jpg",
          role: "guide",
          _id: "5c8a1f4e2f8fb814b56fa185",
          name: "Jennifer Hardy",
          email: "jennifer@example.com",
        },
      ],
      _id: "5c88fa8cf4afda39709c295a",
      name: "The Snow Adventurer",
      duration: 4,
      difficulty: "difficult",
      price: 997,
      summary: "Exciting adventure in the snow with snowboarding and skiing",
      durationWeeks: 0.5714285714285714,
      id: "5c88fa8cf4afda39709c295a",
    },
    {
      ratingsAverage: 4.6,
      guides: [
        {
          photo: "user-12.jpg",
          role: "lead-guide",
          _id: "5c8a22c62f8fb814b56fa18b",
          name: "Miyah Myles",
          email: "miyah@example.com",
        },
        {
          photo: "user-7.jpg",
          role: "guide",
          _id: "5c8a201e2f8fb814b56fa186",
          name: "Kate Morrison",
          email: "kate@example.com",
        },
      ],
      _id: "5c88fa8cf4afda39709c295d",
      name: "The City Wanderer",
      duration: 9,
      difficulty: "easy",
      price: 1197,
      summary: "Living the life of Wanderlust in the US' most beatiful cities",
      durationWeeks: 1.2857142857142858,
      id: "5c88fa8cf4afda39709c295d",
    },
  ],
};
export async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

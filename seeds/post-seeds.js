const { Post } = require("../models");

const postData = [
  {
    title: "A New Chip Cluster Will Make Massive AI Models Possible",
    content:
      "WHEN IT COMES to the neural networks that power today’s artificial intelligence, sometimes the bigger they are, the smarter they are too. Recent leaps in machine understanding of language, for example, have hinged on building some of the most enormous AI models ever and stuffing them with huge gobs of text. A new cluster of computer chips could now help these networks grow to almost unimaginable size—and show whether going ever larger may unlock further AI advances, not only in language understanding, but perhaps also in areas like robotics and computer vision.",
    user_id: 1,
  },
  {
    title: "Can Robots Evolve Into Machines of Loving Grace?",
    content: "NOBODY COULD SAY exactly when the robots arrived. They seemed to have been smuggled onto campus during the break without any official announcement, explanation, or warning. There were a few dozen of them in total: six-wheeled, ice-chest-sized boxes with little yellow flags on top for visibility. They navigated the sidewalks around campus using cameras, radar, and ultrasonic sensors. They were there for the students, ferrying deliveries ordered via an app from university food services, but everyone I knew who worked on campus had some anecdote about their first encounter.",
    user_id: 2,
  },
  {
    title: "Tesla Promised a Robot. Was It Just a Recruiting Pitch?",
    content: "THE TESLA RECRUITMENT presentation ended Thursday night when a person in a tight white suit, their head encased in black, robot-walked onto the dark stage. Techno music blared, and the person began to Charleston. The person did the running man. The person waggled their shoulders and extended their arms into jazz hands. “All right. Thank you,” CEO Elon Musk said, an eternal-seeming 40 seconds into the freestyle, cutting off the dance.",
    user_id: 1,
  },
  {
    title: "Tesla Promised a Robot. Was It Just a Recruiting Pitch?",
    content: "THE TESLA RECRUITMENT presentation ended Thursday night when a person in a tight white suit, their head encased in black, robot-walked onto the dark stage. Techno music blared, and the person began to Charleston. The person did the running man. The person waggled their shoulders and extended their arms into jazz hands. “All right. Thank you,” CEO Elon Musk said, an eternal-seeming 40 seconds into the freestyle, cutting off the dance.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

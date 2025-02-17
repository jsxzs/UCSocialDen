const Event = require("../models/eventModel");

//get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({}); 
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};





module.exports = getEvents;



/* 
let results=[
        { 
          id: '1', 
          title: 'Event Name', 
          category: 'Events/food',
          date: '2023-10-02',
          start: '7:00 PM', 
          end: '9:00 PM', 
          location: 'Arteazen', 
          description: 'Hey guys, I want to get boba at Arteazen around 7...' 
        },
        { 
          id: '2', 
          title: 'Event Name', 
          category: 'Events/sports',
          date: '2023-10-05',
          start: '7:00 PM', 
          end: '9:00 PM', 
          location: 'Arteazen', 
          description: 'Hey guys, I want to get boba at Arteazen around 7...' 
        },
        { 
          id: '3', 
          title: 'Event Name', 
          category: 'Events/sports',
          date: '2023-10-10',
          start: '7:00 PM', 
          end: '9:00 PM', 
          location: 'Arteazen', 
          description: 'Hey guys, I want to get boba at Arteazen around 7...',
          image: true 
        },
      ];
    // res.json(results);
    return results;
  }
};

export { eventController };
*/
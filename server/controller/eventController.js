// This will help us connect to the database
import db from "../models/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// TODO: Implement database APIs (e.g. getEvent, createEvent, updateEvent, deleteEvent)
const eventController = {
  async getAllEvents(req, res) {
    // try {
    //   const events = await Event.find()
    //     .sort({ start: 1 }) // Sort by start date ascending
    //     .select('-__v'); // Exclude version key
      
    //   res.json(events);
    // } catch (error) {
    //   console.error('Error fetching events:', error);
    //   res.status(500).json({ message: 'Error fetching events' });
    // }
    console.log("getAllEvents");
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
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Event = require('../models/eventModel'); 
const { getAllEvents, createEvent } = require('../controller/eventController');

describe('Event Controller', () => {
  let mongoServer;

  beforeAll(async () => {
    // Start an in-memory MongoDB instance
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    // Disconnect and stop the in-memory MongoDB instance
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  afterEach(async () => {
    // Clean up all events after each test
    await Event.deleteMany();
  });

  describe('getAllEvents', () => {
    it('should return all events', async () => {
      // Insert sample events into the in-memory DB
      const sampleEvents = [
        { name: 'Event 1', start_time: new Date(), end_time: new Date(), location: 'test', author: 'martin' },
        { name: 'Event 2', start_time: new Date(), end_time: new Date(), location: 'test', author: 'martin'  }
      ];
      await Event.insertMany(sampleEvents);
    //   console.log(Event.find());

      // Create mock request and response objects
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await getAllEvents(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.arrayContaining([
          expect.objectContaining({ name: 'Event 1' }),
          expect.objectContaining({ name: 'Event 2' })
        ])
      );
    });

    it('should handle errors when fetching events', async () => {
      // Force an error by mocking Event.find to reject
      const originalFind = Event.find;
      Event.find = jest.fn().mockRejectedValue(new Error('Database error'));

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await getAllEvents(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch events' });

      // Restore the original function
      Event.find = originalFind;
    });
  });

  describe('createEvent', () => {
    it('should create a new event', async () => {
      const req = {
        body: {
            name: 'New Event',
            start_time: '2025-12-01T10:00:00Z',
            end_time: '2025-12-01T12:00:00Z',
            location: 'test',
        }
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await createEvent(req, res);

      // Verify that the response status is 201 and the returned event contains the expected fields
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'New Event',
          author: 'null'
        })
      );

      // Additionally, check that the event exists in the DB
      const eventsInDb = await Event.find();
      expect(eventsInDb.length).toBe(1);
      expect(eventsInDb[0].name).toBe('New Event');
    });

    it('should handle errors when creating an event', async () => {
      // Force an error by mocking Event.create to reject
      const originalCreate = Event.create;
      Event.create = jest.fn().mockRejectedValue(new Error('Database error'));

      const req = { body: { name: 'Test Event' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      await createEvent(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to create an event' });

      // Restore the original function
      Event.create = originalCreate;
    });
  });
});

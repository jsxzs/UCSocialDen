const {Event} = require("../models/eventModel");
const { ObjectId } = require('mongodb');

//get all events
const getAllEvents = async (req, res) => {
  try {
    const allevents = await EventDB.find({});
    res.status(200).json(allevents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

// create an event
const createEvent = async (req, res) => {
  try {
    const newevent = req.body;

    // newevent['_id'] = 1;
    // console.log(1);
    // // convert time string to Date objective
    // let starttime = newevent['start_time'];
    // let endtime = newevent['end_time'];
    // newevent['start_time'] = new Date(starttime);
    // newevent['end_time'] = new Date(endtime);

    // // get current time as create_time
    // newevent['create_time'] = new Date();

    // //TODO: Replace the author with real user
    // newevent['author'] = "null";
    // // newevent = {...newevent, author: "null"};

    newevent={
      _id: 1,
      name: "dinner",
      start_time: new Date(),
      end_time: new Date(),
      location: "adwda",
      author: "wdwad",
    };
    console.log(newevent);
    // let  newEvent = new Event(newevent);
    // await ewEvent.save();
    await Event.insertOne(newevent);
    res.status(201).json(newevent);
  } catch (error) {
    res.status(500).json({ error: "Failed to create an event" });
  }
};

// 根据 ID 获取单个事件
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "事件未找到" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "查询事件失败" });
  }
};

// 更新事件
const updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) return res.status(404).json({ error: "事件未找到" });
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: "更新事件失败" });
  }
};

// 删除事件
const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ error: "事件未找到" });
    res.json({ message: "事件删除成功" });
  } catch (error) {
    res.status(500).json({ error: "删除事件失败" });
  }
};


module.exports = {getAllEvents, createEvent};


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
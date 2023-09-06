import express, { Request, Response } from 'express';
import { ListModel } from '../models/addToList';
import { EventModel } from '../models/evnetList';



const eventRoute = express.Router();



// --------------- GET REQUEST ADD TO LIST PARTICIPANTS DATA --------------- //
eventRoute.get('/', async (request: Request, response: Response) => {
    const query = request.query;

    try {
        const participants = await ListModel.find(query);
        response.send(participants);
    } catch (error) {
        response.send(`Cannot able to get the participants ${error}`);
    }
});



// --------------- POST REQUEST ADD TO LIST PARTICIPANTS DATA --------------- //
eventRoute.post('/addtolist', async (request: Request, response: Response) => {
    const { name, date, email, contact } = request.body;

    try {
        const oldUser = await ListModel.find({ email });
        if (oldUser.length > 0) {
            response.send(`${name}, you are email address already exists, try another`);
        } else {
            const data = new ListModel({ name, date, email, contact });
            await data.save();
            response.send({
                'message': `${name}'s data was successfully added`,
                'data': data
            });
        }
    } catch (error) {
        response.send(`Cannot able to add the data ${error}`);
    }
});



// --------------- POST REQUEST TO ADD EVENT DATA --------------- //
eventRoute.post('/addevent', async (request: Request, response: Response) => {
    const { title, selectedUsers } = request.body;

    try {
        const oldEvent = await EventModel.find({ title });
        if (oldEvent.length > 0) {
            response.send(`${title}, event is already created. please create another`);
        } else {
            const newEvent = new EventModel({ title, selectedUsers });
            await newEvent.save();
            response.send({
                'message': `${title}, event is created successfully`,
                'data': newEvent
            })
        }
    } catch (error) {
        response.send(`Cannot able to add the event data ${error}`);
    }
});



// --------------- GET REQUEST FOR EVENTS DATA --------------- //
eventRoute.get('/getevent', async (request: Request, response: Response) => {
    const query = request.query;

    try {
        const eventData = await EventModel.find(query);
        response.send(eventData);
    } catch (error) {
        response.send(`Cannot able to get the participants ${error}`);
    }
});



// --------------- DELETE REQUEST FOR DELETE EVENT DATA --------------- //
eventRoute.delete("/delete/:id", async (request: Request, response: Response) => {
    const ID = request.params.id;

    try {
        await EventModel.findByIdAndDelete({ _id: ID });
        response.send({ "message": `Event is successfully deleted.` });
    } catch (error) {
        response.send('Cannot able to delete the event');
    }
});




export { eventRoute };
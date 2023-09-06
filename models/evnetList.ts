import mongoose, { Schema, Document, Model, mongo } from 'mongoose';


interface Participants extends Document {
    name: String,
    date: Date,
    email: String,
    contact: Number
};


interface Event extends Document {
    title: String,
    selectedUser: Participants[]
};


const participantsSchema : Schema<Participants> = new Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    versionKey: false
});


const eventSchema : Schema<Event> = new Schema({
    title: String,
    selectedUser: [participantsSchema]
}, {
    versionKey: false
});



const EventModel = mongoose.model<Event>('event', eventSchema);


export { EventModel };

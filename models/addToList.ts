import mongoose, { Schema, Document, Model, mongo } from 'mongoose';


// define an interface for the document
interface AddToList extends Document {
    name: String,
    date: Date,
    email: String,
    contact: Number
};


// define the schema
const listSchema = new Schema<AddToList>({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    versionKey: false
});


// define the model
const ListModel: Model<AddToList> = mongoose.model<AddToList>('list', listSchema);



export { ListModel };

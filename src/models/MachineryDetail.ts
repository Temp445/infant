import mongoose, { model, models } from "mongoose"


const MachineryDetailSchema = new mongoose.Schema({
    machineName: {
        type: String,
        required: true
    },
    count:{
        type: String,
        required: true
    },
})

const MachineryDetail = models.MachineryDetail || model("MachineryDetail", MachineryDetailSchema)

export default MachineryDetail


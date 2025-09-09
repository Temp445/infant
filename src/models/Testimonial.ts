import mongoose, { model, models } from 'mongoose'

const testimonialSchema = new mongoose.Schema ({

    clientName: { type: String, required: true},
    clientRole: {type: String, required: true},
    description: { type: String }    
})

const Testimonial = models.Testimonial || model("Testimonial", testimonialSchema) 

export default Testimonial;
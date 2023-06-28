import {
    createRouter
} from 'next-connect';
import Contact from '../../models/contact.js'
import connectDb from '../../connection/config.js'

const router = createRouter();

router.get((req, res) => {
    res.send({
        "hello": "world"
    })
})

router.post(async(req, res) => {
    try {
        // destructure body
        const {
            name,
            email,
            subject,
            message
        } = req.body;
        // validate the users
        if (!name || !email || !subject || !message) {
            res.status(400).send({
                succes: false,
                message: 'Please fill the required fields.'
            });
        } else {
            console.log('yes its working')
                // create object of user model
            const contact = new Contact({
                name,
                email,
                subject,
                message,
            });
            // save user
            const contact_entry = await contact.save();
            // check the condition if user save successfully
            if (contact_entry) {
                // show message if success
                res.send({
                    success: true,
                    message: 'Thanks for contacting us we will reply as soon as we get your message'
                });
            } else {
                // show message if some problem
                res.send({
                    success: false,
                    message: 'sorry, something went wrong, please try again in a moment.'
                })
            }
        }
    } catch (error) {
        // show error message
        res.status(500).send(`error ${error.message}`);
    }
});

export default router.handler();
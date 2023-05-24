import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration ,OpenAIApi } from 'openai';


dotenv.config()

const router = express.Router()

const configuration = new Configuration({
    apiKey:process.env.OPEN_API_KEY
    // apiKey:"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"
})

const openai = new OpenAIApi(configuration)

// router.route('/').get((req,res) => {
//     res.send("Hello From Open Ai Api")
// })

router.route('/').post(async (req,res) => {
    try {
        const {prompt} = req.body;
        const aiResponse = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'b64_json'
        });
        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({photo:image});
    } catch (error) {
        console.log(error?.response.data.error.message);
        res.status(500).send(error?.response.data.error.message)

    }
})

export default router;
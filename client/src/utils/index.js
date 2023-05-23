import Filesaver from 'file-saver'
import { surpriseMePrompts } from "../constants";

export function getRandomPrompts(prompt) {
    const randIndex = Math.floor(Math.random()* surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randIndex];
    if(randIndex===prompt){
        return getRandomPrompts(prompt);
    }
    return randomPrompt;
}

export async function downloadImage(_id,photo)
{
    Filesaver.saveAs(photo,`download-${_id}.jpg`)
}
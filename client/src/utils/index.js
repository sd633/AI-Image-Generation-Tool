import FileSaver from 'file-saver';

import { surpriseMePrompts } from '../constants/index'


//The below function generates a random prompt from the 50 predefined prompts
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //If prompt matches with one of the prompts of the surpriseMePrompts array
    if (randomPrompt === prompt)
        return getRandomPrompt(prompt)

    return randomPrompt;

}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
import express from "express"
import cors from "cors"

import * as toxicity from '@tensorflow-models/toxicity';

const app = express()

app.use(cors())
app.use(express.json())

export async function SeforOtario(sentence: string) {


  console.log("> Deu certo.", sentence);

  const threshold = 0.7;

  const toxicityLabels = [
    "identity_atack",
    "insult",
    "obscene",
    "severe_toxicity",
    "threat",
    "toxicity",
  ];


const model = await toxicity.load(treshold, toxicitylabels)

const sentences = [sentence];

const predictions = await model.classify(sentences)

console.log(">predictions", predictions);

return predictions 

/*
prnits:
{
   "label": [{
     "probabilites": [0.9659664034445, 0.034033114168671],
     "match": false
   }]


},
{"label": "identity_atack",
"results": [{
"probabilites": [0.08124470614101257, 0.91875296113098],
"match": true
}]
},
'''
*/

}

app.post('/toxicity-classifier',async (req, res) => {

  const {sentence} = req.body
  const predictions = await SeforOtario(sentence)

  return res.json({
    predictions
  })
}]

app.listen(3000, ( => {
  console.log("">server running");

})


const express = require('express');
const Topgg = require('@top-gg/sdk');
const fetch = require('node-fetch');
const app = express();
    
const webhook = new Topgg.Webhook('PASSWORD Authorization Top.gg')
    
app.post('/vote', webhook.listener(vote => {
console.log(`User with id ${vote.user} Voted!`)
  let value = JSON.stringify({
    embeds: [
      {
        description: `New vote received from <@${vote.user}> \`(${vote.user})\``,
        color: 0xffffff,
        footer: {
          text: 'Many thanks!',
        },
      }
    ]
  })
  fetch('URL WEBHOOK', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
   },
   body: value
  }).catch(e => console.log('Error occured while posting webhook: ' + e))
}))
app.listen(PORT SERVER)

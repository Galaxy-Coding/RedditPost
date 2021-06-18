const redditImageFetcher = require('reddit-image-fetcher')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  try {
  const reddits = req.query.r.split(',');
  if(req.query.r || req.query.url !== undefined){
 const image = redditImageFetcher.fetch({
    type: 'custom',
    total: 1, 
    subreddit: reddits 
}).then(image => { 
  res.redirect(image[0].image)
  console.log(image[0].image)
})
} else {
  res.status(404)
  res.json({message: "Invalid or missing endpoints"})
}
} catch(err){
  res.status(500)
  res.json({message: "Something went wrong. Please try again later. "})
}
});

app.listen(3000, () => {
  console.log('server started');
});
// https://redditpost.galaxycoding.repl.co?r=memes
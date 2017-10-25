# thunk-api-practice

## Why?
I want to reinforce my redux skills and learn to use thunks properly, so wanted
to do a little app which touches an api to do this.

## What?

This will be a little app using the giphy API.

I will be able to type in a search term.
When I submit the search I will see a new item on the page with the search term,
the time the search was done, and a gif matching the search on it.
If I do a new search it will add another of these to the page, meaning I can
keep track of all of the gifs I've searched for.
I can delete searches that I don't want to see anymore.

## How?

1. set up app to have a search bar which adds searches when submitted
2. have those searches be rendered as elements on the page (with placeholder
  images)
3. replace placeholder images with actual calls to the giphy api, and gifs

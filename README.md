# fabcompare
Website to compare Flesh and Blood decklists to figure out card differences. This site is built off the FABDB.net api and allows a user to compare
two decks for matching and non matching cards. No longer do you have to look back an forth to see what is different between that pro players deck and yours, just load 
them both into the website and have it highlight the differences

## Local Development

### Setting up your enviroment keys
To run/fork this project, you must set up your own developer keys from https://fabdb.net/resources/api(fabdb). Create a new file at the root of the project called `.env`
with the following contents
```
FABDB_API_TOKEN= [Insert your API TOKEN here]
FABDB_API_SECRET= [Insert your secret key here]
SERVER_PORT = 3001
```

###Setting up the project
Once you do the above the rest of the setup will just be two dependancy instalation commands one in the root directory and one in `./app` for the front end.

### running this project locally
To run the project locally you will need to spin up both the express server and the webpack-deev server. This will most likely require two terminal shells.
From the home directory run `npm run start` to start the express server. Then in a second shell navigate to `./app` and run `npm start` to start the webserver.
Once the webserver starts running you can see your site on `localhost:3000`
`

const sha512 = require('js-sha512');
const axios = require('axios');
const FABDB_SERVER_URL = 'https://api.fabdb.net';
const DEFAULT_FABDB_HEADER = {
  Authorization: `Bearer ${process.env.FABDB_API_TOKEN}`
};

const toFullURL = (route) => `${FABDB_SERVER_URL}${route}`
const withAuthQuerryParams = () => {
  const time = Date.now();
  const hash = sha512(`${process.env.FABDB_API_SECRET}${time}`)
  return {
    time,
    hash
  }
}

const getCards = async () =>  {
  try {
    const response = await axios.get(toFullURL('/cards'), {
      headers: DEFAULT_FABDB_HEADER,
      params: withAuthQuerryParams()
    });
    console.log(response)
    return response
  }
  catch(error){
    console.log(error)
  }
}

const getDeck = async (deckCode) => {
  try {
    const response = await axios.get(toFullURL(`/decks/${deckCode}`), {
      headers: DEFAULT_FABDB_HEADER,
      params: withAuthQuerryParams()
    });
    return response
  }
  catch(error){
    console.log(error)
  }
}

const getDecks = async (deckCode) => {
  try {
    const response = await axios.get(toFullURL(`/decks/${deckCode}`), {
      headers: DEFAULT_FABDB_HEADER,
      params: withAuthQuerryParams()
    });
    return response
  }
  catch(error){
    console.log(error)
  }
}

module.exports = {
  getCards,
  getDeck
}
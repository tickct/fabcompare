import { selectDecks } from "../../store/deckSlice";
import { useAppSelector } from "../../store/hooks";
import DeckListView from "./DeckList";
import Box from '@mui/material/Box'; // Grid version 2
import { useGetDecksQuery } from "../../queries/deckQuery";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import { sortDeck } from "../../utils/CardDiff";
import { Deck } from "../../types.d";

export const DeckView = () => {
  const deckCodes = useAppSelector(selectDecks);
  const {data, isLoading}: {data?: Deck[], isLoading: boolean} = useGetDecksQuery(deckCodes);
  if(isLoading || !data){
    return (
      <Card sx={{ minWidth: 275, overflow: 'auto'}}>
        <CircularProgress />
      </Card>
    )
  };
  return (
      <Box  sx={{
        display: 'flex',
        direction: 'row',
        mx: 4
      }}>
        { 
          data.map((deck,index) => {
            const sortedDeck = sortDeck(deck,data.filter((_,i) => i !== index)[0])
            return (
                <DeckListView deck={sortedDeck} key={sortedDeck.slug}/>
            )
          })
        }
      </Box>
  );
}
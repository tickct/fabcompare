import { ReactElement } from "react";
import { Typography, Card, CardHeader, IconButton, Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Close from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppDispatch } from "../../store/hooks";
import { remove } from '../../store/deckSlice';
import { MarkAndSortedDeck, MarkedCardSection } from "../../types.d";
import { toMarkColor } from "../../utils/CardStyle";

type Props = {
  deck: MarkAndSortedDeck
};

const AccordionSection = ({cards, title}: MarkedCardSection) => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="Equipment"
        id="Equipment"
        sx={{flexDirection: "row-reverse"}}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: 1}}>
          <Typography>{title}</Typography>
          <Typography>{cards.length}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{mx: 0, px:0}}>
        {
          cards.map(card => {
            if(card.missing){
              return <Box 
                sx={{
                  height: 24,
                  mx: 0,
                  px: 2,
                  justifyContent: 'space-between',
                  backgroundColor: toMarkColor(card)
                }}
              />
            }
            return (
              <Box 
                className='flexbox-row align-center'
                sx={{ 
                  mx: 0,
                  px: 2,
                  justifyContent: 'space-between',
                  backgroundColor: toMarkColor(card)
                }}
              >
                <Typography>
                  {card.name}
                </Typography>
                <Typography>
                  {card.total}
                </Typography>
              </Box>
            )
          })
        }
      </AccordionDetails>
    </Accordion>
  )
}
export const DeckListView = ({deck}: Props):ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ minWidth: 275, overflow: 'auto', flex: '1 0 0'}}>
      <CardHeader 
        title={deck?.name}
        action={
          <IconButton ario-label="remove" onClick={() => dispatch(remove(deck.slug))}>
            <Close />
          </IconButton>
        }
        sx={{
          height: 100
        }}
      />
      {Object.values(deck.cards).map(section => 
        <AccordionSection
          key={section.title}
          {...section}
        />
      )}
    </Card>
  );
}

export default DeckListView;
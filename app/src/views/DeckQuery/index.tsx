import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Button, TextField, Box } from '@mui/material';
import React, {useState} from 'react';
import { add } from '../../store/deckSlice';
import { useAppDispatch } from '../../store/hooks';

export const DeckQuery = (): ReactJSXElement => {
  const [deckCode, setDeckCode] = useState('')
  const dispatch = useAppDispatch();
  return (
    <Box className='flexbox-row align-center' sx={{ mx: 2, justifyContent: 'space-around' }}>
      <TextField 
        id="outlined-basic"
        label="FABDB Deck ID"
        name='deckCode'
        type='text'
        value={deckCode}
        margin='normal'
        onChange={(ev) => setDeckCode(ev.target.value)}
        sx={{
          width: .9,
        }}
      />
      <Button 
        variant="contained"
        size="large"
        onClick={() => dispatch(add(deckCode))}
      >Submit</Button>
    </Box>
  );
}
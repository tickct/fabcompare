import { Card, Deck, MarkAndSortedDeck, MarkedCard, MARK_TYPE } from "../types.d";

export const toMark = (secondDeck: Card[]) => (card: Card): MARK_TYPE => {
  const cardMatch = secondDeck.find(sCard => sCard.identifier === card.identifier);
  const cardCountMatch = cardMatch?.total === card.total;
  if(cardCountMatch) return MARK_TYPE.SUCCESS_MARK;
  if(cardMatch && !cardCountMatch) return MARK_TYPE.COUNT_ERROR_MARK;
  return MARK_TYPE.ERROR_MARK
}

const all = <T>(...pred:{(x:T):boolean}[]) => (x:T): boolean => {
  return pred.reduce((val: boolean,fn) => {
    if(!val) return false;
    return(fn(x))
  }, true)
}
const toFilterAndMarkedCards = (deck:Deck, compareDeck?: Deck) => (...pred: ((card: Card) => boolean)[]) => {
  const compareFiltered = compareDeck?.cards.filter(all(...pred));
  const markedCards: MarkedCard[] = deck.cards
      .filter(all(...pred))
      .map((card: Card): MarkedCard =>({
        ...card,
        mark: compareDeck ? toMark(compareDeck.cards)(card) : MARK_TYPE.NO_MARK
      })) || [];
  const missingCards: MarkedCard[] = compareFiltered?.filter((card: Card) => !markedCards.find(mCard => mCard.identifier === card.identifier))
      .map((card: Card): MarkedCard => ({
        ...card,
        mark: MARK_TYPE.NO_MARK,
        missing: true
      })) || [];
  return [...markedCards,...missingCards].sort((cardA,cardB) => cardA.name.localeCompare(cardB.name));
}
export const sortDeck = (deck: Deck, compareDeck?: Deck): MarkAndSortedDeck =>{ 
  const filterAndMarkCards = toFilterAndMarkedCards(deck, compareDeck)
  return {
    ...deck,
    cards: {
      equipment: {
        title: 'Equipment',
        cards: filterAndMarkCards(card => card.type === 'equipment')
      },
      pitchCost1: {
        title: 'Red',
        cards: filterAndMarkCards(card => card.stats.resource === 1)
      },
      pitchCost2: {
        title: 'Yellow',
        cards: filterAndMarkCards(card => card.stats.resource === 2)
      },
      pitchCost3: {
        title: 'Blue',
        cards: filterAndMarkCards(card => card.stats.resource === 3)
      },
      pitchCost0: {
        title: 'Other',
        cards: filterAndMarkCards(
          card => ![0,1,2,3].includes(card.stats.resource || -1),
          card => card.type !== 'equipment',
          card => card.type !== 'hero',
          card => card.type !== 'weapon',
        )}
      }
    }
  }
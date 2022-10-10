import { MarkedCard, MARK_TYPE } from "../types.d";

export const toMarkColor = (card: MarkedCard) => {
  switch(card.mark){
    case MARK_TYPE.SUCCESS_MARK:
      return 'success.light';
    case MARK_TYPE.COUNT_ERROR_MARK:
      return 'warning.light'
    case MARK_TYPE.ERROR_MARK:
      return 'error.light'
    default:
      return 'inherit'
  }
}
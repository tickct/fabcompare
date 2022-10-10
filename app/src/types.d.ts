enum RARITY {
  T ="T",
  C = "C",
  R = "R",
  M = "M",
  F = "F"
};

export enum MARK_TYPE { 
  SUCCESS_MARK = 'success',
  COUNT_ERROR_MARK = 'error-count',
  ERROR_MARK = 'error-match',
  NO_MARK = 'no-mark'
};

export type Deck = {
  cardBack: number,
  cardBackImage: string,
  cards: Card[],
  createdAt: string,
  decklist: unknown,
  event: unkown,
  format: 'constructed' | 'blitz',
  hero: Card,
  label: string,
  limitToCollection: number,
  mine: boolean,
  myVote: number,
  name: string,
  notes: string | null,
  player: string | null,
  practiseId: number | null,
  result: unkown | null
  sideboard: Card[],
  slug: string,
  totalVotes: number,
  updatedAt: string,
  videoUrl: string | null,
  visibility: 'public' | 'private',
  weekVotes: number
} 

export type Card = {
  buyLink: string,
  class: string,
  comments: string,
  flavour: string,
  identifier: string,
  image: string,
  keywords: string[],
  legality: unknown[],
  name: string,
  rarity: RARITY,
  rulings: unknown[],
  sideboardTotal: number
  stats: CardStats,
  subType: string,
  talent: string | Null,
  text: string,
  total: string
  type: 'action' | 'equipment' | 'hero' | 'resource' | 'weapon',
}

export type CardStats = {
  attack?: number,
  cost?: number,
  defense?: number,
  resource?: number,
  intellect?: number,
  life?: number
}

export type MarkedCard = Card & { 
  mark: MARK_TYPE 
  missing?: boolean
}

export type MarkedCardSection = {
  title: string;
  cards: MarkedCard[]
}

export type MarkAndSortedDeck = Omit<Deck,'cards'> & {
  cards: {
    [sectionName: string]: MarkedCardSection
  }
}
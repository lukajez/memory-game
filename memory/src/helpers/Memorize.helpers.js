import CARD_ONE from '~static/images/cards/card-1.png'
import CARD_TWO from '~static/images/cards/card-2.png'
import CARD_THREE from '~static/images/cards/card-3.png'
import CARD_FOUR from '~static/images/cards/card-4.png'
import CARD_FIVE from '~static/images/cards/card-5.png'
import CARD_SIX from '~static/images/cards/card-6.png'
import CARD_SEVEN from '~static/images/cards/card-7.png'
import CARD_EIGHT from '~static/images/cards/card-8.png'
import CARD_NINE from '~static/images/cards/card-9.png'
import CARD_TEN from '~static/images/cards/card-10.png'
import CARD_ELEVEN from '~static/images/cards/card-11.png'
import CARD_TWELVE from '~static/images/cards/card-12.png'
import CARD_THREETEN from '~static/images/cards/card-13.png'
import CARD_FOURTEEN from '~static/images/cards/card-14.png'
import CARD_FIFTEEN from '~static/images/cards/card-15.png'

const NUMBER_OF_UNIQUE_CARDS_BY_DIFFICULTY_LEVEL = {
  'easy': 4,
  'medium': 8,
  'hard': 15
}

console.log(process.env.PUBLIC_URL)
console.log(process.env.NODE_ENV)

export const generateGameCards = (difficulty = '') => {
  const gameCards = []

  const uniqueCards = getUniqueCards(difficulty)

  for (const card of uniqueCards) {
    const { cardId } = card

    const cardOneId = cardId
    const cardTwoId = `${cardId}-${cardId}`

    const gameCardOne = { ...card, pair: cardTwoId }
    const gameCardTwo = { ...card, cardId: cardTwoId, pair: cardOneId }

    gameCards.push(gameCardOne)
    gameCards.push(gameCardTwo)
  }

  return shuffleGameCards(gameCards)
}

export const getUniqueCards = (difficulty = '') =>
  Array(NUMBER_OF_UNIQUE_CARDS_BY_DIFFICULTY_LEVEL[difficulty])
    .fill()
    .map((_, index) => getSingleUniqueCard(index))

export const shuffleGameCards = (gameCards = []) => {
  const shuffledGameCards = [...gameCards]
  const { length: numberOfItems } = gameCards

  let currentIndex = numberOfItems
  let randomIndex

  const { floor, random } = Math

  while (currentIndex !== 0) {
    const randomNumber = random() * (currentIndex)
    randomIndex = floor(randomNumber)

    currentIndex--

    // eslint-disable-next-line
    [shuffledGameCards[currentIndex], shuffledGameCards[randomIndex]]
    = [shuffledGameCards[randomIndex], shuffledGameCards[currentIndex]]
  }

  return shuffledGameCards
}

const IMAGE_INDEX_MAP = {
  0: CARD_ONE,
  1: CARD_TWO,
  2: CARD_THREE,
  3: CARD_FOUR,
  4: CARD_FIVE,
  5: CARD_SIX,
  6: CARD_SEVEN,
  7: CARD_EIGHT,
  8: CARD_NINE,
  9: CARD_TEN,
  10: CARD_ELEVEN,
  11: CARD_TWELVE,
  12: CARD_THREETEN,
  13: CARD_FOURTEEN,
  14: CARD_FIFTEEN
}

const getSingleUniqueCard = (index = -1) => ({
    cardId: `memorize-card-${index}`,
    image: IMAGE_INDEX_MAP[index],
    flipped: false
  }
)

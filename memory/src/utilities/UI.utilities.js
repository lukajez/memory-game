export const getHolderWidth = (screenCoverage, screenWidth, cardWidth) => ({
  width: ~~(screenCoverage * (screenWidth / cardWidth)) * cardWidth
})

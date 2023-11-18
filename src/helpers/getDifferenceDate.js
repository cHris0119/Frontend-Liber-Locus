export function getDifferenceDate (date, duration) {
  const auctionEndDate = new Date(date)
  auctionEndDate.setDate(auctionEndDate.getDate() + duration)

  const now = new Date()

  const timeDifference = auctionEndDate - now

  if (timeDifference <= 0) {
    // La subasta ha terminado
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}

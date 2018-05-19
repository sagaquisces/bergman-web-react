// Get visible events
export default (events, { text, sortBy, startDate, endDate }) => {
  
  return events.filter((event) => {
    const startDateMatch = typeof startDate !== 'number' || event.date >= startDate 
    const endDateMatch = typeof endDate !== 'number' || event.date  <= endDate
    const textMatch = event.description.toLowerCase().includes(text.toLowerCase()) || event.title.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.date < b.date ? -1 : 1
    }
  })
}
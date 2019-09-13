import { convertTime12to24, getItemsInBetweenDates } from './index'

describe('Date utilities', () => {
  it('should format 12 time to 24 time format', () => {
    const data = '06:20 PM'
    const expectedResult = '18:20'

    expect(convertTime12to24(data)).toEqual(expectedResult)
  })

  it('getItemsInBetweenDates should return empty but truthy result', () => {
    const result = getItemsInBetweenDates([], {
      from: new Date(),
      to: new Date(),
      dateField: 'date'
    })

    expect(result).toBeTruthy()
  })
})

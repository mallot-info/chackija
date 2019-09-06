import { convertTime12to24 } from './index'

describe('Date utilities', () => {
  it('should format 12 time to 24 time format', () => {
    const data = '06:20 PM'
    const expectedResult = '18:20'

    expect(convertTime12to24(data)).toEqual(expectedResult)
  })
})

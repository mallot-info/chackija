/**
 * Converts '06:20 PM' to '18:20'
 *
 * @param {*} time12h
 * @returns {string}
 */
export const convertTime12to24 = (time12h: any): string => {
  const date = new Date('1/1/2013 ' + time12h)
  return date.getHours() + ':' + date.getMinutes()
}

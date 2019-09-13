import dayjs from 'dayjs'
import { IGetItemsInBetweenDatesParam } from './models/date.interface'

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

/**
 * Filters array based on provided dateField, and returns items which are in between 2 dates
 *
 * @param {any[]} items
 * @param {*} { from, to, dateField }
 * @returns {any[]}
 */
export const getItemsInBetweenDates = (
  items: any[],
  configuration: IGetItemsInBetweenDatesParam
): any[] =>
  items.filter(
    item =>
      dayjs(item[configuration.dateField]).isBefore(configuration.to) &&
      dayjs(item[configuration.dateField]).isAfter(configuration.from)
  )

/**
 * Exports time from date
 *
 * @param {(string | Date)} date
 * @returns {({ time: string; date: string | Date })}
 */
export const extractTimeFromDate = (date: string | Date): { time: string; date: string | Date } => {
  const newDate = new Date(date)

  const time = new Date(date).toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit'
  })

  return { time, date: newDate }
}

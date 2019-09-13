/**
 *
 *
 * @export
 * @interface IGetItemsInBetweenDatesParam
 */
export interface IGetItemsInBetweenDatesParam {
  /**
   * To filter from which date
   *
   * @type {(string | Date)}
   * @memberof IGetItemsInBetweenDatesParam
   */
  from: string | Date

  /**
   * To filter to date
   *
   * @type {(string | Date)}
   * @memberof IGetItemsInBetweenDatesParam
   */
  to: string | Date

  /**
   * Which datafield to check
   *
   * @type {string}
   * @memberof IGetItemsInBetweenDatesParam
   */
  dateField: string
}

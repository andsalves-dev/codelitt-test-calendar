import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Cell, { EmptyCell } from './Cell'
import styles from './Month.module.scss'

export default function Month({ baseDate, setModalReminder, onDateSelect }) {
  const momentDate = moment(baseDate)
  const day1Date = momentDate.startOf('month')
  const lastDay = momentDate.daysInMonth()
  const day1Weekday = day1Date.weekday()
  const reminders = useSelector(({ reminders }) => reminders.list.filter(rem => {
    return momentDate.isSame(rem.datetime, 'month')
  }))
  const tbodyRows = []

  for (let row = 0; lastDay > (row * 7 - day1Weekday); row++) {
    tbodyRows.push(
      <tr key={row + 1}>
        {Array.from(Array(7)).map((_, k) => {
          const day = row * 7 - day1Weekday + k + 1

          if (day > lastDay || day < 1) {
            return <EmptyCell key={day} />
          }

          const dayMoment = momentDate.date(day).clone()
          const cellReminders = reminders
            .filter(rem => dayMoment.isSame(rem.datetime, 'day'))
            .sort((rem1, rem2) => moment(rem1.datetime).isBefore(rem2.datetime) ? -1 : 1)

          return (
            <Cell
              dayMoment={dayMoment}
              key={day}
              onClick={() => onDateSelect(dayMoment)}
              reminders={cellReminders}
              selected={dayMoment.isSame(baseDate, 'day')}
              setModalReminder={setModalReminder}
            />
          )
        })}
      </tr>
    )
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
        <tr>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(weekday => (
            <th key={weekday}>{weekday}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {tbodyRows}
        </tbody>
      </table>
    </div>
  )
}

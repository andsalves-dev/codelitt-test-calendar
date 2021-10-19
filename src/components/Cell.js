import React from 'react'
import moment from 'moment'
import styles from './Cell.module.scss'

export const EmptyCell = () => <td className={styles.emptyCell}>&nbsp;</td>

export default function Cell({ dayMoment, reminders, setModalReminder, onClick, selected }) {
  return (
    <td>
      <div
        className={`${styles.cellContent} ${selected ? styles.selected : ''}`}
        onClick={onClick}
        onDoubleClick={() => setModalReminder({ datetime: dayMoment.format('YYYY-MM-DD 12:00:00') })}
        role="button"
      >
      <span className={`${styles.day} ${dayMoment.isSame(moment(), 'day') ? styles.isToday : ''}`}>
        {dayMoment.date()}
      </span>
        {reminders.length > 0 && (
          <ul className={styles.reminders}>
            {reminders.map(rem => (
              <li
                className={styles.reminder}
                data-testid="reminder"
                key={rem.id}
                onClick={() => setModalReminder(rem)}
                role="button"
                style={{ backgroundColor: rem.color }}
              >
                {moment(rem.datetime).format('HH:mm')} {rem.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </td>
  )
}

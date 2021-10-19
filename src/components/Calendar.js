import React, { useState } from 'react'
import moment from 'moment'
import Month from './Month'
import styles from './Calendar.module.scss'
import ReminderModal from './ReminderModal'

export default function Calendar() {
  const today = moment()
  const [modalReminder, setModalReminder] = useState(undefined)
  const [baseMoment, setBaseDate] = useState(today.clone())
  const goToPreviousMonth = () => setBaseDate(_baseDate => _baseDate.clone().subtract(1, 'month'))
  const goToNextMonth = () => setBaseDate(_baseDate => _baseDate.clone().add(1, 'month'))
  const goToCurrentMonth = () => setBaseDate(today.clone())
  const onDateSelect = date => setBaseDate(moment(date).clone())

  return (
    <div className={styles.calendar}>
      <button onClick={() => setModalReminder({ datetime: baseMoment.format('YYYY-MM-DD 12:00:00') })}>
        Add reminder
      </button>
      <div className={styles.heading}>
        <h2>{baseMoment.format('MMMM YYYY')}</h2>
        {!today.isSame(baseMoment, 'month') ? (
          <button className={styles.todayButton} onClick={goToCurrentMonth}>
            Today
          </button>
        ) : null}
        <div className={styles.monthControls}>
          <button title="Previous month" onClick={goToPreviousMonth}>
            <span>&lsaquo;</span>
          </button>
          <button title="Next month" onClick={goToNextMonth}>
            <span>&rsaquo;</span>
          </button>
        </div>
      </div>
      <Month
        baseDate={baseMoment}
        onDateSelect={onDateSelect}
        setModalReminder={setModalReminder}
      />
      {modalReminder && (
        <ReminderModal
          onHide={() => setModalReminder(undefined)}
          reminder={modalReminder}
        />
      )}
    </div>
  )
}

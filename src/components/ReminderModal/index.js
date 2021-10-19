import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { add, edit, remove } from '../../reducers/remindersSlice'
import { colors, mapReminderToFormData, mapFormDataToReminder, getFormDataErrors } from './utils'
import styles from './ReminderModal.module.scss'

export default function ReminderModal({ onHide, reminder = {} }) {
  const titleRef = useRef()
  const dispatch = useDispatch()
  const [data, setData] = useState(mapReminderToFormData(reminder))
  const [errors, setErrors] = useState({})
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])
  useEffect(() => {
    titleRef.current && titleRef.current.focus()
  }, [])
  useEffect(() => {
    setErrors(getFormDataErrors(data))
  }, [data])

  const saveReminder = useCallback(() => {
    if (hasErrors) return
    const actionFn = data.id ? edit : add
    dispatch(actionFn(mapFormDataToReminder(data)))
    onHide()
  }, [dispatch, data, onHide, hasErrors])
  const removeReminder = useCallback(() => {
    if (window.confirm('Are you sure? ')) {
      dispatch(remove(reminder))
      onHide()
    }
  }, [dispatch, reminder, onHide])
  const onInputChange = useCallback(event => {
    const { name, value } = event.currentTarget
    setData(_data => ({
      ..._data,
      [name]: value,
    }))
  }, [])

  return (
    <>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <h3 className={styles.heading}>{reminder.id ? 'Edit' : 'Add'} reminder</h3>
        <div className={styles.inputGroup}>
          <label>
            <span>Title:</span>
            <div className={styles.inputHolder}>
              <input name="title" onChange={onInputChange} maxLength={30} value={data.title} ref={titleRef} type="text" />
              <small className={data.title.length >= 30 ? styles.red : ''}>max 30 chars</small>
            </div>
          </label>
          <label>
            <span>Date:</span>
            <div className={styles.inputHolder}>
              <input name="date" onChange={onInputChange} value={data.date} type="text" />
              <small className={styles.red}>{errors['date']}</small>
            </div>
          </label>
          <label>
            <span>Time:</span>
            <div className={styles.inputHolder}>
              <input name="time" onChange={onInputChange} value={data.time} maxLength={5} type="text" />
              <small className={styles.red}>{errors['time']}</small>
            </div>
          </label>
          <div>
            <span>Color:</span>
            <div className={styles.colorsRadioGroup}>
              {colors.map(color => (
                <label
                  key={color}
                  className={`${styles.colorRadioAux} ${color === data.color ? styles.active : ''}`}
                  style={{ backgroundColor: color }}
                >
                  <input
                    id={color}
                    checked={color === data.color}
                    name="color"
                    onChange={onInputChange}
                    type="radio"
                    value={color}
                  />
                </label>
              ))}
            </div>
          </div>
          <div>
            <button onClick={saveReminder} className={styles.button} disabled={hasErrors}>
              Save
            </button>
            {reminder.id ? (
              <button onClick={removeReminder} className={`${styles.button} ${styles.red}`}>
                Remove reminder
              </button>
            ) : null}
            <button onClick={onHide} className={styles.button}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

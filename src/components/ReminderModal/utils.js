import moment from "moment";

export const colors = ['#42E', '#F12', '#019899', '#AA0', '#000']

export const mapFormDataToReminder = data => ({
  ...data,
  title: data.title,
  datetime: `${moment(data.date).format('YYYY-MM-DD')}T${data.time}`,
  color: data.color,
})

export const mapReminderToFormData = reminder => {
  const momentDate = reminder.datetime ? moment(reminder.datetime) : null
  const momentNow = moment()
  return {
    ...reminder,
    title: reminder.title || '',
    color: reminder.color || colors[0],
    date: momentDate ? momentDate.format('YYYY-MM-DD') : momentNow.format('YYYY-MM-DD'),
    time: momentDate ? momentDate.format('HH:mm') : momentNow.add(1, 'hour').format('HH:00'),
  }
}

export const getFormDataErrors = data => {
  if (!data.title || !data.date || !data.time || !data.color) {
    return { general: 'All the fields are required' }
  }

  if (!moment(data.date, ['MMM D, YYYY', 'YYYY-MM-DD'], true).isValid()) {
    return {
      date: 'Invalid date format. Accepted formats: "YYYY-MM-DD" or "MMM DD, YYYY", examples: "2022-10-11", "Jan 3, 2022"'
    }
  }

  if (!data.time.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/)) {
    return {
      time: 'Invalid time format. Accepted format: "HH:mm", example: "15:00"'
    }
  }

  return {}
}

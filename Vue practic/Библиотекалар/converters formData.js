import moment from 'moment';

export const convertObjectToFormData = (obj) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((item, index) => data.append(`${key}[${index}]`, item));
    } else {
      data.append(key, value);
    }
  }

  return data;
};

export const convertDateToFormat = (date, format) => moment(date).format(format);

export const convertDatesToRange = (startDate, endDate) =>
`${moment(startDate).format('DD MMM, YYYY')} - ${moment(endDate).format('DD MMM, YYYY')}`;

import { useState, useRef } from 'react';
import { getPSTDate, getMarkedDates } from '../utils/dateUtils';

export const useCalendar = (events: any[]) => {
  const initialDate = getPSTDate();
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const calendarRef = useRef(null);

  const markedDates = getMarkedDates(selectedDate, events);

  const goToToday = () => {
    const todayDate = getPSTDate();
    setSelectedDate(todayDate);
    setCurrentMonth(todayDate);
  };

  return {
    currentMonth,
    selectedDate,
    markedDates,
    calendarRef,
    setCurrentMonth,
    setSelectedDate,
    goToToday,
  };
}; 
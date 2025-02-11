import { COLORS } from './constants';

// Get the current date in PST (formatted as YYYY-MM-DD)
export const getPSTDate = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split('/').reverse().join('-');
};

// Format date for display
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    timeZone: 'America/Los_Angeles',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

// Check if date is today
export const isToday = (date: string) => {
  return date === getPSTDate();
};

// Get marked dates for calendar
export const getMarkedDates = (selectedDate: string, events: any[]) => {
  const today = getPSTDate();
  const markedDates: any = {
    // Mark today's date with blue circle
    [today]: {
      selected: true,
      selectedColor: COLORS.indigo,
    }
  };

  // Add event dates with bright sun color
  events.forEach(event => {
    if (event.date) {
      markedDates[event.date] = {
        selected: true,
        selectedColor: COLORS.brightSun,
      };
    }
  });

  // If today is also an event date, keep it blue
  if (markedDates[today]) {
    markedDates[today].selectedColor = COLORS.indigo;
  }

  return markedDates;
}; 
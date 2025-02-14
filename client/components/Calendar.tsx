import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
import { COLORS } from '../utils/constants';
import { useCalendar } from '../hooks/useCalendar';

export default function Calendar() {
  const {
    currentMonth,
    selectedDate,
    markedDates,
    calendarRef,
    setCurrentMonth,
    setSelectedDate,
    goToToday,
  } = useCalendar([]);

  return (
    <View style={styles.calendarSection}>
      <View style={styles.calendarSectionHeader}>
        <Text style={styles.sidebarTitle}>Your Calendar</Text>
        <TouchableOpacity 
          style={styles.todayButton}
          onPress={goToToday}
        >
          <Text style={styles.todayButtonText}>Today</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calendarContainer}>
        <RNCalendar
          // ... copy calendar props from HomeScreen
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... copy calendar-related styles from HomeScreen
}); 
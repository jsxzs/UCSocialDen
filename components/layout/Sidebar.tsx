import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../../utils/constants';
import { useCalendar } from '../../hooks/useCalendar';

export default function Sidebar() {
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
    <View style={styles.sidebar}>
      <Text style={styles.sidebarTitle}>Your Events</Text>
      {['Name', 'Name', 'Name', 'Name', 'Name', 'Name'].map((item, index) => (
        <TouchableOpacity key={index} style={styles.sidebarItem}>
          <Text style={styles.sidebarText}>{item}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.calendarSection}>
        <View style={styles.calendarSectionHeader}>
          <Text style={[styles.sidebarTitle, { marginTop: 20 }]}>Your Calendar</Text>
          <TouchableOpacity 
            style={styles.todayButton}
            onPress={goToToday}
          >
            <Text style={styles.todayButtonText}>Today</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            ref={calendarRef}
            current={currentMonth}
            markedDates={markedDates}
            onDayPress={day => setSelectedDate(day.dateString)}
            onMonthChange={(month) => {
              setCurrentMonth(month.dateString);
            }}
            theme={{
              calendarBackground: 'transparent',
              monthTextColor: '#000000',
              dayTextColor: '#000000',
              textDisabledColor: '#CCCCCC',
              selectedDayBackgroundColor: COLORS.brightSun,
              selectedDayTextColor: '#000000',
              todayTextColor: '#FFFFFF',
              arrowColor: '#666666',
              textMonthFontSize: 16,
              textDayFontSize: 14,
              textDayHeaderFontSize: 12,
              'stylesheet.calendar.header': {
                header: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                },
                monthText: {
                  fontSize: 16,
                  fontWeight: '600',
                  color: '#000000',
                  letterSpacing: 2,
                },
                arrow: {
                  padding: 10,
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                week: {
                  marginTop: 5,
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                },
                dayHeader: {
                  marginTop: 2,
                  marginBottom: 4,
                  width: 30,
                  textAlign: 'center',
                  fontSize: 12,
                  color: '#666666',
                  fontWeight: '500',
                  ...(day => day === 'Sun' ? { fontSize: 10 } : {}),
                }
              },
              'stylesheet.calendar.main': {
                week: {
                  marginHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 2,
                  marginBottom: 2,
                },
                dayContainer: {
                  flex: 1,
                  alignItems: 'center',
                }
              },
              'stylesheet.day.basic': {
                base: {
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                text: {
                  fontSize: 14,
                  color: '#000000',
                },
                selected: {
                  backgroundColor: COLORS.brightSun,
                  borderRadius: 15,
                },
                today: {
                  backgroundColor: COLORS.indigo,
                  borderRadius: 15,
                }
              }
            }}
            monthFormat={'MMM'}
            firstDay={0}
            style={styles.calendar}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 280,
    backgroundColor: '#F3F4F6',
    padding: 16,
    borderRightWidth: 1,
    borderRightColor: '#E5E7EB',
  },
  sidebarTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sidebarItem: {
    backgroundColor: '#E5E7EB',
    padding: 12,
    marginVertical: 4,
    borderRadius: 4,
  },
  sidebarText: {
    color: '#111827',
  },
  calendarSection: {
    marginTop: 20,
  },
  calendarSectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  todayButton: {
    backgroundColor: COLORS.periwinkle,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  todayButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
  },
  calendarContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  calendar: {
    borderRadius: 20,
  },
}); 
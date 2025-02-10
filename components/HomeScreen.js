import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';

const events = [
  { id: '1', title: 'Event Name', category: 'Events/food', start: '7:00 PM', end: '9:00 PM', location: 'Arteazen', description: 'Hey guys, I want to get boba at Arteazen around 7...' },
  { id: '2', title: 'Event Name', category: 'Events/sports', start: '7:00 PM', end: '9:00 PM', location: 'Arteazen', description: 'Hey guys, I want to get boba at Arteazen around 7...' },
  { id: '3', title: 'Event Name', category: 'Events/sports', start: '7:00 PM', end: '9:00 PM', location: 'Arteazen', description: 'Hey guys, I want to get boba at Arteazen around 7...', image: true },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Top Navigation Bar */}
      <View style={styles.navbar}>
        <Text style={styles.title}>UC Social Den</Text>
        <View style={styles.navLinks}>
          <TouchableOpacity><Text style={styles.navLink}>Events</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navLink}>Clubs</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navLink}>Profile</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navLink}>Sign Out</Text></TouchableOpacity>
        </View>
      </View>

      {/* Main Layout */}
      <View style={styles.mainContent}>
        
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Your Events</Text>
          {['Name', 'Name', 'Name', 'Name'].map((item, index) => (
            <View key={index} style={styles.sidebarItem}>
              <Text style={styles.sidebarText}>{item}</Text>
            </View>
          ))}
          <Text style={styles.sidebarTitle}>Your Calendar</Text>
          <View style={styles.calendarBox} />
        </View>

        {/* Events Section */}
        <View style={styles.eventSection}>
          
          {/* Filters */}
          <View style={styles.filterContainer}>
            <View style={styles.filterButtons}>
              <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Today</Text></TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Tomorrow</Text></TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}><Text style={styles.filterText}>Date...</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filterDropdown}><Text style={styles.filterText}>Filter</Text></TouchableOpacity>
            <TouchableOpacity style={styles.addEventButton}><Text style={styles.filterText}>Add Event</Text></TouchableOpacity>
          </View>

          {/* Event Cards */}
          <ScrollView>
            {events.map((event) => (
              <View key={event.id} style={styles.eventCard}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventCategory}>{event.category}</Text>
                {event.image && <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.eventImage} />}
                <Text style={styles.eventDetails}>Start: {event.start}</Text>
                <Text style={styles.eventDetails}>End: {event.end}</Text>
                <Text style={styles.eventDetails}>Location: {event.location}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
                <Text style={styles.eventLimit}>Cur joined / limit</Text>
              </View>
            ))}
          </ScrollView>

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1F2937',
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#FFFFFF',
    paddingHorizontal: 12,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: '25%',
    backgroundColor: '#374151',
    padding: 16,
  },
  sidebarTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sidebarItem: {
    backgroundColor: '#4B5563',
    padding: 8,
    marginVertical: 4,
    borderRadius: 4,
  },
  sidebarText: {
    color: '#FFFFFF',
  },
  calendarBox: {
    height: 120,
    backgroundColor: '#4B5563',
    marginTop: 10,
    borderRadius: 4,
  },
  eventSection: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButtons: {
    flexDirection: 'row',
  },
  filterButton: {
    backgroundColor: '#6B7280',
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 6,
    borderRadius: 4,
  },
  filterDropdown: {
    backgroundColor: '#6B7280',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  addEventButton: {
    backgroundColor: '#4B5563',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  filterText: {
    color: '#FFFFFF',
  },
  eventCard: {
    backgroundColor: '#E5E7EB',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventCategory: {
    color: '#6B7280',
    marginBottom: 6,
  },
  eventDetails: {
    color: '#374151',
  },
  eventDescription: {
    color: '#6B7280',
    marginTop: 6,
  },
  eventLimit: {
    textAlign: 'right',
    color: '#6B7280',
    marginTop: 6,
  },
  eventImage: {
    width: 100,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default HomeScreen;

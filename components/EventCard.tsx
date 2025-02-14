import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, StatusBar, Modal } from 'react-native';

interface EventProps {
    event: {
      id: string;
      title: string;
      category: string;
      start: string;
      end: string;
      location: string;
      description: string;
      image?: string;
    };
  }
  
  const EventCard: React.FC<EventProps> = ({ event }) => {
    return (
      <View key={event.id} style={styles.eventCard}>
        <View style={styles.eventHeader}>
          <View>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventCategory}>{event.category}</Text>
          </View>
          <View style={styles.eventInfo}>
            <Text style={styles.eventDetails}>Start: {event.start}</Text>
            <Text style={styles.eventDetails}>End: {event.end}</Text>
            <Text style={styles.eventDetails}>Location: {event.location}</Text>
          </View>
        </View>
        <Text style={styles.eventDescription}>{event.description}</Text>
        {event.image && (
          <Image source={{ uri: event.image }} style={styles.eventImage} />
        )}
        <Text style={styles.eventLimit}>Cur joined / limit</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
    eventSection: {
      flex: 1,
      padding: 16,
    },
    eventCard: {
      backgroundColor: '#E5E7EB',
      padding: 16,
      marginBottom: 12,
      borderRadius: 8,
    },
    eventHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    eventTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#111827',
    },
    eventCategory: {
      color: '#6B7280',
      fontSize: 14,
    },
    eventInfo: {
      alignItems: 'flex-end',
    },
    eventDetails: {
      color: '#374151',
      fontSize: 14,
    },
    eventDescription: {
      color: '#4B5563',
      fontSize: 14,
      marginBottom: 8,
    },
    eventLimit: {
      textAlign: 'right',
      color: '#6B7280',
      fontSize: 14,
    },
    eventImage: {
      width: '100%',
      height: 150,
      borderRadius: 4,
      marginVertical: 8,
    },
  });
    
export default EventCard;

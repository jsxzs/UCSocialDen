import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, StatusBar, Modal } from 'react-native';
import { COLORS } from '../utils/constants';
import { Colors } from '../constants/Colors';



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
            <TouchableOpacity style={styles.eventTag} disabled>
                <Text style={styles.eventCategory}>{event.category}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.eventInfo}>
            <Text style={styles.eventLimit}>Cur joined / limit</Text>
            <Text style={styles.eventDetails}>Location: {event.location}</Text>
            <Text style={styles.eventDetails}>Time: {event.start} - {event.end}</Text>
          </View>

        </View>
        <Text style={styles.eventDescription}>{event.description}</Text>
        {event.image && (
          <Image source={{ uri: event.image }} style={styles.eventImage} />
        )}
        <TouchableOpacity style={styles.joinButton} >
                <Text style={styles.eventCategory}>Join</Text>
        </TouchableOpacity>
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
      marginBottom: 10,
    },
    eventTitle: {
      fontSize: 24,
      fontFamily: 'Zain',
      fontWeight: 'bold',
      color: COLORS.indigo,
    },
    eventTag: {
        backgroundColor: COLORS.brightSun,
        paddingVertical: 8,
        fontFamily: 'Zain',
        paddingHorizontal: 16,
        borderRadius: 20,
    },
    joinButton: {
        alignSelf:'flex-end',
        backgroundColor: COLORS.indigo,
        paddingVertical: 8,
        fontFamily: 'Zain',
        paddingHorizontal: 16,
        borderRadius: 20,
        
    },
    eventCategory: {
      fontSize: 14,
      color: COLORS.alabaster,
      fontWeight: 'medium',
    },
    eventInfo: {
      alignItems: 'flex-end',
    },
    eventDetails: {
      color: '#374151',
      fontFamily: 'Verdana',
      paddingTop: 2,
      fontSize: 14,
    },
    eventDescription: {
      color: '#4B5563',
      fontFamily: 'Verdana',
      fontSize: 14,
      marginBottom: 8,
    },
    eventLimit: {
      textAlign: 'right',
      fontSize: 24,
      fontFamily: 'Zain',
      fontWeight: 'bold',
      color: COLORS.indigo,
    },
    eventImage: {
      width: '100%',
      height: 150,
      borderRadius: 4,
      marginVertical: 8,
    },
  });
    
export default EventCard;

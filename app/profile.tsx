import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { COLORS } from '../utils/constants';
import { useRouter } from 'expo-router';
import TopNavBar from '../components/layout/TopNavBar';
import Sidebar from '../components/layout/Sidebar';

export default function Profile() {
  const router = useRouter();



  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <TopNavBar activeTab="Profile" />
      
      <View style={styles.mainContent}>
        <Sidebar />
        
        {/* Profile Content */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <View style={styles.profilePhotoContainer}>
              <View style={styles.profilePhoto} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Name</Text>
              <View style={styles.stats}>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Tag</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}>Rating</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statLabel}># Posts</Text>
                </View>
              </View>
              <Text style={styles.email}>Email</Text>
              <Text style={styles.major}>Major</Text>
              <Text style={styles.selfIntro}>Self Intro</Text>
            </View>
          </View>

          <View style={styles.settingsSection}>
            <Text style={styles.sectionTitle}>Account Setting</Text>
            <TouchableOpacity style={styles.settingItem}>
              <Text style={styles.settingText}>Reset Passwords</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.alabaster,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  profileSection: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  profilePhotoContainer: {
    marginRight: 30,
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#D1D5DB',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  stat: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    marginRight: 10,
  },
  statLabel: {
    color: '#4B5563',
  },
  email: {
    fontSize: 16,
    marginBottom: 8,
  },
  major: {
    fontSize: 16,
    marginBottom: 8,
  },
  selfIntro: {
    fontSize: 16,
    color: '#4B5563',
  },
  settingsSection: {
    backgroundColor: '#E5E7EB',
    padding: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  settingItem: {
    paddingVertical: 10,
  },
  settingText: {
    fontSize: 16,
    color: '#4B5563',
  },
}); 
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../../components/layout/MainLayout';
import { COLORS } from '../../utils/constants';

export default function Profile() {
  return (
    <MainLayout activeTab="Profile">
      <View style={styles.container}>
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
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
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
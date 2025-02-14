import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';
import { useRouter } from 'expo-router';

export default function TopNavBar({ activeTab = 'Events' }) {
  const router = useRouter();

  const handleNavigation = (tab: string) => {
    switch (tab.toLowerCase()) {
      case 'events':
        router.push('/');
        break;
      case 'profile':
        router.push('/profile');
        break;
      case 'clubs':
        router.push('/clubs');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>UC Social Den</Text>
      <View style={styles.navLinks}>
        {['Events', 'Clubs', 'Profile'].map((tab) => (
          <TouchableOpacity 
            key={tab}
            style={styles.navLinkContainer}
            onPress={() => handleNavigation(tab)}
          >
            <Text style={[styles.navLink, activeTab === tab && styles.navLinkActive]}>
              {tab}
            </Text>
            {activeTab === tab && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        ))}
        <TouchableOpacity>
          <Text style={styles.navLink}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.indigo,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontFamily: "'Zain', sans-serif",
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLinkContainer: {
    position: 'relative',
    marginHorizontal: 12,
  },
  navLink: {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: "'Zain', sans-serif",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  navLinkActive: {
    color: COLORS.brightSun,
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    right: 12,
    height: 3,
    backgroundColor: COLORS.brightSun,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
}); 
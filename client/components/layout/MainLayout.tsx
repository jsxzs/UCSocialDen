import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';
import TopNavBar from './TopNavBar';
import Sidebar from './Sidebar';

type MainLayoutProps = {
  children: React.ReactNode;
  activeTab?: 'Events' | 'Clubs' | 'Profile';
};

const MainLayout = ({ children, activeTab = 'Events' }: MainLayoutProps) => {
  return (
    <View style={styles.container}>
      <TopNavBar activeTab={activeTab} />
      <View style={styles.mainContent}>
        <Sidebar />
        <View style={styles.content}>
          {children}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.alabaster,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
});

export default MainLayout; 
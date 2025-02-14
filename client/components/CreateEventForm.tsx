import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/constants';
import { Calendar } from 'react-native-calendars';
import { useCalendar } from '../hooks/useCalendar';

type CreateEventFormProps = {
    setIsCreateEventFormVisible: React.Dispatch<React.SetStateAction<boolean>>
};

export default function CreateEventForm(props: CreateEventFormProps) {
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
        <View style={styles.background}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <TextInput 
                        style={styles.title} 
                        placeholder="Event Name" 
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                    />
                </View>
                <View style={styles.dateOccupancyContainer}>
                    <View style={styles.dateContainer}>
                        <TextInput 
                            style={styles.date} 
                            placeholder="00/00/00"
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        />
                        <TouchableOpacity >
                            <Image style={styles.calendarIcon} source={require("../assets/images/calendar-icon.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.occupancyContainer}>
                        <TextInput 
                            style={styles.occupancy} 
                            placeholder="000"
                            placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        />
                        <Image style={styles.personIcon} source={require("../assets/images/person-icon.png")}/>
                    </View>
                </View>
                <View style={styles.tagsContainer}>

                </View>
                <View style={styles.descriptionContainer}>
                    <TextInput 
                        style={styles.description} 
                        placeholder="Description..." 
                        placeholderTextColor="rgba(0, 0, 0, 0.5)"
                        multiline={true}
                    />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => props.setIsCreateEventFormVisible(false)}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.createButton}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: COLORS.alabaster,
        width: "100%",
        height: "100%"
    },
    container: {
        backgroundColor: COLORS.alabaster,
        width: "100%",
        height: "100%",
        padding: 25,
        display: "flex",
        flexDirection: "column",
        gap: 20
    },
    titleContainer: {
        backgroundColor: COLORS.merino,
        height: 100,
        borderRadius: 20,
        width: 400,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 48,
    },
    dateOccupancyContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20
    },
    dateContainer: {
        backgroundColor: COLORS.merino,
        height: 100,
        width: 300,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    date: {
        fontSize: 48,
        width: 200
    },
    calendarIcon: {
        height: 50,
        width: 50
    },
    occupancyContainer: {
        backgroundColor: COLORS.merino,
        height: 100,
        width: 200,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    occupancy: {
        fontSize: 48,
        width: 100
    },
    personIcon: {
        height: 50,
        width: 50
    },
    tagsContainer: {
        backgroundColor: COLORS.brightSun,
        height: 50,
    },
    descriptionContainer: {
        backgroundColor: COLORS.merino,
        borderRadius: 20,
        flex: 1,
        padding: 20
    },
    description: {
        fontSize: 36,
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        justifyContent: "flex-end"
    },
    cancelButton: {
        backgroundColor: COLORS.indigo,
        height: 100,
        width: 200,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    createButton: {
        backgroundColor: COLORS.indigo,
        height: 100,
        width: 200,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 48,
        color: COLORS.alabaster
    }
})
import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  Modal 
} from "react-native";
import { COLORS } from "../utils/constants";
import { Calendar } from "react-native-calendars";
const SERVER_PORT = 5002; //process.env.PORT;

type CreateEventFormProps = {
  setIsCreateEventFormVisible: React.Dispatch<React.SetStateAction<boolean>>
};

export default function CreateEventForm({ setIsCreateEventFormVisible }: CreateEventFormProps) {
  // Form field states
  const [name, setName] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [participant_limit, setParticipant_limit] = useState<number>(0);

  // Control calendar modal visibility
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  // Handler for the Create button click
  const onSubmit = async () => {
    if (!name || !start_time || !end_time || !location || !description || !tags || participant_limit==0) {
        console.log("Alert", "Please fill in all required fields!");
      return;
    }
    // console.log
    // Construct event data form
    const eventData = {
      name,
      start_time,
      end_time,
      location,
      description,
      tags: tags.split(",").map(tag => tag.trim()),
      participant_limit
    };

    try {
      const response = await fetch(`http://localhost:${SERVER_PORT}/api/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData)
      });
      
      if (response.ok) {
        Alert.alert("Success", "Event created successfully!");
        setIsCreateEventFormVisible(false);
      } else {
        Alert.alert("Error", "Event creation failed, please try again later.");
      }
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {/* Event Name */}
        <TextInput 
          style={styles.input} 
          placeholder="Event Name" 
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={name}
          onChangeText={setName}
        />

        {/* Start Time (tap to open calendar) */}
        <TouchableOpacity onPress={() => setShowStartCalendar(true)}>
          <TextInput 
            style={styles.input} 
            placeholder="Start Time" 
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={start_time}
            editable={false}
          />
        </TouchableOpacity>
        <Modal visible={showStartCalendar} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Calendar
              onDayPress={(day) => {
                setStart_time(day.dateString);
                setShowStartCalendar(false);
              }}
              markedDates={{
                [start_time]: { selected: true, selectedColor: COLORS.indigo },
              }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowStartCalendar(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* End Time (tap to open calendar) */}
        <TouchableOpacity onPress={() => setShowEndCalendar(true)}>
          <TextInput 
            style={styles.input} 
            placeholder="End Time" 
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={end_time}
            editable={false}
          />
        </TouchableOpacity>
        <Modal visible={showEndCalendar} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <Calendar
              onDayPress={(day) => {
                setEnd_time(day.dateString);
                setShowEndCalendar(false);
              }}
              markedDates={{
                [end_time]: { selected: true, selectedColor: COLORS.indigo },
              }}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setShowEndCalendar(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        {/* Location */}
        <TextInput 
          style={styles.input} 
          placeholder="Location" 
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={location}
          onChangeText={setLocation}
        />

        {/* Description */}
        <TextInput 
          style={[styles.input, { height: 100 }]} 
          placeholder="Description..." 
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          multiline={true}
          value={description}
          onChangeText={setDescription}
        />

        {/* Tags (comma separated) */}
        <TextInput 
          style={styles.input} 
          placeholder="Tags (comma separated)" 
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          value={tags}
          onChangeText={setTags}
        />

        {/* Participant Limit */}
        <TextInput
          style={styles.input}
          placeholder="Capacity"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="numeric"
          value={participant_limit ? participant_limit.toString() : ""}
          onChangeText={(text) => {
            const num = parseInt(text, 10);
            setParticipant_limit(isNaN(num) ? 0 : num);
          }}
        />

        {/* Button Area */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.cancelButton} 
            onPress={() => setIsCreateEventFormVisible(false)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.createButton} onPress={onSubmit}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.alabaster,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: COLORS.alabaster,
    width: "90%",
    padding: 25,
    borderRadius: 20,
    gap: 20
  },
  input: {
    backgroundColor: COLORS.merino,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    color: "#000"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cancelButton: {
    backgroundColor: COLORS.indigo,
    padding: 15,
    borderRadius: 10,
    width: "45%",
    alignItems: "center"
  },
  createButton: {
    backgroundColor: COLORS.indigo,
    padding: 15,
    borderRadius: 10,
    width: "45%",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.alabaster
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: COLORS.indigo,
    padding: 10,
    borderRadius: 10
  }
});

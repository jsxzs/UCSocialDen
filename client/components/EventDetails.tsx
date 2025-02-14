import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Modal,
} from "react-native";

const { width, height } = Dimensions.get("window");

interface EventDetailsProps {
  event: any; // Ensure it receives correct event data
  onClose: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, onClose }) => {
  if (!event) return null;

  const joinedPeople = [
    { id: 1, avatar: "https://via.placeholder.com/50" },
    { id: 2, avatar: "https://via.placeholder.com/50" },
    { id: 3, avatar: "https://via.placeholder.com/50" },
    { id: 4, avatar: "https://via.placeholder.com/50" },
    { id: 5, avatar: "https://via.placeholder.com/50" },
  ];

  console.log("Joined People:", joinedPeople);

  return (
    <Modal visible animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Event Title */}
            <Text style={styles.title}>{event.name || "Exciting Event"}</Text>

            {/* Event Location & Time Info */}
            <View style={styles.locationTimeContainer}>
              <Text style={styles.eventInfo}>Location: {event.location || "Unknown Location"}</Text>
              <Text style={styles.eventInfo}>{event.date || "Unknown Date"} {event.start || "Unknown Start"} - {event.end || "Unknown End"}</Text>
            </View>

            {/* Event Image */}
            {event.image && (
              <Image source={{ uri: event.image }} style={styles.eventImage} />
            )}

            {/* Description Box */}
            <Text style={styles.label}>Description</Text>
            <View style={styles.descriptionBox}>
              <Text>{event.description || "No description available."}</Text>
            </View>

            {/* Joined People Section */}
            <View style={styles.joinSection}>
              <Text style={styles.label}>Joined people</Text>
              <View style={styles.profileContainer}>
                {joinedPeople.map((person) => (
                  <Image key={person.id} source={{ uri: person.avatar || "https://via.placeholder.com/50"}} style={styles.profileCircle} />
                ))}
              </View>
            </View>

            {/* Join Button */}
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    height: "80%", // Set a larger height
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollContainer: {
    flexGrow: 1, // Allows proper scrolling
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  eventImage: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  locationTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  eventInfo: {
    fontSize: 14,
    color: "#777",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionBox: {
    width: "100%",
    backgroundColor: "#f5f0e5",
    borderRadius: 5,
    padding: 10,
    paddingVertical: 30,
    marginBottom: 15,
  },
  joinSection: {
    width: "100%",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 5,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    backgroundColor: "#ddd",
  },
  joinButton: {
    backgroundColor: "#556ebe",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    width: width * 0.8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default EventDetails;

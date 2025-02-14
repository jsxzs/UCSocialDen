import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";

const { width } = Dimensions.get("window");

interface EventDetailsProps {
  visible: boolean;
  onClose: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ visible, onClose }) => {
  const event = {
    name: "Exciting Event",
    time: "March 25 6:00 PM",
    image: "https://via.placeholder.com/300x200", // Placeholder event image
    description: "This is a detailed description of the event.",
    creator: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/50", // Creator's avatar placeholder
    },
  };

  const joinedPeople = [
    { id: 1, avatar: "https://via.placeholder.com/50" },
    { id: 2, avatar: "https://via.placeholder.com/50" },
    { id: 3, avatar: "https://via.placeholder.com/50" },
    { id: 4, avatar: "https://via.placeholder.com/50" },
    { id: 5, avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
              
              {/* Close Button */}
              <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>

              {/* Event Title */}
              <Text style={styles.title}>{event.name}</Text>

              {/* Event Creator & Time Info */}
              <View style={styles.creatorTimeContainer}>
                {/* Event Creator Info */}
                <View style={styles.creatorContainer}>
                  <Image source={{ uri: event.creator.avatar }} style={styles.creatorAvatar} />
                  <Text style={styles.creatorName}>Creator: {event.creator.name}</Text>
                </View>
                {/* Event Time */}
                <Text style={styles.eventTime}>{event.time}</Text>
              </View>

              {/* Event Image */}
              <Image source={{ uri: event.image }} style={styles.eventImage} />

              {/* Description Box */}
              <Text style={styles.label}>Description</Text>
              <View style={styles.descriptionBox}>
                <Text>{event.description}</Text>
              </View>

              {/* Joined People Section */}
              <View style={styles.joinSection}>
                <Text style={styles.label}>Joined people</Text>
                <View style={styles.profileContainer}>
                  {joinedPeople.map((person) => (
                    <Image key={person.id} source={{ uri: person.avatar }} style={styles.profileCircle} />
                  ))}
                </View>
              </View>

              {/* Join Button */}
              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.buttonText}>Join</Text>
              </TouchableOpacity>
            </ScrollView>
          </KeyboardAvoidingView>
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
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    maxHeight: "90%",
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
    alignItems: "center",
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
    backgroundColor: "#f5f0e5",
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: "cover",
  },
  creatorTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  creatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  creatorAvatar: {
    width: 40,
    height: 40,
    backgroundColor: "#d2deef",
    borderRadius: 20,
    marginRight: 10,
  },
  creatorName: {
    fontSize: 12,
    fontWeight: "bold",
  },
  eventTime: {
    fontSize: 12,
    color: "#777",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionBox: {
    width: "100%",
    minHeight: 80,
    backgroundColor: "#f5f0e5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    justifyContent: "center",
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
    backgroundColor: "#d2deef",
  },
  joinButton: {
    backgroundColor: "#556ebe",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
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

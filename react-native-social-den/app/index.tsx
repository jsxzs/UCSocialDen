// pop-up screen for event details
// Show a picture of the event, event creator, event time, and the event name, description, and a list of people who have joined the event.
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

const { width } = Dimensions.get("window");

export default function Index() {
  // Sample data for joined users (replace with real data from an API)
  const joinedPeople = [
    { id: 1, avatar: "https://via.placeholder.com/50" },
    { id: 2, avatar: "https://via.placeholder.com/50" },
    { id: 3, avatar: "https://via.placeholder.com/50" },
    { id: 4, avatar: "https://via.placeholder.com/50" },
    { id: 5, avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Event Title */}
        <Text style={styles.title}>Event Name</Text>

        {/* Description Box */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.descriptionBox}
          placeholder="Enter event description"
          editable={false}
        />

        {/* Joined People Section */}
        <View style={styles.joinSection}>
          <Text style={styles.label}>Joined people</Text>
          <View style={styles.profileContainer}>
            {joinedPeople.map((person) => (
              <Image
                key={person.id}
                source={{ uri: person.avatar }}
                style={styles.profileCircle}
              />
            ))}
          </View>
        </View>

        {/* Join Button */}
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
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
    textAlignVertical: "top",
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

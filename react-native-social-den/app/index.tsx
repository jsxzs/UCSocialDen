import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function Index() {
  // Sample data for joined users (replace with real data from an API)
  const joinedPeople = [
    { id: 1, avatar: "https://via.placeholder.com/50" },
    { id: 2, avatar: "https://via.placeholder.com/50" },
    { id: 3, avatar: "https://via.placeholder.com/50" },
  ];

  return (
    <View style={styles.container}>
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
        <View style={styles.joinedPeopleContainer}>
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

        {/* Join Button (Aligned to the Right) */}
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fafafa",
    padding: 20,
    paddingTop: 0,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#556ebe",
    width: "90%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: -20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  descriptionBox: {
    width: "100%",
    height: 80,
    backgroundColor: "#f5f0e5",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  joinSection: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  joinedPeopleContainer: {
    flex: 1, 
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: 20, // Makes it a perfect circle
    marginRight: 5,
    backgroundColor: "#d2deef", // Placeholder color
  },
  joinButton: {
    backgroundColor: "#556ebe",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

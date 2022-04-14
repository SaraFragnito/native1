import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("")

    function goalInputHandler(enteredText) {
      setEnteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText("")
    }

    return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require("../assets/images/goal.png")} />
            <TextInput 
                style={styles.textInput} 
                onChangeText={goalInputHandler} 
                value={enteredGoalText}
                placeholder="Hello from Sara! Add something..." />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Cancel"  onPress={props.onCancel} color="#f31282"/>
                </View>
                <View style={styles.button}>
                    <Button title="Add goal" onPress={addGoalHandler} color="#5e0acc" />
                </View>
            </View>
       </View>
    </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        backgroundColor: "#311b6b"
      },
    image: {
        width: 100,
        height: 100,
        margin: 20
      },
    textInput: {
        backgroundColor: "#e4d0ff",
        color: "#120438",
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        width: "100%",
        padding: 16,
      },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        marginHorizontal: 8,
        width: 100
    }
})
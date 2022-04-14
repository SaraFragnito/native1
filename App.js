import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar, statusBar } from "expo-status-bar";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
// scrollview è per scrollare qualcosa di breve, che ha una fine, come un articolo. Flatlist carica gli elementi man mano che si scrolla quindi è più utile per liste che potenzialmente potrebbero essere molto lunghe

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const startAddGoalHandler = () => setModalIsVisible(true)
  const endAddGoalHandler = () => setModalIsVisible(false)

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
    endAddGoalHandler()
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button 
        title="Add new Goal" 
        color="#a065ec"
        onPress={startAddGoalHandler}/>
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={courseGoals} 
          renderItem={(itemData) => {
            return <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDelete={deleteGoalHandler} 
              />}} 
          keyExtractor={(item, index) => item.id }
        />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },


  goalsContainer: {
    flex: 5
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator,Button } from "react-native";

export default function App() {
//   const [count, setCount] = useState(0);

//   function increment() {
    
//     setCount(count + 1);
//   }

//   function decrement() {

//   setCount(count - 1);
// }

//   useEffect(() => {
//     if (count > 10 || count === 0) {
//       console.log("Count is:", count);
//     }
//   }, [count]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const fetchUsers = async () => {
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if(!response.ok){
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setUsers(data);
    }catch(error){
      setError(error.message);
    }finally{
      setLoading(false);
      setRefreshing(false); 
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  }

   if (error) {
    return (
      <View style={{ marginTop: 50 }}>
        <Text style={{ color: "red", textAlign: "center" }}>
          {error}
        </Text>
        <Button title="Retry" onPress={fetchUsers} />
      </View>
    );
  }
 
   if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ marginTop: 50 }}>
      {/* <Text style={{ margin: 10 }}>Count: {count}</Text>

      <Button title="Increment" onPress={increment} 
      disabled={count === 10}/>
      <Button title="Decrement" onPress={decrement} 
      disabled={count === 0}/>
      <Button title="Reset" onPress={() => setCount(0)} /> */}
        <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        refreshing = {refreshing}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
         <View style={{ margin: 10 }}>
            <Text>Name: {item.name}</Text>
            <Text>Email: {item.email}</Text>
            <Text>City: {item.address.city}</Text>
          </View>
        )}
      />


    </View>
  );
}
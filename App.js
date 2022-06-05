import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      try{
        const {data} = await axios.get("http://192.168.0.8:8000/data");
        console.log(data);
        setData(data);
      }
      catch (error){
        console.log(error.message);
        Alert(error);
      }
    }
    console.log("Hello World");
    getData();
  }, []);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const renderItem = ({ item }) => (
    <Item title={`${item.id}:${item.title}`} />
    
  );

  return (
    <View style={styles.container}>
       <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

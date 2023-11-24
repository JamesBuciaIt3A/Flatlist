import * as React from 'react';
import { SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native';
import FiMoreHorizontal from './src/FiMoreHorizontal';

const DATA = [
  {id: '1',lastname: 'Bucia',firstname:'James Warren',add:'United Kingdom', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '2',lastname: 'Velez',firstname: 'Glecerio', add:'Hongkong', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '3',lastname: 'Prado', firstname:'Mark James', add:'Cinetroisflin', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '4',lastname: 'Tima' ,firstname: 'Reynante', add:'Argenthal', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '5',lastname: 'Dumay', firstname:'Erwin', add:'Malé, Maldives',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '6',lastname: 'Dumay', firstname:'Edward', add:'Humberto de Campos', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '7',lastname: 'Dorpy', firstname:'Gemuel', add:'South Cleveland', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '8',lastname: 'Buca', firstname:'Dan Mark', add:'Manila, Philippines', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '9',lastname: 'Guno', firstname:'Ernest', add:'Luxembourge', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '10',lastname: 'Tima', firstname:'Vincent', add:'San Jorge, Philippines', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '11',lastname: 'Cruz', firstname:'Jhonloyd Cruz', add:'Avesnes- le- Comte', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '12',lastname: 'Renegado', firstname:'Junlee', add:'Lisbon, Portugal', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '13',lastname: 'Mora', firstname:'Katrina', add:'Valencia, Spain', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '14',lastname: 'Roberto', firstname:'Jak', add:'Mount Gambier', icon:<FiMoreHorizontal width={30} height={70} color="black" />} ,
  {id: '15',lastname: 'Lustre', firstname:'Nadine', add:'Reykjavik, Iceland', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '16',lastname: 'Cemeron', firstname:'Rudy', add:'Monaco, Monaco', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '17',lastname: 'Padillia', firstname:'Daniel', add:'Euclides da Cunha, Brazil', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '18',lastname: 'Agunsilio', firstname:'Jhon Carlos', add:'Marseille, France', icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '19',lastname: 'Thompson', firstname:'Jake', add:'Manila, Philippines',icon:<FiMoreHorizontal width={30} height={70} color="black" />},
  {id: '20',lastname: 'Renegado', firstname:'Jhonloyd', add:'Bear Valley Springs, United', icon:<FiMoreHorizontal width={30} height={70} color="black" />},

];

const Item = ({ lastname, firstname, add,icon }) => {
  
  const firstInitial = firstname.charAt(0);
  const lastInitial = lastname.charAt(0);

  return (
    <View style={styles.wholeContainer}>
      <View style={styles.intialsContainer}><Text style={styles.initials}>{firstInitial}{lastInitial}</Text></View>
      <View style={styles.listItem}>
        
        <Text style={styles.listItemText}>{lastname}, {firstname}</Text>
        <Text style={styles.listItemAdd}>{add}</Text>
        
      </View>
      
     
      <View style={styles.iconContainer}>{icon}</View>
   
    </View>
  );
};

export default function App() {
   
      return (
        <SafeAreaView>
            <View style={styles.container}>
                
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Item lastname={item.lastname} firstname={item.firstname} add={item.add}  icon={item.icon}/>}
                    
                />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
      
      backgroundColor: 'white',
      alignItems: 'left',
      height: 670,
      marginTop:450,
      
  },
  text: {
      fontSize: 18,
      color: '#101010',
      marginTop: 5,
      fontWeight: '700',
      fontFamily:'Arial',
      marginBottom:10
  },
  listItem: {
      marginTop: 15,
      
      alignItems: 'left',
      backgroundColor: '#fff',
      width: '70%'
  },
  listItemText: {
      fontSize: 18,
      fontWeight:'bold',
      fontFamily:'Arial'
    
  },
  listItemAdd:{
      fontSize:15,
      fontFamily:'Arial'
  },
  wholeContainer:{
      flexDirection:'row' ,
      

  },
  initials:{
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'Arial',
    alignSelf:'center',
    margin:10,
    color:'white'
    
  },
  intialsContainer:{
      alignContent:'center',
      alignItems:'center',
     margin:10,
      backgroundColor:'green',
      height:35,
      width:35,
      borderRadius:70
  },
  iconContainer: {
      margin: 10,
    },
});
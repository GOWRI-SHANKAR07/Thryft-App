import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../styles/Catlog'
import { Entypo } from '@expo/vector-icons';
import { data } from '../Data/CatalogData';
import CatalogCard from '../Components/CatalogCard';
import { Octicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements'
import { useAppContext } from '../Context/ContextProvider';

const CatlogScreen = () => {

  // image upload context
  const { imageUri, img } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerCont}>
        <Text style={styles.headerTxt}>Catlog</Text>
        <View style={styles.headerRgtCont}>
          <Avatar
            rounded
            size={'medium'}
            source={{
              uri: imageUri ? imageUri : img
            }}
          />
          <Octicons
            name="dot-fill"
            size={24}
            color="yellow"
            style={styles.active}
          />
          <Entypo
            style={styles.menu}
            name="dots-three-vertical"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={styles.sellCont}>
        <Text style={styles.sellTxt}>Ready to sell your good second-hand stuff?</Text>
        <TouchableOpacity style={styles.sellBtn}>
          <Text>Sell now</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.lstCont}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CatalogCard items={item} />}
      />
    </View>
  )
}

export default CatlogScreen


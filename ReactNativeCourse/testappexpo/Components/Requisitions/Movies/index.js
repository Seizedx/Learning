import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
import Details from '../Modal'

const {width, height} = Dimensions.get('window');

export default function Filmes({data}) {

  const[visibleModal, setVisibleModal] = useState(false);

    return (
      <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title1}>{data.nome}</Text>
            <Image
              style={styles.image1}
              source={{uri: data.foto}}
            />
            <View style={styles.button1Area}>
              <TouchableOpacity style={styles.button1}
              onPress={() => {setVisibleModal(true)}}
              >
                <Text style={styles.button1Text}>Leia Mais</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Modal
            animationType='slide'
            visible={visibleModal}
            transparent={true}
          >
            <Text><Details movies={data} return={() => setVisibleModal(false)}/></Text>
          </Modal>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 15,
    elevation: 2,
  },

  title1: {
    padding: 15,
    fontSize: 20,
  },
  image1: {
    height: height * 0.4,
    width: width * 0.9,
    zIndex: 2,
  },
  button1Area: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3,
  },
  button1: {
    width: 100,
    backgroundColor: '#09a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  button1Text: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  },
});
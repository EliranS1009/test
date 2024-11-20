// src/screens/HomePage.js
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Card from './components/Card';
import AddCardButton from './components/AddCardButton';
import ModalComponent from './components/ModalComponent';
import styles from './HomePageStyles';

const HomePage = () => {
  const [firstCard, setFirstCard] = useState(true);
  const [modatTitle, setModatTitle] = useState("gg");
  const [modalText, setModalText] = useState("ggf");
  const [changeText, setChangeText] = useState("");


  const [cards, setCards] = useState([{ id: 0, title: modatTitle, description: '' }]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingCardId, setEditingCardId] = useState(Number); 
  const [newTitle, setNewTitle] = useState(""); 
  const openModal = (title: any, content: any) => {
    setModatTitle(title)
    setModalText(content)
    setModalVisible(true);

  }

  const closeModal = () => {
    setModalVisible(false);
    alert(changeText)
    //cards[editingCardId].title = 
    //cards[editingCardId].description = 
    setCards([...cards]);
  }



  const createCard = (id:number) => {
    id += 1;
    const newCard = {
      id: id,
      title: "תרגיל מספר " +id,
      description: "תרגיל מספר " +id,
    };
    return newCard
  }

  const addCard = () => {
    let newCard = createCard(cards.length);
    if(firstCard){
      setFirstCard(false)
      newCard = createCard(0);
      setCards([newCard]);
    }else{
      setCards([...cards, newCard]);
    }
};

const editCard = (cardId: number) => {
  setEditingCardId(cardId - 1)
  openModal(cards[cardId - 1].title, cards[cardId - 1].description)
};
  return (
    <View style={styles.container}>
      <Text style={styles.header}>רשימת תרגילים</Text>
      {!firstCard && cards.map(card => (
        <Card key={card.id} card={card} onEditPress={editCard}/>
      ))}
      <AddCardButton onPress={addCard}/>
      <ModalComponent modatTitle={modatTitle} changeText={changeText} modalText={modalText}  visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

export default HomePage;

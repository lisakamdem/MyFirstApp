'use client';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button, Alert,
    Image,
  } from 'react-native';

  const Disney = () => {
    const [characters, setCharacters] = React.useState([]);
    const [selectedCharacterIndex, setSelectedCharacterIndex] = React.useState(0);
  
    const fetchCharacter = async () => {
      try {
        const response = await fetch('https://api.disneyapi.dev/character');
        const json = await response.json();
        const charactersData = json.data;
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error fetching characters:', error);
        Alert.alert('Error', 'Failed to fetch Disney characters.');
      }
    };
  
    useEffect(() => {
      fetchCharacter();
    }, []);
  
    const handleNewCharacter = () => {
      // Select a random index from the characters array
      const randomIndex = Math.floor(Math.random() * characters.length);
      setSelectedCharacterIndex(randomIndex);
      console.log(characters[selectedCharacterIndex].name);
    };
  
    return (
      <View style={styles.container}>
        <Button title="New Character" onPress={handleNewCharacter} />
  
        {characters.length > 0 && (
          <View style={styles.characterContainer}>
            <Image source={{ uri: characters[selectedCharacterIndex].imageUrl }} style={styles.characterImage} />
            <Text>{characters[selectedCharacterIndex].name}</Text>
            {characters[selectedCharacterIndex].films && characters[selectedCharacterIndex].films.length > 0 && (
              <Text>Films: {characters[selectedCharacterIndex].films.join(', ')}</Text>
            )}
            {characters[selectedCharacterIndex].tvShows && characters[selectedCharacterIndex].tvShows.length > 0 && (
              <Text>TV Shows: {characters[selectedCharacterIndex].tvShows.join(', ')}</Text>
            )}
            {(!characters[selectedCharacterIndex].films || characters[selectedCharacterIndex].films.length === 0) &&
              (!characters[selectedCharacterIndex].tvShows || characters[selectedCharacterIndex].tvShows.length === 0) && (
                <Text>This character has no films and no TV shows.</Text>
            )}
          </View>
        )}
      </View>
    );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      characterContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      characterImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
      },
    });
    
    export default Disney;
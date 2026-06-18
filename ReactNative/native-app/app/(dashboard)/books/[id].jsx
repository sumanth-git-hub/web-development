import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

//themed components
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'
import ThemedPressable from '../../../components/ThemedPressable'
import { useBooks } from '../../../hooks/useBooks'
import { Colors } from '../../../constants/Colors'


const BookDetails = () => {
    const [book, setBook] = useState(null)
    const {id} = useLocalSearchParams()
    const {fetchBooksById, deleteBook} = useBooks()
    const router = useRouter()
    

    async function loadBook() {
        const bookData = await fetchBooksById(id)
        setBook(bookData)
    }

    useEffect(() => {
        loadBook()
    },[id])

    if(!book) {
        return (<ThemedView safe = {true} style={styles.container}>
            <ThemedLoader />
        </ThemedView>)
    }

    
    async function handleDelete() {
            await deleteBook(id)
            setBook(null)
            router.replace(`/books`)
    }

  return (
    <ThemedView safe = {true} style={styles.container} >
        <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedPressable style={styles.delete} onPress = {handleDelete}>
        <Text style = {{color: '#fff', textAlign: "center"}}>Delete Book</Text>
      </ThemedPressable>

    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
    padding: 10,
  },
  delete : {
    marginVertical: 10,
    backgroundColor: Colors.warning,
    marginHorizontal: 20
  }
})
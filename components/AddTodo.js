import React, { useState } from 'react'
import { View, Button } from 'react-native'
import { TextInput } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function AddToDO({addTodos}) {
    const [text, setText] = useState('')

    const handleChange = (val) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo ...'
                onChangeText={handleChange}
            />
            <Button onPress={() => addTodos(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})

export default AddToDO

import React, { useState } from 'react'
import { View, Button, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

function AddToDO({ addTodos }) {
    const [text, setText] = useState('')

    const handleChange = (val) => {
        setText(val)
    }

    const handleAddTodo = () => {
        addTodos(text)
        setText('')
    }

    const handleResetText = () => {
        setText('')
    }

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='New todo ...'
                    value={text}  // Bind the state to the TextInput value
                    onChangeText={handleChange}
                />
                {
                    text ? (
                        <TouchableOpacity onPress={handleResetText} style={styles.cancelIcon}>
                            <Ionicons name='close-circle' size={24} color="gray" />
                        </TouchableOpacity>
                    ) : null
                }
            </View>
            <Button onPress={handleAddTodo} title='Add Todo' color='coral' />
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        width: Dimensions.get('window').width - 80,
        marginHorizontal: 10,
    },
    input: {
        flex: 1,
    },
    cancelIcon: {
        marginRight: 10
    }
})

export default AddToDO

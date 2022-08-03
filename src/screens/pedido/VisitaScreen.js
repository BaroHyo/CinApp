import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, RadioButton, Text, TextInput } from 'react-native-paper';

export const VisitaScreen = ({ navigation }) => {
    const [value, setValue] = useState('tiempo');
    const [text, setText] = useState("");

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.margen}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="tiempo" />
                            <Text>TIEMPO (NO VISITA)</Text>
                        </View>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="transporte" />
                            <Text>TRANSPORTE (NO VISITA)</Text>
                        </View>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="cerrada" />
                            <Text>CERRADO</Text>
                        </View>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="stock" />
                            <Text>STOCK</Text>
                        </View>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="ausente" />
                            <Text>AUSENTE</Text>
                        </View>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="efctivo" />
                            <Text>MOTIVO EFECTIVO</Text>
                        </View>
                        <View style={styles.conteineRadio}>
                            <RadioButton value="ostro" />
                            <Text>OTROS</Text>
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={styles.margen}>
                    <TextInput
                        multiline
                        numberOfLines={4}
                        mode='outlined'
                        label="Observaciones"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <View style={styles.margen}>
                    <Button mode="contained" onPress={() => console.log('Pressed')}>
                        Registrar
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18,
        color: 'black'
    },
    conteineRadio: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    margen: {
        marginVertical: 8
    }
});

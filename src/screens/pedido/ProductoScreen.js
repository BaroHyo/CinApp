import React, { useState } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Chip, Searchbar } from 'react-native-paper';
import ScreenWrapper from '../../components/ScreenWrapper';

export const ProductoScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);



    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <Chip
                    selected={visible}
                    onPress={() => setVisible(!visible)}
                    style={styles.chip}>
                    PRODUCTO PARA VENTA
                </Chip>
                <Chip
                    selected={visible2}
                    onPress={() => setVisible2(!visible2)}
                    style={styles.chip}>
                    MATERIA PRIMA
                </Chip>
                <Chip
                    selected={visible3}
                    onPress={() => setVisible3(!visible3)}
                     style={styles.chip}>
                    INSUMOS DE PRODUCCION
                </Chip>
            </View>

            <ScreenWrapper>
                <Searchbar
                    placeholder="Buscar"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{ marginVertical: 5 }}
                />
            </ScreenWrapper>




        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 12,
    },
    chip: {
        margin: 4,
    },
});

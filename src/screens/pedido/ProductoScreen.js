import React, { useState } from 'react'
import { View, StyleSheet, Image, FlatList } from 'react-native'
import { Card, Chip, Divider, Paragraph, Searchbar } from 'react-native-paper';



const producto = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'First Item',
    },
    {
        id: '5',
        title: 'Second Item',
    },
    {
        id: '6',
        title: 'Third Item',
    },
    {
        id: '7',
        title: 'Third Item',
    },
    {
        id: '8',
        title: 'Third Item',
    },
    {
        id: '9',
        title: 'Third Item',
    },
];

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
            <Searchbar
                placeholder="Buscar"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ marginVertical: 5 }}
            />

            <View style={{ flex: 1, marginHorizontal: 10, marginTop: 5 }}>
                <FlatList
                    data={producto}
                    keyExtractor={(p) => p.id}
                    renderItem={({ item }) => (
                        <Card elevation={5} onPress={() => navigation.navigate('form')}>
                            <Card.Content>
                                <View style={styles.topContainer}>
                                    <View style={{ justifyContent: 'space-between' }}>
                                        <View>
                                            <Paragraph>Precio:  545 Bs</Paragraph>
                                            <Paragraph>Nombre: Tets</Paragraph>
                                        </View>
                                    </View>
                                    <Image source={{
                                        uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
                                    }} style={styles.avatar} />
                                </View>

                            </Card.Content>
                        </Card>
                    )}

                    ItemSeparatorComponent={() => (
                        <Divider style={{ marginVertical: 5 }} />
                    )}
                />
            </View>
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
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
});



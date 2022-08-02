import React from 'react'
import { FlatList, View } from 'react-native'
import { Card, Paragraph, Divider, Searchbar, Button } from 'react-native-paper';

const client = [
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

export const ClienteScreen = ({ navigation }) => {

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ marginVertical: 5 }}
            />
            <FlatList
                data={client}
                keyExtractor={(p) => p.id}
                renderItem={({ item }) => (
                    <Card elevation={5} >
                        <Card.Title title="Codigo:" subtitle="Nombre: " />
                        <Card.Content>
                            <Paragraph>Razon: </Paragraph>
                            <Paragraph>Nit: </Paragraph>
                            <Paragraph>Telefono: </Paragraph>
                            <Paragraph>Direccion: </Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => navigation.navigate('visita')}>Visita</Button>
                            <Button onPress={() => navigation.navigate('productos')}>Productos</Button>
                        </Card.Actions>
                    </Card>
                )}

                ItemSeparatorComponent={() => (
                    <Divider style={{ marginVertical: 5 }} />
                )}


            />
        </View>
    )
}


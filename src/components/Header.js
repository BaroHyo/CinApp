import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';



const Header = ({ children }) => (
    <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        // color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 14,
    },
});

export default memo(Header);

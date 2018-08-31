import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Header extends Component {
    render() {
        return ( 
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.text}</Text>;
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
      fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1
    }
  });

export { Header };

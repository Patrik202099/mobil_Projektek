import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class ButtonBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      szint: 1,
      pont: 1,
      kocka: 6,
      veletlen: 3,
      lathatokocka: false
    };
  }

  szint_Novel = () => {
    this.setState({ szint: this.state.szint + 1 })
  }
  szint_Csokkent = () => {
    this.setState({ szint: this.state.szint - 1 })
  }
  pont_Novel = () => {
    this.setState({ pont: this.state.pont + 1 })
  }
  pont_Csokkent = () => {
    this.setState({ pont: this.state.pont - 1 })
  }
  kocka_Novel = () => {
    this.setState({ kocka: this.state.kocka + 1 })
  }
  kocka_Csokkent = () => {
    this.setState({ kocka: this.state.kocka - 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.redType}>
            <Text style={styles.statusText}>SZINTEK száma:</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.blueBtn} onPress={this.szint_Novel}>
              <Text style={styles.blueBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.redStatus}>
            <Text style={styles.redStatusText}>{this.state.szint}</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.blueBtn} onPress={this.szint_Csokkent}>
              <Text style={styles.blueBtnText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.redType}>
            <Text style={styles.statusText}>PONTOK száma:</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.blueBtn} onPress={this.pont_Novel}>
              <Text style={styles.blueBtnText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.redStatus}>
            <Text style={styles.redStatusText}>{this.state.pont}</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.blueBtn} onPress={this.pont_Csokkent}>
              <Text style={styles.blueBtnText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  leftContainer: {
    backgroundColor: 'grey',
    width: '45%',
    position: 'absolute',
    left: 10,
    padding: 10
  },
  rightContainer: {
    backgroundColor: 'grey',
    width: '45%',
    position: 'absolute',
    right: 10,
    padding: 10
  },
  redType: {
    backgroundColor: 'red',
    alignSelf: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold'
  },
  blueBtn: {
    backgroundColor: '#326fa8',
    alignSelf: 'center',
    marginTop: 10,
    width: 100,
    height: 40
  },
  redStatus: {
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 10,
    width: 100,
    height: 40
  },
  blueBtnText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    marginTop: 5
  },
  redStatusText: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    marginTop: 5
  }
});
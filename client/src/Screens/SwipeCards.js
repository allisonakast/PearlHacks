'use strict';

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from 'theme';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image
          style={styles.thumbnail}
          source={{ uri: this.props.image }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{this.props.name + " " + this.props.age}</Text>
          <Text style={styles.info}>{"Employer " + this.props.employer}</Text>
          <Text style={styles.info}>{'Seeking ' + this.props.property}</Text>
          <View style={styles.breaker} />
          <Text style={styles.info} />
        </View>
        <View style={styles.topContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://media1.fdncms.com/gambit/imager/u/zoom/8596034/thumbs_down.jpg' }}
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/ckeditor/files/good_practice_2_0.png?zUWmBhjgYe6ek0L68YTRnUCQZo9lJo4v' }}
          />
        </View>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const cards = [
  { name: 'Veronica', age: 19, employer: 'UNC', property: 'mentor', bio: 'Looking for a mentor in Cyber Security!', image: 'https://gatortechuf.com/media/membership/katie.jpg' },
  { name: 'Ella', age: 18, employer: 'UNC', property: 'mentor', bio: 'Seeking help in CS1', image: 'https://gatortechuf.com/media/membership/nelly.jpg' },
  { name: 'Jim', age: 32, employer: 'Nielsen', property: 'mentor', bio: '', image: 'https://gatortechuf.com/media/membership/Screen_Shot_2017-12-26_at_8.50.37_PM.png' },
  { name: 'Allison', age: 22, employer: 'Ultimate Software', property: 'mentee', bio: 'Looking to mentor future women in tech', image: 'https://gatortechuf.com/media/membership/madison.png' },
  { name: 'Katelyn', age: 19, employer: 'UNC', property: 'mentor', bio: 'Wanting backend web dev mentor', image: 'https://gatortechuf.com/media/membership/Screen_Shot_2018-01-17_at_3.57.59_PM.png' },
  { name: 'Rebekah', age: 26, employer: 'Harris Corporation', property: 'mentee', bio: 'Wanting to help teach networking concepts', image: 'https://gatortechuf.com/media/membership/jenny.jpg' },
  { name: 'Wyatt', age: 23, employer: 'Facebook', property: 'mentee', bio: 'Looking to help students new to tech', image: 'https://gatortechuf.com/media/membership/josh.png' },
  { name: 'Kevin', age: 18, employer: 'UNC', property: 'mentor', bio: 'Please help me with my programming homework!', image: 'https://gatortechuf.com/media/membership/noah.jpg' },
  { name: 'Spencer', age: 21, employer: 'UNC', property: 'mentor', bio: 'Seeking mentor knowledgeable in IoT and FinTech', image: 'https://gatortechuf.com/media/membership/Screen_Shot_2018-01-09_at_6.24.51_PM.png' },
  { name: 'Kelly', age: 25, employer: 'Protiviti', property: 'mentee', bio: 'Wanting to help increase # of women in the tech space', image: 'https://gatortechuf.com/media/membership/Screen_Shot_2018-01-09_at_6.13.21_PM.png' },
]


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup(card) {
    console.log("yup")
    this.AddCard;
  }

  AddCard = async () => {
    const cardInfo = this.state.input;

    this.setState({ showActivityIndicator: true });

    this.readImage(imageNode)
      .then(fileInfo => ({
        ...petInfo,
        picKey: fileInfo && fileInfo.key,
      }))
      .then(this.apiSaveCard)
      .then(data => {
        this.setState({ showActivityIndicator: false });
        this.props.screenProps.handleRetrieveCard();
        this.props.screenProps.toggleModal();
      })
      .catch(err => {
        console.log('error saving card...', err);
        this.setState({ showActivityIndicator: false });
      });
  }

  async apiSaveCard(card) {
    return await API.post('Cards', '/items/cards', { body: card });
  }


  handleNope(card) {
    console.log("nope")
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={true}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'visible',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    width: 300,
    height: '95%'
  },
  thumbnail: {
    width: 200,
    height: 200,
    flex: 1.5,
    paddingTop: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    padding: 10,
    flex: 2
  },
  breaker: {
    height: 1,
    backgroundColor: colors.darkGray,
    marginVertical: 15,
    width: '100%',
  },
  topContainer: {
    flexDirection: 'row',
    flex: 0.5,
    paddingBottom: 15,
  },
  container: {
    padding: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  title: {
    color: colors.darkGray,
    fontSize: 28,
    marginBottom: 20,
  },
  info: {
    color: colors.darkGray,
    marginBottom: 7,
  },
})
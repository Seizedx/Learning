import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

class FortuneCookieApp extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            phrases: '',
            img: require('../src/biscoito.png')
        }
        
        this.breakCookie = this.breakCookie.bind(this);
    
        this.phrases = [
            'Do not be afraid of competition.',
            'An exciting opportunity lies ahead of you.',
            'You love peace.',
            'Get your mind set…confidence will lead you on.',
            'You will always be surrounded by true friends.',
            'Sell your ideas—they have exceptional merit.',
            'You should be able to undertake and complete anything.',
            'You are kind and friendly.',
            'You are wise beyond your years.',
            'Your ability to juggle many tasks will take you far.',
            'A routine task will turn into an enchanting adventure.',
            'Beware of all enterprises that require new clothes.',
            'Be true to your work, your word, and your friend.',
            'Goodness is the only investment that never fails.',
            'A journey of a thousand miles begins with a single step.',
            'Forget injuries; never forget kindnesses.',
            'Respect yourself and others will respect you.',
            'A man cannot be comfortable without his own approval.',
            'Always do right. This will gratify some people and astonish the rest.',
            'It is easier to stay out than to get out.',
            'Sing everyday and chase the mean blues away.',
            'You will receive money from an unexpected source.',
            'Attitude is a little thing that makes a big difference.',
            'Plan for many pleasures ahead.',
            'Experience is the best teacher.',
            'You will be happy with your spouse.',
            'Expect the unexpected.',
            'Stay healthy. Walk a mile.',
            'The family that plays together stays together.',
            'Eat chocolate to have a sweeter life.',
            'Once you make a decision the universe conspires to make it happen.',
            'Make yourself necessary to someone.',
            'The only way to have a friend is to be one.',
            'Nothing great was ever achieved without enthusiasm.',
            'Dance as if no one is watching.',
            'Live this day as if it were your last.',
            'Your life will be happy and peaceful.',
            'Reach for joy and all else will follow.',
            'Move in the direction of your dreams.',
            'Bloom where you are planted.',
            'Appreciate. Appreciate. Appreciate.',
            'Happy News is on its way.',
            'Success is a journey, not a destination.',
            'Your creativity will lead you to great things.',
            'A pleasant surprise is waiting for you.',
            'The best way to predict the future is to create it.',
            'Your hard work will soon pay off.',
            'A dream you have will soon come true.',
            'You will find a solution to a problem that has been troubling you.',
            'Luck is on your side today.',
            'A new friendship will bring you joy.',
            'Your kindness will open new doors for you.',
            'A small gift may bring great happiness.',
            'Your persistence will lead to victory.',
            'A change in your routine will lead to new opportunities.',
            'Someone admires you more than you realize.',
            'Your positive energy will attract good fortune.',
            'A long-awaited wish will soon be granted.',
            'You will soon receive good news from afar.',
            'Your talents will be recognized and rewarded.',
            'A new adventure is just around the corner.',
            'Your generosity will come back to you tenfold.',
            'The answer you seek will come when you least expect it.',
            'A lucky encounter will change your perspective.',
            'Your courage will inspire others.',
            'A financial opportunity is coming your way.',
            'Your smile will brighten someone’s day.',
            'A small step forward will lead to big success.',
            'Your intuition is guiding you in the right direction.',
            'A new skill you learn will prove valuable.',
            'Your determination will overcome any obstacle.',
            'A moment of patience will prevent a great mistake.',
            'Your efforts will be rewarded sooner than you think.',
            'A kind word will open a closed door.',
            'Your future is brighter than you imagine.',
            'A chance meeting will lead to a great opportunity.',
            'Your wisdom will help someone in need.',
            'A new beginning is on the horizon.',
            'Your loyalty will be repaid with trust.',
            'A creative idea will bring you success.',
            'Your perseverance will impress others.',
            'A risk taken today will lead to tomorrow’s success.',
            'Your optimism will attract positive outcomes.',
            'A simple act of kindness will make a big difference.',
            'Your honesty will earn you respect.',
            'A new connection will bring unexpected joy.',
            'Your patience will be rewarded with great results.',
            'A moment of reflection will bring clarity.',
            'Your enthusiasm will inspire those around you.',
            'A small change will lead to big improvements.',
            'Your faith in yourself will lead to success.',
            'A good deed will not go unnoticed.',
            'Your laughter will bring happiness to others.',
            'A difficult situation will soon resolve itself.',
            'Your positive attitude will open new doors.',
            'A new opportunity will arise when you least expect it.',
            'Your hard work will soon be recognized.',
            'A stranger will bring you valuable advice.',
            'Your love will be returned in unexpected ways.',
            'A moment of courage will change your life.',
            'Your dreams are closer than they appear.',
            'A new path will reveal itself to you.',
            'Your kindness will create lasting friendships.',
            'A challenge will lead to personal growth.',
            'Your future holds great promise.',
            'A lucky break is coming your way.',
            'Your persistence will make the impossible possible.'
        ]
    };
    
breakCookie() {
    let random = Math.floor(Math.random() * this.phrases.length);
    
    this.setState({
        img: require('../src/biscoito.png'),
        phrases: ''
    });
    
    setTimeout(() => {
        this.setState({
            phrases: '"' + this.phrases[random] + '"',
            img: require('../src/biscoitoAberto.png')
        });
    }, 200);
}
    
    render() {
        return (
            <View style={styles.container}>
                <Text 
                style={[styles.titleText, styles.textCenter]}>
                    FORTUNE COOKIE
                </Text>
                <Image 
                style={[styles.img, styles.alignCenter]} 
                source={this.state.img}/>
                <TouchableOpacity 
                style={[styles.breakButton, styles.alignCenter]}
                onPress={this.breakCookie}>
                    <View>
                        <Text 
                        style={styles.breakButtonText}>
                        Break Cookie
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text 
                style={[styles.phraseText, styles.textCenter]}>
                    {this.state.phrases}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    
    titleText: {
        marginTop:50,
        fontSize: 40,
        fontWeight: 700,
        color: 'rgb(54, 54, 54)'
    },
    img: {
        width: 250,
        height: 250,
        margin: 20

    },

    phraseText: {
        color: 'white',
        fontFamily: 'demonSker',
        fontSize: 30,
        margin: 10,
        fontStyle: 'italic'
    },

    breakButton: {
        backgroundColor: 'rgb(63, 51, 230)',
        padding: 20,
        boxShadow: '5px 5px 5px 0px rgba(16, 64, 166, 0.5)',
        borderRadius: 10,
        fontSize: 20
    },

    breakButtonText: {
        fontFamily: 'arial',
        fontSize: 25,
        color: 'rgb(0, 0, 0)',
        fontWeight: 'bold'
    },

    alignCenter: {
        alignSelf: 'center'
    },

    textCenter: {
        textAlign: 'center'
    }
})
export default FortuneCookieApp;

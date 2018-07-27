import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    Dimensions,
    TextInput,
    DatePickerIOS,
    TouchableOpacity,
    Alert,
    Keyboard,
    TouchableWithoutFeedback,
    NetInfo,
    Platform,
    AsyncStorage,
} from 'react-native';
import Slider from "react-native-slider";
import StarRating from 'react-native-star-rating';
import { AppStyles, AppSizes, AppColors } from '../themes/'
import Buttons, { LoginButton, Button2 } from "../components/Buttons";
var Constant = require('../api/WebInteractor').Constant;
var WebServices = require('../api/WebInteractor').WebServices;
const usericn = require('../themes/img/user-top.png');
const arrow = require('../themes/img/arrow.png');
const local = require('../themes/img/local.png');
const review = require('../themes/img/review.png');
const add_tab_unselected = require('../themes/img/add_tab_unselected.png');
const download_tab_unselected = require('../themes/img/download_tab_unselected.png');
const notifcation_tab_unselected = require('../themes/img/notifcation_tab_unselected.png');
const check = require('../themes/img/check.png');
const uncheck = require('../themes/img/uncheck.png');
const shared = require('../themes/img/shared.png');
const borrowed = require('../themes/img/borrowed.png');


const preferences = require('../themes/img/preferences.png');
const user = require('../themes/img/user.png');
const setting = require('../themes/img/setting.png');
var _that;
class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //    value: 1 
            starCount: 3
        }
        _that = this
    }

    componentDidMount() {

    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    render() {
        return (

            <View style={[AppStyles.container, { paddingLeft: AppColors.paddingLeft20, paddingRight: AppColors.paddingRight20 }]}>
                <View>
                    <Text style={AppStyles.textheader}>
                        My Profile
                    </Text>
                </View>
                <View style={{ height: 100, flexDirection: 'row' }}>
                    <View style={{ flex: 2, height: 100 }} >
                        <TextInput
                            style={AppStyles.biotxtinpt}
                            maxLength={40}
                            multiline={true}
                            numberOfLines={10}
                            placeholder={"Bio"}
                            placeholderTextColor="#ccbedb"
                            autoCorrect={false}
                            returnKeyType={'done'}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={AppStyles.usericncnt} >
                        <Image source={usericn} style={AppStyles.usericn} />
                    </View>
                </View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={local} style={AppStyles.icon} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader, { marginLeft: 10, marginTop: 10 }]}>Local / Global ranking</Text>
                    </View>
                </View>
                <Slider
                    trackStyle={AppStyles.slider}
                    minimumTrackTintColor={"#60307f"}
                    maximumTrackTintColor={"#ccbedb"}
                    thumbImage={<Image source={require('../themes/img/arrow.png')} style={{ resizeMode: 'contain', width: 25, height: 25 }} />}
                />
                <View style={AppStyles.separator}></View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={review} style={AppStyles.review} />
                    </View>
                    <View style={{ width: 130, height: 50, }} >
                        <Text style={AppStyles.textheader}>Review</Text>
                    </View>
                    <View style={AppStyles.rating} >
                        <StarRating
                            disabled={false}
                            fullStar={require('../themes/img/check.png')}
                            emptyStar={require('../themes/img/uncheck.png')}
                            maxStars={5}
                            starSize={30}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                    </View>
                </View>
                <View style={AppStyles.separator}></View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={borrowed} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Borrowed</Text>
                    </View>
                </View>
                <View style={AppStyles.separator}></View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={notifcation_tab_unselected} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Notifications</Text>
                    </View>
                </View>
                <View style={AppStyles.separator}></View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={preferences} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Preferences</Text>
                    </View>
                </View>
                <View style={AppStyles.separator}></View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={user} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Users</Text>
                    </View>
                </View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={shared} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Shared</Text>
                    </View>
                </View>
                <View style={AppStyles.separator}></View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={shared} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Shared</Text>
                    </View>
                </View>
                <View style={AppStyles.profilecontainer} >
                    <View style={AppStyles.imagecnt}>
                        <Image source={shared} style={AppStyles.review} />
                    </View>
                    <View >
                        <Text style={[AppStyles.textheader,]}>Shared</Text>
                    </View>
                </View>

                {/* <LoginButton text={"Sign Up"} onPress={this.SignUp} style={AppStyles.green_round_button} /> */}
            </View>
        )
    }

    /**
     * SignUp click functionality
     */

    SignUp = () => {
        const { _email, _password, _isRemember, _visible } = this.state

        this.setState({ _visible: true })

        if (!commonFunctions.validateEmail(_email)) {
            this.setState({ _visible: false })
            commonFunctions.message('Please enter a valid email address!');
        } else if ((_password.indexOf(' ') >= 0 || _password.length <= 0)) {
            this.setState({ _visible: false })
            Alert.alert('Please enter a password!');
        } else {
            var data = {
                "EmailId": _email,
                "Password": _password,
                "DeviceType": "1",
                "DeviceToken": "1"
            }
            this.PostToApiCalling('POST', 'UserSignUp', Constant.URL_RegisterUser, data);
        }
        _that.props.navigation.navigate('DrawerMenu')
    }

    /**
     * onClick
     */

    onClick = (bool) => {
        //alert(bool)
    }


    /**
  * API Calling
  */


    PostToApiCalling(method, apiKey, apiUrl, data) {
        new Promise(function (resolve, reject) {
            if (method == 'POST') {
                resolve(WebServices.callWebService(apiUrl, data));
            } else {
                resolve(WebServices.callWebService_GET(apiUrl, data));
            }
        }).then((jsonRes) => {

            if ((!jsonRes) || (jsonRes.Status != 200)) {
                console.log(jsonRes)
            } else {
                if (jsonRes.Status == 200) {
                    console.log(jsonRes)
                    _that.apiSuccessfullResponse(apiKey, jsonRes)
                }
            }
        }).catch((error) => {
            console.log("ERROR" + error);
        });
    }



    apiSuccessfullResponse(apiKey, jsonRes) {
        const { _email, _password, _isRemember } = this.state
        if (apiKey == 'UserLogin') {
            var jsonResponse = jsonRes.ResponsePacket;
            if (jsonRes.Message = "Success") {
                commonFunctions.message(jsonRes.Message)
                var data = {
                    "email": _email,
                    "password": _password,
                    "isRemember": _isRemember
                }
                if (_isRemember) { AsyncStorage.setItem("isRemember", JSON.stringify(data)) }
                _that.props.navigation.navigate('DrawerMenu')
                this.setState({ _visible: false })
            } else {

            }
        }
    }
}




export default MyProfile
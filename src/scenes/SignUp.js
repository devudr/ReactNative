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
import CheckBox from 'react-native-check-box'
import Spinner from 'react-native-loading-spinner-overlay';
import { AppStyles, AppSizes, AppColors } from '../themes/'
import Buttons, { LoginButton, Button2 } from "../components/Buttons";
const EmailIdImage = require('../themes/Images/user.png');
const password_icon = require('../themes/Images/password.png');
const Logo = require('../themes/Images/logo.png');
var Constant = require('../api/WebInteractor').Constant;
var WebServices = require('../api/WebInteractor').WebServices;

var _that;
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _email: '',
            _password: '',
            _confirmPassword: '',
            _visible: false
        },
            _that = this
    }
    _showModalLoadingSpinnerOverLay = () => {
        this._modalLoadingSpinnerOverLay.show()
        //simulate http request
        this.setTimeout(() => {
            this._modalLoadingSpinnerOverLay.hide()
        }, 3000)
    }
    componentDidMount() {

    }
    render() {
        const { _email, _password, _confirmPassword, _visible } = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[AppStyles.container, { justifyContent: AppColors.justifyContentcenter, paddingLeft: AppColors.paddingLeft20, paddingRight: AppColors.paddingRight20 }]}>
                    <Image source={require('../themes/Images/bg@1242x2208.png')} style={{ width: AppSizes.screen.width, height: AppSizes.screen.height, position: 'absolute', top: 0, left: 0 }} />
                    <View style={AppStyles.login_logo_cnt}>
                        <Image source={Logo} style={AppStyles.login_logo} />
                    </View>
                    <View style={AppStyles.Input_iconcnt}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={AppStyles.InputCnt_icon}>EMAIL ADDRESS</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"next"}
                                selectionColor={"#fff"}
                                keyboardType={'email-address'}
                                autoFocus={false}
                                placeholder="Username"
                                placeholderTextColor={AppColors.white}
                                style={AppStyles.InputCnt_txt}
                                ref="emailid"
                                onChangeText={_email => this.setState({ _email })}
                                value={_email}
                                onSubmitEditing={(event) => { this.refs.password.focus(); }}
                            />
                        </View>
                    </View>
                    <View style={AppStyles.Input_iconcnt}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={AppStyles.InputCnt_icon}>PASSWORD</Text>
                            <TextInput
                                returnKeyType={"done"}
                                autoCorrect={false}
                                selectionColor={"#fff"}
                                placeholderTextColor={AppColors.white}
                                underlineColorAndroid="transparent"
                                placeholder="Password"
                                style={AppStyles.white}
                                secureTextEntry
                                ref="password"
                                onSubmitEditing={Keyboard.dismiss}
                                onChangeText={_password => this.setState({ _password })}
                                value={_password}
                            />
                        </View>
                    </View>
                    <View style={AppStyles.Input_iconcnt}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={AppStyles.InputCnt_icon}>CONFIRM PASSWORD</Text>
                            <TextInput
                                returnKeyType={"done"}
                                autoCorrect={false}
                                selectionColor={"#fff"}
                                placeholderTextColor={AppColors.white}
                                underlineColorAndroid="transparent"
                                placeholder="Password"
                                style={AppStyles.InputCnt_txt}
                                secureTextEntry
                                ref="_confirmPassword"
                                onSubmitEditing={Keyboard.dismiss}
                                onChangeText={_confirmPassword => this.setState({ _confirmPassword })}
                                value={_confirmPassword}
                            />
                        </View>
                    </View>
                    <LoginButton text={"Sign Up"} onPress={this.SignUp} style={AppStyles.green_round_button} />
                    <Spinner visible={_visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                </View></TouchableWithoutFeedback>
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




export default SignUp
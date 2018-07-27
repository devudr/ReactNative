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
const check_icon = require('../themes/Images/check.png')
const uncheck_icon = require('../themes/Images/uncheck.png')
import SplashScreen from 'react-native-smart-splash-screen'
import * as commonFunctions from '../utils/CommonFunctions'
var Constant = require('../api/WebInteractor').Constant;
var WebServices = require('../api/WebInteractor').WebServices;
var _that;
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _email: '',
            _password: '',
            _visible: false,
            _isRemember: false,
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
        SplashScreen.close({
            animationType: SplashScreen.animationType.scale,
            duration: 850,
            delay: 500,
        })
        AsyncStorage.getItem('UserData')
            .then((res) => {
                if (res) {
                    var data = JSON.parse(res)
                    if (data.isRemember) {
                        _that.props.navigation.navigate('DrawerMenu')
                    }
                }
            });

    }
    render() {
        const { _email, _password, _isRemember, _visible } = this.state
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
                                style={AppStyles.InputCnt_txt}
                                secureTextEntry
                                ref="password"
                                onSubmitEditing={Keyboard.dismiss}
                                onChangeText={_password => this.setState({ _password })}
                                value={_password}
                            />
                        </View>
                    </View>
                    <View style={[AppStyles.login_cnt, { top: 2, flexDirection: AppColors.flexDirectionrow }]}>
                        <CheckBox
                            style={AppStyles.checkBox}
                            rightTextStyle={AppStyles.checkBox_txt}
                            onClick={() => this.setState({ _isRemember: !_isRemember })}
                            isChecked={_isRemember}
                            rightText={'Remember me'}
                            checkedImage={<Image source={check_icon} style={{ width: 25, height: 25 }} />}
                            unCheckedImage={<Image source={uncheck_icon} style={{ width: 25, height: 25 }} />}
                        />
                        <TouchableOpacity activeOpacity={.8} onPress={() => _that.props.navigation.navigate('ForgotPassword')} >
                            <Text style={AppStyles.forgot_txt} >Forgot my password ?</Text>
                        </TouchableOpacity>
                    </View>
                    <LoginButton text={"LOGIN"} onPress={this.Login} style={AppStyles.green_round_button} />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 30
                    }}>
                        <Text style={AppStyles.signup1_txt}>
                            Don't have an account
                        </Text>
                        <Text style={AppStyles.Qst}>
                            ?
                        </Text>
                        <TouchableOpacity activeOpacity={.8} onPress={() => _that.props.navigation.navigate('SignUp')} >
                            <Text style={AppStyles.signup_txt}>
                                Sign Up
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <Spinner visible={_visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                </View></TouchableWithoutFeedback>
        )
    }

    /**
     * LogIn click functionality
     */

    Login = () => {
        const { _email, _password, _isRemember, _visible } = this.state

        // Loader show
        this.setState({ _visible: true })

        /**
         *  Form  Validations
         */

        if (!commonFunctions.validateEmail(_email)) {
            this.setState({ _visible: false })
            commonFunctions.message('Please enter a valid email address!');
        } else if ((_password.indexOf(' ') >= 0 || _password.length <= 0)) {
            this.setState({ _visible: false })
            commonFunctions.message('Please enter a password!');
        } else {
            var data = {
                "EmailId": _email,
                "Password": _password,
                "DeviceType": "1",
                "DeviceToken": "1"
            }
            this.PostToApiCalling('POST', 'UserLogin', Constant.URL_UserLogin, data);
        }
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
                commonFunctions.message(jsonRes.Message)
                this.setState({ _visible: false })
            } else {
                if (jsonRes.Status == 200) {
                    console.log(jsonRes)
                    this.setState({ _visible: false })
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
                // commonFunctions.message(jsonRes.Message)
                var data = {
                    "EmailId": jsonResponse.EmailId,
                    "password": _password,
                    "isRemember": _isRemember,
                    "UserID": jsonResponse.UserID,
                    "PhoneNo": jsonResponse.PhoneNo,
                    "IsPayment": jsonResponse.IsPayment,
                    "UserToken": jsonResponse.UserToken,
                    "UserName": jsonResponse.UserName,
                    "SufferingId": jsonResponse.SufferingId,
                    "SufferingFrom": jsonResponse.SufferingFrom,
                    "IsProfileComplete": jsonResponse.IsProfileComplete,
                    "Address": jsonResponse.Address,
                }
                if (_isRemember) { AsyncStorage.setItem("UserData", JSON.stringify(data)) }
                _that.props.navigation.navigate('DrawerMenu')
                this.setState({ _visible: false })
            } else {

            }
        }
    }






}




export default Login
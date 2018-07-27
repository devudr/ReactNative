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
import * as commonFunctions from '../utils/CommonFunctions'
var Constant = require('../api/WebInteractor').Constant;
var WebServices = require('../api/WebInteractor').WebServices;
var _that;
class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _email: '',
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
        const { _email } = this.state
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
                                selectionColor={"#fff"}
                                returnKeyType={"next"}
                                keyboardType={'email-address'}
                                autoFocus={false}
                                placeholder="Email"
                                placeholderTextColor={AppColors.white}
                                style={AppStyles.InputCnt_txt}
                                ref="emailid"
                                onChangeText={_email => this.setState({ _email })}
                                value={_email}
                                onSubmitEditing={(event) => { this.refs.password.focus(); }}
                            />
                        </View>
                    </View>
                    <LoginButton text={"Send"} onPress={this.ForgotPassword} style={AppStyles.green_round_button} />
                    <Spinner visible={this.state._visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                </View></TouchableWithoutFeedback>
        )
    }

    /**
     * LogIn click functionality
     */

    ForgotPassword = () => {
        const { _email, _visible } = this.state
        // Loader show
        this.setState({ _visible: true })

        /**
         *  Form  Validations
         */

        if (!commonFunctions.validateEmail(_email)) {
            this.setState({ _visible: false })
            commonFunctions.message('Please enter a valid email address!');
        } else {
            var data = {
                "EmailID": _email
            }
            this.PostToApiCalling('POST', 'ForgotPassword', Constant.URL_ForgotPassword, data);
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
                    commonFunctions.message(jsonRes.Message)
                    this.setState({ _visible: false, _email: '' })
                    _that.props.navigation.navigate('Login')
                }
            }
        }).catch((error) => {
            console.log("ERROR" + error);
        });
    }


}


export default ForgotPassword
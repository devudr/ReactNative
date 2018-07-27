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
    Picker
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
import ModalDropdown from 'react-native-modal-dropdown';
import CallHistory from 'react-native-call-history';
import * as commonFunctions from '../utils/CommonFunctions'
var Constant = require('../api/WebInteractor').Constant;
var WebServices = require('../api/WebInteractor').WebServices;
var _that;
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _userID: '',
            _name: '',
            _phonenumber: '',
            _visible: false,
            _address: '',
            _sufferingFrom: '',
            _sufferingId: '',
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

        setTimeout(function () {
            AsyncStorage.getItem('UserData')
                .then((res) => {
                    if (res) {
                        const { _userID, _sufferingId, _name, _phonenumber, _visible, _address, _sufferingFrom } = _that.state
                        var data = JSON.parse(res)
                        _that.setState({
                            _userID: data._userID,
                            _phonenumber: data.PhoneNo,
                            _name: data.UserName,
                            _sufferingFrom: data.SufferingFrom,
                            _address: data.Address,
                            _sufferingId: data.SufferingID
                        })
                    }
                });

        }, 1000)
        // CallHistory.list(
        //     (history) => {
        //         AsyncStorage.setItem("callHistory", history);
        //     },
        //     (error) => {
        //         console.warn(error);
        //     }
        // );
    }


    render() {
        const { _name, _phonenumber, _visible, _address, _sufferingFrom } = this.state
        return (
            < TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={[AppStyles.container, { justifyContent: AppColors.justifyContentcenter, paddingLeft: AppColors.paddingLeft20, paddingRight: AppColors.paddingRight20 }]}>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>NAME</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"next"}
                                autoFocus={false}
                                placeholder="Username"
                                placeholderTextColor={AppColors.black}
                                style={[AppStyles.InputCnt_txt, { color: '#000' }]}
                                ref="_name"
                                onChangeText={_name => this.setState({ _name })}
                                value={_name}
                            />
                        </View>
                    </View>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>PHONE NUMBER</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"next"}
                                keyboardType={'numeric'}
                                autoFocus={false}
                                placeholder="+91-1234567890"
                                placeholderTextColor={AppColors.black}
                                style={[AppStyles.InputCnt_txt, { color: '#000' }]}
                                ref="_phonenumber"
                                onChangeText={_phonenumber => this.setState({ _phonenumber })}
                                value={_phonenumber}
                            />
                        </View>
                    </View>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>ADDRESS</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"next"}
                                autoFocus={false}
                                placeholder="Address"
                                placeholderTextColor={AppColors.black}
                                style={[AppStyles.InputCnt_txt, { color: '#000' }]}
                                ref="_address"
                                onChangeText={_address => this.setState({ _address })}
                                value={_address}
                            />
                        </View>
                    </View>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <View style={[AppStyles.Inputtxt, { marginLeft: -50 }]}>
                                <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>SUFFERING FROM</Text>
                                {
                                    (Platform.OS === 'ios') ? <ModalDropdown options={['Plot 001', 'Plot 002', 'Plot 003']} style={AppStyles.dropdown_2}
                                        textStyle={AppStyles.dropdown_2_text}
                                        animated={false}
                                        dropdownStyle={AppStyles.dropdown_3_dropdown} />
                                        :
                                        <Picker
                                            selectedValue={_that.state.plot}
                                            onValueChange={(itemValue, itemIndex) => _that.setState({ plot: itemValue })}>
                                            <Picker.Item label="Plot 001" value="Plot 001" itemStyle={{ top: 0 }} />
                                            <Picker.Item label="Plot 002" value="Plot 002" />
                                            <Picker.Item label="Plot 003" value="Plot 003" />
                                        </Picker>
                                }
                            </View>
                        </View>
                    </View>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>SUFFERING FROM</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"done"}
                                autoFocus={false}
                                placeholder="Other"
                                placeholderTextColor={AppColors.black}
                                style={[AppStyles.InputCnt_txt, { color: '#000' }]}
                                ref="_sufferingFrom"
                                onChangeText={_sufferingFrom => this.setState({ _sufferingFrom })}
                                value={_sufferingFrom}
                            />
                        </View>
                    </View>
                    <LoginButton text={"Submit"} onPress={this.Submit} style={AppStyles.green_round_button} />
                    <Spinner visible={this.state._visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                </View></TouchableWithoutFeedback>
        )
    }

    /**
     * LogIn click functionality
     */

    Submit = () => {
        const { _sufferingId, _userID, _name, _phonenumber, _visible, _address, _sufferingFrom } = this.state

        // Loader show
        this.setState({ _visible: true })

        /**
         *  Form  Validations
         */

        if (_name == "") {
            this.setState({ _visible: false })
            commonFunctions.message('Please enter the user name');
        } else if (_phonenumber == "") {
            this.setState({ _visible: false })
            commonFunctions.message('Please enter a password!');
        } else {

            AsyncStorage.getItem('UserData')
                .then((res) => {
                    if (res) {
                        var res = JSON.parse(res)
                        var data = {
                            "UserID": res.UserID,
                            "UserName": _name,
                            "PhoneNo": _phonenumber,
                            "Address": _address,
                            "SufferingId": _sufferingId,
                            "SufferingFrom": "sample string 5"
                        }
                        this.PostToApiCalling('POST', 'UpdateProfile', Constant.URL_Update_Profile, data);
                    }
                });
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
                //  commonFunctions.message(jsonRes.Message)
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
        if (apiKey == 'UpdateProfile') {
            var jsonResponse = jsonRes.ResponsePacket;
            commonFunctions.message(jsonRes.Message)
        }
    }

}




export default Profile
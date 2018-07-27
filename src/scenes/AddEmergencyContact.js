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

var _that;
class AddEmergencyContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _name: '',
            _phonenumber: '',
            _visible: false,
            _address: '',
            _sufferingFrom: '',
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
        const { _name, _phonenumber, _visible, _address, _sufferingFrom } = this.props
        return (
            < TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={[AppStyles.container, { justifyContent: AppColors.justifyContentcenter, paddingLeft: AppColors.paddingLeft20, paddingRight: AppColors.paddingRight20 }]}>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>FRIEND/FAMILY MEMBER NAME</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"next"}
                                autoFocus={false}
                                placeholder="Username"
                                placeholderTextColor={AppColors.black}
                                style={AppStyles.InputCnt_txt}
                                ref="_name"
                                onChangeText={_name => this.setState({ _name })}
                                value={_name}
                            />
                        </View>
                    </View>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>CONTACT NUMBER</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                returnKeyType={"next"}
                                keyboardType={'numeric'}
                                autoFocus={false}
                                placeholder="+91-1234567890"
                                placeholderTextColor={AppColors.black}
                                style={AppStyles.InputCnt_txt}
                                ref="_phonenumber"
                                onChangeText={emailid => this.setState({ _phonenumber })}
                                value={_phonenumber}
                            />
                        </View>
                    </View>
                    <View style={[AppStyles.Input_iconcnt, { borderColor: AppColors.black }]}>
                        <View style={AppStyles.Inputtxt}>
                            <Text style={[AppStyles.InputCnt_icon, { color: AppColors.black }]}>EMAIL ID</Text>
                            <TextInput
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                                keyboardType={'email-address'}
                                returnKeyType={"next"}
                                autoFocus={false}
                                placeholder="Address"
                                placeholderTextColor={AppColors.black}
                                style={AppStyles.InputCnt_txt}
                                ref="_address"
                                onChangeText={emailid => this.setState({ _address })}
                                value={_address}
                            />
                        </View>
                    </View>
                    <LoginButton text={"Submit"} onPress={this.Login} style={AppStyles.green_round_button} />
                    <Spinner visible={this.state._visible} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                </View></TouchableWithoutFeedback>
        )
    }

    /**
     * LogIn click functionality
     */

    Login = () => {
        //alert(_that)
        _that.props.navigation.navigate('DrawerMenu')
    }

    /**
     * onClick
     */

    onClick = (bool) => {
        //alert(bool)
    }
}




export default AddEmergencyContact
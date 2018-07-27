import React from 'react';
import {
    Dimensions,
    Platform
} from 'react-native';

const { width, height } = Dimensions.get("window");

import Colors from './color';
import Fonts from './fonts';
import Sizes from './sizes';

export default {

    appContainer: {
        backgroundColor: Colors.white
    },

    // parent Container style


    container: {
        flex: Colors.flex1,
        flexDirection: Colors.flexDirectioncolumn,
        backgroundColor: Colors.white,
    },
    rounded_button: {

    },
    /**
     * Login file css
     */

    container_space: {
        flex: 1,
        flexDirection: Colors.flexDirectioncolumn,
        justifyContent: Colors.justifyContentcenter,
        alignItems: Colors.alignItemscenter,
        marginLeft: Colors.marginLeft30,
        marginRight: Colors.marginRight30,
        marginBottom: Colors.marginBottom30,
    },
    login_logo_cnt: {
        justifyContent: Colors.justifyContentcenter,
        alignItems: Colors.alignItemscenter,
        flexDirection: Colors.flexDirectionrow
    },

    login_logo: {
        width: width - 150,
        height: 120,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    Input_iconcnt: {
        alignItems: Colors.alignItemscenter,
        borderColor: Colors.white,
        borderBottomWidth: 1,
        borderRadius: 10,
        height: 80,
        paddingLeft: 50
    },
    InputCnt_icon: {
        backgroundColor: 'rgba(0,0,0,0)',
        color: Colors.white,
        paddingLeft: 3,
        width: Sizes.screen.width,
        marginTop: Colors.marginTop20,
        height: 15,
        alignItems: Colors.alignItemsflexstart
    },
    Input_img: {
        width: 30,
        height: 25,
        marginTop: Colors.marginTop6,
    },

    Inputtxt: {
        flex: Colors.flex6, height: 40
    },
    InputCnt_txt: {
        color: '#fff',
        width: Sizes.screen.width,
        height: (Platform.OS === 'ios') ? 40 : 55,
        fontSize: 18,
        fontFamily: Colors.fontFamilyRegular,
        alignItems: Colors.alignItemsflexstart,
    },
    forgot_txt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: Colors.fontFamilyRegular,
        textAlign: Colors.textAlignCenter,
        marginTop: Colors.marginTop15,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    checkBox: {
        flex: Colors.flex1,
        padding: Colors.padding10,

    },
    checkBox_txt: {
        color: Colors.white,
        fontSize: 18
    },
    green_round_button: {
        backgroundColor: Colors.Corn,
        height: 50,
        marginTop: Colors.marginTop20,
        textAlign: Colors.textAlignCenter,
        color: Colors.white,
        paddingTop: Colors.paddingTop15 - 2,
        borderRadius: 5,
        fontSize: 20,
        fontFamily: Colors.fontFamilyBold,
        overflow: 'hidden'
    },
    signup_txt: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 20,
        marginLeft: 5,
        fontFamily: Colors.fontFamilyBold,
        color: Colors.Corn,
    },
    signup1_txt: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 20,
        marginRight: 5,
        color: Colors.white
    },
    Qst: {
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 20,
        color: '#fff'
    },
    /**
     *  Drawer menu file css
     */



    cross_icon: {
        top: 0,
        left: Sizes.screen.width - 100,
        width: 20,
        height: 20
    },
    drawer_bottom_cnt_item: {
        height: Sizes.screen.height / 2 - 95,
        flex: Colors.flex1,
        flexDirection: Colors.flexDirectioncolumn,
        padding: Colors.paddingLeft10,
        marginTop: -10,
        backgroundColor: Colors.primary
    },
    drawer_bottom_item: {
        flexDirection: Colors.flexDirectionrow,
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 350,
        padding: Colors.padding10,
        marginTop: -10,
        backgroundColor: Colors.primary
    },
    drawer_bottom_profile_icon: {
        width: 100,
        height: 100
    },
    drawer_bottom_setting_icon: {
        position: 'absolute',
        left: 75,
        top: 10,
        width: 35,
        height: 35
    },
    drawer_bottom_txt: {
        color: Colors.white,
        width: 230,
        paddingLeft: Colors.paddingLeft20,
        paddingTop: Colors.paddingTop20
    },
    drawer_icon_calender: {
        width: 55,
        height: 50
    },
    drawer_icon: {
        height: 25,
        width: 25
    },
    /**
     * profile screen css
     */

    dropdown_2: {
        paddingTop: Colors.paddingTop10,
        width: Sizes.screen.width - 50
    },
    dropdown_3_dropdown: {
        paddingTop: Colors.paddingTop10,
        width: Sizes.screen.width - 50
    },
    dropdown_2_text: {
        fontSize: 18
    },
    /**
     * Emergency contact list  css
     */




    filemanager_list: {
        margin: 1,
        alignItems: Colors.alignItemscenter
    },
    filemanager_list_item: {
        backgroundColor: Colors.white,
        margin: 1,
        width: Sizes.screen.width,
    },
    filemanager_folder_icon: {
        marginTop: Colors.marginTop10,
        width: Sizes.screen.width - 50,
    },
    filemanager_folder_title: {
        textAlign: 'left',
        color: '#000',
        paddingTop: 2,
        width: Sizes.screen.width - 50,
    },
    filemanager_folder_view: {
        padding: 10
    },
    Emergency_contact_list_hdr: {
        flex: 1,
        height: 35,
        backgroundColor: '#e23c3d',
        borderRadius: 25,
        marginRight: 5

    },
    Emergency_contact_list_btn: {
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
        textAlign: 'center',
        marginTop: 8
    },

    /**
     * My Profile
     */

    profilecontainer: {
        flexDirection: 'row',
        height: 50, marginTop: 10
    },
    separator: {
        height: 2,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#ccbedb'
    },
    usericncnt: {
        width: 100, height: 100,
        borderColor: '#ccbedb',
        borderWidth: 1,
        paddingLeft: 8
    },
    usericn: {
        width: 80,
        height: 80,
    },
    biotxtinpt: {
        textAlign: 'center',
        height: 100,
        fontSize: 15,
        borderColor: '#ccbedb',
        borderWidth: 1,
    },
    slider: {
        height: 12,
        borderRadius: 10
    },
    icon: {
        width: 35,
        height: 25,
        margin: 10
    },
    review: {
        width: 30,
        height: 30
    },
    textheader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#603090',
        marginTop: 5,
        marginLeft: 0
    },
    rating: {
        paddingTop: 5
    },
    imagecnt: {
        width: 50
    },
};
/**
 * Created by Rishi Paliwal
 * 9 Nov 2017
 * FileManager Class
 */

import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator, } from 'react-navigation';
import { AppStyles, AppSizes, AppColors } from '../themes/'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ListView,
    Image,
    ScrollView,
} from 'react-native';

var folderIcon = require('../themes/Images/folder.png')

class MemberList extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['jun 17 ', 'jun 17 ', 'jun 17 ', 'jun 17 ', 'jun 17 ', 'jun 17 ', 'jun 17 ']),
        };
    }

    static navigationOptions = {
        drawerLabel: 'FlileManager'
    };

    render() {
        return (
            <ScrollView scrollsToTop={false} style={{ backgroundColor: AppColors.Westar_approx }}>
                <ListView
                    contentContainerStyle={AppStyles.filemanager_list}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </ScrollView>
        );
    }
    /**
     * Display Folders list  from API's
     */
    renderRow(rowData) {
        return (
            <View style={[AppStyles.filemanager_list_item]}>
                <View style={AppStyles.filemanager_folder_view}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 3, height: 50,}} >
                            <Text numberOfLines={2} style={{ color: "#000" }}>Member name</Text>
                        </View>
                        <View style={[AppStyles.Emergency_contact_list_hdr, { backgroundColor: '#efcc21' }]} >
                            <Text numberOfLines={2} style={AppStyles.Emergency_contact_list_btn}>Call</Text>
                        </View>
                        <View style={{ flex: 1, height: 35, backgroundColor: '#258652', borderRadius: 25 }} >
                            <Text numberOfLines={2} style={AppStyles.Emergency_contact_list_btn} >Email</Text>
                        </View>
                    </View>
                </View>
                <View style={AppStyles.filemanager_folder_view}>
                    <Text style={AppStyles.filemanager_folder_title} numberOfLines={2}>+91-1234569789 {"\n"}
                        <Text style={{ paddingTop: 4, }} numberOfLines={2}>example129@gmail.com</Text>{"\n"}
                    </Text>
                    <Text style={AppStyles.filemanager_folder_title} numberOfLines={2}>Set Frequency : Thrice
                    </Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, height: 50, }} >
                            <Text style={{ color: "#000",paddingTop: 6, }} numberOfLines={2}>Time Slots : </Text>
                        </View>
                        <View style={[AppStyles.Emergency_contact_list_hdr, { backgroundColor: '#fff' }]} >
                            <Text numberOfLines={2} style={[AppStyles.Emergency_contact_list_btn, { color: "#000" }]}>04:15AM</Text>
                        </View>
                        <View style={[AppStyles.Emergency_contact_list_hdr, { backgroundColor: '#fff' }]} >
                            <Text numberOfLines={2} style={[AppStyles.Emergency_contact_list_btn, { color: "#000" }]}>1:15PM</Text>
                        </View>
                        <View style={{ flex: 1, height: 35, backgroundColor: '#fff', borderRadius: 25 }} >
                            <Text numberOfLines={2} style={[AppStyles.Emergency_contact_list_btn, { color: "#000" }]} >04:15AM</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default MemberList





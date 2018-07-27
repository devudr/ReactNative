

class Constant {
    /**
     * Base URL
     */
    static BASE_URL = "http://demo.co";


    static URL_UserLogin = Constant.BASE_URL + 'UserLogin';
    static URL_RegisterUser = Constant.BASE_URL + 'UserSignUp';
    static URL_ForgotPassword = Constant.BASE_URL + 'ForgotPassword';
    static URL_Update_Profile = Constant.BASE_URL + 'UpdateProfile';
    static URL_Suffering_List = Constant.BASE_URL + 'SufferingList';
    static URL_Add_Family_Member = Constant.BASE_URL + 'AddFamilyMember';
    static URL_Family_Member_List = Constant.BASE_URL + 'FamilyMemberList';
    static URL_Emergency_Member_List = Constant.BASE_URL + 'EmergencyMemberList';


}


var WebServices = {
    callWebService: function (url, body) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'CallToken': body.CallToken ? body.CallToken : '',
            },
            body: JSON.stringify(body)
        })
            .then(response => response.text()) // Convert to text instead of res.json()
            .then((text) => {
                return text;
            })
            .then(response => JSON.parse(response)) // Parse the text.
            .then((jsonRes) => {
                return jsonRes; //main output
            });
    },


    callWebService_GET: function (url, body) {

        console.log("Web Url " + url + " body " + JSON.stringify(body));

        return fetch(url, { // Use your url here
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'CallToken': body.CallToken ? body.CallToken : '',
            },
        })
            .then(response => response.text()) // Convert to text instead of res.json()
            .then((text) => {

                return text;
            })
            .then(response => JSON.parse(response)) // Parse the text.
            .then((jsonRes) => {

                return jsonRes;
            });
    }
}
module.exports = {
    Constant,
    WebServices
}

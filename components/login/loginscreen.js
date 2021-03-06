import React, { Component } from 'react';
import { 
    Text,
    StyleSheet,
    View, 
    Dimensions,
    TextInput,
    TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import firebaseApp from '../../firebase/FirebaseConfig';
export class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.containerform}>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="user" style={styles.icon_user}/>
                    <TextInput style={styles.inputs}
                        placeholder="Email hoặc tên đăng nhập"
                        placeholderTextColor="#F5F5F5"
                        keyboardType="email-address"
                        onChangeText={(email) => this.setState({email})}/>
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome5 name="lock" style={styles.icon_user}/>
                    <TextInput style={styles.inputs}
                        placeholder="Mật khẩu"
                        placeholderTextColor="#F5F5F5"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}/>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={() => this.onClickLogin()}>
                <Text style={styles.txtlogin}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dangkyButton} onPress={() => this.onClickRegistration()}>
                    <Text style={styles.txtlogin}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
        
    }
    onClickLogin(){
        const {email,password}=this.state;
    }
    onClickRegistration(){
        const {email,password}=this.state;
        console.log(firebaseApp);
    }
}


export default LoginScreen;
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    containerform:{
        justifyContent:"center",
        alignItems:"center",
        width:width,
        height:height/2,
    },
    viewlogo:{
        width:width,
        height:height/4,
        justifyContent:"center",
        alignItems:"center"
    },
    imagelogo:{
        width:120,
        height:120,
        resizeMode:'contain'
    },
    inputContainer:{
        backgroundColor: '#363636',
        width:width-100,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:"center",
        borderRadius: 5,
        color: '#F5F5F5',
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color: '#F5F5F5'
    },
    icon_user:{
        color:"#F5F5F5",
        fontSize:20,
        marginLeft:20
    },
    loginButton:{
        width:width-100,
        height:45,
        backgroundColor: '#363636',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtlogin:{
        color: '#F5F5F5',
        fontWeight: 'bold',
        fontSize: 15
    },
    dangkyButton:{
        backgroundColor:'black',
        width:width-100,
        height:45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#808080',
        marginTop:10
    }
})

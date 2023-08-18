import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import db from "../Config.js"

export default class NewTaskScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = { description: "" }
    }
    addNewTasks = () => {
        db.collection("Tasks").add({
            description: this.state.description,
            status: false
        })
        this.props.navigation.navigate("TaskScreen")
    }
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Description</Text>
                <TextInput style={styles.inputStyle} placeholder="Informe seu lembrete" value={this.state.description} onChangeText={(text) => {
                    this.setState({
                        description: text
                    })
                }}   ></TextInput>
                <TouchableOpacity style={styles.saveBottonStyle} onPress={()=>{
                    this.addNewTasks()
                }} >
                    <Text style={styles.saveText} >
                        save
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:"#f5f5f5cf",
    },
    textStyle:{
        marginTop:25,
        fontSize:15,
        marginLeft:25,
        width:"90%",
        color:"blue"
    },
    inputStyle:{
        width:"90%",
        marginTop:5,
        padding:5,
        height:60,
        borderBottomWidth:2,
        borderBlockColor:"blue",
        marginLeft:"auto",
        marginRight:"auto"
    },
    saveBottonStyle:{
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        left:20,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"blue",
    },
    saveText:{
        color:"white",
        fontSize:15,
        fontWeight:"bold",
    }
})
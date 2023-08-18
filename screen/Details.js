import React from "react";
import { View, Text, StyleSheet, } from "react-native"
import db from "../Config"

export default class DetailScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            idTask:this.props.route.params.id,
            descriptionTask:this.props.route.params.description,
        }
        
    }
    editeTask=(description,id)=>{
        db.collection("Tasks").doc(id).update({
            description:description
        })
        this.props.navigation.navigate("TaskScreen")
    }
    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Description</Text>
                <TextInput style={styles.inputStyle} placeholder="Informe seu lembrete" value={this.state.descriptionTask} onChangeText={(text) => {
                    this.setState({
                        descriptionTask: text
                    })
                }}   ></TextInput>
                <TouchableOpacity style={styles.saveBottonStyle} onPress={()=>{
                    this.editeTask(this.state.descriptionTask, this.state.idTask)
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
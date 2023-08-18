import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native"
import db from "../Config"
import { MaterialIcons } from "@expo/vector-icons";

export default class TaskScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Tasks: ""
        }
    }

    GetTasksFromDb = () => {
        db.collection("Tasks").onSnapshot((data) => {
            var list = []
            data.forEach((Task) => {
                list.push({ ...Task.data(), id: Task.id })
            })
            this.setState({
                Tasks: list
            })
        })
    }

    DeleteTasks = (id) => {
        Alert.alert("remover", "tem certeza que quer remover esse lembrete?? ",
            [{
                text: "cancelar",
                onPress: () => {
                    return;
                },
                style: "cancel"
            }, {
                text: "confirmar",
                onPress: () => {
                    db.collection("Tasks").doc(id).delete()
                }
            }], {
            cancelable: false
        })
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.containerTasks}>
                <Text style={styles.descriptionTask} onPress={() => this.props.navigation.navigate("DetailScreen", { id: item.id, descrição: item.descrição })} >
                    {item.descrição}
                </Text>
                <TouchableOpacity style={styles.deleteButton} onPress={()=>{this.DeleteTasks(item.id)}}>
                    <MaterialIcons name="delete-forever" size={20} color='#241178' >

                    </MaterialIcons>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        if (this.state.Tasks === "") {
            return (
                <View style={styles.container}>
                    <Text>carregando tasks ...</Text>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <FlatList renderItem={this.renderItem} data={this.state.Tasks} keyExtractor={(item, index) => index.toString()}>

                    </FlatList>
                    <View style={{flex:0.2}}>
                        <TouchableOpacity style={styles.NewTasksButtom} onPress={()=>{this.props.navigation.navigate("NewTaskScreen")}}>
                            <Text style={styles.AddText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerTasks: {
        width: "100%",
        marginTop: 10,
        marginLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    descriptionTask: {
        width: '75%',
        padding: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        color: "#282b2db5",
    },
    deleteButton: {
        justifyContent: "center",
        paddingRight: 35,

    },
    NewTasksButtom:{
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        left:30,
        backgroundColor:"#241178",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    AddText:{
        color:"#ffffff",
        fontSize:30,
        fontWeight:"bold",
    }
})
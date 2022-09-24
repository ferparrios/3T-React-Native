import { TextStyle, ViewStyle } from "react-native";

export const WelcomeScreenStyles = {
    
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%"
    } as ViewStyle,

    iconContainer: {
        borderWidth: 5,
        borderColor: "red",
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    } as ViewStyle,

    titleText: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold"
    } as TextStyle,

    buttonContainer: {
        width: 180,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 10,
        padding: 5,
        marginTop: 40
    } as ViewStyle,

    buttonText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center"
    } as TextStyle
}
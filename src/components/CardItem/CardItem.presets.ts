import { ViewStyle, TextStyle } from 'react-native';

export const CardItemStyles = {

    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 10
    } as ViewStyle,

    titleText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        width: 200
    } as TextStyle,

    dataText: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: "gray",
        width: 150,
        textAlign: "right",
        paddingHorizontal: 5
    } as TextStyle
}
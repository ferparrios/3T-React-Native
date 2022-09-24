import { ViewStyle, TextStyle } from 'react-native';
export const ResultsScreenStyles = {
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingRight: 30,
        paddingLeft: 10,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        marginHorizontal: 10
    } as ViewStyle,

    dateTitle: {
        color: "#84B1ED",
        fontWeight: "bold"
    } as TextStyle,

    valueText: {
        color: "black",
        fontWeight: "bold",
    } as TextStyle,
}
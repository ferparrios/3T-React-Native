import { ViewStyle, TextStyle } from 'react-native';

export const ListItemStyles = {

    container: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    } as ViewStyle,

    listText: {
        color: "black"
    } as TextStyle,

    iconsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    } as ViewStyle
}
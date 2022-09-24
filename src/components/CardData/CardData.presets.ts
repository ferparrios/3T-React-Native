import { ViewStyle, TextStyle } from 'react-native';
export const CardDataStyles = {
    container: {
        paddingVertical: 20,
        paddingHorizontal: 30
    } as ViewStyle,

    valueContainer: {
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    } as ViewStyle,

    valueText: {
        fontSize: 50,
        color: "red"
    } as TextStyle,
}
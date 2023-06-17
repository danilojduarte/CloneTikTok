import { View, Text, StyleSheet } from "react-native";

export function FeedItem( {data} ) {
    return (
        <View>
            <Text style={{ color: '#fff'}}>{data.name}</Text>
        </View>
    )
}
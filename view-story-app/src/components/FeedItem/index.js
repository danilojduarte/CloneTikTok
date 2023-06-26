import { useRef, useState } from "react"
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import {Video } from 'expo-av'

const { height: heightScreen } = Dimensions.get("screen")

export function FeedItem( {data} ) {
    const video = useRef(null);

    return (
        <Pressable>
            <Video 
                ref={video}
                style={{width: '100%', height: heightScreen }}
                source={{ uri:data?.video}}
                resizeMode="cover"
            />
        </Pressable>
    )
}
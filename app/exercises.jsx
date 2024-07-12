import { View, Text, Pressable, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { fetchExercisesByBodyPart } from '../api/execriseDB';
import { demoExercises } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ExerciseList from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';


export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();


    useEffect(() => {
    if(item) getExercises(item.name);

    }, []);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodyPart(bodypart);

       setExercises(data);
    }
    

  return (
    <ScrollView>
        <StatusBar style='light' />
        <Image 
        source={item.image}
        style={{width: wp(100), height: hp(45)}}
        className='rounded-b-[40px]'/>
        <Pressable 
        className='bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full' 
        style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        onPress={() => router.back()}>
            <Ionicons name='caret-back-outline' size={hp(4)} color='white'/>
        </Pressable>

        <View className='mx-4 space-y-3 mt-4'>
            <Text style={{fontSize: hp(3)}} className='font-semibold text-neutral-700'>
                {item.name} exercises
            </Text>
            <View className='mb-10'>
                <ExerciseList data={exercises} />
            </View>
        </View>
    </ScrollView>
  )
}
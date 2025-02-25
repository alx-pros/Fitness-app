import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


export default function Index() {
    const router = useRouter();

  return (
    <View className='flex-1 flex justify-end'>
     <Image className='h-[120%] w-full -bottom-10 absolute' source={require('../assets/images/welcome.png')}/>

     <LinearGradient 
     colors={['transparent', '#18181b']}
     style={{width: wp(100), height: hp(70)}}
     start={{x: 0.5, y: 0}}
     end={{x: 0.5, y: 0.8}}
     className='flex justify-end -bottom-10 pb-12 space-y-2'
     >
        <Animated.View entering={FadeInDown.delay(100).springify()} className='flex items-center'>
            <Text className='text-white font-bold tracking-wide' style={{fontSize: hp(5)}}>
                Best <Text className='text-rose-500'>Workouts</Text> 
            </Text>
            <Text className='text-white font-bold tracking-wide' style={{fontSize: hp(5)}}>
                For you
            </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
            <Pressable 
            onPress={() => router.push('home')}
            style={{height: hp(7), width: wp(80)}} 
            className='bg-rose-500 items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'>
                <Text style={{fontSize: hp(3)}} className='text-white font-bold tracking-widest'>
                    Get Started
                </Text>
            </Pressable>
        </Animated.View>
     </LinearGradient>
     <StatusBar style='light'/>
    </View>
  )
}
import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, Image, StyleSheet, Dimensions, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    ClipPath
} from 'react-native-svg'

const TravelsScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <ImageBackground 
                source={require('../assets/travel-1.jpg')}
                style={styles.backgroundImage}
            > 
                <View style={styles.navbar}>
                    <FontAwesome name='chevron-left' color='white' size={25}/>
                    <View style={{flexDirection: 'row', alignItems: 'baseline',}}>
                        <Text style={styles.navbarText}>find</Text>
                        <FontAwesome name='search' color='#FF256C' size={25}/>
                        <Text style={styles.navbarText}>ut</Text>
                    </View>
                    <Text></Text>
                </View>
                <View style={styles.travelTitleContainer}>
                    <View style={styles.travelTitleTextContainer}>
                        <Text style={styles.travelType}>Cocktails</Text>
                        <Text style={styles.travelName}>Luango</Text>
                    </View>
                    <View style={styles.likeBtn}>
                        <FontAwesome name='heart' color='#FF256C' size={25} style={styles.likeBtnIcon}/>
                    </View>
                </View>
                <View style={styles.travelBadge}>
                    <View style={styles.travelBadgeSocialContainer}>
                        <View style={styles.socialIconContainer}>
                            <FontAwesome name='facebook' color='white' size={15} style={styles.socialIcon}/>
                        </View>
                        <View style={styles.socialIconContainer}>
                            <FontAwesome name='instagram' color='white' size={15} style={styles.socialIcon}/>
                        </View>
                        <View style={styles.socialIconContainer}>
                            <FontAwesome name='twitter' color='white' size={15} style={styles.socialIcon}/>
                        </View>
                    </View>
                    <View style={styles.travelInfoContainer}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.travelInfoTextBold}>Phone: </Text>
                                <Text style={styles.travelInfoText}>123-123-1234</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.travelInfoTextBold}>Category: </Text>
                                <Text style={styles.travelInfoText}>Cocktail's</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.travelInfoTextBold}>Home Delivery: </Text>
                                <Text style={styles.travelInfoText}>No</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.travelInfoTextBold}>Hours: </Text>
                                <Text style={styles.travelInfoText}>5:00 am to 8:00pm</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.locationIcon}>
                        <FontAwesome name='map-marker' color='white' size={25} style={styles.socialIcon}/>
                    </View>
                </View>
            </ImageBackground>
            <Text style={{marginTop: 65, marginLeft: 10, fontWeight: 'bold'}}>Users Photos</Text>
            <View style={{height: 130}}>
            <ScrollView 
                style={styles.imagesContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity 
                    style={{height: 100}}
                    onPress={() => {
                        props.navigation.navigate({name: 'Travels'})
                    }}
                >
                    <ImageBackground
                        style={styles.travelImage}
                        imageStyle={{borderRadius: 10}}
                        source={require('../assets/image-1.jpg')}
                    ></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{height: 100}}
                    onPress={() => {
                        props.navigation.navigate({name: 'Travels'})
                    }}
                >
                    <ImageBackground
                        style={styles.travelImage}
                        imageStyle={{borderRadius: 10}}
                        source={require('../assets/image-2.jpg')}
                    ></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{height: 100}}
                    onPress={() => {
                        props.navigation.navigate({name: 'Travels'})
                    }}
                >
                    <ImageBackground
                        style={styles.travelImage}
                        imageStyle={{borderRadius: 10}}
                        source={require('../assets/image-3.jpg')}
                    ></ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{height: 100}}
                    onPress={() => {
                        props.navigation.navigate({name: 'Travels'})
                    }}
                >
                    <ImageBackground
                        style={styles.travelImage}
                        imageStyle={{borderRadius: 10}}
                        source={require('../assets/image-4.jpg')}
                    ></ImageBackground>
                </TouchableOpacity>
            </ScrollView>
            </View>
            <Text style={{marginVertical: 10, marginLeft: 10, fontWeight: 'bold'}}>Reviews</Text>
            <ScrollView 
                style={styles.d}
                showsVerticalScrollIndicator={false}
                style={{marginLeft: 10}}
            >
                <View style={styles.masonryContainer}>
                    <View style={styles.masonrySubContainer}>
                        <View style={styles.reviewCard}>
                            <View style={styles.cardHeader}>
                                <Image
                                    source={require('../assets/image-1.jpg')}
                                    style={styles.cardImage}
                                />
                                <View>
                                    <Text style={styles.cardTitle}>Leonidas Esteban</Text>
                                    <Text style={{fontSize: 10}}>2 min ago</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 12}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
                            </Text>
                            <View style={styles.cardButtonsContainer}>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='heart' color='#FF256C' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='comment' color='grey' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.reviewCard}>
                            <View style={styles.cardHeader}>
                                <Image
                                    source={require('../assets/image-1.jpg')}
                                    style={styles.cardImage}
                                />
                                <View>
                                    <Text style={styles.cardTitle}>Leonidas Esteban</Text>
                                    <Text style={{fontSize: 10}}>2 min ago</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 12}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
                            </Text>
                            <View style={styles.cardButtonsContainer}>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='heart' color='#FF256C' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='comment' color='grey' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.masonrySubContainer}>
                        <View style={styles.reviewCard}>
                            <View style={styles.cardHeader}>
                                <Image
                                    source={require('../assets/image-1.jpg')}
                                    style={styles.cardImage}
                                />
                                <View>
                                    <Text style={styles.cardTitle}>Leonidas Esteban</Text>
                                    <Text style={{fontSize: 10}}>2 min ago</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 12}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
                            </Text>
                            <View style={styles.cardButtonsContainer}>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='heart' color='#FF256C' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='comment' color='grey' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.reviewCard}>
                            <View style={styles.cardHeader}>
                                <Image
                                    source={require('../assets/image-1.jpg')}
                                    style={styles.cardImage}
                                />
                                <View>
                                    <Text style={styles.cardTitle}>Leonidas Esteban</Text>
                                    <Text style={{fontSize: 10}}>2 min ago</Text>
                                </View>
                            </View>
                            <Text style={{fontSize: 12}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  
                            </Text>
                            <View style={styles.cardButtonsContainer}>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='heart' color='#FF256C' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                                <View style={styles.cardButtonContainer}>
                                    <FontAwesome name='comment' color='grey' size={20}/>
                                    <Text style={{marginLeft: 5}}>18</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomBar}>
                <View style={styles.btnContainer}>
                    <View style={styles.barIcon}>
                        <FontAwesome name='search' color='lightgrey' size={20}/>
                    </View>
                    <View style={styles.barIcon}>
                        <FontAwesome name='bell-o' color='lightgrey' size={20}/>
                    </View>
                </View>
                <Svg height='50' width='60'>
                    <Defs>
                        <ClipPath id='curve'>
                            <Path d='M0,0 C0,40 60,40 60,0'/>
                            <Rect
                                width='100'
                                height='100'
                                fill='none'
                            />
                        </ClipPath>
                    </Defs>
                    <G clipPath='url(#curve)'>
                        <Rect
                            width='60'
                            height='50'
                            fill='white'
                        />
                    </G>
                </Svg>
                <View style={styles.btnContainer}>
                    <View style={styles.barIcon}>
                        <FontAwesome name='heart-o' color='lightgrey' size={20}/>
                    </View>
                    <View style={styles.barIcon}>
                        <FontAwesome name='user-o' color='lightgrey' size={20}/>
                    </View>
                </View>
                <View style={styles.addIcon}>
                    <FontAwesome name='plus' color='white' size={25} style={styles.socialIcon}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
    backgroundImage: {
        height: Dimensions.get('window').height * .40
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    navbarText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    travelTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 35,
        marginTop: 40
    },
    travelTitleTextContainer: {
        
    },
    travelType: {
        color: 'white',
        fontSize: 15,
    },
    travelName: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        borderRadius: 20
    },
    likeBtn: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    likeBtnIcon: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    travelBadge: {
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 30,
        borderRadius: 10,
        width: Dimensions.get('window').width * .90,
        alignSelf: 'center',
        marginTop: 30
    },
    travelBadgeSocialContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    socialIconContainer: {
        backgroundColor: '#FF256C',
        borderRadius: 15,
        width: 25,
        height: 25,
        justifyContent: 'center',
        marginRight: 10
    },
    socialIcon: {
        alignSelf: 'center',
    },
    travelInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    travelInfoText: {
        fontSize: 12
    },
    travelInfoTextBold: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    locationIcon: {
        backgroundColor: '#FF256C',
        position: 'absolute',
        bottom: -25,
        left: '48%',
        borderRadius: 25,
        width: 45,
        height: 45,
        justifyContent: 'center',
    },
    travelImage: {
        width: 100,
        height: 120,
        marginRight: 15
    },
    imagesContainer: {
        marginTop: 10,
        marginLeft: 10,
    },
    masonryContainer: {
        flexDirection: 'row',
    },
    reviewCard: {
        marginRight: 15,
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: Dimensions.get('window').width * .45
    },
    cardButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5
    },
    cardImage: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginRight: 10
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 12
    },
    cardButtonContainer: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    bottomBar: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0
    },
    btnContainer: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width/2 - 30
    },
    barIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addIcon: {
        position: 'absolute',
        top: -25,
        backgroundColor: '#FF256C',
        borderRadius: 25,
        width: 45,
        height: 45,
        justifyContent: 'center',
        left: '44%'
    }
})

export default TravelsScreen

import React, { useState, useRef } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Button, Text, View, SafeAreaView, Image, Animated, Dimensions, ImageBackground } from 'react-native';
import { ScrollView, Directions } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

const { width: larguraTela, heigth: alturaTela } = Dimensions.get('window')

export default function Produtos({ route }) {

    const [lista, setLista] = useState([
        {
            title: "Controle Xbox",
            text: "O Controle do Xbox one",
            valor: 474.05,
            img: 'https://meuxbox.com.br/wp-content/uploads/2020/04/Xbox-Duke.jpg'

        },
        {
            title: "Controle Xbox 360",
            text: "O Controle do PS4",
            valor: 474.05,
            img: 'https://images-submarino.b2w.io/produtos/01/00/img/9816/9/9816962_1GG.jpg'

        },

        {
            title: "Controle Xbox One",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://http2.mlstatic.com/D_NQ_NP_726114-MLA41533948107_042020-O.jpg'

        },

        {
            title: "Controle Xbox Series X",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://cdn.awsli.com.br/1000x1000/1571/1571091/produto/59052942/f3c7733d87.jpg'

        },

        {
            title: "Controle PS1",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://cf.shopee.com.br/file/f378fb7e72898c0c2206471815bc5c90'

        },

        {
            title: "Controle PS2",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://static3.tcdn.com.br/img/img_prod/27440/controle_com_fio_dual_shock_para_playstation_2_ps2_sony_9421_1_20181024120211.jpg'

        },

        {
            title: "Controle PS3",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'http://s.glbimg.com/po/tt2/f/original/2014/01/27/dual-shock-3-ds3.jpg'

        },

        {
            title: "Controle PS4",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://i.zst.com.br/thumbs/12/17/38/22822649.jpg'

        },

        {
            title: "Controle PS5",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://a-static.mlcdn.com.br/618x463/controle-dualsense-playstation-5-ps5/magazineluiza/043186600/732a93ba1526677bdc6f23bec6bf759d.jpg'

        },

        {
            title: "Controle Super Nintendo",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://http2.mlstatic.com/D_NQ_NP_961578-MLA43332238534_092020-O.jpg'

        },

        {
            title: "Controle Nintendo 64",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://cdn.awsli.com.br/1000x1000/138/138431/produto/8922602/5bccab2d76.jpg'

        },

        {
            title: "Controle Nintendo Wii",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://cdn.awsli.com.br/600x450/138/138431/produto/8516261/controle-nintendo-wii-remote-branco-wii-b0fcda8f.jpg'

        },

        {
            title: "Controle Nintendo Wii U",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://www.usadobrasil.com.br/sh-img/controle-nintendo-wii-u-pro-controller-preto-original-D_NQ_NP_418225-MLB25401857808_022017-F_controle%2Bnintendo%2Bwii%2Bu%2Bpro%2Bcontroller.jpg'

        },

        {
            title: "Controle Nintendo Switch",
            text: "O Controle do Super Nintendo",
            valor: 474.05,
            img: 'https://a-static.mlcdn.com.br/618x463/controle-para-nintendo-switch-sem-fio-joy-con-vermelho-e-azul/magazineluiza/043187200/222e78e73256c79b97c3c6ad59256554.jpg'

        },

    ]);

    const [background, setBackground] = useState(lista[0].img);
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const _renderItem = ({item, index}) => {
        return(
            <View>

            <TouchableOpacity>
                <Image
                source={{uri: item.img}}
                style={styles.caroulselImg}
                />
                <Text style={styles.carouselText}>{item.title}</Text>
                <Icon
                name="play-sircle-outline"
                size={30} color="#fff"
                style={styles.carouselIcon}
                />

            </TouchableOpacity>

            </View>
        )
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={{ uri: background }} style={styles.imgBg} blurRadius={5} >
                <View style={styles.viewSearch}>
                    <TextInput
                        style={styles.input}
                        placeholder="Faça sua busca"
                    />
                    <TouchableOpacity style={styles.icon}>
                        <Icon name="search" color="#000" size={25} />
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor: '#000'}}>
                <Text style={{color: '#fff', fontSize:20, fontWeight: 'bold',marginLeft: 10, marginVertical:10,}}>
                    Controles Video Games
                    
                </Text>
                </View>

                <View style = {styles.slideView}>
                    <Carousel
                    style= {styles.carousel}
                    ref={carouselRef}
                    data={lista}
                    renderItem={_renderItem}
                    sliderWidth={larguraTela}
                    itemWidth={200}
                    inactiveSlideOpacity={0.5}
                    onSnapToItem={(index)=>{
                        setBackground(lista[index].img);
                        setActiveIndex(index);
                    }}
                    
                    />


                    
                    
                </View>
                <ScrollView>
                    <View style={styles.moreInfo}>
                        <View style={{marginTop:10}}>
                            <View style={styles.headerTitleInfo}>
                            <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
                        <Text style={styles.priceTitle}>R$ {lista[activeIndex].valor}</Text>
                            </View>
                        
                        <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
                        </View>
                        <TouchableOpacity
                        style={{marginRight:15, marginTop:10}}
                        onPress={()=> alert('Clicou')}
                        >
                            <Icon
                            name="queue"
                            color="#131313"
                            size={30}
                            />

                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </ImageBackground>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBg: {
        flex: 1,
        width: null,
        height: null,
        opacity: 1,
        justifyContent: "flex-start",
        backgroundColor: '#000'
    },

    viewSearch: {
        marginTop: 40,
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 5,
        marginVertical: 10,
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    input: {
        width: '90%',
        padding: 13,
        paddingLeft: 20,
        fontSize: 17,
    },

    icon: {
        position: 'absolute',
        right: 20,
        top: 15
    },
    slideView:{
        width:'100%',
        height:350,
        justifyContent: 'center',
        alignItems:'center'
    },
    carousel:{
        flex:1,
        overflow: 'visible'
    },
    caroulselImg:{
        alignSelf: 'center',
        width:195,
        height:320,
        borderRadius:12,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    carouselText:{
        padding:15,
        color: '#fff',
        position: 'absolute',
        bottom: 10,
        left:2,
        fontWeight: 'bold'
    },
    carouselIcon:{
        position: 'absolute',
        top:15,
        right:15
    },
    moreInfo:{
        backgroundColor: '#fff',
        width:larguraTela,
        height: alturaTela,
        borderTopRightRadius: 20,
        borderTopLeftRadius:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    movieTitle:{
        paddingLeft:15,
        fontSize:22,
        fontWeight:'bold',
        color:'#131313',
        marginBottom: 5
    },
    movieDesc:{
        paddingLeft:15,
        color:'#131313',
        fontSize:14,
        fontWeight: 'bold'
    },
    priceTitle:{
        paddingLeft:15,
        fontSize:22,
        fontWeight:'bold',
        color:'#087805',
        marginBottom: 5
    },
    headerTitleInfo:{
        flexDirection: 'row',
    }


});



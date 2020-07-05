/*global kakao*/
import React, { Component } from "react";
import HeaderCard from 'components/Cards/HeaderCard/index';

class KakaoMap extends Component {

    constructor(props) {
        console.log("============= KakaoMap constructor start ==============");
        
        super(props);

        this.state = {
            map : null,
            geocoder : null,
            markers : [],
            infowindows : [],
            searchKeyword : ''
        }

        console.log("============= KakaoMap constructor end ==============");
}

    componentWillMount =  () => {
        console.log("============= KakaoMap componentWillMount start ==============");

        const script = document.createElement("script");
        script.async = true;
        script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=5251eb7547ad18ddd3e32bb2ab4a235d&autoload=false&libraries=services,clusterer,drawing";
        document.head.appendChild(script);
        
        script.onload = () => {
            console.log("============= script onload start ==============");
            
            kakao.maps.load(() => {
                console.log("============= kakao maps load start =============="); 

                let container = document.getElementById("map");
                let options = {
                    center: new kakao.maps.LatLng(37.575565, 126.976757),
                    level: 3
                };
                
                // 지도를 생성하고 state에 저장
                this.setState({ map: new kakao.maps.Map(container, options) })

                console.log("============= kakao maps load end ==============");
            })//end of kakao maps onload

            console.log("============= script onload end ==============");
        }//end of script onload

        console.log("============= KakaoMap componentWillMount end ==============");
    }

    render() {
        console.log("===============================================");
        console.log("=             KakaoMap rendering              =");
        console.log("===============================================");

        return (
            <div style={{ width:'100%', height:'100%', position:'relative', overflow:'hidden' }}>
                <div className="App" id="map" style={{ width:'100%', height:'100%', position:'relative' }}></div>             
            </div>
        );
    }
}
  
export default KakaoMap;
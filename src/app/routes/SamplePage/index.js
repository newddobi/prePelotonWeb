import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import KakaoMap from 'components/KakaoMap/index';
import HeaderCard from 'components/Cards/HeaderCard/index';

class SamplePage extends React.Component {

  render() {
    return (
        <div style={{ width:'100%', height:'100%'}}>
          <KakaoMap/>
          <div id="menu_wrap" style={{ position:'absolute',top:'10px', left:'10px', bottom:'0', width:'350px', overflowY:'auto', zIndex:'1' }}>
            <HeaderCard/>
          </div>
        </div>
    );
  }
}

export default SamplePage;
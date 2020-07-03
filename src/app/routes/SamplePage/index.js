import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import KakaoMap from 'components/KakaoMap/index';
import HeaderFooterCards from 'components/Cards/HeaderFooterCards/index';

class SamplePage extends React.Component {

  render() {
    return (
        <div style={{ width:'100%', height:'100%'}}>
          <KakaoMap>
            <div className="col-lg-4 col-sm-6 col-12">
              <HeaderFooterCards cardHeader="Header Title"/>
            </div>
          </KakaoMap>
        </div>
    );
  }
}

export default SamplePage;
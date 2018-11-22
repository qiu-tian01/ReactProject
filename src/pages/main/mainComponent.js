import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import uuid from 'uuid'
import * as MainStyled from './styledComponent'

//引入模块
import HomeContainer from './home/homeContainer'


//引入图片
import LocationIcon from '@As/images/location.png'
import LocationIconActive from '@As/images/location-active.png'
import MenuIcon from '@As/images/menu.png'
import MenuIconActive from '@As/images/menu-active.png'
import MoreIcon from '@As/images/more.png'
import MoreIconActive from '@As/images/more-active.png'

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      tabs: [
          { id: uuid(), title: '主页', selected: 'home', component: <HomeContainer />, icons: { default: MenuIcon, active: MenuIconActive } },
          { id: uuid(), title: '地图', selected: 'location', component: '456', icons: { default: LocationIcon, active: LocationIconActive } },
          { id: uuid(), title: '我的', selected: 'mine', component: '456', icons: { default: MoreIcon, active: MoreIconActive } },
      ]
    };
  }

  renderTabItems () {
      let { tabs } = this.state
      return tabs.map(tab => (
            <TabBar.Item
                title={tab.title} key={tab.id}
                icon={ <MainStyled.MainTabIcon url = {tab.icons.default} /> }
                selectedIcon={<MainStyled.MainTabIcon url = {tab.icons.active} />}
                selected={this.state.selectedTab === tab.selected}
                onPress={() => {
                    this.setState({ selectedTab: tab.selected });
                }}
            >
                { tab.component }
          </TabBar.Item>
      ))
  }

  render() {
    return (
      <MainStyled.MainWrapper>
        <TabBar
          unselectedTintColor="#666"
          tintColor="#000"
          barTintColor="#fff"
        >
          {this.renderTabItems()}
          
        </TabBar>
      </MainStyled.MainWrapper>
    );
  }
}

export default MainContainer
import React, { useState } from 'react';
import { Card } from 'antd';

function InterfaceCards(props){
  const { titlecard = "", tab1="", tab2="",tab3="", content1="",content2="",content3="", link=""} = props;
    const tabList = [
        {
          key: 'tab1',
          tab: <span>{tab1}</span>,
        },
        {
            key: 'tab2',
            tab: <span>{tab2}</span>,
          },
          {
            key: 'tab3',
            tab: <span>{tab3}</span>,
          },
    ];
    const contentList = {
        tab1: <p>{content1}</p>,
        tab2: <p>{content2}</p>,
        tab3: <p>{content3}</p>,
      };

    const [activeTabKey1, setActiveTabKey1] = useState('tab1');
    
    const onTab1Change = key => {
        setActiveTabKey1(key);
      };
    
      
return(
     <Card
        style={{ width: '100%' }}
        title={titlecard}
        extra={<a href={link} className="text-black font-bold hover:text-primary hover:font-bold">Más</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
     </Card>
);

}
export {InterfaceCards};
import React from "react";
import data from './data';
import {Card} from 'antd';

function Home() {
  return <div className='contentWrapper' style={{flexDirection: "column"}}>
    {data.map((item) => {
      return (
        <Card
          key={item.title}
          title={item.title}
          loading={false}
          type="inner"
          style={{width: "100%", border: "none"}}
        >
          <div dangerouslySetInnerHTML={{__html: item.content}}/>
        </Card>
      );
    })}
  </div>;
}

export default Home;
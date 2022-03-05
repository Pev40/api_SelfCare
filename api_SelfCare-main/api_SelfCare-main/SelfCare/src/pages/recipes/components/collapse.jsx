import { Collapse } from 'antd';


function CollapseRecetas (props){
    const { Panel } = Collapse;
    const { title = "", description = ""} = props; 
    return(
        <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header={title} key="1">{description} 
            </Panel>
        </Collapse>

);
}
 export{CollapseRecetas};
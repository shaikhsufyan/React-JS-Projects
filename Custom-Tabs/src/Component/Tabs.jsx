import React, { useEffect, useState } from "react";

const Tabs = (props) =>{
    const [tab,setTab] = useState([]);
    const [contentData,setContentData] = useState({});
    const [active,setAcive] = useState("Home")
    const {children} = props;
    console.log(children);

    useEffect(()=>{
        const tabs = [];
        const content = {}
        React.Children.forEach(children,(element)=>{
            console.log(element);
            tabs.push(element.props.title)
            let key = element.props.title
            content[key] = element.props.children
        })
         setContentData(content)
        setTab(tabs)
         
    },[props,children])
    
    const changeTab = (item) =>{
        setAcive(item)
        
    }
    
    return(
        <div>
            <div className="btns">
                {tab.map((curItem,i)=>{
                    return(
                        <button className={curItem === active ? "select":""} onClick={()=>changeTab(curItem)} key={i}>{curItem}</button>
                    )
                })}
            </div>
            {Object.keys(contentData).map((curItem,i)=>{
                if(active === curItem){
                 return(
                    <h1 className="content">{contentData[curItem]}</h1>
                )
                }
                
            })}
        </div>
    )
}
export default Tabs
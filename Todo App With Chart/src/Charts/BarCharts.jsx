 import React from 'react'
 import { Bar,BarChart,CartesianGrid,XAxis,YAxis,Tooltip,ResponsiveContainer } from 'recharts'
 const BarCharts = () => {
    const data = [
        {name:"Jan",value:400},
        {name:"Fab",value:700},
        {name:"March",value:300},
        {name:"April",value:900},
        {name:"May",value:200},

    ]
   return (
     <div style={{width:"100%",height:400}}>
        <ResponsiveContainer>
            <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="value" fill='#00cc40'/>
            </BarChart>
        </ResponsiveContainer>
     </div>
   )
 }
 
 export default BarCharts
 import React from 'react';
 import { Pie,PieChart,Cell,Tooltip,ResponsiveContainer } from 'recharts';
 
 const PieCharts = () => {
  const data = [
    {name:"completed",value:4},
    {name:"Pending",value:1},

  ]
  const colors = ["#00cc40","white"]
   return (
     <div style={{width:"100%",height:300}}>
      <ResponsiveContainer>
        <PieChart>
          <Pie 
          data={data}
          cx="50%"
          cy="50%"
          dataKey="value"
          outerRadius="80%"
          startAngle={90}
          endAngle={-270}
          >
          <Tooltip/>
          {data.map((curitem,i)=>{
            return <Cell fill={colors[i]}/>
          })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
     </div>
   )
 }
 
 export default PieCharts
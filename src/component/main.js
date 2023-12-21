import React from 'react'
import Props from '../component/color.js'


export default function colorCode(){
    const colorarr =[
        {
            colorCode:"#FF6663",
            colorName:"Pink"
        },
        {
            colorCode:"#333333",
            colorName:"Gray"
        },
        {
            colorCode:"#000000",
            colorName:"Black"
        },
        {
            colorCode:"#38BB14",
            colorName:"Green"
        },
        {
            colorCode:"#C90B0B",
            colorName:"Red"
        },
        {
            colorCode:"#FF8000",
            colorName:"Orange"
        },
        {
            colorCode:"#FFF500",
            colorName:"Yellow"
        },
        {
            colorCode:"#CCCCCC",
            colorName:"Light Gray"
        },
        {
            colorCode:"#7E41A2",
            colorName:"Purple"
        },
        {
            colorCode:"#C14911",
            colorName:"Brown"
        },
    ]

    return(
        <div style={{
            width:"80%",
            margin:"50px auto",
            display:"flex",
            justifyContent:"space-evenly",
            flexWrap:"wrap",
            gap:"15px"
            
        }}>
            {
                colorarr.map(data=>(
                    <Props  colorCode={data.colorCode} colorName={data.colorName}/>
                ))
            }
        </div>
    );
}
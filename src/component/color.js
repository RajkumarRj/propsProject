import React from 'react';


const Header = (props)=>{
    return (
        <>  
        <div class="card" style={{
            width:"200px",
            border:'none',
            boxShadow:'0px 0px 10px rgba(0,0,0,0.5)'
        }}>
                <div class="color" 
                style={{
                    height:"200px",
                    background: props.colorCode,
                }}>
                </div>
                <p style={{
                    textAlign:"left",
                    fontWeight:'700',
                    fontSize:'20px'

                }}>{props.colorCode}</p>
                <span 
                style={{
                    display:'block',
                    textAlign:'left',
                    fontWeight:'600',
                    fontSize:'12px',
                    marginTop:'-10px',
                    paddingBottom:'5px',
                    color:props.colorCode,
                    
                }}>{props.colorName}</span>
        </div>
            
        </>
    );
}

export default Header;
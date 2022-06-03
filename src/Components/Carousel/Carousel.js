import React from "react";
import { Carousel } from "react-bootstrap";




function BootstrapCarousel({ arrayString }) {
    return (
        <Carousel controls= {false} style={{ height: 150, margin:24}}>
                { arrayString && arrayString.map((text) => ( 

                    
<Carousel.Item>
    <h1>{ text }</h1>   
</Carousel.Item>
  
  ))}
                          
</Carousel>
        
    )} 

export { BootstrapCarousel };
import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  Footer extends React.Component{
    render(){
      return(

        <React.Fragment>
                   <div className="foot">

<Container> 
   <Row >
       <Col md={4}>
       <h5>
       <img className="logo" alt="" src="./asset/img/logo.png"/>
       </h5>
       <br/>
       <br/>
       <p></p>
       <br/>
       <br/>
    
      
    
   

       </Col>
        <br/>
        <br/>
        <br/>
       <Col md={4}>
       <h5 className="colored">
     <b>HELPFUL LINKS</b>
       </h5>
       <br/>
     
    <div >
        <br/>
   
      <a href="/about"> <h5 style={{color:"white"}} >ABOUT</h5></a>
       <br/>
 
    <a href="/contact">  <h5 style={{color:"white"}}  >CONTACT</h5></a>
       
       </div>
       
       </Col>
       <br/>
       <br/>
       <br/>
       <Col md={4}>
       <h5 style={{color:"#00AFEF"}}>
        <b> CONTACT US </b> 
        </h5>
        <br/>
       <br/>
       <span><i style={{fontSize:"1.5rem", color:"#00AFEF"}} className="fa fa-phone"> </i>+2349052085121
    </span>
    <br/>
    <br/>
    <span><i style={{fontSize:"1.5rem", color:"#00AFEF"}} className="fa fa-envelope"> </i>contact@igeeksng.com
    </span>
       
       </Col>
   </Row>
</Container> 

{/* <span className="round-icon">
       <i style={{fontSize:"1.5rem"}} className="fa fa-facebook-f"></i>
       </span>
       <span className="round-icon">
       <i style={{fontSize:"1rem"}} className="fa fa-twitter"></i>
       </span>
       <span className="round-icon">
       <i style={{fontSize:"1rem"}} className="fa fa-instagram"></i>
       </span> */}
</div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default Footer;


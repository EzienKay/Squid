import { Col, Form, Tab, Tabs } from "react-bootstrap"
import { NavLink } from "react-router-dom"


const Filter = () => {
  return (
    <>  
                <Col className="home-col2">
                    <Tabs variant="pills" defaultActiveKey="buy">
                        <Tab eventKey="buy" title="buy" className="buy-tab">

                            <Form action="" className="home-form" >
                                <Form.Label>Buy</Form.Label>
                                <Form.Select size="lg">
                                    <option>Dollar</option>
                                    <option>Euro</option>
                                    <option>Pounds</option>
                                </Form.Select>
                                <br />
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select size="lg">
                                    <option>Payment Method</option>
                                </Form.Select> 
                                <br />
                                <Form.Label>Choose Country</Form.Label>
                                <Form.Select size="lg">
                                    <option>Nigeria</option>
                                </Form.Select> 
                                {/* <Button className="form-btn" variant="primary">find offer</Button> */}
                                <NavLink to="buysell" className="form-btn" >Find Offer</NavLink>
                            </Form> 

                        </Tab> 
                        <Tab eventKey="sell" title="sell">                            
                            <Form action="" className="home-form" >
                                <Form.Label>Sell</Form.Label>
                                <Form.Select size="lg">
                                    <option>Dollar</option>
                                    <option>Euro</option>
                                    <option>Pounds</option>
                                </Form.Select>
                                <br />
                                <Form.Label>Payment Method</Form.Label>
                                <Form.Select size="lg">
                                    <option>Payment Method</option>
                                </Form.Select> 
                                <br />
                                <Form.Label>Choose Country</Form.Label>
                                <Form.Select size="lg">
                                    <option>Nigeria</option>
                                </Form.Select>                                 
                                   {/* <Button className="form-btn" variant="primary" >does it apply</Button>  */}
                                   <NavLink to="buysell" className="form-btn" >Find Offer</NavLink>                                                               
                            </Form>                   
                        </Tab>                                              
                    </Tabs> 
                </Col>            
    </> 
    
  )
}

export default Filter


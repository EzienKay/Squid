import { Accordion } from "react-bootstrap"
import "./FAQ.css"

const FAQ = () => {
  return (
    <section className="FAQ">
        <div className="caption" >                        
            <h2 className="testimonial-h">FAQ</h2>
            <span className="devider"></span>
            <p className="testimonial-p" >We understand that having access to the right information is crucial, so we've compiled a list of questions that our customers, users, or visitors frequently ask. If you have a question that's not covered here or need further assistance, please don't hesitate to contact our support team. Your satisfaction is our priority.</p>
        </div> 
        <Accordion className="adion" defaultActiveKey="0">
            <Accordion.Item className="items" eventKey="0">
                <Accordion.Header>How do I create an account with Squid?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="items" eventKey="1">
                <Accordion.Header>Is my data safe with Squid?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="items" eventKey="2">
                <Accordion.Header>How do I report a technical issue or bug?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </section>
  )
}

export default FAQ
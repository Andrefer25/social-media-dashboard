import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ReactComponent as Up } from "./../../../../assets/img/icon-up.svg";
import { ReactComponent as Down } from "./../../../../assets/img/icon-down.svg";
import { ReactComponent as Facebook } from "./../../../../assets/img/icon-facebook.svg";
import { BsFillCaretUpFill } from "react-icons/bs";



const Modalshow = () => {
    return (
        <Modal
            show={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                
            <div className="container">
                <h4 className="dashboardTitle" >Facebook Followers</h4>

                <div className="flex ">
                    <Facebook className="socialMedia" />
                    <p className="accountName">@nathanf</p>
                </div>

                <div className=" flex prueba">
                    <div className="flex metricsNumbers">
                        <h3>1987</h3>
                        <p className="modalInfoText" >Total Followers</p>
                    </div>

                    <div className="flex centerFlex modalComparison">
                        <BsFillCaretUpFill size={15} />
                        <h3>81</h3>
                        <p className="modalInfoText">New followers in the past 10 days</p>
                    </div>

                    <div className="flex centerFlex modalComparison">
                        <BsFillCaretUpFill size={15} />
                        <h3>12</h3>
                        <p className="modalInfoText">New followers today</p>
                    </div>
                </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button >Close</Button>
            </Modal.Footer>
        </Modal>


    );
};


export default Modalshow;
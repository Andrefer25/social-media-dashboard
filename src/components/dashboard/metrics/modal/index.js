import React from "react";
import Modal from 'react-bootstrap/Modal';
import { ReactComponent as Facebook } from "./../../../../assets/img/icon-facebook.svg";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
    {
        name: '',
        Followers: 6,
        amt: 4,
    },
    {
        name: '4',
        Followers: 5,
        amt: 5,
    },
    {
        name: '5',
        Followers: 5,
        amt: 2,
    },
    {
        name: '6',
        Followers: 8,
        amt: 5,
    },
    {
        name: '7',
        Followers: 5,
        amt: 8,
    },
    {
        name: '8',
        Followers: 8,
        amt: 12,
    },
    {
        name: '9',
        Followers: 9,
        amt: 10,
    },
    {
        name: '10',
        Followers: 10,
        amt: 10,
    },
    {
        name: '11',
        Followers: 11,
        amt: 9,
    },
    {
        name: '12',
        Followers: 12,
        amt: 8,
    },
    {
        name: '12',
        Followers: 12,
        amt: 10,
    },
];



const Modalshow = () => {
    return (
        <Modal
            show={true}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className="container">
                    <h4 className="modalType">Facebook Followers</h4>
                    <div className="flex modalTitle">
                        <Facebook className="socialMedia" />
                        <p className="accountName modalAccountName">@nathanf</p>
                    </div>
                    <Row className="modalRow">
                        <Col md={3} className=" flex modalComparison modalFollowers">
                            <h3>1987</h3>
                            <p className="modalInfoText">Total Followers</p>
                        </Col>
                        <Col md={3} className="flex modalComparison">
                            <BsFillCaretUpFill color="hsl(162, 46%, 71%)" size={35} />
                            <h4>81</h4>
                            <p className="modalInfoText">New followers in the past 10 days</p>
                        </Col>
                        <Col md={3} className= "flex modalComparison">
                            <BsFillCaretUpFill color="hsl(162, 46%, 71%)" size={20} />
                            <h4>12</h4>
                            <p className="modalInfoText">New followers today</p>
                        </Col>
                    </Row>
                </div>

            </Modal.Header>
            <Modal.Body>
            <div className="container">
                <h3>May 4 - 13 </h3>
                <LineChart width={1000} height={300} data={data} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#757575" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="Followers" stroke="hsl(243, 51%, 70%)" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
                </div>

            </Modal.Body>
           
        </Modal>


    );
};


export default Modalshow;
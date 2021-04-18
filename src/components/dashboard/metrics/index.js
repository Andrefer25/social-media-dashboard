import React from "react";
import { Row, Col } from "react-bootstrap";
import { ReactComponent as Youtube } from "./../../../assets/img/icon-youtube.svg";
import { ReactComponent as Facebook } from "./../../../assets/img/icon-facebook.svg";
import { ReactComponent as Twitter } from "./../../../assets/img/icon-twitter.svg";
import { ReactComponent as Instagram } from "./../../../assets/img/icon-instagram.svg";
import { ReactComponent as Up } from "./../../../assets/img/icon-up.svg";
import { ReactComponent as Down } from "./../../../assets/img/icon-down.svg";

const Metrics = () => {
    return (
        <div className="metrics">
            <div className="container">
                <Row>
                    <Col md={3}>
                        <div className="metricsBox facebook">
                            <div className="flex centerFlex">
                                <Facebook className="socialMedia" />
                                <p className="accountName">@nathanf</p>
                            </div>
                            <div className="metricsNumbers">
                                <h3>1987</h3>
                                <h6>FOLLOWERS</h6>
                            </div>
                            <div className="flex centerFlex comparison">
                                <Up className="comparisonIcon" />
                                <p className="comparisonDiffUp">12 Today</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="metricsBox twitter">
                            <div className="flex centerFlex">
                                <Twitter className="socialMedia" />
                                <p className="accountName">@nathannf</p>
                            </div>
                            <div className="metricsNumbers">
                                <h3>1044</h3>
                                <h6>FOLLOWERS</h6>
                            </div>
                            <div className="flex centerFlex comparison">
                                <Up className="comparisonIcon"/>
                                <p className="comparisonDiffUp">99 Today</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="metricsBox instagram">
                            <div className="flex centerFlex">
                                <Instagram className="socialMedia" />
                                <p className="accountName">@nathannf</p>
                            </div>
                            <div className="metricsNumbers">
                                <h3>11k</h3>
                                <h6>FOLLOWERS</h6>
                            </div>
                            <div className="flex centerFlex comparison">
                                <Up className="comparisonIcon"/>
                                <p className="comparisonDiffUp">1099 Today</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="metricsBox youtube">
                            <div className="flex centerFlex">
                                <Youtube className="socialMedia" />
                                <p className="accountName">@nathannf</p>
                            </div>
                            <div className="metricsNumbers">
                                <h3>8239</h3>
                                <h6>SUBSCRIBERS</h6>
                            </div>
                            <div className="flex centerFlex comparison">
                                <Down className="comparisonIcon"/>
                                <p className="comparisonDiffDown">144 Today</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Metrics;

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ReactComponent as Youtube } from "./../../../assets/img/icon-youtube.svg";
import { ReactComponent as Facebook } from "./../../../assets/img/icon-facebook.svg";
import { ReactComponent as Twitter } from "./../../../assets/img/icon-twitter.svg";
import { ReactComponent as Instagram } from "./../../../assets/img/icon-instagram.svg";
import { ReactComponent as Up } from "./../../../assets/img/icon-up.svg";
import { ReactComponent as Down } from "./../../../assets/img/icon-down.svg";

const Overview = () => {
    return (
        <div className="overview">
            <div className="container">
                <h3 className="overviewTitle">Overview - Today</h3>
                <Row>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Page Views</h4>
                                <Facebook className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>87</h2>
                                <div className="flex overviewPercent">
                                    <Up className="comparisonIcon" />
                                    <p className="comparisonDiffUp">3%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Likes</h4>
                                <Facebook className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>52</h2>
                                <div className="flex overviewPercent">
                                    <Down className="comparisonIcon"/>
                                    <p className="comparisonDiffDown">2%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Likes</h4>
                                <Instagram className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>5462</h2>
                                <div className="flex overviewPercent">
                                    <Up className="comparisonIcon" />
                                    <p className="comparisonDiffUp">2257%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Profile Views</h4>
                                <Instagram className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>52k</h2>
                                <div className="flex overviewPercent">
                                    <Up className="comparisonIcon" />
                                    <p className="comparisonDiffUp">1375%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Retweets</h4>
                                <Twitter className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>117</h2>
                                <div className="flex overviewPercent">
                                    <Up className="comparisonIcon" />
                                    <p className="comparisonDiffUp">303%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Likes</h4>
                                <Twitter className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>507</h2>
                                <div className="flex overviewPercent">
                                    <Up className="comparisonIcon" />
                                    <p className="comparisonDiffUp">553%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Likes</h4>
                                <Youtube className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>107</h2>
                                <div className="flex overviewPercent">
                                    <Down className="comparisonIcon"/>
                                    <p className="comparisonDiffDown">19%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="overviewBox">
                            <div className="flex overviewSection">
                                <h4>Total Views</h4>
                                <Youtube className="overviewIcon"/>
                            </div>
                            <div className="flex overviewNumbers">
                                <h2>1407</h2>
                                <div className="flex overviewPercent">
                                    <Down className="comparisonIcon"/>
                                    <p className="comparisonDiffDown">12%</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Overview;
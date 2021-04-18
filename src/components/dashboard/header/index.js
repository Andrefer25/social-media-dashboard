import React, { useState } from 'react';
import Switch from 'react-input-switch';

const Header = () => {
    const [value, setValue] = useState(0);
    return(
        <div className="dashboardHeader">
            <div className="container flex">
                <div>
                    <h3 className="dashboardTitle">Social Media Dashboard</h3>
                    <h6 className="dashboardSubtitle">Total Followers: 23,004</h6>
                </div>
                <div className="flex rightSection">
                    <div>
                        <p>Dark Mode</p>
                    </div>
                    <div>
                        <Switch 
                            value={value} 
                            onChange={setValue} 
                            styles={{
                                track: {
                                background: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
                                },
                                trackChecked: {
                                background: 'linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
                                },
                                button: {
                                    backgroundColor: 'hsl(232, 19%, 15%)'
                                },
                                buttonChecked: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
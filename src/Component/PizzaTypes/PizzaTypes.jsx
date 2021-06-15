import image5 from '../../Images/quin.jpg';
import image6 from '../../Images/vitalii.jpg';
import image7 from '../../Images/kart.jpg';
import image8 from '../../Images/alan.jpg';
import React from 'react';
import './PizzaTypes.css'

const PizzaTypes = (props) => {
    return (
        <div className="container pizza-types responsive">
            <div className="row">
                <h3 className="text-center">{props.title}</h3>

                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image5} alt="Peperoni" height="10vh" />
                        <div className="caption">
                            <h3>Peperoni Pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					     </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image6} alt="vegeteable pizza" />
                        <div className="caption">
                            <h3>Vegetable Pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					     </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image7} alt="Meat pizza" />
                        <div className="caption">
                            <h3>Meat Pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt.
					     </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={image8} alt="Cheese pizza" />
                        <div className="caption">
                            <h3>Cheese Pizza</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					     </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaTypes;

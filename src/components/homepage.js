import React, { useEffect, useState } from 'react';
import '../styles/master.scss';
import '../styles/calculator.scss';
import {Uploader} from './uploader.js';

const Homepage = (props) => {
    const classnames = "main-inner homepage";
    // const [GK, setGK] = useState(0);
    // const [SW, setSW] = useState(0);
    const [RWB, setRWB] = useState(0);
    const [RB, setRB] = useState(0);
    const [RCB, setRCB] = useState(0);
    const [RDM, setRDM] = useState(0);
    const [RM, setRM] = useState(0);
    const [RCM, setRCM] = useState(0);
    const [RAM, setRAM] = useState(0);
    const [RF, setRF] = useState(0);
    const [RW, setRW] = useState(0);
    const [RS, setRS] = useState(0);
    
    function v(e) {
        return document.querySelector('input[name="' + e + '"]').value
    }
    function potential(p, o) {
        var t = v('pt');
        var i = document.querySelector('select[name="ir"]').value;
        var f = (p === 20 || p === 21 || p === 22 || p === 23 || p === 27) ? 0 : (i > 2 ? 3 : 2);
        return f > (t - o) ? t - o : f;
    }
    // let goalkeeper = () => {
    //     var a = v('reactions') * 0.11 + v('gkDiving') * 0.21 + v('gkHandling') * 0.21 + v('gkKicking') * 0.05 + v('gkPositioning') * 0.21 + v('gkReflexes') * 0.21;
    //     a = Math.round(a);
    //     var i = potential(0, a);
    //     setGK(a + +i);
    // }
    // let sweeper = () => {
    //     var a = v('jumping') * 0.04 + v('strength') * 0.10 + v('reactions') * 0.05 + v('aggression') * 0.08 + v('interceptions') * 0.08 + v('ballcontrol') * 0.05 + v('heading') * 0.10 + v('shortpassing') * 0.05 + v('marking') * 0.15 + v('standingtackle') * 0.15 + v('slidingtackle') * 0.15;
    //     a = Math.round(a);
    //     var i = potential(0, a);
    //     setSW(a + +i);
    // }
    let wingback = () => {
        var a = v('acceleration') * 0.04 + v('sprintspeed') * 0.06 + v('stamina') * 0.10 + v('reactions') * 0.08 + v('interceptions') * 0.12 + v('ballcontrol') * 0.08 + v('crossing') * 0.12 + v('dribbling') * 0.04 + v('shortpassing') * 0.10 + v('marking') * 0.07 + v('standingtackle') * 0.08 + v('slidingtackle') * 0.11;
        a = Math.round(a);
        var i = potential(2, a);
        setRWB(a + +i);
    }
    let fullback = () => {
        var a = v('acceleration') * 0.05 + v('sprintspeed') * 0.07 + v('stamina') * 0.08 + v('reactions') * 0.08 + v('interceptions') * 0.12 + v('ballcontrol') * 0.07 + v('crossing') * 0.09 + v('heading') * 0.04 + v('shortpassing') * 0.07 + v('marking') * 0.08 + v('standingtackle') * 0.11 + v('slidingtackle') * 0.14;
        a = Math.round(a);
        var i = potential(3, a);
        setRB(a + +i);
    }
    let centerback = () => {
        var a = v('sprintspeed') * 0.02 + v('jumping') * 0.03 + v('strength') * 0.10 + v('reactions') * 0.05 + v('aggression') * 0.07 + v('interceptions') * 0.13 + v('ballcontrol') * 0.04 + v('heading') * 0.10 + v('shortpassing') * 0.05 + v('marking') * 0.14 + v('standingtackle') * 0.17 + v('slidingtackle') * 0.10;
        a = Math.round(a);
        var i = potential(4, a);
        setRCB(a + +i);
    }
    let defensivemid = () => {
        var a = v('stamina') * 0.06 + v('strength') * 0.04 + v('reactions') * 0.07 + v('aggression') * 0.05 + v('interceptions') * 0.14 + v('vision') * 0.04 + v('ballcontrol') * 0.10 + v('longpassing') * 0.10 + v('shortpassing') * 0.14 + v('marking') * 0.09 + v('standingtackle') * 0.12 + v('slidingtackle') * 0.05;
        a = Math.round(a);
        var i = potential(9, a);
        setRDM(a + +i);
    }
    let centermid = () => {
        var a = v('stamina') * 0.06 + v('reactions') * 0.08 + v('interceptions') * 0.05 + v('positioning') * 0.06 + v('vision') * 0.13 + v('ballcontrol') * 0.14 + v('dribbling') * 0.07 + v('finishing') * 0.02 + v('longpassing') * 0.13 + v('shortpassing') * 0.17 + v('longshots') * 0.04 + v('standingtackle') * 0.05;
        a = Math.round(a);
        var i = potential(13, a);
        setRCM(a + +i);
    }
    let widemid = () => {
        var a = v('acceleration') * 0.07 + v('sprintspeed') * 0.06 + v('stamina') * 0.05 + v('reactions') * 0.07 + v('positioning') * 0.08 + v('vision') * 0.07 + v('ballcontrol') * 0.13 + v('crossing') * 0.10 + v('dribbling') * 0.15 + v('finishing') * 0.06 + v('longpassing') * 0.05 + v('shortpassing') * 0.11;
        a = Math.round(a);
        var i = potential(12, a);
        setRM(a + +i);
    }
    let attackingmid = () => {
        var a = v('acceleration') * 0.04 + v('sprintspeed') * 0.03 + v('agility') * 0.03 + v('reactions') * 0.07 + v('positioning') * 0.09 + v('vision') * 0.14 + v('ballcontrol') * 0.15 + v('dribbling') * 0.13 + v('finishing') * 0.07 + v('longpassing') * 0.04 + v('shortpassing') * 0.16 + v('longshots') * 0.05;
        a = Math.round(a);
        var i = potential(17, a);
        setRAM(a + +i);
    }
    let forward = () => {
        var a = v('acceleration') * 0.05 + v('sprintspeed') * 0.05 + v('reactions') * 0.09 + v('positioning') * 0.13 + v('vision') * 0.08 + v('ballcontrol') * 0.15 + v('dribbling') * 0.14 + v('finishing') * 0.11 + v('heading') * 0.02 + v('shortpassing') * 0.09 + v('shotpower') * 0.05 + v('longshots') * 0.04;
        a = Math.round(a);
        var i = potential(20, a);
        setRF(a + +i);
    }
    let winger = () => {
        var a = v('acceleration') * 0.07 + v('sprintspeed') * 0.06 + v('agility') * 0.03 + v('reactions') * 0.07 + v('positioning') * 0.09 + v('vision') * 0.06 + v('ballcontrol') * 0.14 + v('crossing') * 0.09 + v('dribbling') * 0.16 + v('finishing') * 0.10 + v('shortpassing') * 0.09 + v('longshots') * 0.04;
        a = Math.round(a);
        var i = potential(23, a);
        setRW(a + +i);
    }
    let striker = () => {
        var a = v('acceleration') * 0.04 + v('sprintspeed') * 0.05 + v('strength') * 0.05 + v('reactions') * 0.08 + v('positioning') * 0.13 + v('ballcontrol') * 0.10 + v('dribbling') * 0.07 + v('finishing') * 0.18 + v('heading') * 0.10 + v('shortpassing') * 0.05 + v('shotpower') * 0.10 + v('longshots') * 0.03 + v('volleys') * 0.02;
        a = Math.round(a);
        var i = potential(24, a);
        setRS(a + +i);
    }
    let updateStats = () =>{
        // goalkeeper();
        // sweeper();
        wingback();
        fullback();
        centerback();
        defensivemid();
        centermid();
        widemid();
        attackingmid();
        forward();
        winger();
        striker();
    }
    let colorChange = () => {
        let boundaries = [0, 50, 65, 80]
        let colors = ['red', 'orange', 'yellow', 'green']
        let positions = ['RWB', 'RB', 'RCB', 'RDM', 'RM', 'RCM', 'RAM', 'RF', 'RW', 'RS']
        let positionState = [RWB, RB, RCB, RDM, RM, RCM, RAM, RF, RW, RS]
        for(var i = 0; i < positions.length; i++){
            var x = document.querySelectorAll('.pos-value[data-posvar="' + positions[i] + '"]')
            var positionValue = positionState[i];
            if (positionValue >= boundaries[0] && positionValue < boundaries[1]){
                x.forEach(y => {
                    y.setAttribute('data-color', colors[0])
                })
            } else if (positionValue >= boundaries[1] && positionValue < boundaries[2] ){
                x.forEach(y => {
                    y.setAttribute('data-color', colors[1])
                })
            } else if (positionValue >= boundaries[2] && positionValue < boundaries[3] ){
                x.forEach(y => {
                    y.setAttribute('data-color', colors[2])
                })
            } else if (positionValue >= boundaries[3] ){
                x.forEach(y => {
                    y.setAttribute('data-color', colors[3])
                })
            }
        }
    }
    useEffect( () => {
        colorChange();
    },);
    return(
        <div className={classnames}>
            <Uploader updateStats={updateStats} />
            <div id='calculator'>
                <div className="calc-left">
                    <div className="card spacing calculated">
                        <div id="pitch">
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='LS'>LS</span>
                                    <div className='pos-value' data-color="red" data-posvar="RS">{RS}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='ST'>ST</span>
                                    <div className='pos-value' data-color="red" data-posvar="RS">{RS}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RS'>RS</span>
                                    <div className='pos-value' data-color="red" data-posvar="RS">{RS}</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='LW'>LW</span>
                                    <div className='pos-value' data-color="red" data-posvar="RW">{RW}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='LF'>LF</span>
                                    <div className='pos-value' data-color="red" data-posvar="RF">{RF}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='CF'>CF</span>
                                    <div className='pos-value' data-color="red" data-posvar="RF">{RF}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RF'>RF</span>
                                    <div className='pos-value' data-color="red" data-posvar="RF">{RF}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RW'>RW</span>
                                    <div className='pos-value' data-color="red" data-posvar="RW">{RW}</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='LAM'>LAM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RAM">{RAM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='CAM'>CAM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RAM">{RAM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RAM'>RAM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RAM">{RAM}</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='LM'>LM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RM">{RM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='LCM'>LCM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RCM">{RCM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='CM'>CM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RCM">{RCM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RCM'>RCM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RCM">{RCM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RM'>RM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RM">{RM}</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='LWB'>LWB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RWB">{RWB}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='LDM'>LDM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RDM">{RDM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='CDM'>CDM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RDM">{RDM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RDM'>RDM</span>
                                    <div className='pos-value' data-color="red" data-posvar="RDM">{RDM}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RWB'>RWB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RWB">{RWB}</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='LB'>LB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RB">{RB}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='LCB'>LCB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RCB">{RCB}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='CB'>CB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RCB">{RCB}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RCB'>RCB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RCB">{RCB}</div>
                                </div>
                                <div className="position">
                                    <span className='pos-name' data-posname='RB'>RB</span>
                                    <div className='pos-value' data-color="red" data-posvar="RB">{RB}</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="position">
                                    <span className='pos-name' data-posname='GK'>GK</span>
                                    <div className='pos-value' data-color="red" data-posvar="GK">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calc-right">
                    <div className="card">
                        <h5>Pace</h5>
                        <ul>
                            <li>
                                <input type="number" name="sprintspeed" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Sprint speed</p>
                            </li>
                            <li>
                                <input type="number" name="acceleration" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Acceleration</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h5>Shooting</h5>
                        <ul>
                            <li>
                                <input type="number" name="finishing" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Finishing</p>
                            </li>
                            <li>
                                <input type="number" name="positioning" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Att. Position</p>
                            </li>
                            <li>
                                <input type="number" name="shotpower" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Shot power</p>
                            </li>
                            <li>
                                <input type="number" name="longshots" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Long shots</p>
                            </li>
                            <li>
                                <input type="number" name="penalties" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Penalties</p>
                            </li>
                            <li>
                                <input type="number" name="volleys" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Volleys</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h5>Passing</h5>
                        <ul>
                            <li>
                                <input type="number" name="vision" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Vision</p>
                            </li>
                            <li>
                                <input type="number" name="crossing" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Crossing</p>
                            </li>
                            <li>
                                <input type="number" name="freekick" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>FK Accuracy</p>
                            </li>
                            <li>
                                <input type="number" name="longpassing" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Long Pass</p>
                            </li>
                            <li>
                                <input type="number" name="shortpassing" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Short Pass</p>
                            </li>
                            <li>
                                <input type="number" name="curve" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Curve</p>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className="card">
                        <h5>Dribbling</h5>
                        <ul>
                            <li>
                                <input type="number" name="agility" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Agility</p>
                            </li>
                            <li>
                                <input type="number" name="balance" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Balance</p>
                            </li>
                            <li>
                                <input type="number" name="reactions" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Reactions</p>
                            </li>
                            <li>
                                <input type="number" name="composure" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Composure</p>
                            </li>
                            <li>
                                <input type="number" name="ballcontrol" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Ball control</p>
                            </li>
                            <li>
                                <input type="number" name="dribbling" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Dribbling</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h5>Defending</h5>
                        <ul>
                            <li>
                                <input type="number" name="interceptions" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Interceptions</p>
                            </li>
                            <li>
                                <input type="number" name="heading" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Heading Acc.</p>
                            </li>
                            <li>
                                <input type="number" name="marking" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Def. Aware</p>
                            </li>
                            <li>
                                <input type="number" name="standingtackle" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Stand tackle</p>
                            </li>
                            <li>
                                <input type="number" name="slidingtackle" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Slide tackle</p>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <h5>Physical</h5>
                        <ul>
                            <li>
                                <input type="number" name="jumping" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Jumping</p>
                            </li>
                            <li>
                                <input type="number" name="stamina" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Stamina</p>
                            </li>
                            <li>
                                <input type="number" name="strength" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Strength</p>
                            </li>
                            <li>
                                <input type="number" name="aggression" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>Aggression</p>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="card">
                        <h5>Goalkeeping</h5>
                        <ul>
                            <li>
                                <input type="number" name="gkDiving" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>GK Diving</p>
                            </li>
                            <li>
                                <input type="number" name="gkHandling" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>GK Handling</p>
                            </li>
                            <li>
                                <input type="number" name="gkKicking" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>GK Kicking</p>
                            </li>
                            <li>
                                <input type="number" name="gkPositioning" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}} />
                                <p>GK Positioning</p>
                            </li>
                            <li>
                                <input type="number" name="gkReflexes" placeholder="0" size="2" max="99" min="0" onChange={() => {updateStats()}}/>
                                <p>GK Reflexes</p>
                            </li>
                        </ul>
                    </div> */}
                    <div className="card">
                        <h5>Special</h5>
                        <ul>
                            <li>
                                <input type="number" name="pt" placeholder="0" className="bp3-input p-99" size="2" max="99" min="0"  defaultValue={99} onChange={() => {updateStats()}} />
                                <p>Potential</p>
                            </li>
                            <li className="bp3-control-group bp3-fill">
                                <select name="ir" className="choices-single" onChange={() => {updateStats()}}>
                                    <option value="1">1 ★</option>
                                    <option value="2">2 ★</option>
                                    <option value="3">3 ★</option>
                                    <option value="4">4 ★</option>
                                    <option value="5">5 ★</option>
                                </select>
                                <p>International reputation</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;

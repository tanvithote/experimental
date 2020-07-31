import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './home/home';
import Projects from './projects/projects';
import About from './about/about';
import cv1 from './projects/cv1';
import cv2 from './projects/cv2';
import ev1 from './projects/ev1';
import ev2 from './projects/ev2';
import ev3 from './projects/ev3';
import ev4 from './projects/ev4';
import rpp1 from './projects/rpp1';
import rpp2 from './projects/rpp2';
import contact from './contact/contact';

const MainRouter = () => (
    <div>
        <Switch>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={contact}></Route>
            <Route path="/project/cv1" component={cv1}></Route>
            <Route path="/project/cv2" component={cv2}></Route>
            <Route path="/project/ev1" component={ev1}></Route>
            <Route path="/project/ev2" component={ev2}></Route>
            <Route path="/project/ev3" component={ev3}></Route>
            <Route path="/project/ev4" component={ev4}></Route>
            <Route path="/project/rpp1" component={rpp1}></Route>
            <Route path="/project/rpp2" component={rpp2}></Route>
            <Route path="/" component={Home}></Route>
            
        </Switch>
    </div>
)

export default MainRouter;
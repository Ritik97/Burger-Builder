import React from 'react';
import Logo from '../../assets/burger-logo.png';

import classes from './Logo.css';

/** Instead of mentioning the image path in the src attr of <img />, we had imported it. This is coz
 * we are working in the src folder here. But neither the source folder nor its sub-folder gets shipped to 
 * the server. Instead, the Webpack bundler will bundle these files and folder & create a new output folder,
 * once we publish our app. By importing the img like this, we make the webpack aware that we are using that img.
 * The Logo variable will then always get the path of the image, no matter where the img gets stored by the webpack.
 */

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Logo} alt='Burger-Logo' ></img>
    </div>
);

export default logo;
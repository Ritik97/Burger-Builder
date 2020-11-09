import axios from 'axios';

/** Here, we are not setting a global baseURl as we will be using diff. URL for authentication purpose.
 * So, using 'axios instance' will be an ideal choice in this setting as later on, we can use a diff. 
 * instance for authentication URL. 
 */

const instance =  axios.create({
    baseURL: 'https://burger-builder-8fe0f.firebaseio.com/'
});

export default instance; 
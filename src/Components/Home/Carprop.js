import classes from './Carprop.module.css';
import Fade from 'react-reveal/Fade';

const Card = (props) => {
    return <div>
        <Fade right>
        <div className={classes.slider}>

                <img src={props.img} className={classes.sli}/>

           
        </div>
        </Fade>
    </div>
};

export default Card;
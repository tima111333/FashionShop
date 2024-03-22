import styles from './card.module.css';
import car01Img from './../../img/categories/cat-01.jpg';
import arrowImg from './../../img/icons/arrow.svg'

const Card = ({title,img}) => {



    return ( 

        <div className={styles.card}>
            <a href="#!" className={styles.card__link} ></a>
            
            <img className={styles.card__img} src={img} alt="" />
            
            <div className={styles.card__body}>

                 <div className={styles.card__text}>

                 <div className={styles.card__title}>

                    {title}
                    
                    </div>


                 <div className={styles.card__muted}>
                    
                    Explore Now!
                    
                    </div>

                </div>

                <div className={styles.card__icon}>

                    <img src={arrowImg} alt="" />
                </div>


            </div>
       
        </div>

     );
}
 
export default Card;

import Card from '../card/Card';
import './arrivals.css'


import car01Img from './../../img/categories/cat-01.jpg';
import car02Img from './../../img/categories/cat-02.jpg';
import car03Img from './../../img/categories/cat-03.jpg';


const Arrivals = () => {
    return ( 
    <section className="arrivals">

        <div className="container">
            <div className="arrivals__header">

                <h2 className="title-2">NEW ARRIVALS</h2>

            </div>
            <div className="arrivals__cards">

            <Card title = "Hoodies & Sweetshirt" img={car01Img} />
            <Card title = "Coats & Parkas" img = {car02Img}/>
            <Card title = "Tees & T-Shirt" img = {car03Img}/>

            
            </div>

        </div>

    </section> );
}
 
export default Arrivals;
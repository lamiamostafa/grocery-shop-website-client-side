import React from 'react';
import category1 from '../../images/category/category-1.png';
import category2 from '../../images/category/category-2.png';
import category3 from '../../images/category/category-3.png';
import category4 from '../../images/category/category-4.png';
import './Category.css';

const Category = () => {
    return (
        <div class="category" id="category">
            <h1 className="heading">Shop by <span>category</span></h1>
            <div className="box-container">
                <div className="box">
                    <h3>Vegetables</h3>
                    <p>upto 50% off</p>
                    <img src={category1} alt="" />
                    <a href="#" className="category-button">shop now</a>
                </div>

                <div className="box">
                    <h3>juice</h3>
                    <p>upto 44% off</p>
                    <img src={category2} alt="" />
                    <a href="#" className="category-button">shop now</a>
                </div>
                <div className="box">
                    <h3>meat</h3>
                    <p>upto 44% off</p>
                    <img src={category3} alt="" />
                    <a href="#" className="category-button">shop now</a>
                </div>
                <div className="box">
                    <h3>fruite</h3>
                    <p>upto 12% off</p>
                    <img src={category4} alt="" />
                    <a href="#" className="category-button">shop now</a>
                </div>
            </div>


        </div>
    );
};

export default Category;
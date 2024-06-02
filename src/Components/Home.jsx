import React from 'react'
import Slider from 'react-slick';
// import './Carousel.css';
import '../../src/App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import taxRegime from './tax regime.jpg'

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,

        appendDots: dots => (
            <div>
                <ul style={{
                    margin: "0px", padding: "0px"
                }}> {dots} </ul>
            </div>
        ),

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <img src="https://th.bing.com/th/id/OIP.Vl9mkzn6hgK3dCBqc3K-YwAAAA?rs=1&pid=ImgDetMain"
                            alt="animationfirst"
                            className="slide-image" />
                    </div>
                    <div class="col-sm-9 col-md-6"><br />
                        <h1 className="first" style={{ textAlign: "center", fontFamily: "Times New Roman" }} data-testid="Header"><b>Welcome to E-Tax Management</b></h1>
                        <h3 style={{ textAlign: "center", fontFamily: "Times New Roman" }}>A Complete Solution to your Taxations</h3>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className='homepage'>
                <div className="container">
                    <div className='row'>
                        <div class="col-6">

                        </div>
                        <div className="full-width-carousel">
                            <Slider {...settings}>
                                <div className="full-width-slide">
                                    <img src=
                                        "https://th.bing.com/th/id/OIP.Mub7FN7jlRuZyadl3C-d2wHaEW?w=926&h=545&rs=1&pid=ImgDetMain"
                                        alt="Slide 1"
                                        className="slide-image" />
                                </div>
                                <div className="full-width-slide">
                                    <img src=
                                        "https://www.financialexpress.com/wp-content/uploads/2020/06/tax-cut1.jpg?w=1024"
                                        alt="Slide 2"
                                        className="slide-image" />
                                </div>
                                <div className="full-width-slide">
                                    <img src=
                                        "https://th.bing.com/th/id/OIP.lycyuRsyIRrYqycULqT7wgAAAA?rs=1&pid=ImgDetMain"
                                        alt="Slide 3"
                                        className="slide-image" />
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>
            </div><br />
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <img src="https://i1.wp.com/3.109.186.39/wp-content/uploads/2019/12/taxes-graphic-design_24908-54859.jpg?resize=626%2C609&ssl=1"
                            alt="Slide 2"
                            className="slide-image" />
                    </div>
                    <div class="col-sm-9 col-md-6"><br />
                        <h1 data-testId="headertext">Be aware of the  tax Payment deadlines</h1>
                        <h3>Be a Responsible citizen</h3>
                        <p>Welcome to the world of taxes! In India, the Income Tax Department collects taxes on your income. If you’ve just started earning, it’s a milestone to pay your income tax for the first time2. But don’t worry, it’s not as daunting as it seems!

                            The tax year, or the ‘Previous Year’, starts on 1st April and ends on 31st March of the next year. Your income tax returns are generally due on 31st July, 30th September, or 30th November, depending on your taxpayer category.

                            Your total income is the sum of all your earnings, including salary, house property, capital gain, and business or profession. And guess what? If your income is below Rs.2,50,000 in a financial year, you don’t have to pay taxes!

                            The tax rates vary under the new and old tax regime, starting from 5% to 30%. For instance, under the new tax regime, if your taxable income is below Rs 7 lakh, you do not have to pay tax.

                            Remember, taxes are not just an obligation, but a contribution to the nation’s development. So, let’s embrace this journey with confidence and responsibility! Happy Taxing!</p>
                    </div>
                </div>
            </div>
            <div className="div">
                <h1 style={{ textAlign: "center", fontFamily: "Times New Roman" }}><b>INFORMATION</b></h1>
                <h4 className='General'>General information of tax according to income</h4>
                <img src={taxRegime} style={{ width: '1200px' }} />
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-3 col-md-6">
                        <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-pay-taxes_516790-1659.jpg"
                            alt="Slide 2"
                            className="slide-image" />
                    </div>
                    <div class="col-sm-9 col-md-6"><br />
                        <h1>Be aware of the  tax norms</h1>
                        <h3>Be a Responsible citizen</h3>
                        <p>Welcome to the world of taxes! In India, the Income Tax Department collects taxes on your income. If you’ve just started earning, it’s a milestone to pay your income tax for the first time2. But don’t worry, it’s not as daunting as it seems!

The tax year, or the ‘Previous Year’, starts on 1st April and ends on 31st March of the next year. Your income tax returns are generally due on 31st July, 30th September, or 30th November, depending on your taxpayer category.

Your total income is the sum of all your earnings, including salary, house property, capital gain, and business or profession. And guess what? If your income is below Rs.2,50,000 in a financial year, you don’t have to pay taxes!

The tax rates vary under the new and old tax regime, starting from 5% to 30%. For instance, under the new tax regime, if your taxable income is below Rs 7 lakh, you do not have to pay tax.

Remember, taxes are not just an obligation, but a contribution to the nation’s development. So, let’s embrace this journey with confidence and responsibility! Happy Taxing!</p>
                    </div>
                </div>
            </div>

        </>

    );

}

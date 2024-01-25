import React, { useState,useRef } from 'react';
import './Form.css';
import { Container, Col, Row, Form } from 'react-bootstrap'
import Moon from '../../Assets/Images/moon.png';
import Star_break from '../../Assets/Images/breaking_star.png';
import Star_Down from '../../Assets/Images/star_down.png';
import step5Girl from '../../Assets/Images/step-07-girl.png';
import Logo from '../../Assets/Images/logo-transition.gif';
import Alien from '../../Assets/Images/form-6.png';
import Boy from '../../Assets/Images/step-06.png';
import circle_image from '../../Assets/Images/circle.png'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios'
import emailjs, { sendForm } from '@emailjs/browser';

const PersonalForm = () => {
    const [step, setStep] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    
    const [answers, setAnswers] = useState(
        {
            first_name: '',
            last_name: '',
            email: '',
            Question1: {
                answer:''
            },
            Question2: {
                answer:''
            },
            Question3: {
                answer:''
            },
            Question4: {
                answer:''
            },

            mean_to_be_an_artist: '',
            film_series_artist_inspires_you_most: '',
            if_you_could_right_one_wrong_in_the_world: ''
        }
    )
    const [state, setState] = useState({
        activeStep: "",
    })
    const onChange = (name, value) => {
        setState({ ...state, [name]: value })
    }
    const handleChangeInput = (e) => {
        const value = e.target.value;
        setAnswers({
            ...answers,
            [e.target.name]: value

        });
    }

// status bar for success message
const upDateNestedProperties = (name,value) => {
        console.log(name);
        setAnswers({...answers,[name]:{answer:value}});
    }

    const navigateTo=(e)=>{
        e.preventDefault();
        window.location="http://premint.xyz"
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        sendForm();
        setShow(true);
        setStep(0);
        setAnswers(
            {
                first_name: '',
                last_name: '',
                email: '',
                Question1: {
                    answer:''
                },
                Question2: {
                    answer:''
                },
                Question3: {
                    answer:''
                },
                Question4: {
                    answer:''
                },
    
                mean_to_be_an_artist: '',
                film_series_artist_inspires_you_most: '',
                if_you_could_right_one_wrong_in_the_world: ''
            }
        )
    }

//sending email

const form = useRef();

const sendtext = (e) => {
e.preventDefault();

  emailjs.sendForm('service_geqonvb', 'template_iplp2fo', form.current, 'kw9nw_YVZIY8wOq6k')
    .then((result) => {
        if(result.text=="OK")
        {
            setShow(true);
            setStep(0);
            setAnswers(
            {
                first_name: '',
                last_name: '',
                email: '',
                Question1: {
                    answer:''
                },
                Question2: {
                    answer:''
                },
                Question3: {
                    answer:''
                },
                Question4: {
                    answer:''
                },
    
                mean_to_be_an_artist: '',
                film_series_artist_inspires_you_most: '',
                if_you_could_right_one_wrong_in_the_world: ''
            }
        )
        }
        else{
            setShowError(true);
            setStep(0);
        }
    }, (error) => {
        setShowError(true);
        setStep(0);
        console.log(error.text);
    });
};



    return (
        <section className={'main_bg'}>


            <div className={step === 2 ? 'pilot_bg' : step === 5 ? 'step_05_bg' : null}></div>
                {step === 5 ?
                    <img src={step5Girl} className="step_05_child" alt='step-girl' />
                    : null
                }
            

            <Container fluid className={step === 3 ? 'taco_sandwich_bg' : step === 6 ? 'step_06_bg' : null}>
                <Row >
                <Col md={12} className={step === 4 ?"green_garden" : null}></Col>
                    <Col md={12}>
                        <div className={'star_main_bg'} style={step==1?{justifyContent:'unset'}:null}>

                            <div className="image-container" style={{ gap: "50px" }}>
                                {step === 4 || step === 7 ?
                                    <div className='breaking_star_container'
                                        style={{ paddingLeft: '40px', position: 'absolute', width: '100%', display: 'flex', justifyContent: 'flex-start' }}

                                    >
                                        <img src={Star_break} alt='logo' />
                                    </div>
                                    : null
                                }
                                <div className='logo_container'>
                                    <img src={Logo} alt='logo' />
                                </div>
                                {step === 4 || step === 7 ?
                                    <div className='moon_container pt-3' style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                        <img src={Moon} alt='logo' />
                                    </div>
                                    : null
                                }


                            </div>
                            {step === 7 ?
                                <div className='breaking_star_container position-absolute w-100 d-flex justify-content-end align-items-end'
                                    style={{ paddingRight: '40px', marginBottom: '50px', height: '1005' }}
                                >
                                    <img src={Star_Down} alt='logo' />
                                </div>
                                : null
                            }
                            {step === 1 ?
                                <div className='breaking_star_container position-absolute w-100 d-flex justify-content-start align-items-end h-100'
                                    style={{ paddingRight: '40px', marginTop: '20px' }}
                                >
                                    <img src={circle_image} alt='logo' />
                                </div>
                                : null
                            }

                            <div className={step === 1 ? 'background_2' : "main_card"}>
                                <div className='personal_form'>
                                    {
                                        step === 0 ?
                                            <Form>
                                                <h5>Personal Information</h5>
                                                <Row className='pt-3'>
                                                    <Col md={3} sm={3} xs={5} className='p-0'>
                                                        <label>name</label>
                                                    </Col>
                                                    <Col md={1} sm={1} xs={1} className='p-0'>
                                                        <span>:</span>
                                                    </Col>
                                                    <Col md={7} sm={6} xs={6}>
                                                        <input name='first_name' onChange={handleChangeInput} type='text' />
                                                    </Col>
                                                    <Col md={3} sm={3} xs={5} className='p-0'>
                                                        <label>last name</label>
                                                    </Col>
                                                    {/* id='lastname_colon' */}
                                                    <Col md={1} sm={1} xs={1} className='p-0'>
                                                        <span >:</span>
                                                    </Col>
                                                    <Col md={7} sm={6} xs={6}>
                                                        <input name='last_name' onChange={handleChangeInput} type='text' />
                                                    </Col>

                                                    <Col md={3} sm={3} xs={5} className='p-0'>
                                                        <label>email</label>
                                                    </Col>
                                                    <Col md={1} sm={1} xs={1} className='p-0'>
                                                        <span>:</span>
                                                    </Col>
                                                    <Col md={7} sm={6} xs={6}>
                                                        <input name='email' type='email' onChange={handleChangeInput} />
                                                    </Col>

                                                    <Col md={12}>
                                                        <div className='btn_container'>
                                                            <button onClick={() => setStep(1)}>Next</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            : null
                                    }

                                    {
                                        step === 1 ?
                                            <React.Fragment>
                                                <div className='stuburn'></div>
                                                <Form className='chris_rock_form'>
                                                    <Row>
                                                        <Col md={12}>
                                                            <h5> 1) Chris Rock deserved to "be" slapped </h5>
                                                            <div className='row bullet_list' justifyContent="center">
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11  bullets-lists'>
                                                                    <Col md={2} sm={4} xs={4}>
                                                                        <input type="radio" name='question1' onClick={() => upDateNestedProperties('Question1','agree')}/>
                                                                    </Col>
                                                                    <Col md={5} sm={6} xs={6} className='p-0'>
                                                                        <label>Agree</label>
                                                                    </Col>
                                                                </div>
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11  bullets-lists'>
                                                                    <Col md={2}  sm={4} xs={4}>
                                                                        <input type="radio" name='question1' onClick={() => upDateNestedProperties('Question1','disagree')}/>
                                                                     </Col>
                                                                    <Col md={5} sm={6} xs={6} className='p-0'>
                                                                        <label>Disagree</label>
                                                                    </Col>
                                                                </div>   
                                                            </div>
                                                            <div className='btn_container justify-content-end'>
                                                                <button onClick={() => setStep(2)}>Next</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className='ufo_container'></div>


                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        step === 2 ?
                                            <React.Fragment>
                                                <Form>
                                                    <Row>
                                                        <Col md={12}>
                                                            <h5 className='text-start'> 2) Which era in music best represents your personality? </h5>
                                                            
                                                            <div className='row bullet_list' justifyContent="center">
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11 bullets-lists'>
                                                                    <Col md={2}  sm={4} xs={4}>
                                                                        <input type="radio" name='question2' onClick={() => upDateNestedProperties('Question2','60s and 70s')}/>
                                                                    </Col>
                                                                    <Col md={5} sm={6} xs={6} className='p-0'>
                                                                        <label>60's & 70's</label>
                                                                    </Col>
                                                                </div>
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11  bullets-lists'>
                                                                    <Col md={2}  sm={4} xs={4}>
                                                                        <input type="radio" name='question2' onClick={() => upDateNestedProperties('Question2','80s and 90s')}/>
                                                                     </Col>
                                                                    <Col md={5} sm={6} xs={6} className='p-0'>
                                                                        <label>80's & 90's</label>
                                                                    </Col>
                                                                </div>
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11  bullets-lists'>
                                                                    <Col md={2}  sm={4} xs={4}>
                                                                        <input type="radio" name='question2' onClick={() => upDateNestedProperties('Question2','2000s and 10s')}/>
                                                                     </Col>
                                                                    <Col md={5}  sm={6} xs={6} className='p-0'>
                                                                        <label>2000's & 10's</label>
                                                                    </Col>
                                                                </div>
                                                            </div>
                                                            <div className='btn_container justify-content-end'>
                                                                <button onClick={() => setStep(3)}>Next</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>

                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        step === 3 ?
                                            <Form>
                                                <Row>
                                                    <Col md={12}>
                                                        <h5> 3) A taco is a sandwich. </h5>              
                                                        <div className='row bullet_list' justifyContent="center">
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11  bullets-lists'>
                                                                    <Col md={2} sm={4} xs={4}>
                                                                        <input type="radio" name='question3' onClick={() => upDateNestedProperties('Question3','agree')}/>
                                                                     </Col>
                                                                    <Col md={5} sm={6} xs={6} className='p-0'>
                                                                        <label>Agree</label>
                                                                    </Col>
                                                                </div>
                                                                <div className='row col-md-8 col-lg-8 col-sm-11 col-11  bullets-lists'>
                                                                    <Col md={2} sm={4} xs={4}>
                                                                        <input type="radio" name='question3' onClick={() => upDateNestedProperties('Question3','disagree')}/>
                                                                     </Col>
                                                                    <Col md={5} sm={6} xs={6} className='p-0'>
                                                                        <label>Disagree</label>
                                                                    </Col>
                                                                </div>
                                                            </div>
                                                        <div className='btn_container justify-content-end'>
                                                            <button onClick={() => setStep(4)}>Next</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            : null
                                    }

                                    {
                                        step === 4 ?
                                            <React.Fragment>
                                                <Form>
                                                    <Row>
                                                        <Col md={12}>
                                                            <h5> 4) Would you rather. . . . </h5>
                                                            <div className='row bullet_list' justifyContent="center">
                                                                <div className='row col-md-8 col-lg-8 col-11 col-sm-11  bullets-lists'>
                                                                    <Col md={2} xs={4} sm={4}>
                                                                        <input type="radio" name='question4' onClick={() => upDateNestedProperties('Question4','fart_confetti')}/>
                                                                     </Col>
                                                                    <Col md={5} xs={6} sm={6} className='p-0'>
                                                                        <label>Fart Confetti</label>
                                                                    </Col>
                                                                </div>
                                                                <div className='row col-md-8 col-lg-8 col-11 col-sm-11  bullets-lists'>
                                                                    <Col md={2} xs={4} sm={4}>
                                                                        <input type="radio" name='question4' onClick={() => upDateNestedProperties('Question4','burp glitter')}/>
                                                                     </Col>
                                                                    <Col md={5} xs={6} sm={6} className='p-0'>
                                                                        <label>Burp glitter</label>
                                                                    </Col>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className='btn_container justify-content-end'>
                                                                <button onClick={() => setStep(5)}>Next</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className='step_boy_04'>
                                                    <img src={Boy} alt='' />
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        step === 5 ?
                                            <Form className='chris_rock_form'>
                                                <Row>
                                                    <Col md={12}>
                                                        <h5> 5) What doest it mean to be an artist?  </h5>
                                                        <div className='artist_container'>
                                                            {/* <input type='text' name='mean_to_be_an_artist' onChange={handleChangeInput} /> */}
                                                            <textarea onChange={handleChangeInput} form="usrform" name="mean_to_be_an_artist"></textarea>
                                                            <p>(280 characters or less)</p>
                                                        </div>
                                                        <div className='btn_container justify-content-end'>
                                                            <button onClick={() => setStep(6)}>Next</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            : null
                                    }

                                    {
                                        step === 6 ?
                                            <React.Fragment>
                                                <Form className='chris_rock_form'>
                                                    <Row>
                                                        <Col md={12}>
                                                            <h5 className='text-start'> 6) Which film,series,artist, or musician inspires you & why?  </h5>
                                                            <div className='artist_container'>
                                                                {/* <input type='text' name='film_series_artist_inspires_you_most' onChange={handleChangeInput} /> */}
                                                                <textarea onChange={handleChangeInput} name="film_series_artist_inspires_you_most" form="usrform"></textarea>
                                                                <p>(280 characters or less)</p>
                                                            </div>
                                                            <div className='btn_container justify-content-end'>
                                                                <button onClick={() => setStep(7)}>Next</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <div className='alien'>
                                                    <img src={Alien} alt='' />
                                                </div>

                                                <div className='step_girl_06'>
                                                    <img src={step5Girl} className="step_girl1" alt='' />
                                                    <img src={Boy} alt='' className='step_girl2'/>
                                                </div>
                                            </React.Fragment>
                                            : null
                                    }

                                    {
                                        step === 7 ?
                                            <Form className='chris_rock_form'>
                                                <Row>
                                                    <Col md={12}>
                                                        <h5 className='text-start'> 7) if you could right one wrong in the world - what it would be?  </h5>
                                                        <div className='artist_container'>
                                                            {/* <input type='text' name='if_you_could_right_one_wrong_in_the_world' onChange={handleChangeInput} /> */}
                                                            <textarea onChange={handleChangeInput} form="usrform" name="if_you_could_right_one_wrong_in_the_world"></textarea>
                                                            <p>(280 characters or less)</p>
                                                        </div>
                                                        <div className='btn_container justify-content-end'>
                                                            <button onClick={() => setStep(8)}>Next</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                            : null
                                    }
                                    {
                                        step === 8 ?
                                        <form ref={form} onSubmit={sendtext}>

                                                <Row>
                                                    <input hidden type="text"  name="name"  value={answers.first_name+" "+answers.last_name}/>
                                                    <input hidden type="email" name="email" value={answers.email}/>
                                                    <input hidden type="text"  name="question1" value={answers.Question1.answer}/>
                                                    <input hidden type="text"  name="question2" value={answers.Question2.answer}/>
                                                    <input hidden type="text"  name="question3" value={answers.Question3.answer}/>
                                                    <input hidden type="text"  name="question4" value={answers.Question4.answer}/>
                                                    <input hidden type="text"  name="question5" value={answers.mean_to_be_an_artist}/>
                                                    <input hidden type="text"  name="question6" value={answers.film_series_artist_inspires_you_most}/>
                                                    <input hidden type="text"  name="question7" value={answers.if_you_could_right_one_wrong_in_the_world}/>
                                                
                                                    <Col md={12}>
                                                        <div className='btn_container justify-content-center'>
                                                            <button  style={{backgroundColor:'#8F0000',color:'white'}}  type="button" onClick={navigateTo}>
                                                                premint.xyz
                                                            </button>
                                                        </div>
                                                        <div className='btn_container justify-content-center' style={{ paddingBottom: '20px', paddingTop: '20px' }}>
                                                            
                                                                    <button type='submit'>Submit</button>
                                                            

                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                            : null
                                    }

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
             <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Information has been sent!</Alert.Heading>
            </Alert>
            <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>Could not save the information!</Alert.Heading>
            </Alert>
            
            </Container>
        

        {// form for sending data to email
        }
                {/* <input type="text" name="name"  value={answers.first_name+" "+answers.last_name}/>
                <input type="email" name="email" value={answers.email}/>
                <input type="text" name="question1" value={answers.Question1.answer}/>
                <input type="text" name="question2" value={answers.Question2.answer}/>
                <input type="text" name="question3" value={answers.Question3.answer}/>
                <input type="text" name="question4" value={answers.Question4.answer}/>
                <input type="text" name="question5" value={answers.mean_to_be_an_artist}/>
                <input type="text" name="question6" value={answers.film_series_artist_inspires_you_most}/>
                <input type="text" name="question7" value={answers.if_you_could_right_one_wrong_in_the_world}/> */}
            

        </section >
    )
}

export default PersonalForm
import React, { useRef } from 'react';
import textjs from '@textjs/browser';

export const SendMail= (props) => {
  const form = useRef();

  const sendtext = (e) => {
    e.preventDefault();

    textjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendtext}>
      <input type="text" name="name"  value={props.answers.first_name+" "+props.answers.last_name}/>
      <input type="email" name="email" value={props.answers.email}/>
      <input type="text" name="question1" value={props.answers.Question1.answer}/>
      <input type="text" name="question2" value={props.answers.Question2.answer}/>
      <input type="text" name="question3" value={props.answers.Question3.answer}/>
      <input type="text" name="question4" value={props.answers.Question4.answer}/>
      <input type="text" name="question5" value={props.answers.mean_to_be_an_artist}/>
      <input type="text" name="question6" value={props.answers.film_series_artist_inspires_you_most}/>
      <input type="text" name="question7" value={props.answers.if_you_could_right_one_wrong_in_the_world}/>
      
      <input type="submit" value="Send" />
    </form>
  );
};
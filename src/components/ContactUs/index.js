import React from 'react';
import emailjs from 'emailjs-com';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './ContactusElements';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_4u22wup', e.target, 'qzUUV-CUHgI3-jzrO')
            .then((result) => {
                console.log(result.text);
                alert('Message has been received and we will get back to you shortly!');
            }, (error) => {
                console.log(error.text);
                alert('There was an error, please try again');
            });
        e.target.reset();
    }
        
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Donut Dash</Icon>
                    <FormContent>
                        <Form onSubmit={sendEmail}>
                            <FormH1><strong>Contact Us</strong></FormH1>
                            <FormLabel htmlFor='for'><b>Name</b></FormLabel>
                                <FormInput type='text' placeholder='Type full name here' name='name' required />
                            <FormLabel htmlFor='for'><b>Email</b></FormLabel>
                                <FormInput type='email' placeholder='Type email here' name='email' required />
                            <FormLabel htmlFor='for'><b>Message</b></FormLabel>
                                <FormInput type='text' placeholder='Type your message here' name='message' required />
                            <FormButton type='submit'>Send</FormButton>
                            <Text><b>Or email us directly at info@pghdonustdash.org</b></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

// export default ContactUs;
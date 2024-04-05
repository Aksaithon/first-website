import React from "react";
import { Button } from "./styles/Button";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 1rem 0 1rem 0;

    .container {
      margin-top: 5rem;
      text-align: center;

      .contact-form {
        max-width: 30rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            padding: 0px;
            margin: 0px;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448166.12095852324!2d77.28079999999999!3d28.650800000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdf636ad8f2cf%3A0x5f6c6792ff2d35ed!2sDr.%20Abhishek%20Physio%40home!5e0!3m2!1sen!2sin!4v1675837666360!5m2!1sen!2sin"
        width="100%"
        height="350"
        border="10px solid"
        border-radius="50%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mlekjglb"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>
            <Button type="submit" >
            send
              {/* <input type="submit" value="send" /> */}
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

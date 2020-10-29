import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});

test("users can fill out form", () => {

  render(<ContactForm />);

  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  const messageInput = screen.findByPlaceholderText(/hello/i);

  fireEvent.change(firstNameInput, {target: {value: 'Rees', name: 'firstName'}});
  fireEvent.change(lastNameInput, {target: {value: 'Harper', name: 'lastName'}});
  fireEvent.change(emailInput, {target: {value: 'reestimharper@gmail.com', name: 'email'}});
  // fireEvent.change(messageInput, {target: {value: 'hello', name: 'message'}});

  const emailPlaceholder = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  expect(emailPlaceholder).toBeTruthy();

  const button = screen.getByRole("button");
  fireEvent.click(button);

})

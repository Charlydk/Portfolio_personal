import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel, Alert } from 'react-bootstrap';

function ContactForm() {

// 1. Estados para los valores de los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

// 2. Estados para manejar la validación y los mensajes de error
const [validated, setValidated] = useState(false); // Para controlar si el formulario ha sido validado (después de un intento de envío)
const [submitMessage, setSubmitMessage] = useState(null); // Para mensajes generales de éxito o error al enviar (ej. "¡Mensaje enviado!")
const [isSubmitting, setIsSubmitting] = useState(false);

// 3. Función handleSubmit para manejar el envío y la validación
  const handleSubmit = async (event) => {
    // Prevenir el comportamiento por defecto de recargar la página
    event.preventDefault();
    event.stopPropagation(); // Detener la propagación del evento para evitar problemas

// Limpia mensajes anteriores y activa el estado de envío
  setSubmitMessage(null); // <-- Limpia el mensaje anterior
  setIsSubmitting(true);  // <-- Activa el spinner/indicador

    // Marcar el formulario como 'validado' para activar los estilos de validación de Bootstrap
    setValidated(true);

    // Realizar la validación personalizada
    const form = event.currentTarget;
    if (form.checkValidity() === false) { // checkValidity() es un método nativo de JS para formularios HTML5
      // Si el formulario no es válido (por ejemplo, campos 'required' vacíos o tipo 'email' inválido)
      setSubmitMessage({ type: 'danger', text: 'Por favor, completa todos los campos requeridos correctamente.' });
      setIsSubmitting(false); // <-- Desactiva el spinner si la validación falla
      return; // Detener el envío si hay errores
    }

    // Si la validación básica de HTML5 pasa, puedes añadir validaciones adicionales aquí
    // Por ejemplo, una validación más robusta para el email con una expresión regular:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitMessage({ type: 'danger', text: 'Por favor, introduce una dirección de correo electrónico válida.' });
      setIsSubmitting(false); // <-- Desactiva el spinner si el email es inválido
      return;
    }

    // --- Lógica de envío a Formspree ---
    try {
      
      const response = await fetch('https://formspree.io/f/mqabyyjo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }), // Envía los datos del formulario como JSON
      });

      if (response.ok) { // Si la respuesta de Formspree es exitosa (código 2xx)
        setSubmitMessage({ type: 'success', text: '¡Mensaje enviado con éxito! Te responderé pronto.' });
        // Limpiar los campos después de un envío exitoso
        setName('');
        setEmail('');
        setMessage('');
        setValidated(false); // Resetear el estado de validación
      } else {
        // Si hay un error en el lado de Formspree o la red
        setSubmitMessage({ type: 'danger', text: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.' });
      }
    } catch (error) {
      // Captura errores de red o cualquier otro error durante el fetch
      console.error('Error al enviar el formulario:', error);
      setSubmitMessage({ type: 'danger', text: 'Hubo un problema de conexión. Por favor, verifica tu internet e inténtalo de nuevo.' });
    } finally {
    // 'finally' se ejecuta SIEMPRE, ya sea que la promesa se resuelva o se rechace
    setIsSubmitting(false); // <-- Desactiva el spinner SIEMPRE al finalizar el intento
    }
    // --- Fin de la lógica de envío a Formspree ---


  };

  return (
    <section id="contact" className="py-5 bg-custom-section">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold" data-aos="zoom-in-right">Contacto </h2>
        <p className="text-center lead mb-4" data-aos="zoom-in-right">¿Tienes alguna pregunta o quieres colaborar? ¡Contáctame!</p>

        <Row className="justify-content-center" data-aos="zoom-in-right">
          <Col md={8} lg={6}>
            <div className="p-4 border rounded shadow-sm bg-white">
                
               {submitMessage && ( // Solo renderiza el Alert si submitMessage no es null
                    <Alert variant={submitMessage.type} className="mb-3">
                      {submitMessage.text}
                    </Alert>
                  )}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* Campo para el Nombre */}
                <Form.Group className="mb-3" controlId="formName">
                  <FloatingLabel controlId="floatingName" label="Nombre Completo">
                    <Form.Control
                      type="text"
                      placeholder="Tu Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      // --- Añade estas props para la validación de Bootstrap ---
                      isInvalid={validated && !name} // Es inválido si validado=true y el campo está vacío
                      isValid={validated && name}    // Es válido si validado=true y el campo no está vacío
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingresa tu nombre.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Se ve bien.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                {/* Campo para el Correo Electrónico */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <FloatingLabel controlId="floatingEmail" label="Correo Electrónico">
                    <Form.Control
                      type="email"
                      placeholder="tu@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      // --- Añade estas props para la validación de Bootstrap ---
                      isInvalid={validated && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
                      isValid={validated && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, ingresa un correo electrónico válido.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Correo válido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                {/* Campo para el Mensaje (área de texto) */}
                <Form.Group className="mb-3" controlId="formMessage">
                  <FloatingLabel controlId="floatingMessage" label="Tu Mensaje">
                    <Form.Control
                      as="textarea"
                      placeholder="Escribe tu mensaje aquí..."
                      style={{ height: '150px' }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      // --- Añade estas props para la validación de Bootstrap ---
                      isInvalid={validated && !message}
                      isValid={validated && message}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor, escribe tu mensaje.
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Mensaje listo.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}> {/* <-- Añade 'disabled' */}
                  {isSubmitting ? ( // <-- Renderizado condicional
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      {' Enviando...'} {/* Espacio para separar el spinner del texto */}
                    </>
                  ) : (
                    'Enviar Mensaje' // Texto normal cuando no se está enviando
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}

export default ContactForm;
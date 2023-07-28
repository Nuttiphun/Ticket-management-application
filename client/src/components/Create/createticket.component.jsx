import React, { useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import toast, { Toaster } from "react-hot-toast";

const CreateTicket = () => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        contactinfo: "",
    });
    
    const [showCreate, setShowCreate] = useState(false);

    const handleShowCreate = () => {
        setShowCreate(true);
    };

    const handleCloseCreate = () => {
        setShowCreate(false);
    };

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (!formData.title || !formData.description || !formData.contactinfo) {
            toast.error("Please fill in all the required fields.", {
                position: "top-center",
            });
            return;
        }

        axios.post('http://localhost:3001/ticket', {
            title: formData.title,
            description: formData.description,
            contact_info: formData.contactinfo,
            status: "pending"
            }, {
            headers: {
                'Content-Type': 'application/json'
            }})
          .then(response => {
            toast.success("Data added successfully", {
                position: "top-center",
            });
            resetForm()
          })
          .catch(error => { 
            toast.error("Error added data on database", {
                position: "top-center",
            });
            console.error('Error adding data:', error);
          });
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            contactinfo: '',
          })
    }
    
    return(
        <>
            <Container>
                <Toaster />
                <Row> 
                    <Col xs="auto">
                        <Button type="submit" size="lg" onClick={handleShowCreate} className="button-shadow">Create</Button>
                    </Col>
                </Row>
                <Modal show={showCreate} onHide={handleCloseCreate} centered>
                    <Modal.Header className="modal-header-color" closeButton>
                        <Modal.Title>Create ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control name="title" value={formData.title} onChange={handleChange} type="input" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" value={formData.description} onChange={handleChange} as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Contact information</Form.Label>
                                <Form.Control name="contactinfo" value={formData.contactinfo} onChange={handleChange} as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer-color">
                            <Button variant="secondary" onClick={handleCloseCreate}>Cancel</Button>
                            <Button variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
                        </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}

export default CreateTicket;
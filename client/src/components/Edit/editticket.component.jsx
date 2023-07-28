import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const EditTicket = ({ ticketData, setFetchTicket }) => { 
    const [editData, setEditData] = useState(ticketData);
    const [showEdit, setShowEdit] = useState(false);

    const handleShowEdit = () => {
        setShowEdit(true);
    };

    const handleCloseEdit = () => {
        setShowEdit(false);
    };


    const handleSubmit = () => {
        axios.put(`http://localhost:3001/ticket/${editData.id}`, {
            title: editData.title, 
            description: editData.description, 
            contact_info: editData.contact_info, 
            status: editData.status
        }).then(res => {
            toast.success("Updated data on database")
            setFetchTicket(true)
        }).catch(error => {
            toast.error("Error updata on database")
        })

        handleCloseEdit();
    };

    return (
        <>
        <Container>
            <Button onClick={handleShowEdit} size="sm">
                <FontAwesomeIcon icon={faPencilAlt}  />
            </Button>
            <Modal show={showEdit} onHide={handleCloseEdit} centered>
                <Modal.Header className="modal-header-color" closeButton>
                    <Modal.Title>Update a ticket’s information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                        name="title"
                        value={editData.title}
                        type="input"
                        onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        name="description"
                        value={editData.description}
                        as="textarea"
                        rows={3}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Contact information</Form.Label>
                        <Form.Control
                        name="contactinfo"
                        value={editData.contact_info}
                        as="textarea"
                        rows={3}
                        onChange={(e) => setEditData({ ...editData, contact_info: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <>
                            <Form.Check
                            inline
                            type="radio"
                            label="Pending"
                            name="status"
                            checked={editData.status === "pending"}
                            onChange={(4
                                )}
                            />
                            <Form.Check
                            inline
                            type="radio"
                            label="Accepted"
                            name="status"
                            checked={editData.status === "accepted"}
                            onChange={() => setEditData({ ...editData, status: "accepted" })}
                            />
                            <Form.Check
                            inline
                            type="radio"
                            label="Resolved"
                            name="status"
                            checked={editData.status === "resolved"}
                            onChange={() => setEditData({ ...editData, status: "resolved" })}
                            />
                            <Form.Check
                            inline
                            type="radio"
                            label="Rejected"
                            name="status"
                            checked={editData.status === "rejected"}
                            onChange={() => setEditData({ ...editData, status: "rejected" })}
                            />
                        </>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className="modal-footer-color">
                    <Button variant="secondary" onClick={handleCloseEdit}>Cancel</Button>
                    <Button variant="success" onClick={handleSubmit}>Submit</Button> {/* Call the handleSubmit function */}
                </Modal.Footer>
            </Modal>
        </Container>
        </>
    );
    };

export default EditTicket;

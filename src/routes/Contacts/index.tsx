import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Modal from "../../components/ui/Modal/Modal"
import { useNavigate, useLocation } from 'react-router-dom';

function Contacts() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()

    console.log(`${location.pathname}/add`)

    return (
        <div>
            contacts
            <div onClick={() => navigate(`${location.pathname}/add`)}>
                open
            </div>

            <Routes>
                <Route path="add" element={
                    <Modal isOpen={true} onClose={() => {navigate(-1)}}>
                        <h2>
                            modadsladlald
                        </h2>
                    </Modal>
                } />
            </Routes>
        </div>
    )
}

export default Contacts
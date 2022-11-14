import {
  Route,
  Routes,
} from "react-router-dom";
import Modal from "../components/ui/Modal/Modal";
import Contacts from "./Contacts";
import ContactsHistory from "./ContactsHistory";

function AllRoutes() {
  return (
      
    <Routes>
      <Route path="/list/*" element={<Contacts />} />
      <Route path="/history" element={<ContactsHistory />} />
    </Routes>
  );
}

export default AllRoutes
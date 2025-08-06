import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const AdminNoticePanel = () => {
  const [user, setUser] = useState(null);
  const [notices, setNotices] = useState([]);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();
  const noticeRef = collection(db, "notices");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) navigate("/admin-login");
      else {
        setUser(currentUser);
        fetchNotices();
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchNotices = async () => {
    const data = await getDocs(noticeRef);
    setNotices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!heading || !description) return;
    if (editId) {
      await updateDoc(doc(db, "notices", editId), { heading, description });
      setEditId(null);
    } else {
      await addDoc(noticeRef, { heading, description });
    }
    setHeading("");
    setDescription("");
    fetchNotices();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "notices", id));
    fetchNotices();
  };

  const handleEdit = (notice) => {
    setHeading(notice.heading);
    setDescription(notice.description);
    setEditId(notice.id);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto py-30">
      <h1 className="text-3xl font-bold mb-4">Manage Notices</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6">
        <input
          type="text"
          placeholder="Heading"
          className="w-full p-2 border rounded mb-2"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded mb-2  overflow-hidden"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editId ? "Update" : "Add"} Notice
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">All Notices</h2>
      {notices.map((notice) => (
        <div key={notice.id} className="border p-3 mb-3 rounded bg-gray-100">
          <h3 className="font-bold">{notice.heading}</h3>
          <p>{notice.description}</p>
          <div className="mt-2 space-x-2">
            <button
              onClick={() => handleEdit(notice)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(notice.id)}
              className="bg-red-600 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default AdminNoticePanel;



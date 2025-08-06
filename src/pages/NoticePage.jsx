import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const NoticePage = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const noticeRef = collection(db, "notices");
      const data = await getDocs(noticeRef);
      setNotices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchNotices();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto py-30">
      <h1 className="text-4xl font-bold mb-10">School Notices</h1>
      {notices.map((notice) => (
        <div key={notice.id} className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="font-bold text-3xl">{notice.heading}</h2>
          <p className="text-sm text-gray-600 overflow-hidden">{notice.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoticePage;

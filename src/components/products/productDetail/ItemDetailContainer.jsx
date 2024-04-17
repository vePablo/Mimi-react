import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc} from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Spinner } from "react-bootstrap"; // Importamos Spinner de React Bootstrap

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "mimi-react", id);
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id });
      });
  }, [id]);

  if (!item) {
    return (
      <>
        <Spinner animation="border" role="status"> {/* Utilizamos el Spinner de React Bootstrap */}
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    );
  }

  return (
    <ItemDetail item={item} />
  );
};

export default ItemDetailContainer;

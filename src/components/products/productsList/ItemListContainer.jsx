/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [title, setTitle] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {
    const productosRef = collection(db, "mimi-react");

    // buscar por categoria
    const busCat = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;
     

    getDocs(busCat).then((res) => {
      setProductos(
        res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
          
        })
      );
    });
  }, [category]);

  return <ItemList productos={productos} title={title} />;
};

export default ItemListContainer;

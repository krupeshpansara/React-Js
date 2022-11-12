import React, { useState } from "react";
import { useEffect } from "react";
import Bg from "../imges/img1.png";

const GetAllItems = () =>{
  let List = localStorage.getItem("AllItems")
  if(List){
    return JSON.parse(List);
  }else{
    return [];
  }
}

function Toodo() {
  const [Items, setItems] = useState("");
  const [AllItems, setAllItems] = useState(GetAllItems);
  const [ChengBtn, setChengBtn] = useState(true);
  const [Editid, setEditid] = useState();

  // AddItems
  const AddItems = () => {
    if (Items) {
      const ItemsObject = {
        id: new Date().getTime().toString(),
        name: Items,
      };
      setAllItems([...AllItems, ItemsObject]);
      setItems("");
    } else {
      alert("enter value");
    }
  };

  // DeleteItems
  const DeleteItems = (id) => {
    const UpdetedItems = AllItems.filter((elem, index) => {
      return id !== elem.id;
    });
    setAllItems(UpdetedItems);
  };

  // Edititem
  const Edititem = (val) => {
    setItems(val.name);
    setChengBtn(false);
    setEditid(val.id);
  };

  // ItemsEdit
  const ItemsEdit = () => {
    setAllItems(
      AllItems.map((elem) => {
        if (elem.id === Editid) {
          return { ...elem, name: Items };
        }
        return elem;
      })
    );
    console.log(Items);
    setChengBtn(true);
    setItems("");
  };

  // RemoveAll
  const RemoveAll = () => {
    setAllItems([]);
  };

useEffect(() => {
  localStorage.setItem("AllItems" , JSON.stringify(AllItems));
}, [AllItems])

  return (
    <div className="toodo">
      <img src={Bg} alt="background imge" className="background_imge" />
      <div className="toodo_box_A">
        <div className="toodo_box_B">
          <h1>Toodo App</h1>
          <div className="input_box">
            <input
              type="text"
              name="items"
              className="toodo_input"
              placeholder="✍️ Add Items"
              value={Items}
              onChange={(e) => {
                setItems(e.target.value);
              }}
            />
            {ChengBtn ? (
              <button onClick={() => AddItems()}>Add</button>
            ) : (
              <button onClick={() => ItemsEdit()}>Edit</button>
            )}
          </div>
          <div className="toodo_list">
            {AllItems.map((val) => {
              return (
                <div className="toodo_items_box" key={val.id}>
                  <div className="items_name">{val.name}</div>
                  <div className="btn_group">
                    <div onClick={() => Edititem(val)}>
                      <i className="fa-solid fa-feather"></i>
                    </div>
                    <div onClick={() => DeleteItems(val.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn">
            <button onClick={() => RemoveAll()}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toodo;

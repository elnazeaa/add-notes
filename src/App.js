import { useEffect, useState } from "react";
import "./App.css";
import IsAlert from "./components/IsAlert";
import Lists from "./components/Lists";
import SearchForm from "./components/SearchForm";

const getLocalItems = () => {
  let getItems = localStorage.getItem("items");
  if (getItems) {
    return (getItems = JSON.parse(localStorage.getItem("items")));
  } else {
    return [];
  }
};

function App() {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState(getLocalItems());
  const [edit, setEdit] = useState(false);
  const [isalert, setIsAlert] = useState({
    alert: true,
    msg: "",
    type: "",
  });
  const [isAlarm, setIsAlarm] = useState(false);
  const [editId, setEditId] = useState("");

  const handleGetInputValue = (e) => {
    setListName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(lists));
  }, [lists]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!listName) {
      setIsAlarm(true);
      createAlert(true, "Please Enter List", "danger");
    } else if (edit && listName) {
      let newList = lists.map((item) => {
        if (item.id === editId) {
          return { ...item, name: listName };
        }
        return item;
      });
      setLists(newList);
      setEditId("");
      setListName("");
      setEdit(false);
    } else {
      setIsAlarm(true);
      setLists([
        ...lists,
        { id: new Date().getTime().toString(), name: listName },
      ]);
      createAlert(true, "List added successfuly", "success");
      setListName("");
    }
  };

  const createAlert = (alert = false, msg = "", type = "") => {
    return setIsAlert({ alert, msg, type });
  };

  const removeItems = (id) => {
    let newLists = lists.filter((item) => item.id !== id);
    setLists(newLists);
    setIsAlarm(true);
    createAlert(true, "One List is removed", "danger");
  };

  const handleEditList = (id, name) => {
    setEdit(true);
    setListName(name);
    setEditId(id);
  };

  return (
    <div className="App">
      <section className="section-center">
        {isAlarm ? (
          <IsAlert isalert={isalert} createAlert={createAlert} lists={lists} />
        ) : (
          ""
        )}
        <SearchForm
          listName={listName}
          handleGetInputValue={handleGetInputValue}
          handleSubmitForm={handleSubmitForm}
          edit={edit}
        />
        <div className="grocery-container">
          {lists.length !== 0 ? (
            <Lists
              lists={lists}
              removeItems={removeItems}
              handleEditList={handleEditList}
            />
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";

function App() {
  const [listName, setListName] = useState("");
  const [lists, setLists] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleGetInputValue = (e) => {
    setListName(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <section className="section-center">
        <SearchForm
          listName={listName}
          handleGetInputValue={handleGetInputValue}
          handleSubmitForm={handleSubmitForm}
        />
      </section>
    </div>
  );
}

export default App;

// I based my program on the studio 5.
// And I got my data from studio 5 as well.

import './App.css';
import { useState } from "react";
import BakeryItem from './BakeryItem';
import bakeryData from "./bakery-data.json";
import CategoryButtons from "./CategoryButtons";
import CategoryButtons2 from "./CategoryButtons2";
import SortButtons from "./SortButtons";

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


// I learned how to create a filter from this website:
// https://www.freecodecamp.org/news/how-to-make-a-filter-component-in-react/
function App() {

  const [count,setCount] = useState(0);
  const [stuff,setStuff] = useState([]);
  const [list, setList] = useState(bakeryData);
  const [sorted, setSorted] = useState("Price");
  const [filter1, setFilter1] = useState("All");
  const [filter2, setFilter2] = useState([]);

  function handleCount(val,item,bool) {
    if (bool) {
      setStuff(old => [...old, item]);
      setCount(count + val);
    }
    if (!bool) {
      let index = stuff.findIndex((t) => t == item);
      if (index != -1) {
        setCount(count + val);
        setStuff([
          ...stuff.slice(0, index),
          ...stuff.slice(index + 1)
        ]);
      }
    }
  }

  function handelFilter1(item) {
    setFilter1(item);
  }

  function handleRemove2(item) {
    let temp = item.split(" ")[0];
    setFilter2(current => current.filter(element => {
        return element !== temp;
      }),
    );
  }

  function handelFilter2(item) {
    setFilter2(current => [...current, item]);
  }


  function handleSort(item) {
    setSorted(item);
  }

  function filterCategory1(cat) {
    handelFilter1(cat);
    if (filter2.length == 0) {
      if (cat == "All") {
        setList(bakeryData);
      } else {
        const newList = bakeryData.filter((temp) => {
          return temp.category === cat;
        })
        setList(newList);
      }
    } else if (filter2.length == 1) {
      if (cat == "All") {
        const newList = bakeryData.filter((temp) => {
          return temp.category2.includes(filter2[0]);
        })
        setList(newList);
      } else {
        const newList = bakeryData.filter((temp) => {
          return temp.category === cat && temp.category2.includes(filter2[0]);
        })
        setList(newList);
      }
    } else if (filter2.length == 2) {
      if (cat == "All") {
        const newList = bakeryData.filter((temp) => {
          return temp.category2.includes(filter2[0]) && temp.category2.includes(filter2[1]);
        })
        setList(newList);
      } else {
        const newList = bakeryData.filter((temp) => {
          return temp.category === cat && temp.category2.includes(filter2[0]) && temp.category2.includes(filter2[1]);
        })
        setList(newList);
      }
    } else {
      if (cat == "All") {
        const newList = bakeryData.filter((temp) => {
          return temp.category2.includes(filter2[0]) && temp.category2.includes(filter2[1]) && temp.category2.includes(filter2[2]);
        })
        setList(newList);
      } else {
        const newList = bakeryData.filter((temp) => {
          return temp.category === cat && temp.category2.includes(filter2[0]) && temp.category2.includes(filter2[1]) && temp.category2.includes(filter2[2]);
        })
        setList(newList);
      }
    }
  }
  
  function filterCategory2(cat) {
    let len = cat.split(" ").length;
    if (len == 1) {
      handelFilter2(cat);
      if (filter2.length == 0) {
        if (filter1 == "All") {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(cat);
          })
          setList(newList);
        } else {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(cat) && temp.category === filter1;
          })
          setList(newList);
        }
      } else if (filter2.length == 1) {
        if (filter1 == "All") {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(filter2[0]) && temp.category2.includes(cat);
          })
          setList(newList);
        } else {
          const newList = bakeryData.filter((temp) => {
            return temp.category === filter1 && temp.category2.includes(filter2[0]) && temp.category2.includes(cat);
          })
          setList(newList);
        }
      } else {
        if (filter1 == "All") {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(filter2[0]) && temp.category2.includes(filter2[1]) && temp.category2.includes(cat);
          })
          setList(newList);
        } else {
          const newList = bakeryData.filter((temp) => {
            return temp.category === filter1 && temp.category2.includes(filter2[0]) && temp.category2.includes(filter2[1]) && temp.category2.includes(cat);
          })
          setList(newList);
        }
      }
    } else {
      handleRemove2(cat);
      let tempcat = cat.split(" ")[0];
      let tempList = filter2;
      tempList = tempList.filter(element => element !== tempcat);
      let tempLen = tempList.length;
      if (tempLen == 0) {
        if (filter1 == "All") {
          setList(bakeryData);
        } else {
          const newList = bakeryData.filter((temp) => {
            return temp.category === filter1;
          })
          setList(newList);
        }
      } else if (tempLen == 1) {
        if (filter1 == "All") {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(tempList[0]);
          })
          setList(newList);
        } else {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(tempList[0]) && temp.category === filter1;
          })
          setList(newList);
        }
      } else {
        if (filter1 == "All") {
          const newList = bakeryData.filter((temp) => {
            return temp.category2.includes(tempList[0]) && temp.category2.includes(tempList[1]);
          })
          setList(newList);
        } else {
          const newList = bakeryData.filter((temp) => {
            return temp.category === filter1 && temp.category2.includes(tempList[0]) && temp.category2.includes(tempList[1]);
          })
          setList(newList);
        }
      }
    }
  }

  const setOrder = (a,b) => {
    if (sorted === "Price") {
      return a.price - b.price;
    } else if (sorted === "Rating") {
      return b.rating - a.rating;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <div class="TotalPrice">
            <h2>Total price: ${count}</h2>
          </div>
        <div class="filters">
          <div>
            <CategoryButtons filterCategory={filterCategory1}/>
            <span class="abc">
              <CategoryButtons2 filterCategory={filterCategory2} val={"Dairy-free"}/>
              <CategoryButtons2 filterCategory={filterCategory2} val={"Nut-free"}/>
              <CategoryButtons2 filterCategory={filterCategory2} val={"Gluten-free"}/>
            </span>
            <SortButtons handleSort={handleSort} />
          </div>
          <div>
            Shopping Cart :
            {stuff.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
        <div class="List">
          {list.sort(setOrder).map((item, index) => ( 
            <BakeryItem key={index} item={item} handleCount={handleCount} stuff={stuff}/>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

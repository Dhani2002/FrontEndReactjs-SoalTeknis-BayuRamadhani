import './App.css';
import { getRestaurants, searchRestaurants, getDetail } from './Restaurant';
import { useEffect, useState } from 'react';

const App = () => {

  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
   getRestaurants().then((result) => {
    setRestaurants(result);
   })
  }, [])

  const details = async(id) => {
    const detail = await getDetail(id);
    return
  }

  const ListRestaurant = () => {
    return restaurants.map((restaurants) => {
      return (
        <div className="listRestaurants" key={restaurants.id}>
          <img src={restaurants.pictureId} alt="" className="Image" />
          <div className="Name">{restaurants.name}</div>
          <div className="Rating">Rating: {restaurants.rating}</div>
          <div className="City">Location: {restaurants.city}</div>
          <button className='Btn' onClick={details}>More Info</button>
        </div>
      )
    })
  }

  const search = (q) => {
    console.log(q)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurants</h1>
        <div className="Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est, recusandae suscipit, quae maxime natus odio nostrum quas laudantium voluptatem inventore veniam et quasi vitae a aperiam cum neque dicta.</div>
        <form action="" className="Search">
          <label htmlFor="">Filter by:</label>
          <div className="CheckStatus">
            <input type="checkbox" name="Open" id="" onChange={({target}) => search(target.value)}/>
            <label htmlFor="open">Open Now</label>
          </div>
          <div className="CheckPrice">
            <select name="Price" id="" onChange={({target}) => search(target.value)}>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className="CheckCategory">
            <select name="Category" id="" onChange={({target}) => search(target.value)}>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <button type="submit">Search</button>
        </form>
        <h3>All Restaurants</h3>
        <div className="Restaurants">
          <ListRestaurant />
        </div>
      </header>
    </div>
  );
}

export default App;

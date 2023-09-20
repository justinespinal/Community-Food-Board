import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <img src="img/awning.png" className="awning"></img>
      <h1 className='food_header'>Ozone Park, NY Food Favorites</h1>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td><Card name="Compadres Mexican Restaurant" type="Mexican" src="img/tacos.jpg" menu="https://compadresrestaurant.com/"/></td>
            <td><Card name="Mia Halal" type="Halal" src="img/halal.jpg" menu="https://www.miahalalfood.com/"/></td>
            <td><Card name="Libertad Restaraunt" type="Dominican" src="img/libertad.png" menu="https://libertadrestaurant.dine.online/locations/728568?fulfillment=pickup"/></td>
            <td><Card name="Aldo's Pizza II" type="Italian" src="img/aldos.jpg" menu="https://www.aldosozonepark.com/"/></td>
            <td><Card name="Hana Asian Bistro" type="Japanese" src="img/hana.jpg" menu="https://hanabistro.com/"/></td>
          </tr>
          <tr>
            <td><Card name="The Rock Restaraunt" type="Dominican" src="img/rock.png" menu="https://places.singleplatform.com/the-rock-restaurant--diner/menu?ref=google"/></td>
            <td><Card name="Jing Wah" type="Chinese" src="img/wah.jpg" menu="https://www.allmenus.com/ny/ozone-park/361251-jing-wah/menu/"/></td>
            <td><Card name="Pollo Inka" type="Peruvian" src="img/peru.jpg" menu="https://www.elpolloinkaperu.com/"/></td>
            <td><Card name="Mr. Chicken & Mrs. Tea" type="Korean" src="img/chicken.jpg" menu="https://www.yelp.com/biz/mr-chicken-and-mrs-tea-ozone-park"/></td>
            <td><Card name="Gyro Qila" type="Halal" src="img/gyro.jpg" menu="https://www.seamless.com/menu/gyro-qila-9400-liberty-ave-ozone-park/2415495"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
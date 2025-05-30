import React from 'react';
import ReactDOM from 'react-dom/client';
/*
    Header
    -Logo
    -Nav Item
    Body
    -SearchBar
    -Restaurant Container
        -Restaurant Card
        -Img
        -Name of Restaurant, Rating, Cuisine, delivery time, cost for two, etc
        
    Footer
    -Links
    -CopyRight
    -Address
    -Conrtact
*/

const resCardObj = [
    {
    "id": "234875",
    "name": "Adil Hotel",
    "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    "locality": "Rautha Wada",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Tandoor"
    ],
    "avgRating": 4.3,
    "parentId": "27123",
    "avgRatingString": "4.3",
    "totalRatingsString": "1.3K+",
    "sla": {
    "deliveryTime": 38,
    "lastMileTravel": 11.5,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "11.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-05-31 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹129"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
{
        "id": "151649",
    "name": "Hotel Sai Nath & Sai Restaurant",
    "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
    "locality": "railway station",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Chinese",
    "Beverages",
    "Fast Food",
    "Desserts"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "101802",
    "avgRatingString": "4.4",
    "totalRatingsString": "1.0K+",
    "sla": {
    "deliveryTime": 45,
    "lastMileTravel": 11.3,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "11.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    }
},
{
    "id": "151656",
    "name": "Dev International",
    "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
    "locality": "khajri road",
    "areaName": "Mohan Nagar",
    "costForTwo": "₹100 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "Fast Food",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "71556",
    "avgRatingString": "4.3",
    "totalRatingsString": "505",
    "sla": {
    "deliveryTime": 55,
    "lastMileTravel": 13.6,
    "serviceability": "SERVICEABLE",
    "slaString": "50-55 mins",
    "lastMileTravelString": "13.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    }  
},
{
    "id": "151518",
    "name": "Bakery World",
    "cloudinaryImageId": "mt2aggiscfl3yviatwng",
    "locality": "Parasia Road",
    "areaName": "Parasia Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Bakery",
    "Ice Cream",
    "Snacks",
    "Beverages"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "40363",
    "avgRatingString": "4.4",
    "totalRatingsString": "268",
    "sla": {
    "deliveryTime": 46,
    "lastMileTravel": 14.1,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "14.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    }
},
{
    "id": "151648",
    "name": "Mr. Gurung Momo & Chinese Corner",
    "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
    "locality": "Teacher's Colony",
    "areaName": "Mohan Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Momos",
    "Chinese",
    "Fast Food"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "140255",
    "avgRatingString": "4.3",
    "totalRatingsString": "1.1K+",
    "sla": {
    "deliveryTime": 51,
    "lastMileTravel": 13.2,
    "serviceability": "SERVICEABLE",
    "slaString": "50-55 mins",
    "lastMileTravelString": "13.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    }
},
{
    "id": "151515",
    "name": "Gupta Bhojnalay",
    "cloudinaryImageId": "jo9pdipf4elcuch8g55q",
    "locality": "fulwara chowk",
    "areaName": "Chhindwara Locality",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Fast Food",
    "Indian",
    "Beverages"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "91635",
    "avgRatingString": "4.6",
    "totalRatingsString": "448",
    "sla": {
    "deliveryTime": 44,
    "lastMileTravel": 11.8,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "11.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    }
}
];

const RestaurantCard = (props) => {
    // console.log(props);
    return (

        <>
            {props.resData.map((resData) => (
                <div className="res-card" key={resData.id}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.cloudinaryImageId} alt="restaurant" className="res-img" />
                    <h3>{resData.name}</h3> 
                    <h4>Rating : {resData.avgRating}</h4>
                    <h5>{resData.cuisines.join(", ")}</h5>
                    <h6>Delivery Time: {resData.sla.slaString}</h6>
                </div>
            ))}
        </>
    )
};

const Body = () => {
    
    return (

        <div className="Body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resCardObj}/>
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>



        </div>
    )
};


const Header = () => {

    return(
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuQvFTMZL-DSvIVT2v9fx9eF1nj81t9aoWw&s" alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const AppLayout = () => {
    return(
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
const apiKey = 'XQrTr69Ec8VrzdS29pFLXbklsZlBV_Z9Ck15VcGq8enNIerS1zQMhbC5MfXY3N0JlH8oMXDJDyEoZxqO7LMqgzQiW2hmCf0uPbIbBGveyc0AByaC8W5juU6DwcYlW3Yx';


const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          businessUrl: business.url
        }));
      }
    });
  }
};



export default Yelp;

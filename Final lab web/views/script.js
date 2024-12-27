const BASE_URL = 'http://localhost:3000';

// Add Attraction
document
  .getElementById('addAttractionForm')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('attractionName').value;
    const location = document.getElementById('attractionLocation').value;
    const entryFee = document.getElementById('attractionFee').value;

    const response = await fetch(`${BASE_URL}/attractions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, location, entryFee }),
    });

    const result = await response.json();
    alert(response.ok ? 'Attraction added successfully!' : result.error);
  });

// Add Visitor
document
  .getElementById('addVisitorForm')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('visitorName').value;
    const email = document.getElementById('visitorEmail').value;

    const response = await fetch(`${BASE_URL}/visitors`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    const result = await response.json();
    alert(response.ok ? 'Visitor added successfully!' : result.error);
  });

// View Attractions
document
  .getElementById('viewAttractionsBtn')
  .addEventListener('click', async () => {
    const response = await fetch(`${BASE_URL}/attractions`);
    const attractions = await response.json();
    const list = document.getElementById('attractionsList');
    list.innerHTML = attractions
      .map((a) => `<li>${a.name} (${a.location}) - $${a.entryFee}</li>`)
      .join('');
  });

// View Top-Rated Attractions
document
  .getElementById('viewTopAttractionsBtn')
  .addEventListener('click', async () => {
    const response = await fetch(`${BASE_URL}/attractions/top-rated`);
    const attractions = await response.json();
    const list = document.getElementById('topAttractionsList');
    list.innerHTML = attractions
      .map((a) => `<li>${a.name} - Rating: ${a.rating}</li>`)
      .join('');
  });

// Post Review
document
  .getElementById('postReviewForm')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const attraction = document.getElementById('reviewAttractionId').value;
    const visitor = document.getElementById('reviewVisitorId').value;
    const score = document.getElementById('reviewScore').value;
    const comment = document.getElementById('reviewComment').value;

    const response = await fetch(`${BASE_URL}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attraction, visitor, score, comment }),
    });

    const result = await response.json();
    alert(response.ok ? 'Review posted successfully!' : result.error);
  });

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const cityName = document.getElementById('city-name');
  const unitC = document.getElementById('unit-c');
  const unitF = document.getElementById('unit-f');
  const tempVal = document.getElementById('temp-val');

  let currentTempCelsius = 15;
  let isCelsius = true;

  searchBtn.addEventListener('click', () => {
    handleSearch();
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  function handleSearch() {
    const value = searchInput.value.trim();
    if (value !== '') {
      cityName.textContent = value.charAt(0).toUpperCase() + value.slice(1);
      searchInput.value = '';
    }
  }

  unitC.addEventListener('click', () => {
    if (!isCelsius) {
      isCelsius = true;
      unitC.classList.add('active-unit');
      unitC.classList.remove('inactive-unit');
      unitF.classList.add('inactive-unit');
      unitF.classList.remove('active-unit');

      tempVal.textContent = currentTempCelsius;
    }
  });

  unitF.addEventListener('click', () => {
    if (isCelsius) {
      isCelsius = false;
      unitF.classList.add('active-unit');
      unitF.classList.remove('inactive-unit');
      unitC.classList.add('inactive-unit');
      unitC.classList.remove('active-unit');
      
      const tempFahrenheit = Math.round((currentTempCelsius * 9/5) + 32);
      tempVal.textContent = tempFahrenheit;
    }
  });
});

import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        countries: [],
        filterCountry: ""
    },

    mounted(){
        console.log("Instance has mounted");
    },
    computed: {
        totalPopulation: function(){
          return this.countries.reduce((runningTotal, country) => {
            return runningTotal + country.population;
          }, 0);
        },
    filteredCountries: function(){
        return this.countries.filter((country) => {
          return country.name === this.filterCountry;
        });
      },
    },
    methods: {
        fetchCountries: function(){
            fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then ( data => this.countries = data)
            .catch( err => console.error(err))
          },
    },
    });
});

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Autocomplete() {

    const [countries, setCountries] = useState([]); 
    const [states, setStates] = useState([]); 

    // useEffect(() => {
    //     async function fetchCountries() {
    //         try {
    //             const response = await axios.get('http://localhost:8080/api/states'); // Replace with the actual API endpoint
    //             setCountries(response.data); // Assuming the API returns an array of country names
    //         } catch (error) {
    //             console.error('Error fetching countries:', error);
    //         }
    //     }

    //     fetchCountries();
    // }, []); 

    console.log(countries);

    useEffect(() => {

        async function fetchCountries() {
            try {
                const response = await axios.get('http://localhost:8080/api/states'); // Replace with the actual API endpoint
                setCountries(response.data); // Assuming the API returns an array of country names
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }

        fetchCountries(); 

        countries.map()



        async function fetchCountries() {
            try {
                const response = await axios.get('http://localhost:8080/api/states'); // Replace with the actual API endpoint
                setCountries(response.data); // Assuming the API returns an array of country names
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }

        fetchCountries();

        function autocomplete(inp, arr) {
            var currentFocus;

            inp.addEventListener("input", function (e) {
                var a, b, i, val = this.value;
                closeAllLists();
                if (!val) { return false; }
                currentFocus = -1;
                a = document.createElement("DIV");
                a.setAttribute("id", this.id + "autocomplete-list");
                a.setAttribute("class", "autocomplete-items");
                this.parentNode.appendChild(a);
                for (i = 0; i < arr.length; i++) {
                    if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                        b = document.createElement("DIV");
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        b.addEventListener("click", function (e) {
                            inp.value = this.getElementsByTagName("input")[0].value;
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
            });

            inp.addEventListener("keydown", function (e) {
                var x = document.getElementById(this.id + "autocomplete-list");
                if (x) x = x.getElementsByTagName("div");
                if (e.keyCode === 40) {
                    currentFocus++;
                    addActive(x);
                } else if (e.keyCode === 38) {
                    currentFocus--;
                    addActive(x);
                } else if (e.keyCode === 13) {
                    e.preventDefault();
                    if (currentFocus > -1) {
                        if (x) x[currentFocus].click();
                    }
                }
            });

            function addActive(x) {
                if (!x) return false;
                removeActive(x);
                if (currentFocus >= x.length) currentFocus = 0;
                if (currentFocus < 0) currentFocus = (x.length - 1);
                x[currentFocus].classList.add("autocomplete-active");
            }

            function removeActive(x) {
                for (var i = 0; i < x.length; i++) {
                    x[i].classList.remove("autocomplete-active");
                }
            }

            function closeAllLists(elmnt) {
                var x = document.getElementsByClassName("autocomplete-items");
                for (var i = 0; i < x.length; i++) {
                    if (elmnt != x[i] && elmnt != inp) {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
            }

            document.addEventListener("click", function (e) {
                closeAllLists(e.target);
            });
        }

        // var countries = [
        //     "Afghanistan", "Albania", "Algeria", // ... (remaining countries)
        // ];

        autocomplete(document.getElementById("myInput"), countries);
    }, []);

    return (
        <div>
            <h2>Autocomplete</h2>
            <p>Start typing:</p>

            <form autoComplete="on"> 
                <div className="autocomplete" style={{ width: '300px' }}>
                    <input id="myInput" type="text" name="myCountry" placeholder="Country" />
                </div>
                <input type="submit" />
            </form>

        </div>
    );
}

export default Autocomplete;
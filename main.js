// Mapping of country codes to country names
const countryNames = {
    "fi": "Finland",
    "se": "Sweden",
    "nl": "Netherlands",
    "dk": "Denmark",
    "de": "Germany",
    "ie": "Ireland",
    "be": "Belgium",
    "pl": "Poland",
    "lt": "Lithuania",
    "ee": "Estonia",
    "pt": "Portugal",
    "ro": "Romania",
    "cz": "Czech Republic",
    "at": "Austria",
    "hr": "Croatia",
    "fr": "France",
    "es": "Spain",
    "hu": "Hungary",
    "sk": "Slovakia",
    "lv": "Latvia",
    "si": "Slovenia",
    "bg": "Bulgaria",
    "gr": "Greece",
    "it": "Italy",
    "lu": "Luxembourg",
    "mt": "Malta",
    "cy": "Cyprus"
};

const countryPopulations = {
    "fi": 5527573,
    "se": 10327589,
    "nl": 17441139,
    "dk": 5831404,
    "de": 83166711,
    "ie": 4994724,
    "be": 11589623,
    "pl": 38386000,
    "lt": 2794700,
    "ee": 1328976,
    "pt": 10295909,
    "ro": 19237691,
    "cz": 10701777,
    "at": 8917205,
    "hr": 4047200,
    "fr": 67391582,
    "es": 47351567,
    "hu": 9769526,
    "sk": 5456362,
    "lv": 1901548,
    "si": 2100126,
    "bg": 6951482,
    "gr": 10423054,
    "it": 60244639,
    "lu": 634814,
    "mt": 514564,
    "cy": 888005
};

// Function to fetch the flag URL from Wikipedia
function fetchFlagUrl(countryName) {
    const specialCases = {
        "Netherlands": "Flag_of_the_Netherlands",
        "Czech Republic": "Flag_of_the_Czech_Republic"
    };

    const title = specialCases[countryName] || `Flag_of_${countryName.replace(/ /g, '_')}`;
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=500&titles=${title}`;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const pages = data.query.pages;
            const page = Object.values(pages)[0];
            return page.thumbnail ? page.thumbnail.source : null;
        })
        .catch(error => {
            console.error('Error fetching flag:', error);
            return null;
        });
}
// Function to display countries
function displayCountries(countries, showUpdateMessage = false) {
    const parentDiv = document.getElementById('myDiv');
    parentDiv.innerHTML = ''; // Clear existing content

    // Fetch all flag URLs
    const flagPromises = countries.map(item => {
        const countryName = countryNames[item.countryCode] || item.countryCode;
        return fetchFlagUrl(countryName).then(flagUrl => ({
            ...item,
            flagUrl
        }));
    });

    // Wait for all flag URLs to be fetched
    Promise.all(flagPromises).then(countriesWithFlags => {
        countriesWithFlags.forEach(item => {

            // Calculate signatures per capita
            const population = countryPopulations[item.countryCode];
            const signaturesPerCapita = population ? (item.totalCount / population) * 100 : 0;

            // Create a new div element for each item
            const div = document.createElement('div');
            div.className = "country-data";

            // Create an img element for the flag if available
            if (item.flagUrl) {
                const flagImg = document.createElement('img');
                flagImg.className = 'country-flag';
                flagImg.src = item.flagUrl;
                flagImg.alt = `${countryNames[item.countryCode]} Flag`;

                switch (item.countryCode) {
                    case 'fi':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'se':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'nl':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'dk':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'de':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'ie':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'be':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'pl':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'lt':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'ee':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'pt':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'ro':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'cz':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'at':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'hr':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'fr':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'es':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'hu':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'sk':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'lv':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'si':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'bg':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'gr':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'it':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'lu':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecifirstoption';
                        });
                        break;
                    case 'mt':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    case 'cy':
                        flagImg.addEventListener('click', () => {
                            window.location.href = 'https://www.stopkillinggames.com/ecisecondoption';
                        });
                        break;
                    default: break;
                }
                div.appendChild(flagImg);
            }

            // Create a new p element for the country name
            const countryNameElement = document.createElement('p');
            countryNameElement.className = 'country-name';
            countryNameElement.textContent = `${countryNames[item.countryCode] || item.countryCode}`;

            // Create a new p element for the total count
            const totalCountElement = document.createElement('p');
            totalCountElement.className = 'total-count';
            totalCountElement.textContent = `Total Count: ${item.totalCount.toLocaleString()}`;

            // Create a new p element for the threshold
            const tresholdElement = document.createElement('p');
            tresholdElement.className = 'treshold';
            tresholdElement.textContent = `Threshold: ${item.treshold.toLocaleString()}`;

            // Create the signatures per capita element
            const signaturesPerCapitaElement = document.createElement('p');
            signaturesPerCapitaElement.className = 'signatures-per-capita';
            signaturesPerCapitaElement.textContent = `Signatures/Capita: ${signaturesPerCapita.toFixed(2)}%`;

            // Create a progress bar for the country
            const countryProgressBar = document.createElement('div');
            countryProgressBar.className = 'progress-bar';

            const progressBarFill = document.createElement('div');
            progressBarFill.className = 'progress';
            const progressBarSecondFill = document.createElement('div');
            progressBarSecondFill.className = 'progress-second';
            const progressBarThirdFill = document.createElement('div');
            progressBarThirdFill.className = 'progress-third';

            // Calculate the width for each layer
            const percentage = item.percentage;
            const firstLayerWidth = Math.min(percentage, 100);
            const secondLayerWidth = Math.min(Math.max(percentage - 100, 0), 100);
            const thirdLayerWidth = Math.min(Math.max(percentage - 200, 0), 100);

            progressBarFill.style.width = `${firstLayerWidth}%`;
            progressBarSecondFill.style.width = `${secondLayerWidth}%`;
            progressBarThirdFill.style.width = `${thirdLayerWidth}%`;

            // Conditionally add the border class
            if (firstLayerWidth > 1) {
                progressBarFill.classList.add('progress-divider');
            }
            if (secondLayerWidth > 1) {
                progressBarSecondFill.classList.add('progress-divider');
            }
            if (thirdLayerWidth > 1) {
                progressBarThirdFill.classList.add('progress-divider');
            }


            // Create a span element for the percentage text
            const percentageText = document.createElement('span');
            percentageText.className = 'percentage-text';
            percentageText.textContent = `${percentage.toLocaleString()}%`;



            // Create a new p element for the disclaimer
            const disclaimerElement = document.createElement('p');
            disclaimerElement.className = 'fullDisclaimer';
            disclaimerElement.textContent = `Your signature still matters!`;


            // Append the filled progress bars to the progress bar container
            countryProgressBar.appendChild(progressBarFill);
            countryProgressBar.appendChild(progressBarSecondFill);
            countryProgressBar.appendChild(progressBarThirdFill);

            // Append the percentage text to the progress bar container
            countryProgressBar.appendChild(percentageText);




            // Add the correct frame based on the progress
            if (percentage >= 300) {
                div.classList.add('gold-frame');
            }
            else if (percentage >= 200) {
                div.classList.add('silver-frame');
            }
            else if (percentage >= 100) {
                div.classList.add('bronze-frame');
            }

            // Append the country name, total count, threshold, signatures per capita, and progress bar to the main div
            div.appendChild(countryNameElement);
            div.appendChild(totalCountElement);
            div.appendChild(tresholdElement);
            div.appendChild(signaturesPerCapitaElement);
            div.appendChild(countryProgressBar);
            if ((percentage >= 100) && !showUpdateMessage) {
                div.appendChild(disclaimerElement);
            }

            // Only add "Data is updated every 5 minutes" if showUpdateMessage is true
            if (showUpdateMessage) {
                const updateInfo = document.createElement('p');
                updateInfo.className = 'update-info'; // give it a unique class
                updateInfo.textContent = 'Data is updated every 5 minutes.';
                div.appendChild(updateInfo);
            }

            // Append the new div element to the parent div
            parentDiv.appendChild(div);
        });
    });
}

// Function to sort countries and update the display
function sortCountries(order = 'desc', sortBy = 'percentage') {
    fetch('https://stopkillinggamesdata.montoria.se/')
        .then(response => response.json())
        .then(data => {
            const sortedCountries = [...data.signatureCountryCount].sort((a, b) => {
                if (sortBy === 'percentage') {
                    return order === 'asc' ? a.percentage - b.percentage : b.percentage - a.percentage;
                } else if (sortBy === 'totalCount') {
                    return order === 'asc' ? a.totalCount - b.totalCount : b.totalCount - a.totalCount;
                } else if (sortBy === 'alphabetical') {
                    const nameA = countryNames[a.countryCode] || a.countryCode;
                    const nameB = countryNames[b.countryCode] || b.countryCode;
                    return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
                } else if (sortBy === 'perCapita') {
                    const perCapitaA = a.totalCount / countryPopulations[a.countryCode];
                    const perCapitaB = b.totalCount / countryPopulations[b.countryCode];
                    return order === 'asc' ? perCapitaA - perCapitaB : perCapitaB - perCapitaA;
                }
            });

            displayCountries(sortedCountries);
        })
        .catch(error => console.error('Error:', error));
}

// Add event listeners for the dropdown alternatives
document.getElementById('sortAsc').addEventListener('click', () => {
    sortCountries('asc');
});

document.getElementById('sortDesc').addEventListener('click', () => {
    sortCountries('desc');
});

document.getElementById('sortTotalAsc').addEventListener('click', () => {
    sortCountries('asc', 'totalCount');
});

document.getElementById('sortTotalDesc').addEventListener('click', () => {
    sortCountries('desc', 'totalCount');
});

document.getElementById('sortAlphaAsc').addEventListener('click', () => {
    sortCountries('asc', 'alphabetical');
});

document.getElementById('sortAlphaDesc').addEventListener('click', () => {
    sortCountries('desc', 'alphabetical');
});

document.getElementById('sortPerCapitaAsc').addEventListener('click', () => {
    sortCountries('asc', 'perCapita');
});

document.getElementById('sortPerCapitaDesc').addEventListener('click', () => {
    sortCountries('desc', 'perCapita');
});

let start, msSpent = 0;

// Function to fetch and update total progress data
async function updateTotalProgress() {
    while (true) {
        try {
            start = Date.now();
            const response = await fetch('https://eci.ec.europa.eu/045/public/api/report/progression')
            const data = await response.json()
            msSpent = (Date.now() - start) 
            const { signatureCount, goal } = data;
            if (signatureCount >= goal) {
                displayFireworks();
            }
            // Calculate the percentage towards the goal
            const percentage1 = ((signatureCount / goal) * 100).toFixed(2);

            const percentage2 = (((signatureCount - 1000000) / 1000000) * 100).toFixed(2);

            if (previousSignatureCount < signatureCount && previousSignatureCount !== 0) {
                fetchTodaySignatures();
            }

            // Update the total progress div with the calculated values
            if (document.querySelector('.total-label').innerText != `Total Signatures:`) {
                document.querySelector('.total-label').innerText = `Total Signatures:`;
                document.querySelector('.total-label').classList.remove('loading');
            }
            if (document.querySelector('.total-count').innerText != `${signatureCount.toLocaleString()}`) {
                await updateCountUI(signatureCount, previousSignatureCount, document.querySelector('.total-count'));
            }

            if (document.querySelector('.percentage-to-goal').innerText != `Percentage to Goal: ${percentage1.toLocaleString()}%`) {
                document.querySelector('.percentage-to-goal').innerText = `Percentage to Goal: ${percentage1.toLocaleString()}%`;
                document.title = `${percentage1.toLocaleString()}% - Stop Killing Games Tracker`;
            }

            if (percentage1 >= 100) {

                document.querySelector('.goal-reached-encouragement').removeAttribute('style');
                if (document.querySelector('.total-progress').querySelector('.progress').style.width != `100%`) {
                    document.querySelector('.total-progress').querySelector('.progress').style.width = `100%`;
                }
                if (document.querySelector('.total-progress').querySelector('.extra-progress').style.width != `${percentage2}%`) {
                    document.querySelector('.total-progress').querySelector('.extra-progress').style.width = `${percentage2}%`;
                }
            }
            else {
                if (document.querySelector('.total-progress').querySelector('.progress').style.width != `${percentage1}%`) {
                    document.querySelector('.total-progress').querySelector('.progress').style.width = `${percentage1}%`;
                }
            }

            previousSignatureCount = signatureCount;
        } catch (error) {
            console.error('Error fetching total progress:', error);
        }finally {
            // Wait for 500ms
            await new Promise(resolve => setTimeout(resolve, msSpent*2));
        }
    }
}

let globalScheduleStatus = '';
let globalProjectedDate = new Date();
function updateTimeLeft(startTime, endTime) {
    const now = new Date();
    const timeLeft = endTime - now;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector('#time-left-text').innerText = `${clockAnim[animIndex]}${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    if (document.querySelector('.time-left').querySelector('.progress-danger').style.width = `${100 - (timeLeft / (endTime - startTime)) * 100}%`) {
        document.querySelector('.time-left').querySelector('.progress-danger').style.width = `${100 - (timeLeft / (endTime - startTime)) * 100}%`;
    }

    document.querySelector('.schedule-status').innerText = globalScheduleStatus;


    if (document.querySelector('.daily-signatures-needed').innerText = `We need at least ${Math.ceil((1000000 - previousSignatureCount) / daysLeft)} signatures per day on average!`) {
        document.querySelector('.daily-signatures-needed').innerText = `We need at least ${Math.ceil((1000000 - previousSignatureCount) / daysLeft)} signatures per day on average!`;
    }

    animIndex++;
    if (animIndex >= clockAnim.length) {
        animIndex = 0;
    }
}
let signaturesBeforeToday = 0;
let historicData
let prevValueTotal = 0;
let prevValueToday = 0;
//Once every 10 minutes, refresh the historical data
setInterval(() => {
    fetch('https://stopkillinggameshistoricdata.montoria.se/historic-data')
        .then(response => response.json())
        .then(data => {
            console.log('Updated historical data:', data);
            historicData.length = 0; // Clear the existing array
            historicData.push(...data); // Add the new data
        })
        .catch(error => console.error('Error fetching historical data:', error));
}, 10 * 60 * 1000); // 10 minutes in milliseconds
// Function to fetch historical data and calculate today's signatures
async function fetchTodaySignatures() {
    try {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        // Find latest entry before today
        const latestHistoricalEntry = historicData
            .filter(entry => new Date(entry.timestamp) < today)
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];

        if (!latestHistoricalEntry) {
            globalScheduleStatus = 'Insufficient historical data.';
            return;
        }

        // Sum totalCount from the latest historical day
        const totalBeforeToday = latestHistoricalEntry.data.reduce((sum, country) => sum + country.totalCount, 0);

        // Fetch live current total from the second endpoint
        const currentTotal = previousSignatureCount

        const todaySignatures = currentTotal - totalBeforeToday;

        if (todaySignatures < 0) {
            console.warn("Signature count went backwards, likely a data error.");
        }

        // Do your projection & animation updates here
        await updateCountUI(todaySignatures, prevValueToday, document.querySelector('.today-count'));
        prevValueToday = todaySignatures; // Update the previous value for next comparison

        const rate = getYesterdaySignaturesRate();
        if (rate <= 0) {
            globalScheduleStatus = 'Cannot compute projection from yesterday’s data.';
            return;
        }

        // days until goal at yesterday’s pace:
        const daysToGo = Math.ceil((1000000 - previousSignatureCount) / rate);
        const projectedDate = new Date(now.getTime() + daysToGo * 24 * 60 * 60 * 1000);

        globalProjectedDate = projectedDate;
        globalScheduleStatus =
            `At yesterday’s rate (${rate.toLocaleString()}⎯signatures), `
            + `you’ll hit goal in ${daysToGo} days (by ${projectedDate.toLocaleDateString()}).`;
    } catch (error) {
        console.error('Error fetching today\'s signatures:', error);
    }
}

async function updateCountUI(todaySignatures, prev, element) {// Create and show the updated count with animation
    const todayCountElement = element
    if (prev > 0) {
        // Remove any existing content
        todayCountElement.innerHTML = '';

        // Create a temporary element to animate out
        const oldCount = document.createElement('span');
        oldCount.className = 'count-down';
        oldCount.textContent = `${prev.toLocaleString()}`;

        // Create a new element to animate in
        const newCount = document.createElement('span');
        newCount.className = 'count-up';
        newCount.textContent = `${todaySignatures.toLocaleString()}`;

        // Add both elements to container
        todayCountElement.appendChild(oldCount);
        todayCountElement.appendChild(newCount);

        // Trigger the animation after a brief delay
        setTimeout(() => {
            oldCount.style.transform = 'translateY(-100%)';
            oldCount.style.opacity = '0';
            newCount.style.transform = 'translateY(0)';
            newCount.style.opacity = '1';
        }, 10);

        // Clean up after animation completes
        setTimeout(() => {
            // Replace with a simple text to avoid positioning issues
            todayCountElement.innerHTML = '';
            const finalElement = document.createElement('span');
            finalElement.className = 'count-down'; // Already in correct position
            finalElement.textContent = `${todaySignatures.toLocaleString()}`;
            todayCountElement.appendChild(finalElement);
        }, 600);
        //better function, in async
        await new Promise(resolve => setTimeout(resolve, 610));
    } else {
        // First load, just set the text
        todayCountElement.innerHTML = '';
        const textElement = document.createElement('span');
        textElement.className = 'count-down';
        textElement.textContent = `${todaySignatures.toLocaleString()}`;
        todayCountElement.appendChild(textElement);
        document.querySelector(".today-label").classList.remove('loading');
        document.querySelector(".today-label").textContent = "Today's Signatures:";
    }

    // Add visual indicator based on activity level
    todayCountElement.classList.remove('high-activity', 'medium-activity');
    if (todaySignatures > 5000) {
        todayCountElement.classList.add('high-activity');
    } else if (todaySignatures > 2000) {
        todayCountElement.classList.add('medium-activity');
    }
}

// Helper: get the totalCount sum for a given date (midnight–midnight)
function totalForDate(date) {
    // find the entry whose timestamp is exactly that date (or closest before)
    const entry = historicData
        .filter(e => {
            const d = new Date(e.timestamp);
            return d.getFullYear() === date.getFullYear()
                && d.getMonth() === date.getMonth()
                && d.getDate() === date.getDate();
        })
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];

    if (!entry) return null;
    return entry.data.reduce((sum, c) => sum + c.totalCount, 0);
}

// New function to compute yesterday’s rate
function getYesterdaySignaturesRate() {
    const now = new Date();
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const dayBefore = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2);

    const totalDayBefore = totalForDate(dayBefore);
    const totalYesterday = totalForDate(yesterday);

    if (totalDayBefore == null || totalYesterday == null) {
        console.warn('Not enough historical data for yesterday rate');
        return null;
    }

    return totalYesterday - totalDayBefore;
}

// Fetch and display country data
fetch('https://stopkillinggamesdata.montoria.se/')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the data to see what's being returned

        // Sort the countries by percentage
        const sortedCountries = data.signatureCountryCount.sort((a, b) => b.percentage - a.percentage);

        // Display the countries initially
        displayCountries(sortedCountries);
    })
    .catch(error => console.error('Error:', error));

/**
* Calculates the projected date to reach a signature goal.
*
* @param {Date} startDate The date from which to start projecting (e.g., today's date or yesterday's date).
* @param {number} currentSignatures The current total number of signatures.
* @param {number} targetGoal The total number of signatures to reach.
* @param {number} dailyVelocity The average number of signatures collected per day.
* @returns {Date | null} The projected Date object, or null if there's an error in inputs.
*/
function getProjectedFinalDate(startDate, currentSignatures, targetGoal, dailyVelocity) {
    if (currentSignatures >= targetGoal) {
        console.warn("Current signatures already meet or exceed the target goal.");
        return null; // No projection needed if goal is already met
    }
    // Input validation
    if (!(startDate instanceof Date) || isNaN(startDate.getTime())) { // Check if it's a valid Date object
        console.error("Error: 'startDate' must be a valid Date object.");
        return null;
    }
    if (typeof currentSignatures !== 'number' || currentSignatures < 0) {
        console.error("Error: 'currentSignatures' must be a non-negative number.");
        return null;
    }
    if (typeof targetGoal !== 'number' || targetGoal <= currentSignatures) {
        console.error("Error: 'targetGoal' must be a number greater than 'currentSignatures'.");
        return null;
    }
    if (typeof dailyVelocity !== 'number' || dailyVelocity <= 0) {
        console.error("Error: 'dailyVelocity' must be a positive number.");
        return null;
    }

    // 1. Calculate signatures remaining
    const signaturesRemaining = targetGoal - currentSignatures;

    // 2. Calculate the number of days needed (round up to ensure goal is met)
    const daysNeeded = Math.ceil(signaturesRemaining / dailyVelocity);

    // 3. Create a new Date object from the start date to avoid modifying the original
    const projectedDate = new Date(startDate);

    // 4. Add the calculated days to the new date object
    // setDate() handles month and year rollovers automatically
    projectedDate.setDate(projectedDate.getDate() + daysNeeded);

    return projectedDate;
}

function displayFireworks() {
    if (!fireworksDisplayed) {
        fireworksDisplayed = true;
        const duration = 5 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // since particles fall down, start a bit higher than random
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    }
}

let fireworksDisplayed = false;
let previousSignatureCount = 0;
async function initialFetch() {
    const historicResponse = await fetch('https://stopkillinggameshistoricdata.montoria.se/historic-data');
    historicData = await historicResponse.json();
    updateTotalProgress();
}
initialFetch();


//Update time left every second
const startTime = new Date('31 jul 2024 GMT+0200');
const endTime = new Date('31 jul 2025 GMT+0200');
const clockAnim = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"];
let animIndex = 0;
setInterval(() => updateTimeLeft(startTime, endTime), 1000);



document.addEventListener('DOMContentLoaded', () => {
    const fromSelect = document.getElementById('fromLang');
    const toSelect = document.getElementById('toLang');
    const inputText = document.getElementById('inputText');
    const translateBtn = document.getElementById('translateBtn');
    const resultDisplay = document.getElementById('translatedText');
    const status = document.getElementById('status');

    // 1. Fetch All Available Languages
    async function loadLanguages() {
        // status.innerText = "Loading languages...";
       const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/languages';
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                 'x-rapidapi-key': '6c69eddb7cmsh613045cbb189d07p1f8172jsnfe8a4e5da2e5',
		         'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com'
		
                }
            });
            const data = await response.json();
            const languages = data.translation;

            fromSelect.innerHTML = '';
            toSelect.innerHTML = '';

            // Add options to dropdowns
            Object.keys(languages).forEach(code => {
                const langName = languages[code].name;
                fromSelect.add(new Option(langName, code));
                toSelect.add(new Option(langName, code));
            });

            // Default settings
            fromSelect.value = 'en';
            toSelect.value = 'ar';
            status.innerText = "Ready to translate";
        } catch (error) {
            status.innerText = "Error loading languages.";
            console.error(error);
        }
    }

    // 2. Perform Translation
    async function performTranslation() {
        const textToTranslate = inputText.value.trim();
        if (!textToTranslate) return;

        status.innerText = "Translating...";
        translateBtn.disabled = true;

        const from = fromSelect.value;
        const to = toSelect.value;
        const url = 'https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=es&from=en&textType=plain';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': '6c69eddb7cmsh613045cbb189d07p1f8172jsnfe8a4e5da2e5',
		            'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
                },
                body: JSON.stringify([{ text: textToTranslate }])
            });

            const result = await response.json();
            
            if (result && result[0] && result[0].translations) {
                resultDisplay.innerText = result[0].translations[0].text;
                status.innerText = "Translation complete";
            } else {
                resultDisplay.innerText = "Check API response format.";
            }
        } catch (error) {
            console.error(error);
            resultDisplay.innerText = "Error: Failed to fetch translation.";
            status.innerText = "Translation failed.";
        } finally {
            translateBtn.disabled = false;
        }
    }

    // Initialize
    loadLanguages();

    // Event Listener
    translateBtn.addEventListener('click', performTranslation);
});
// NeuroLearn JavaScript

// State Management
const state = {
    screen: 'landing', // landing, input, prefs, loading, output
    inputText: '',
    selectedPreferences: [],
};

// DOM Elements
const screens = {
    landing: document.getElementById('screen-landing'),
    input: document.getElementById('screen-input'),
    prefs: document.getElementById('screen-prefs'),
    loading: document.getElementById('screen-loading'),
    output: document.getElementById('screen-output'),
    info: document.getElementById('screen-info'),
};

const navigation = {
    btnStart: document.getElementById('btn-start'),
    btnInfo: document.getElementById('btn-how-it-works'),
    userInput: document.getElementById('user-input'),
    btnToPrefs: document.getElementById('btn-to-prefs'),
    btnProcess: document.getElementById('btn-process'),
    btnTTS: document.getElementById('btn-tts'),
    btnCompare: document.getElementById('btn-compare'),
    navBackBtns: document.querySelectorAll('.nav-back'),
    navBackHomeBtns: document.querySelectorAll('.nav-back-home'),
    prefCards: document.querySelectorAll('.pref-card'),
    demoChips: document.querySelectorAll('.chip'),
    aiResult: document.getElementById('ai-result'),
    compareView: document.getElementById('compare-view'),
    originalTextDisplay: document.getElementById('original-text-display'),
    adaptedPreview: document.getElementById('adapted-preview'),
};

// --- Navigation Logic ---

function showScreen(screenName) {
    // Hide all
    Object.values(screens).forEach(el => {
        el.classList.remove('active');
        // Small delay to allow display:none to visually hide after fade
        setTimeout(() => {
            if (el !== screens[screenName]) el.style.display = 'none';
        }, 400);
    });

    // Show target
    const target = screens[screenName];
    target.style.display = 'flex'; // Prepare for fade in
    // Force reflow
    void target.offsetWidth;
    target.classList.add('active');

    state.screen = screenName;
    window.scrollTo(0, 0);
}

// --- Event Listeners ---

navigation.btnStart.addEventListener('click', () => showScreen('input'));
navigation.btnInfo.addEventListener('click', () => showScreen('info'));

// How it works back buttons
navigation.navBackHomeBtns.forEach(btn => {
    btn.addEventListener('click', () => showScreen('landing'));
});

// Input Handling
navigation.userInput.addEventListener('input', (e) => {
    state.inputText = e.target.value;
    navigation.btnToPrefs.disabled = state.inputText.trim().length === 0;
});

navigation.btnToPrefs.addEventListener('click', () => showScreen('prefs'));

// Back Buttons
navigation.navBackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (state.screen === 'input') showScreen('landing');
        if (state.screen === 'prefs') showScreen('input');
        if (state.screen === 'output') showScreen('prefs');
    });
});

// Demo Chips
const demoContent = {
    quantum: "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science.",
    photosynthesis: "Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy that, through cellular respiration, can later be released to fuel the organism's activities. Some of this chemical energy is stored in carbohydrate molecules, such as sugars and starches, which are synthesized from carbon dioxide and water.",
    history: "The French Revolution was a period of radical political and societal change in France that began with the Estates General of 1789 and ended with the formation of the French Consulate in November 1799. Many of its ideas are considered fundamental principles of liberal democracy, while phrases like libert\u00e9, \u00e9galit\u00e9, fraternit\u00e9 remained famously recurring in other revolts."
};

navigation.demoChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
        const key = e.target.dataset.demo;
        const text = demoContent[key];
        navigation.userInput.value = text;
        state.inputText = text;
        navigation.btnToPrefs.disabled = false;
    });
});

// Preferences Selection
navigation.prefCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('selected');
        const pref = card.dataset.pref;

        if (state.selectedPreferences.includes(pref)) {
            state.selectedPreferences = state.selectedPreferences.filter(p => p !== pref);
        } else {
            state.selectedPreferences.push(pref);
        }

        navigation.btnProcess.disabled = state.selectedPreferences.length === 0;
    });
});

// Process / Output
navigation.btnProcess.addEventListener('click', async () => {
    showScreen('loading');

    // Simulate AI delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    generateOutput();
    showScreen('output');
});

// --- "AI" Logic (Simulated) ---

function generateOutput() {
    const original = state.inputText;
    const prefs = state.selectedPreferences;

    let processedHtml = "";

    // 1. Chunking / Simplification Logic
    // We will split by periods, but group them to avoid being too choppy if sentences are short.
    const sentences = original.match(/[^\.!\?]+[\.!\?]+/g) || [original];

    processedHtml += `<h3>Here's the breakdown:</h3>`;
    processedHtml += `<ul>`;

    sentences.forEach(sentence => {
        if (sentence.trim().length > 0) {
            // "Simplify" by just presenting it clearly in list format
            processedHtml += `<li>${sentence.trim()}</li>`;
        }
    });
    processedHtml += `</ul>`;

    // 2. Add Analogy (if requested or by default for demo juice)
    let analogy = "";
    if (original.includes("Quantum")) {
        analogy = "Think of it like a spinning coin. Until you stop it with your hand (measure it), it's both heads and tails at the same time.";
    } else if (original.includes("Photosynthesis")) {
        analogy = "Imagine the plant is a solar-powered kitchen. It takes sunlight (electricity) and ingredients (water + air) to bake a cake (sugar) that feeds the plant.";
    } else if (original.includes("French")) {
        analogy = "Imagine if a strict principal was fired by the students, and they decided to run the school themselves.";
    } else {
        analogy = "Imagine this concept is like building a house. You need the foundation first before you can put up the walls.";
    }

    if (prefs.includes('analogy') || prefs.includes('simple')) {
        let imgSrc = "";
        let imgAlt = "";

        // Select image based on content detection (Simulating AI visualization)
        if (original.includes("Quantum")) {
            imgSrc = "quantum_coin.png"; // Placeholder filename - will be updated with actual path in follow-up step if needed, or I assume relative path if I move them? 
            // Actually, I need to know where generate_image saves them. usually it saves to artifacts. 
            // I should probably copy them or reference them. 
            // For now, let's assume I will address the pathing in the next step.
            imgAlt = "Illustration of a spinning coin representing superposition";
        } else if (original.includes("Photosynthesis")) {
            imgSrc = "photosynthesis_kitchen.png";
            imgAlt = "Illustration of a plant chef cooking with sunlight";
        } else if (original.includes("French")) {
            imgSrc = "history_school.png";
            imgAlt = "Illustration of students running a school";
        }

        // Only show image if we found a match (since we only have demo images)
        let imgHtml = "";
        if (imgSrc) {
            imgHtml = `<div class="visual-aid" style="margin-top: 1rem; text-align: center;">
                <img src="${imgSrc}" alt="${imgAlt}" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-height: 250px;">
                <p style="font-size: 0.8rem; color: #5D6D7E; margin-top: 0.5rem;">AI Generated Visual Aid</p>
            </div>`;
        }

        processedHtml += `<div class="analogy-box" style="margin-top: 2rem; background: #E8F5E9; padding: 1.5rem; border-radius: 12px; border-left: 4px solid var(--color-primary);">
            <h4 style="margin-bottom:0.5rem; color: var(--color-primary);">💡 Real-World Example</h4>
            <p>${analogy}</p>
            ${imgHtml}
        </div>`;
    }

    // 3. Render
    navigation.aiResult.innerHTML = processedHtml;

    // 4. Setup Comparison
    navigation.originalTextDisplay.innerText = original;
    navigation.adaptedPreview.innerHTML = processedHtml;

    // 5. Auto-Speak if 'Audio' pref selected
    if (prefs.includes('audio')) {
        setTimeout(() => speakText(navigation.aiResult.innerText), 500);
    }
}

// --- TTS Logic ---
let isSpeaking = false;
let synthesis = window.speechSynthesis;

function speakText(text) {
    if (synthesis.speaking) {
        synthesis.cancel();
        isSpeaking = false;
        navigation.btnTTS.innerHTML = "🔊 Listen";
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;

    utterance.onend = () => {
        isSpeaking = false;
        navigation.btnTTS.innerHTML = "🔊 Listen";
    };

    synthesis.speak(utterance);
    isSpeaking = true;
    navigation.btnTTS.innerHTML = "⏹ Stop";
}

navigation.btnTTS.addEventListener('click', () => {
    // Read the content of the result
    speakText(navigation.aiResult.innerText);
});

// --- Comparison View Logic ---
navigation.btnCompare.addEventListener('click', () => {
    navigation.compareView.classList.toggle('hidden');
    if (navigation.compareView.classList.contains('hidden')) {
        navigation.btnCompare.innerText = "Compare with Original";
    } else {
        navigation.btnCompare.innerText = "Hide Comparison";
        // Scroll to comparison
        navigation.compareView.scrollIntoView({ behavior: 'smooth' });
    }
});

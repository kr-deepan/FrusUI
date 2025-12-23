/* ============================================
   ANTI-FLIX: The JavaScript That Hates You
   ============================================ */

// ============================================
// MOVIE DATABASE - The Content You'll Never Find
// ============================================

const movies = [
    {
        id: 1,
        title: "The Glitchening",
        realTitle: "A perfectly normal movie",
        year: 2023,
        genre: "Horror/Comedy",
        description: "A programmer discovers that their code has become sentient and really, really hates users. Based on true events at ANTI-FLIX headquarters.",
        thumbnail: "linear-gradient(135deg, #ff00ff, #00ffff)",
        color: "#ff00ff"
    },
    {
        id: 2,
        title: "404: Love Not Found",
        realTitle: "Romantic Error",
        year: 2022,
        genre: "Romance/Tech",
        description: "Two developers fall in love while debugging the world's worst codebase. Will their relationship survive the merge conflicts?",
        thumbnail: "linear-gradient(135deg, #00ff00, #ff6600)",
        color: "#00ff00"
    },
    {
        id: 3,
        title: "Buffering: The Movie",
        realTitle: "Wait Forever",
        year: 2024,
        genre: "Thriller",
        description: "Experience 2 hours of loading screens with occasional glimpses of what might be a plot. Our most immersive experience yet.",
        thumbnail: "linear-gradient(135deg, #ffff00, #ff0033)",
        color: "#ffff00"
    },
    {
        id: 4,
        title: "CTRL+Z: Undoing Everything",
        realTitle: "The Undo Story",
        year: 2021,
        genre: "Sci-Fi",
        description: "A time traveler keeps pressing undo on history. Each change makes things worse. Relatable.",
        thumbnail: "linear-gradient(135deg, #9933ff, #00ffff)",
        color: "#9933ff"
    },
    {
        id: 5,
        title: "The Password Is Password",
        realTitle: "Security Nightmare",
        year: 2023,
        genre: "Documentary",
        description: "An exposé on humanity's terrible password choices. Spoiler: It's always 'password123'.",
        thumbnail: "linear-gradient(135deg, #ff0033, #ff00ff)",
        color: "#ff0033"
    },
    {
        id: 6,
        title: "Terms & Conditions",
        realTitle: "The Agreement",
        year: 2022,
        genre: "Horror",
        description: "Nobody reads them. They should have read them. Now they belong to the corporation. Forever.",
        thumbnail: "linear-gradient(135deg, #00ffff, #00ff00)",
        color: "#00ffff"
    },
    {
        id: 7,
        title: "Cache Me If You Can",
        realTitle: "Memory Problems",
        year: 2024,
        genre: "Action/Comedy",
        description: "A browser's cache goes rogue and starts showing users embarrassing old searches at the worst possible times.",
        thumbnail: "linear-gradient(135deg, #ff6600, #ffff00)",
        color: "#ff6600"
    },
    {
        id: 8,
        title: "The Cookie Monster",
        realTitle: "Tracking Terror",
        year: 2023,
        genre: "Horror",
        description: "They said to accept all cookies. Now the cookies have accepted them. A cautionary tale.",
        thumbnail: "linear-gradient(135deg, #ff00ff, #9933ff)",
        color: "#ff00ff"
    }
];

// ============================================
// SARCASTIC MESSAGES - Maximum Disappointment
// ============================================

const sarcasticMessages = [
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading..."
];

const errorMessages = [
    "That was almost correct. Almost.",
    "User error detected. Again.",
    "We see you're struggling 😈",
    "Did you mean to do that? No? Thought so.",
    "Your click has been noted and ignored.",
    "Error 418: I'm a teapot. Deal with it.",
    "Success! Just kidding.",
    "Loading... forever...",
    "Have you tried turning yourself off and on again?",
    "This is fine. Everything is fine. 🔥"
];

const tooltipMessages = [
    "You're doing great! (Not really)",
    "That's definitely the right button. Trust us.",
    "Click here for disappointment",
    "Warning: May cause frustration",
    "This does exactly what you think. Or does it?",
    "Abandon hope, all ye who hover here",
    "Pro tip: Give up now",
    "Fun fact: You've clicked wrong 47 times",
    "Our AI suggests you're lost"
];

const videoOverlayMessages = [
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading...",
    "Loading..."
];

// ============================================
// GLOBAL STATE - Chaos Variables
// ============================================

let loginAttempts = 0;
let clickCount = 0;
let currentMovie = null;
let wrongMovieShown = false;
let isFullscreen = false;
let isTinyMode = false;
let videoActualVolume = 0.5;
let cursorChaosInterval = null;
let tooltipTimeout = null;
let subtitlesEnabled = false;
let subtitleInterval = null;

// Wingdings phrases (these render as symbols in Wingdings font)
const wingdingsPhrases = [
    "☞✌☜ ✋☞ ✡⚐🕆",
    "👍✌☠ ☼☜✌👎 ❄☟✋💧",
    "✡⚐🕆 ✌☼☜ 🕈✌❄👍☟✋☠☝",
    "☟☜☹☹⚐ 🕈⚐☼☹👎",
    "☝⚐⚐👎👌✡☜ 💣⚐✞✋☜",
    "❄☟✋💧 ✋💧 ✌ 💧🕆👌❄✋❄☹☜",
    "☜☠☺⚐✡ ❄☟☜ 💧☟⚐🕈",
    "✌☠❄✋ ☞☹✋✠ ☼🕆☹☜💧"
];

// ============================================
// DOM ELEMENTS - The Victims
// ============================================

const elements = {
    // Screens
    loginScreen: document.getElementById('login-screen'),
    mainScreen: document.getElementById('main-screen'),
    playerScreen: document.getElementById('player-screen'),

    // Login
    loginForm: document.getElementById('login-form'),
    loginBtn: document.getElementById('login-btn'),
    usernameInput: document.getElementById('username'),
    passwordInput: document.getElementById('password'),

    // Navigation
    navHome: document.getElementById('nav-home'),
    navMovies: document.getElementById('nav-movies'),
    navFavorites: document.getElementById('nav-favorites'),
    navProfile: document.getElementById('nav-profile'),
    logoutBtn: document.getElementById('logout-btn'),

    // Search
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    searchResults: document.getElementById('search-results'),
    searchGrid: document.getElementById('search-grid'),

    // Movie Grid
    movieGrid: document.getElementById('movie-grid'),
    heroCta: document.getElementById('hero-cta'),

    // Modal
    movieModal: document.getElementById('movie-modal'),
    modalClose: document.getElementById('modal-close'),
    modalTitle: document.getElementById('modal-title'),
    modalYear: document.getElementById('modal-year'),
    modalGenre: document.getElementById('modal-genre'),
    modalDescription: document.getElementById('modal-description'),
    modalThumbnail: document.getElementById('modal-thumbnail'),
    playBtn: document.getElementById('play-btn'),
    addFavorites: document.getElementById('add-favorites'),

    // Video Player
    videoPlayer: document.getElementById('video-player'),
    videoWrapper: document.getElementById('video-wrapper'),
    playerContainer: document.getElementById('player-container'),
    playPauseBtn: document.getElementById('play-pause-btn'),
    progressBar: document.getElementById('progress-bar'),
    volumeSlider: document.getElementById('volume-slider'),
    fullscreenBtn: document.getElementById('fullscreen-btn'),
    rewindBtn: document.getElementById('rewind-btn'),
    forwardBtn: document.getElementById('forward-btn'),
    backToBrowse: document.getElementById('back-to-browse'),
    subtitlesBtn: document.getElementById('subtitles-btn'),
    currentTime: document.getElementById('current-time'),
    duration: document.getElementById('duration'),
    videoOverlay: document.getElementById('video-overlay'),
    videoOverlayText: document.getElementById('video-overlay-text'),
    playerTitle: document.getElementById('player-title'),

    // See-saw Volume
    seesawVolume: document.getElementById('seesaw-volume'),
    seesawBar: document.getElementById('seesaw-bar'),

    // Overlays
    sarcasticOverlay: document.getElementById('sarcastic-overlay'),
    sarcasticText: document.getElementById('sarcastic-text'),
    popupModal: document.getElementById('popup-modal'),
    popupTitle: document.getElementById('popup-title'),
    popupText: document.getElementById('popup-text'),
    popupClose: document.getElementById('popup-close'),

    // Tooltip
    chaosTooltip: document.getElementById('chaos-tooltip'),
    tooltipText: document.getElementById('tooltip-text'),

    // Wingdings Subtitles
    wingdingsSubtitles: document.getElementById('wingdings-subtitles'),
    subtitleText: document.getElementById('subtitle-text')
};

// ============================================
// INITIALIZATION - Let the Chaos Begin
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    startCursorChaos();
    populateMovieGrid();
    attachEventListeners();
});

function initializeApp() {
    // Show a sarcastic loading message
    showSarcasticOverlay(sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)], 2000);
}

// ============================================
// CURSOR CHAOS - Random Cursor Changes
// ============================================

function startCursorChaos() {
    const cursors = ['cursor-wait', 'cursor-help', 'cursor-not-allowed', 'cursor-grabbing', 'cursor-zoom-in', 'cursor-cell'];

    cursorChaosInterval = setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every 3 seconds
            const randomCursor = cursors[Math.floor(Math.random() * cursors.length)];
            document.body.classList.remove(...cursors);
            document.body.classList.add(randomCursor);

            setTimeout(() => {
                document.body.classList.remove(randomCursor);
            }, 2000);
        }
    }, 3000);
}

// ============================================
// LOGIN SYSTEM - The First Torture
// ============================================

function attachEventListeners() {
    // Runaway Login Button
    elements.loginBtn.addEventListener('mouseover', handleLoginButtonRunaway);
    elements.loginBtn.addEventListener('click', handleLoginButtonClick);
    elements.loginForm.addEventListener('submit', handleLoginSubmit);

    // Navigation - Each button does something DIFFERENT from its label
    elements.navHome.addEventListener('click', (e) => {
        e.preventDefault();
        // "Home" scrolls down to movies instead
        window.scrollTo({ top: document.querySelector('.movies-section').offsetTop, behavior: 'smooth' });
    });

    elements.navMovies.addEventListener('click', (e) => {
        e.preventDefault();
        // "Movies" plays a random movie immediately
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        currentMovie = randomMovie;
        handlePlayMovie();
    });

    elements.navFavorites.addEventListener('click', (e) => {
        e.preventDefault();
        // "My List" actually logs you out
        elements.mainScreen.classList.remove('active');
        elements.mainScreen.classList.add('hidden');
        elements.loginScreen.classList.remove('hidden');
        elements.loginScreen.classList.add('active');
        loginAttempts = 0;
        clickCount = 0;
        runawayCount = 0;
    });

    elements.navProfile.addEventListener('click', (e) => {
        e.preventDefault();
        // "Profile" focuses on search bar instead
        elements.searchInput.focus();
        elements.searchInput.value = '';
    });

    elements.logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // "Logout" just scrolls to top (doesn't log out)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search
    elements.searchBtn.addEventListener('click', handleSearch);
    elements.searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Hero CTA
    elements.heroCta.addEventListener('click', () => {
        window.scrollTo({ top: document.querySelector('.movies-section').offsetTop, behavior: 'smooth' });
        setTimeout(() => {
            showRandomTooltip("You scrolled! Here's your trophy: 🏆 (It's fake)");
        }, 500);
    });

    // Modal
    elements.modalClose.addEventListener('click', handleModalClose);
    elements.playBtn.addEventListener('click', handlePlayMovie);
    elements.addFavorites.addEventListener('click', () => {
        showPopup("Favorites Updated", "Movie added to your favorites.");
    });

    // Video Player Controls
    elements.playPauseBtn.addEventListener('click', handlePlayPause);
    elements.progressBar.addEventListener('input', handleProgressChange);
    elements.volumeSlider.addEventListener('input', handleVolumeChange);
    elements.fullscreenBtn.addEventListener('click', handleFullscreen);
    elements.rewindBtn.addEventListener('click', handleRewind);
    elements.forwardBtn.addEventListener('click', handleForward);
    elements.backToBrowse.addEventListener('click', handleBackToBrowse);
    elements.subtitlesBtn.addEventListener('click', handleSubtitles);
    elements.seesawVolume.addEventListener('input', handleSeesawVolume);

    // Video events
    elements.videoPlayer.addEventListener('timeupdate', updateProgress);
    elements.videoPlayer.addEventListener('loadedmetadata', updateDuration);
    elements.videoPlayer.addEventListener('play', () => {
        elements.playPauseBtn.textContent = '⏸ Resume (Maybe)';
    });
    elements.videoPlayer.addEventListener('pause', () => {
        elements.playPauseBtn.textContent = '▶ Stop Forever';
    });

    // Popup close
    elements.popupClose.addEventListener('click', closePopup);

    // Random tooltip on mouse move
    document.addEventListener('mousemove', handleMouseMove);

    // Forgot password & create account
    document.getElementById('forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        showPopup("Password Reset", "A password reset link has been sent to your email.");
    });

    document.getElementById('create-account').addEventListener('click', (e) => {
        e.preventDefault();
        showPopup("Create Account", "Account registration is currently unavailable.");
    });
}

let runawayCount = 0;

function handleLoginButtonRunaway(e) {
    if (runawayCount < 5) {
        const button = elements.loginBtn;
        const container = button.parentElement;
        const containerRect = container.getBoundingClientRect();

        // Random position within container
        const maxX = containerRect.width - button.offsetWidth;
        const maxY = containerRect.height - button.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY - 30;

        button.style.left = `${randomX}px`;
        button.style.transform = 'translateX(0)';
        button.style.top = `${randomY}px`;

        runawayCount++;

        // Show mocking tooltip
        showRandomTooltip(tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)]);
    }
}

function handleLoginButtonClick(e) {
    clickCount++;

    if (clickCount < 3) {
        e.preventDefault();
        showRandomTooltip(`Click ${3 - clickCount} more times. We're counting. 👁️`);
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();

    if (clickCount < 3) {
        showPopup("Please Try Again", "Click the sign in button to continue.");
        return;
    }

    loginAttempts++;

    const username = elements.usernameInput.value;
    const password = elements.passwordInput.value;

    if (loginAttempts < 2) {
        showPopup("Almost There!", "Submit again - third time's the charm! 🍀");
        return;
    }

    // Actually log in
    showSarcasticOverlay("Authenticating your existence...", 2500);

    setTimeout(() => {
        elements.loginScreen.classList.remove('active');
        elements.loginScreen.classList.add('hidden');
        elements.mainScreen.classList.remove('hidden');
        elements.mainScreen.classList.add('active');

        setTimeout(() => {
            showPopup("Welcome Back!", `Hello ${username || 'User'}, enjoy your streaming experience.`);
        }, 500);
    }, 2500);
}

// ============================================
// MOVIE GRID - Click Misdirection
// ============================================

function populateMovieGrid() {
    elements.movieGrid.innerHTML = '';

    movies.forEach((movie, index) => {
        const card = createMovieCard(movie, index);
        elements.movieGrid.appendChild(card);
    });
}

function createMovieCard(movie, index) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.dataset.movieId = movie.id;
    card.dataset.index = index;

    // Random slight rotation for chaos
    const rotation = (Math.random() - 0.5) * 4;
    card.style.transform = `rotate(${rotation}deg)`;

    card.innerHTML = `
        <div class="movie-thumbnail" style="background: ${movie.thumbnail}"></div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-genre">${movie.genre}</p>
        </div>
    `;

    card.addEventListener('click', () => handleMovieClick(movie, index));

    return card;
}

function handleMovieClick(movie, index) {
    if (!wrongMovieShown && Math.random() < 0.7) { // 70% chance to show wrong movie first
        wrongMovieShown = true;

        // Show a different movie first
        const wrongIndex = (index + Math.floor(Math.random() * (movies.length - 1)) + 1) % movies.length;
        const wrongMovie = movies[wrongIndex];

        showMovieModal(wrongMovie);

        setTimeout(() => {
            showPopup("Loading", "Please wait while we load the correct movie.");
            setTimeout(() => {
                showMovieModal(movie);
            }, 1500);
        }, 2000);
    } else {
        wrongMovieShown = false;
        showMovieModal(movie);
    }
}

function showMovieModal(movie) {
    currentMovie = movie;

    elements.modalTitle.textContent = movie.title;
    elements.modalYear.textContent = `Year: ${movie.year}`;
    elements.modalGenre.textContent = `Genre: ${movie.genre}`;
    elements.modalDescription.textContent = movie.description;
    elements.modalThumbnail.style.background = movie.thumbnail;

    elements.movieModal.classList.remove('hidden');

    // Random animation
    elements.movieModal.querySelector('.modal-content').classList.add('spin-mode');
    setTimeout(() => {
        elements.movieModal.querySelector('.modal-content').classList.remove('spin-mode');
    }, 1000);
}

function handleModalClose() {
    // 50% chance the close button doesn't work first time
    if (Math.random() < 0.5) {
        showRandomTooltip("The close button is taking a break. Try again.");
        return;
    }

    elements.movieModal.classList.add('hidden');
    currentMovie = null;
}

// ============================================
// SEARCH - Inverted Logic
// ============================================

function handleSearch() {
    const query = elements.searchInput.value.toLowerCase().trim();

    if (!query) {
        showPopup("Search", "Please enter a search term.");
        return;
    }

    // Inverted search logic - correct results only for misspellings
    let results = [];

    // Check if query is a "misspelling" (contains typos)
    const hasMisspelling = checkForMisspelling(query);

    if (hasMisspelling) {
        // Actually search correctly for misspellings
        results = movies.filter(movie => {
            const correctedQuery = attemptSpellCorrection(query);
            return movie.title.toLowerCase().includes(correctedQuery) ||
                movie.genre.toLowerCase().includes(correctedQuery) ||
                movie.description.toLowerCase().includes(correctedQuery);
        });

        showRandomTooltip("Wait, that misspelling actually worked? 🤯");
    } else {
        // For correct spellings, return random/wrong results
        results = movies
            .filter(movie => !movie.title.toLowerCase().includes(query))
            .slice(0, 3);

        if (results.length === 0) {
            results = [movies[Math.floor(Math.random() * movies.length)]];
        }

        showPopup("Search Complete", "Here are your search results.");
    }

    displaySearchResults(results);
}

function checkForMisspelling(query) {
    // Check for common "misspellings"
    const correctWords = ['glitch', 'movie', 'love', 'buffer', 'password', 'cookie', 'cache', 'terms'];
    const misspellings = ['glith', 'movee', 'luv', 'bufffer', 'pasword', 'cokie', 'cashe', 'termz'];

    for (let i = 0; i < misspellings.length; i++) {
        if (query.includes(misspellings[i])) {
            return true;
        }
    }

    // Also check for double letters or missing letters
    return /(.)\1{2,}/.test(query) || query.length < 3;
}

function attemptSpellCorrection(query) {
    const corrections = {
        'glith': 'glitch',
        'movee': 'movie',
        'luv': 'love',
        'bufffer': 'buffer',
        'pasword': 'password',
        'cokie': 'cookie',
        'cashe': 'cache',
        'termz': 'terms'
    };

    for (const [wrong, right] of Object.entries(corrections)) {
        if (query.includes(wrong)) {
            return right;
        }
    }

    return query;
}

function displaySearchResults(results) {
    elements.searchGrid.innerHTML = '';

    results.forEach((movie, index) => {
        const card = createMovieCard(movie, index);
        elements.searchGrid.appendChild(card);
    });

    elements.searchResults.classList.remove('hidden');
    elements.searchResults.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// VIDEO PLAYER - Maximum Chaos Controls
// ============================================

function handlePlayMovie() {
    if (!currentMovie) return;

    showSarcasticOverlay(videoOverlayMessages[Math.floor(Math.random() * videoOverlayMessages.length)], 3000);

    setTimeout(() => {
        elements.movieModal.classList.add('hidden');
        elements.mainScreen.classList.remove('active');
        elements.mainScreen.classList.add('hidden');
        elements.playerScreen.classList.remove('hidden');
        elements.playerScreen.classList.add('active');

        elements.playerTitle.textContent = `Now Playing: ${currentMovie.title}`;

        // Always start in tiny mode
        elements.videoWrapper.classList.add('tiny-mode');
        isTinyMode = true;

        // Start with random video overlay
        showVideoOverlay();

        setTimeout(() => {
            elements.videoPlayer.play().catch(() => {
                showPopup("Autoplay Blocked", "Click play to start the video.");
            });
        }, 2000);
    }, 3000);
}

function handlePlayPause() {
    if (elements.videoPlayer.paused) {
        elements.videoPlayer.play();
        showRandomTooltip("Playing... or is it?");
    } else {
        elements.videoPlayer.pause();

        // Resume after random delay (chaos!)
        const delay = Math.random() * 3000 + 1000;
        showRandomTooltip(`Paused for ${(delay / 1000).toFixed(1)} seconds whether you like it or not`);

        setTimeout(() => {
            if (!elements.playerScreen.classList.contains('hidden')) {
                elements.videoPlayer.play();
                showVideoOverlay("Auto-resumed because we can 😈");
            }
        }, delay);
    }
}

function handleProgressChange(e) {
    const value = e.target.value;
    const duration = elements.videoPlayer.duration;

    // Normal progress: slider directly maps to video position
    elements.videoPlayer.currentTime = (value / 100) * duration;
}

function handleVolumeChange(e) {
    const value = e.target.value / 100;

    // Volume slider controls BRIGHTNESS instead (chaos!)
    const brightness = 0.3 + (value * 0.7); // Range from 0.3 to 1
    elements.videoPlayer.style.filter = `brightness(${brightness})`;

    // Keep actual volume at a random level
    if (Math.random() < 0.3) {
        videoActualVolume = Math.random();
        elements.videoPlayer.volume = videoActualVolume;
    }
}

// See-saw Volume Control - Tilts like a teeter-totter
function handleSeesawVolume(e) {
    let value = parseInt(e.target.value);

    // Snap to only 3 positions: 0 (left heavy), 50 (balanced), or 100 (right heavy)
    if (value < 25) {
        value = 0; // Slides to left (heavier side)
    } else if (value > 75) {
        value = 100; // Slides to right (heavier side)
    } else {
        value = 50; // Stays in middle (balanced)
    }

    // Update slider position to snapped value
    e.target.value = value;

    const normalizedValue = (value - 50) / 50; // Range from -1 to 1

    // Tilt the see-saw bar based on the slider position
    const tiltAngle = normalizedValue * 15; // Max 15 degrees tilt
    elements.seesawBar.style.transform = `rotate(${tiltAngle}deg)`;

    // Add bounce animation on interaction
    elements.seesawBar.classList.remove('bouncing');
    void elements.seesawBar.offsetWidth; // Trigger reflow
    elements.seesawBar.classList.add('bouncing');

    // Scale the weights to show which side is "heavier"
    const leftWeight = elements.seesawBar.querySelector('.seesaw-weight.left');
    const rightWeight = elements.seesawBar.querySelector('.seesaw-weight.right');

    if (value === 0) {
        leftWeight.style.transform = 'scale(1.5)';
        rightWeight.style.transform = 'scale(0.5)';
    } else if (value === 100) {
        leftWeight.style.transform = 'scale(0.5)';
        rightWeight.style.transform = 'scale(1.5)';
    } else {
        leftWeight.style.transform = 'scale(1)';
        rightWeight.style.transform = 'scale(1)';
    }

    // Actually control the volume
    const actualVolume = value / 100;
    elements.videoPlayer.volume = actualVolume;
    videoActualVolume = actualVolume;
}

function handleFullscreen() {
    // Always stays tiny - button does nothing useful!
    elements.videoWrapper.classList.add('tiny-mode');
    isTinyMode = true;
}

function handleRewind() {
    // Rewind button FAST FORWARDS (chaos!)
    elements.videoPlayer.currentTime = Math.min(
        elements.videoPlayer.currentTime + 30,
        elements.videoPlayer.duration
    );
    showRandomTooltip("⏪ went ⏩ because chaos");
}

function handleForward() {
    // Forward button REWINDS (chaos!)
    elements.videoPlayer.currentTime = Math.max(
        elements.videoPlayer.currentTime - 30,
        0
    );
    showRandomTooltip("⏩ went ⏪ because we can");
}

function handleBackToBrowse() {
    // 50% chance to show popup instead
    if (Math.random() < 0.5) {
        showPopup("Notice", "Please confirm you want to exit the player.");
        return;
    }

    elements.videoPlayer.pause();
    elements.playerScreen.classList.remove('active');
    elements.playerScreen.classList.add('hidden');
    elements.mainScreen.classList.remove('hidden');
    elements.mainScreen.classList.add('active');

    // Reset video
    elements.videoWrapper.classList.remove('tiny-mode');
    isTinyMode = false;
    elements.videoPlayer.style.filter = 'brightness(1)';
}

function handleSubtitles() {
    subtitlesEnabled = !subtitlesEnabled;

    if (subtitlesEnabled) {
        // Show Wingdings subtitles
        elements.wingdingsSubtitles.classList.remove('hidden');

        // Show initial phrase
        elements.subtitleText.textContent = wingdingsPhrases[Math.floor(Math.random() * wingdingsPhrases.length)];

        // Cycle through phrases every 3 seconds
        subtitleInterval = setInterval(() => {
            elements.subtitleText.textContent = wingdingsPhrases[Math.floor(Math.random() * wingdingsPhrases.length)];
        }, 3000);
    } else {
        // Hide subtitles
        elements.wingdingsSubtitles.classList.add('hidden');
        if (subtitleInterval) {
            clearInterval(subtitleInterval);
            subtitleInterval = null;
        }
    }
}

function updateProgress() {
    const current = elements.videoPlayer.currentTime;
    const duration = elements.videoPlayer.duration;

    if (duration) {
        // Inverted slider display (visual only)
        elements.progressBar.value = 100 - ((current / duration) * 100);
        elements.currentTime.textContent = formatTime(current);
    }
}

function updateDuration() {
    elements.duration.textContent = formatTime(elements.videoPlayer.duration);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function showVideoOverlay(message = null) {
    elements.videoOverlayText.textContent = message || videoOverlayMessages[Math.floor(Math.random() * videoOverlayMessages.length)];
    elements.videoOverlay.classList.remove('hidden');

    setTimeout(() => {
        elements.videoOverlay.classList.add('hidden');
    }, 2000);
}

// ============================================
// OVERLAYS & POPUPS - The Annoyance Engine
// ============================================

function showSarcasticOverlay(message, duration = 2000) {
    elements.sarcasticText.textContent = message;
    elements.sarcasticOverlay.classList.remove('hidden');

    setTimeout(() => {
        elements.sarcasticOverlay.classList.add('hidden');
    }, duration);
}

function showPopup(title, text) {
    elements.popupTitle.textContent = title;
    elements.popupText.textContent = text;
    elements.popupModal.classList.remove('hidden');
}

function closePopup() {
    if (Math.random() < 0.3) {
        elements.popupText.textContent = "Please try again.";
        return;
    }

    elements.popupModal.classList.add('hidden');
}

// ============================================
// TOOLTIP SYSTEM - Constant Mockery
// ============================================

let lastTooltipTime = 0;

function handleMouseMove(e) {
    // Show random tooltip occasionally
    const now = Date.now();
    if (now - lastTooltipTime > 10000 && Math.random() < 0.01) {
        lastTooltipTime = now;
        showTooltipAt(e.clientX, e.clientY, tooltipMessages[Math.floor(Math.random() * tooltipMessages.length)]);
    }
}

function showRandomTooltip(message) {
    const x = window.innerWidth / 2;
    const y = 100;
    showTooltipAt(x, y, message);
}

function showTooltipAt(x, y, message) {
    clearTimeout(tooltipTimeout);

    elements.tooltipText.textContent = message;
    elements.chaosTooltip.style.left = `${x - 100}px`;
    elements.chaosTooltip.style.top = `${y + 20}px`;
    elements.chaosTooltip.classList.remove('hidden');

    tooltipTimeout = setTimeout(() => {
        elements.chaosTooltip.classList.add('hidden');
    }, 3000);
}

// ============================================
// RANDOM CHAOS EVENTS - Extra Frustration
// ============================================

// Random rainbow mode
setInterval(() => {
    if (Math.random() < 0.05) { // 5% chance every 15 seconds
        document.body.classList.add('rainbow-mode');
        setTimeout(() => {
            document.body.classList.remove('rainbow-mode');
        }, 3000);
    }
}, 15000);

// Random video overlays during playback
setInterval(() => {
    if (!elements.playerScreen.classList.contains('hidden') && !elements.videoPlayer.paused && Math.random() < 0.1) {
        showVideoOverlay();
    }
}, 20000);

// Console message for developers
console.log('%c🎬 ANTI-FLIX 🎬', 'font-size: 30px; color: #ff00ff; text-shadow: 2px 2px #00ff00;');
console.log('%cWelcome to the debugging nightmare!', 'font-size: 16px; color: #ff0033;');
console.log('%cEverything here is intentionally broken. You\'re welcome.', 'font-size: 12px; color: #00ffff;');
console.log('%cTip: Try misspelling your searches. Trust me.', 'font-size: 12px; color: #ffff00;');

/**
 * Learn HTML - Main Shared Engine
 * Handles LocalStorage state, Achievements, Streak tracker, Prefs,
 * Accessibility Font-Scaling, custom Web Audio synthesized sounds, Web Speech, and navigation bars.
 */

// Core State Initializers
let completedLessons = JSON.parse(localStorage.getItem("html_completed_lessons") || "[]");
let quizScores = JSON.parse(localStorage.getItem("html_quiz_scores") || "[]"); // array of percentage scores: [80, 90, 75...]
let userStreak = parseInt(localStorage.getItem("html_user_streak") || "0");
let lastActiveDate = localStorage.getItem("html_last_active_date") || "";
let soundEnabled = localStorage.getItem("html_sound_enabled") !== "false";
let notificationsEnabled = localStorage.getItem("html_notifications_enabled") === "true";
let userFontSize = localStorage.getItem("html_font_size") || "medium";

// Initialize Theme Setup
function initTheme() {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("html_theme");
    
    if (savedTheme === "dark" || (!savedTheme && isSystemDark)) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function toggleTheme() {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("html_theme", "light");
        showToast("Switched to Light Mode ☀️", "success");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("html_theme", "dark");
        showToast("Switched to Dark Mode 🌙", "success");
    }
    playTone(440, "sine", 0.05); // click sound
}

// Font Sizing controls
function setFontSize(size) {
    document.body.classList.remove("font-small", "font-medium", "font-large");
    document.body.classList.add(`font-${size}`);
    localStorage.setItem("html_font_size", size);
    userFontSize = size;
}

function toggleFontPopup() {
    const popup = document.getElementById("fontPopup");
    if (popup) {
        popup.classList.toggle("show");
    }
}

// Web Audio API Synthesizer (Generates tones offline)
function playTone(freq, type = "sine", duration = 0.1) {
    if (!soundEnabled) return;
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = type;
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        console.warn("Audio Context blocked or failed to initialize", e);
    }
}

function playCorrectSound() {
    // Elegant double high beep
    playTone(523.25, "sine", 0.08); // C5
    setTimeout(() => {
        playTone(659.25, "sine", 0.12); // E5
    }, 100);
}

function playIncorrectSound() {
    // Flat low buzzer tone
    playTone(180, "sawtooth", 0.25);
}

// Streak Calculation Logic
function updateStreak() {
    const today = new Date().toDateString();
    
    if (lastActiveDate === today) {
        // Already logged activity today, do nothing
        return;
    }
    
    if (lastActiveDate) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();
        
        if (lastActiveDate === yesterdayStr) {
            // Consecutive activity! increment streak
            userStreak += 1;
        } else {
            // Gap in activity, reset to 1
            userStreak = 1;
        }
    } else {
        // Fresh start
        userStreak = 1;
    }
    
    localStorage.setItem("html_user_streak", userStreak.toString());
    localStorage.setItem("html_last_active_date", today);
}

// Daily Completion Helpers
function getDailyCompletions() {
    const todayStr = new Date().toDateString();
    const stored = localStorage.getItem("html_daily_completions");
    if (stored) {
        try {
            const data = JSON.parse(stored);
            if (data.date === todayStr) {
                return data.lessons || [];
            }
        } catch (e) {
            console.error("Error parsing html_daily_completions", e);
        }
    }
    return [];
}

function addToDailyCompletions(lessonId) {
    const todayStr = new Date().toDateString();
    let lessons = getDailyCompletions();
    if (!lessons.includes(lessonId)) {
        lessons.push(lessonId);
    }
    localStorage.setItem("html_daily_completions", JSON.stringify({
        date: todayStr,
        lessons: lessons
    }));
    window.dispatchEvent(new CustomEvent("dailyGoalUpdated"));
}

function removeFromDailyCompletions(lessonId) {
    const todayStr = new Date().toDateString();
    let lessons = getDailyCompletions();
    lessons = lessons.filter(id => id !== lessonId);
    localStorage.setItem("html_daily_completions", JSON.stringify({
        date: todayStr,
        lessons: lessons
    }));
    window.dispatchEvent(new CustomEvent("dailyGoalUpdated"));
}

function getLessonsCompletedTodayCount() {
    return getDailyCompletions().length;
}

function getDailyGoal() {
    return parseInt(localStorage.getItem("html_daily_goal") || "3");
}

function setDailyGoal(goalVal) {
    localStorage.setItem("html_daily_goal", goalVal.toString());
    window.dispatchEvent(new CustomEvent("dailyGoalUpdated"));
}

// Completion Trackers
function markLessonComplete(lessonId) {
    if (!completedLessons.includes(lessonId)) {
        completedLessons.push(lessonId);
        localStorage.setItem("html_completed_lessons", JSON.stringify(completedLessons));
        addToDailyCompletions(lessonId);
        updateStreak();
        showToast("Lesson Completed! 📚 +10 XP", "success");
        playCorrectSound();
        checkBadgesUnlock();
        return true;
    }
    return false;
}

function unmarkLessonComplete(lessonId) {
    if (completedLessons.includes(lessonId)) {
        completedLessons = completedLessons.filter(l => l !== lessonId);
        localStorage.setItem("html_completed_lessons", JSON.stringify(completedLessons));
        removeFromDailyCompletions(lessonId);
        playTone(300, "sine", 0.08);
        return true;
    }
    return false;
}

function checkBadgesUnlock() {
    const count = completedLessons.length;
    let unlocked = [];
    if (count >= 5 && !localStorage.getItem("badge_starter")) {
        localStorage.setItem("badge_starter", "true");
        unlocked.push("Starter 🚀 (5 Lessons)");
    }
    if (count >= 10 && !localStorage.getItem("badge_builder")) {
        localStorage.setItem("badge_builder", "true");
        unlocked.push("Builder 🛠️ (10 Lessons)");
    }
    if (count >= HTML_LESSONS.length && !localStorage.getItem("badge_master")) {
        localStorage.setItem("badge_master", "true");
        unlocked.push("HTML Master 🎓 (Completed All Lessons)");
    }
    
    unlocked.forEach(badge => {
        setTimeout(() => {
            showToast(`Achievement Unlocked: ${badge}!`, "success");
            playCorrectSound();
        }, 1200);
    });
}

function saveQuizScore(percent) {
    quizScores.push(percent);
    localStorage.setItem("html_quiz_scores", JSON.stringify(quizScores));
    updateStreak();
    checkBadgesUnlock();
}

// Toast System
function showToast(message, type = "success") {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Trigger CSS Reveal
    setTimeout(() => {
        toast.classList.add("show");
    }, 50);
    
    // Auto Remove
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 4000);
}

// Web Speech Voice Lesson Search
function triggerVoiceSearch(callback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showToast("Web Speech API is not supported in this browser/device.", "danger");
        return;
    }
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
        showToast("Listening... Speak an HTML tag or level!", "warning");
        playTone(600, "sine", 0.08);
    };
    
    recognition.onspeechend = () => {
        recognition.stop();
    };
    
    recognition.onresult = (e) => {
        const query = e.results[0][0].transcript;
        playTone(800, "sine", 0.08);
        showToast(`Voice Search: "${query}"`, "success");
        if (callback) callback(query);
    };
    
    recognition.onerror = (e) => {
        showToast("Speech Recognition failed. Try typing instead.", "danger");
        console.error("Speech Recognition Error", e);
    };
    
    recognition.start();
}

// Copy Code Clipboard helper
function copyToClipboard(text, elementId = null) {
    navigator.clipboard.writeText(text).then(() => {
        showToast("Code copied to clipboard! 📋", "success");
        playTone(500, "sine", 0.05);
        if (elementId) {
            const btn = document.getElementById(elementId);
            if (btn) {
                const prevHtml = btn.innerHTML;
                btn.innerHTML = "Copied!";
                setTimeout(() => {
                    btn.innerHTML = prevHtml;
                }, 1500);
            }
        }
    }).catch(err => {
        showToast("Write to clipboard failed.", "danger");
    });
}

// Register Simple Navigation Active Indicators
function setupNavigationHighlight() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    
    // Highlight Mobile items
    const mobileLinks = document.querySelectorAll("nav.nav-mobile a");
    mobileLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Highlight Desktop items
    const desktopLinks = document.querySelectorAll("nav.nav-desktop a");
    desktopLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

// Notification Setup
function initDailyReminders() {
    const slider = document.getElementById("notifToggle");
    if (!slider) return;
    slider.checked = notificationsEnabled;
    
    slider.addEventListener("change", function() {
        if (slider.checked) {
            if (!("Notification" in window)) {
                showToast("Your device doesn't support local reminders.", "danger");
                slider.checked = false;
                return;
            }
            
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    localStorage.setItem("html_notifications_enabled", "true");
                    notificationsEnabled = true;
                    showToast("Daily reminders enabled! Learn each day. 🔔", "success");
                    // Mock immediate notification
                    new Notification("HTML Learner", {
                        body: "Excellent choice! You will receive daily checkins to log your streak.",
                        icon: "file:///android_asset/favicon.ico"
                    });
                } else {
                    localStorage.setItem("html_notifications_enabled", "false");
                    notificationsEnabled = false;
                    slider.checked = false;
                    showToast("Notification permission was denied.", "warning");
                }
            });
        } else {
            localStorage.setItem("html_notifications_enabled", "false");
            notificationsEnabled = false;
            showToast("Notifications disabled.", "warning");
        }
    });
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    setFontSize(userFontSize);
    setupNavigationHighlight();
    
    // Handle font selectors
    const fontBtns = document.querySelectorAll(".font-popup button");
    fontBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const size = btn.id.replace("font_", "");
            setFontSize(size);
            toggleFontPopup();
            showToast(`Font scaled to ${size.toUpperCase()}`, "success");
        });
    });

    // Close sizer on out click
    document.addEventListener("click", (e) => {
        const popup = document.getElementById("fontPopup");
        const trigger = document.getElementById("fontToggleBtn");
        if (popup && trigger && !popup.contains(e.target) && !trigger.contains(e.target)) {
            popup.classList.remove("show");
        }
    });
});

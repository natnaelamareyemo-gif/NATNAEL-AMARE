// Coding templates available in the playground
const PLAYGROUND_TEMPLATES = {
    basic: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; text-align: center; background: #EEF2F6; color: #1E293B; padding: 40px; }
        .hero-banner { background: white; max-width: 500px; margin: 0 auto; padding: 40px; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
        h1 { color: #4F46E5; }
        .badge { background: #818CF8; color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; }
    </style>
</head>
<body>
    <div class="hero-banner">
        <span class="badge">Level 1 Template</span>
        <h1>Hello Future Web Dev!</h1>
        <p>This is a standard rendered HTML skeleton with simple embedded styling. Try changing the text or the badge style!</p>
    </div>
</body>
</html>`,

    form: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Segoe UI', system-ui; display: flex; align-items: center; justify-content: center; min-height: 90vh; background: #F8FAFC; margin: 0; }
        .form-card { background: white; width: 320px; padding: 30px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.06); border: 1px solid #E2E8F0; }
        .form-btn { background: #4F46E5; color: white; border: none; width: 100%; padding: 12px; border-radius: 8px; font-weight: 600; font-size: 1rem; cursor: pointer; }
        .form-btn:hover { background: #4338CA; }
        .input-box { border: 1px solid #CBD5E1; width: 100%; border-radius: 8px; padding: 10px; margin-top: 6px; margin-bottom: 16px; box-sizing: border-box; }
        label { font-size: 0.85rem; font-weight: 600; color: #475569; }
    </style>
</head>
<body>
    <div class="form-card">
        <h2 style="margin-bottom: 20px; text-align: center; color: #0F172A;">Sign Up</h2>
        <form onsubmit="alert('Registration success!'); return false;">
            <label for="username">Your Username</label>
            <input id="username" type="text" placeholder="natnael99" class="input-box" required>
            
            <label for="email">Email address</label>
            <input id="email" type="email" placeholder="dev@example.com" class="input-box" required>
            
            <button type="submit" class="form-btn">Create Free Account</button>
        </form>
    </div>
</body>
</html>`,

    table: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; padding: 30px; background: #F1F5F9; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; overflow: hidden; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.04); }
        th, td { padding: 14px 20px; text-align: left; }
        th { background: #4F46E5; color: white; text-transform: uppercase; font-size: 0.8rem; font-weight: 700; }
        tr:nth-child(even) { background-color: #E2E8F0; }
        tr:nth-child(odd) { background-color: white; }
    </style>
</head>
<body>
    <h3>Active Leaderboard</h3>
    <table>
        <thead>
            <tr>
                <th>Rank</th>
                <th>User Profile</th>
                <th>Streak Days</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1st</td>
                <td>natnaelamare</td>
                <td>42 Days 🔥</td>
            </tr>
            <tr>
                <td>2nd</td>
                <td>astro_coder</td>
                <td>31 Days 🔥</td>
            </tr>
            <tr>
                <td>3rd</td>
                <td>html_pioneer</td>
                <td>24 Days</td>
            </tr>
        </tbody>
    </table>
</body>
</html>`,

    card: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; background: #6366F1; display: flex; align-items: center; justify-content: center; height: 95vh; margin: 0; }
        .glass-profile { background: rgba(255, 255, 255, 0.25); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); width: 280px; text-align: center; padding: 30px; border-radius: 24px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
        .avatar { width: 80px; height: 80px; border-radius: 50%; border: 3px solid white; object-fit: cover; margin-bottom: 12px; }
        .badge { background: #10B981; padding: 4px 10px; font-size: 0.75rem; border-radius: 20px; font-weight: bold; }
    </style>
</head>
<body>
    <div class="glass-profile">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" alt="Avatar User" class="avatar">
        <h3>Natnael Amare</h3>
        <p style="opacity: 0.8; font-size: 0.9rem; margin-bottom: 20px;">HTML & CSS Specialist</p>
        <span class="badge">PRO BUILDER</span>
    </div>
</body>
</html>`,

    navbar: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: sans-serif; margin: 0; background: #0F172A; color: white; }
        nav { background: #1E293B; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 40px; border-bottom: 2px solid #334155; }
        .nav-logo { font-size: 1.25rem; font-weight: 800; color: #38BDF8; }
        .nav-list { display: flex; list-style: none; gap: 24px; margin: 0; padding: 0; }
        .nav-list a { text-decoration: none; color: #94A3B8; font-weight: 600; transition: color 0.2s; }
        .nav-list a:hover { color: white; }
    </style>
</head>
<body>
    <nav>
        <div class="nav-logo">DevPlatform</div>
        <ul class="nav-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">API docs</a></li>
        </ul>
    </nav>
    <div style="padding: 40px; text-align: center;">
        <p style="color: #64748B;">Modify these items to see instant menu changes!</p>
    </div>
</body>
</html>`
};

// Local storage list of playground snippets namespaces
let savedSnippets = JSON.parse(localStorage.getItem("html_playground_snippets") || "{}");

function saveSnippet(name, code) {
    savedSnippets[name] = code;
    localStorage.setItem("html_playground_snippets", JSON.stringify(savedSnippets));
}

function deleteSnippet(name) {
    delete savedSnippets[name];
    localStorage.setItem("html_playground_snippets", JSON.stringify(savedSnippets));
}

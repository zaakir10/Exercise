/**
 * CORE APPLICATION LOGIC
 */

// 1. Auth Guard
const currentPage = window.location.pathname.split('/').pop();
if (currentPage !== 'index.html' && !api.isAuthenticated()) {
    window.location.href = 'index.html';
}

// 2. UI Functions
const UI = {
    toggleDarkMode: () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('sms_theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    },

    loadTheme: () => {
        if (localStorage.getItem('sms_theme') === 'dark') {
            document.body.classList.add('dark-mode');
        }
    },

    renderSidebar: () => {
        const sidebar = document.getElementById('sidebar-container');
        if (!sidebar) return;
        
        // Dynamic Active Class
        const getActive = (page) => currentPage === page ? 'active' : '';

        sidebar.innerHTML = `
            <div class="sidebar-header">
                🏫 EduSmart
            </div>
            <ul class="sidebar-menu">
                <li><a href="dashboard.html" class="${getActive('dashboard.html')}">📊 Dashboard</a></li>
                <li><a href="students.html" class="${getActive('students.html')}">👨‍🎓 Students</a></li>
                <li><a href="teachers.html" class="${getActive('teachers.html')}">👩‍🏫 Teachers</a></li>
                <li><a href="fees.html" class="${getActive('fees.html')}">💰 Fees</a></li>
                <li><a href="classes.html" class="${getActive('classes.html')}">🏫 Classes</a></li>
                <li><a href="attendance.html">📅 Attendance</a></li>
                <li><a href="exams.html">📝 Exams & Results</a></li>
                <li><a href="notices.html" class="${getActive('notices.html')}">📢 Notices</a></li>
                <li><a href="settings.html" class="${getActive('settings.html')}">⚙️ Settings</a></li>
                <li><a href="#" onclick="api.logout()" style="color: var(--danger)">🚪 Logout</a></li>
            </ul>
        `;
        
    },

    showToast: (message, type = 'success') => {
        const toast = document.createElement('div');
        toast.className = `card`;
        toast.style.cssText = `position: fixed; top: 20px; right: 20px; border-left: 4px solid var(--${type}); z-index: 1000; animation: slideIn 0.3s;`;
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    UI.loadTheme();
    UI.renderSidebar();
    
    // Theme Toggle Listener (if button exists)
    const themeBtn = document.getElementById('theme-toggle');
    if(themeBtn) themeBtn.addEventListener('click', UI.toggleDarkMode);
}); 


function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    
    // Optional: Close sidebar when clicking outside on mobile
    if (sidebar.classList.contains('open')) {
        const overlay = document.createElement('div');
        overlay.id = 'sidebar-overlay';
        overlay.style = "position:fixed; inset:0; background:rgba(0,0,0,0.5); z-index:9;";
        overlay.onclick = () => {
            sidebar.classList.remove('open');
            overlay.remove();
        };
        document.body.appendChild(overlay);
    } else {
        document.getElementById('sidebar-overlay')?.remove();
    }
}

















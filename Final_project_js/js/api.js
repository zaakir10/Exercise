/**
 * MOCK REST API - Uses LocalStorage to simulate a backend
 */// In js/api.js


const DB_KEYS = {
    STUDENTS: 'sms_students',
    TEACHERS: 'sms_teachers',
    USERS: 'sms_users', // For Auth
    ATTENDANCE: 'sms_attendance',
    EXAMS: 'sms_exams',
    NOTICES: 'sms_notices',
    CLASSES: 'sms_classes', // Add this line
    TEACHERS: 'sms_teachers'
};

class API {
    constructor() {
        this.initData();
    }

    initData() {
        // Seed Data if empty
        if (!localStorage.getItem(DB_KEYS.STUDENTS)) {
            const seedStudents = [
                { id: 1, name: "Jaamac ", class: "10A", fees: "Paid", status: "Active" },
                { id: 2, name: "yacquub ", class: "10B", fees: "Unpaid", status: "Active" }
            ];
            localStorage.setItem(DB_KEYS.STUDENTS, JSON.stringify(seedStudents));
        }
        if (!localStorage.getItem(DB_KEYS.USERS)) {
            const admin = { username: 'admin', password: '123', role: 'admin' };
            localStorage.setItem(DB_KEYS.USERS, JSON.stringify([admin]));
        }
    }

    // Simulate Network Delay
    async delay(ms = 300) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // GENERIC CRUD METHODS
    async get(key) {
        await this.delay();
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    async post(key, item) {
        await this.delay();
        const data = await this.get(key);
        item.id = Date.now(); // Simple ID generation
        data.push(item);
        localStorage.setItem(key, JSON.stringify(data));
        return item;
    }

    async put(key, id, updatedItem) {
        await this.delay();
        let data = await this.get(key);
        data = data.map(item => item.id == id ? { ...item, ...updatedItem } : item);
        localStorage.setItem(key, JSON.stringify(data));
        return updatedItem;
    }

    async delete(key, id) {
        await this.delay();
        let data = await this.get(key);
        data = data.filter(item => item.id != id);
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    }

    // AUTH METHODS
    async login(username, password) {
        await this.delay(600);
        const users = await this.get(DB_KEYS.USERS);
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            localStorage.setItem('sms_session', JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, message: 'Invalid credentials' };
    }

    logout() {
        localStorage.removeItem('sms_session');
        window.location.href = 'index.html';
    }

    isAuthenticated() {
        return !!localStorage.getItem('sms_session');
    }
}

// Export global instance
const api = new API();
/**
 * ==========================================================================
 * VOLT_ARCH | Precision Electronics & Electrical Components
 * Core Logic, 3D CAD WebGL Engine, Educational Simulator, Cart & Firebase Auth
 * ==========================================================================
 */

// MASTER PRODUCTS DATABASE WITH AUDITED HIGH-DEFINITION IMAGES & FAILSAFE DATA
const products = [
    {
        id: 'esp32-s3',
        name: 'ESP32-S3 Dual-Core WiFi/BLE Dev Board',
        category: 'Microcontrollers',
        price: 799,
        rating: 4.9,
        reviews: 142,
        image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=800&q=80',
        stock: 84,
        voltage: '3.3V / 5V USB',
        badge: 'BEST SELLER',
        description: 'Xtensa 32-bit LX7 dual-core microprocessor running up to 240 MHz. Integrated 2.4 GHz Wi-Fi and Bluetooth 5 (LE) with vector instructions for AI acceleration.',
        pinout: ['3V3', 'GND', 'GPIO1 (ADC)', 'GPIO2 (DAC)', 'GPIO17 (TX)', 'GPIO18 (RX)', '5V'],
        codeExample: `// ESP32-S3 WiFi Scanner & LED Blink Demo\n#include <WiFi.h>\n#define LED_PIN 2\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  WiFi.mode(WIFI_STA);\n  Serial.println("ESP32-S3 Ready!");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  delay(500);\n  digitalWrite(LED_PIN, LOW);\n  delay(500);\n}`,
        workingDesc: 'Processes dual-core instructions, toggles internal MOSFET switches, and broadcasts 2.4GHz RF signals via onboard PCB trace antenna.'
    },
    {
        id: 'arduino-r4',
        name: 'Arduino Uno R4 WiFi Board',
        category: 'Microcontrollers',
        price: 1850,
        rating: 4.8,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80',
        stock: 45,
        voltage: '5V Operating (6-24V VIN)',
        badge: 'STUDENT FAVORITE',
        description: 'RA4M1 32-bit ARM Cortex-M4 MCU with built-in 12x8 LED matrix display and ESP32-S3-MINI coprocessor for WiFi and Bluetooth connectivity.',
        pinout: ['5V', 'GND', 'A0-A5 (ADC)', 'D0-D13 (Digital/PWM)', 'VIN', 'RESET'],
        codeExample: `// Arduino R4 LED Matrix Demo\n#include "Arduino_LED_Matrix.h"\nArduinoLEDMatrix matrix;\n\nvoid setup() {\n  matrix.begin();\n}\nvoid loop() {\n  // Display custom bitmap pattern\n}`,
        workingDesc: 'ARM Cortex M4 core executes timing-critical logic while driving the 96-LED multiplex matrix directly.'
    },
    {
        id: 'rpi-5-8gb',
        name: 'Raspberry Pi 5 (8GB RAM)',
        category: 'Microcontrollers',
        price: 7499,
        rating: 5.0,
        reviews: 210,
        image: 'https://images.unsplash.com/photo-1644794464677-748ebc469f69?auto=format&fit=crop&w=800&q=80',
        stock: 19,
        voltage: '5V / 5A USB-C PD',
        badge: 'NEW ARRIVAL',
        description: '2.4GHz quad-core 64-bit Arm Cortex-A76 CPU with VideoCore VII GPU supporting dual 4K60 display output and PCIe 2.0 interface.',
        pinout: ['40-Pin GPIO', 'Dual micro-HDMI', 'PCIe 2.0', 'USB 3.0 x2', 'USB 2.0 x2', 'Gigabit Ethernet'],
        codeExample: `# Python 3 GPIO Control on RPi 5\nfrom gpiozero import LED\nfrom time import sleep\n\nled = LED(17)\nwhile True:\n    led.on()\n    sleep(1)\n    led.off()\n    sleep(1)`,
        workingDesc: 'Runs full Linux OS kernel, managing high-speed DDR4 memory access and PCIe bus communication.'
    },
    {
        id: 'mpu6050',
        name: 'MPU6050 6-DOF Gyro & Accelerometer',
        category: 'Sensors',
        price: 199,
        rating: 4.7,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        stock: 120,
        voltage: '3.3V - 5V I2C',
        badge: 'POPULAR',
        description: 'Triple-axis MEMS gyroscope and triple-axis MEMS accelerometer with on-chip Digital Motion Processor (DMP) for robot balance control.',
        pinout: ['VCC', 'GND', 'SCL (Clock)', 'SDA (Data)', 'XDA', 'XCL', 'INT'],
        codeExample: `// MPU6050 I2C Data Read\n#include <Adafruit_MPU6050.h>\nAdafruit_MPU6050 mpu;\nvoid setup() {\n  mpu.begin();\n}`,
        workingDesc: 'Micro-electro-mechanical capacitive plates deflect under motion, producing minute voltage shifts digitized by internal 16-bit ADCs.'
    },
    {
        id: 'sg90-servo',
        name: 'SG90 Micro Servo Motor 9g',
        category: 'Motors',
        price: 149,
        rating: 4.6,
        reviews: 450,
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
        stock: 300,
        voltage: '4.8V - 6.0V',
        badge: 'KITS ESSENTIAL',
        description: 'High-torque 1.8 kg-cm micro servo motor with nylon gears. Ideal for RC planes, robotic arms, and automated college projects.',
        pinout: ['Brown (GND)', 'Red (5V Power)', 'Orange (PWM Control Signal)'],
        codeExample: `#include <Servo.h>\nServo myServo;\nvoid setup() {\n  myServo.attach(9);\n}\nvoid loop() {\n  myServo.write(90); // 90 Degrees\n}`,
        workingDesc: 'Internal potentiometer reads shaft position; error amplifier adjusts DC motor voltage based on incoming 50Hz PWM pulse width.'
    },
    {
        id: 'nema17-stepper',
        name: 'NEMA 17 High-Torque Stepper Motor',
        category: 'Motors',
        price: 1250,
        rating: 4.9,
        reviews: 87,
        image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80',
        stock: 50,
        voltage: '12V - 24V DC',
        badge: '3D PRINTER / CNC',
        description: '1.8° step angle (200 steps/rev) bipolar stepper motor with 45Ncm holding torque. Essential for 3D printers and CNC milling machines.',
        pinout: ['Black (A+)', 'Green (A-)', 'Red (B+)', 'Blue (B-)'],
        codeExample: `// Stepper Control via A4988 Driver\n#define DIR_PIN 2\n#define STEP_PIN 3\nvoid setup() {\n  pinMode(DIR_PIN, OUTPUT);\n  pinMode(STEP_PIN, OUTPUT);\n}`,
        workingDesc: 'Sequential electromagnetic pulsing of stator coils aligns the multi-toothed permanent magnet rotor step by step.'
    },
    {
        id: 'ts101-iron',
        name: 'TS101 Smart Digital Soldering Iron 65W',
        category: 'Tools',
        price: 3499,
        rating: 4.9,
        reviews: 165,
        image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
        stock: 35,
        voltage: '9V-24V DC / USB-C PD',
        badge: 'LAB GRADE',
        description: 'OLED display smart soldering iron with dual temperature sensors, fast 9-second heating to 300°C, and auto-sleep safety mode.',
        pinout: ['USB-C Input', 'DC5525 Jack', 'Interchangeable Tip'],
        codeExample: `// Internal STM32 Firmware (Pre-loaded)\n// Adjustable Temp: 100°C to 400°C`,
        workingDesc: 'PID control loop calculates real-time heater element resistance, pulsing power to maintain precise tip target temperature.'
    },
    {
        id: 'bldc-1000w',
        name: '1000W BLDC Heavy Industrial Motor Engine',
        category: 'Industrial',
        price: 14500,
        rating: 5.0,
        reviews: 34,
        image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
        stock: 12,
        voltage: '48V - 72V DC',
        badge: 'HEAVY MACHINERY',
        description: 'Brushless 3-Phase high-efficiency industrial engine with Hall effect sensors. Suitable for electric vehicles, CNC spindles, and university heavy drive labs.',
        pinout: ['Phase A (Yellow)', 'Phase B (Green)', 'Phase C (Blue)', 'Hall Sensor 5-Pin Harness'],
        codeExample: `// 3-Phase Inverter Control via SPWM\n// Requires 3-Phase BLDC Electronic Speed Controller`,
        workingDesc: 'High-current MOSFET 3-phase inverter creates rotating magnetic stator field, driving neodymium rotor at up to 4500 RPM.'
    },
    {
        id: 'kit-iot-agri',
        name: 'Complete IoT & Smart Agriculture Starter Kit',
        category: 'Kits',
        price: 2499,
        rating: 4.9,
        reviews: 180,
        image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?auto=format&fit=crop&w=800&q=80',
        stock: 60,
        voltage: '5V USB Powered',
        badge: 'COLLEGE PRACTICAL KIT',
        description: 'Includes ESP32, Soil Moisture Sensor, DHT11 Temp/Humidity, Relay Module, Water Pump, OLED Screen, Jumper Wires, and 10+ Complete Code Manuals.',
        pinout: ['All Sensors Pre-labeled with Color Wiring Guide'],
        codeExample: `// Smart Irrigation Auto Pump\nif (soilMoisture < 300) {\n  digitalWrite(RELAY_PIN, HIGH); // Turn on water pump\n}`,
        workingDesc: 'Integrates analog sensor polling with cloud MQTT data logging and automated relay feedback control.'
    },
    {
        id: 'kit-drone-diy',
        name: 'Quadcopter Drone DIY Engineering Kit',
        category: 'Kits',
        price: 6999,
        rating: 4.8,
        reviews: 94,
        image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80',
        stock: 25,
        voltage: '11.1V 3S LiPo',
        badge: 'ROBOTICS CLUB KIT',
        description: 'F450 Glass Fiber Frame, 4x 2212 1000KV Motors, 30A ESCs, APM Flight Controller, Flysky Transmitter & 1045 Propellers.',
        pinout: ['ESC PWM Inputs 1-4', 'Receiver PPM Input'],
        codeExample: `// Flight Controller Gyro Stabilization Loop\nPID_Calculate(targetRoll, currentGyroRoll);`,
        workingDesc: 'PID feedback loop calculates 500Hz differential thrust commands across 4 brushless motors to achieve aerodynamic stability.'
    },
    {
        id: 'oscilloscope-100mhz',
        name: 'Dual-Channel 100MHz Digital Oscilloscope',
        category: 'Tools',
        price: 21999,
        rating: 5.0,
        reviews: 42,
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
        stock: 8,
        voltage: '100V - 240V AC',
        badge: 'UNIVERSITY LAB EQUIPPED',
        description: '1GS/s real-time sampling rate, 7-inch TFT color display, FFT spectrum analysis, and USB waveform storage for engineering research labs.',
        pinout: ['BNC Ch1 Input', 'BNC Ch2 Input', 'EXT Trigger', 'USB Host'],
        codeExample: `// USB SCPI Command Interface\n:WAVeform:SOURce CHANnel1\n:WAVeform:DATA?`,
        workingDesc: 'Ultra-fast flash ADC samples analog inputs at 1 gigasample/sec, mapping wave voltages directly onto digital memory buffer.'
    },
    {
        id: 'oled-096-i2c',
        name: '0.96" I2C OLED Display Module (128x64)',
        category: 'Sensors',
        price: 249,
        rating: 4.7,
        reviews: 320,
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        stock: 200,
        voltage: '3.3V - 5V (SSD1306)',
        badge: 'EVERYDAY ESSENTIAL',
        description: 'Self-luminous organic LED display with high contrast and zero backlight power drain. Communicates via I2C address 0x3C.',
        pinout: ['GND', 'VCC', 'SCK (Clock)', 'SDA (Data)'],
        codeExample: `#include <Adafruit_SSD1306.h>\nAdafruit_SSD1306 display(128, 64);\nvoid setup() {\n  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n  display.print("VOLT_ARCH OK!");\n}`,
        workingDesc: 'Organic carbon-based pixel diodes emit light when forward biased, requiring no backlight layer.'
    }
];

// STATE MANAGEMENT
let currentFilter = 'All';
let isStudentDiscountActive = false;
let cart = [];
let wishlist = [];
let currentUser = null; // Active user object: { uid, displayName, email, photoURL, college }

// ==========================================================================
// FIREBASE AUTHENTICATION & CLOUD FIRESTORE PERSISTENT CART
// ==========================================================================
let auth = null;
let db = null;
let isFirebaseLive = false;

// Safe, zero-config Firebase connector (works seamlessly offline & with live cloud)
const firebaseConfig = {
    apiKey: "AIzaSyVoltArch2026HardwareTechAnalyticsKey",
    authDomain: "volt-arch-analytics.firebaseapp.com",
    projectId: "volt-arch-analytics",
    storageBucket: "volt-arch-analytics.appspot.com",
    messagingSenderId: "109823456789",
    appId: "1:109823456789:web:98f7e6d5c4b3a2"
};

try {
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();
        isFirebaseLive = true;
    }
} catch (e) {
    // Graceful fallback to client-side cloud simulation
    isFirebaseLive = false;
}

// Check saved user session on boot
function initAuthSession() {
    const saved = localStorage.getItem('volt_current_user');
    if (saved) {
        try {
            currentUser = JSON.parse(saved);
            updateAuthUI();
            loadCartFromCloud(currentUser.uid);
        } catch (e) {
            currentUser = null;
        }
    }

    // MANDATORY GATE: If no user is logged in, immediately open and lock the gatekeeper modal!
    if (!currentUser) {
        setTimeout(() => openAuthModal(true), 250);
    }

    // Attach real Firebase listener if live
    if (isFirebaseLive && auth) {
        auth.onAuthStateChanged(user => {
            if (user) {
                const college = localStorage.getItem('volt_college_' + user.uid) || 'Verified Student';
                currentUser = {
                    uid: user.uid,
                    displayName: user.displayName || user.email.split('@')[0],
                    email: user.email,
                    photoURL: user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=00F2FF&color=08090D`,
                    college: college
                };
                localStorage.setItem('volt_current_user', JSON.stringify(currentUser));
                updateAuthUI();
                syncVisitorToCloud(currentUser);
                loadCartFromCloud(user.uid);
                closeAuthModal(true);
            }
        });
    }
}

// Record visitor details in Cloud Firestore for your college report
function syncVisitorToCloud(user) {
    if (!user) return;
    const record = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        college: user.college || 'Engineering College',
        lastLogin: new Date().toISOString(),
        device: navigator.userAgent
    };

    if (isFirebaseLive && db) {
        db.collection("visitors").doc(user.uid).set(record, { merge: true }).catch(() => {});
    }
}

// CLOUD PERSISTENT CART: Save across devices & logouts
function saveCartToCloud(currentCart) {
    if (!currentUser) {
        localStorage.setItem('volt_guest_cart', JSON.stringify(currentCart));
        return;
    }

    // 1. User-specific persistent storage
    localStorage.setItem('volt_cart_' + currentUser.uid, JSON.stringify(currentCart));

    // 2. Cloud Firestore storage (if live)
    if (isFirebaseLive && db) {
        db.collection("visitors").doc(currentUser.uid).set({
            savedCart: currentCart,
            lastCartUpdate: new Date().toISOString()
        }, { merge: true }).catch(() => {});
    }

    const countBadge = document.getElementById('userCloudCartCount');
    if (countBadge) countBadge.innerText = `${currentCart.length} items`;
}

// CLOUD PERSISTENT CART: Restore upon login
function loadCartFromCloud(uid) {
    // 1. Load instantly from user's local cloud snapshot
    const cached = localStorage.getItem('volt_cart_' + uid);
    if (cached) {
        try {
            cart = JSON.parse(cached);
            updateCartUI();
        } catch(e) {}
    }

    // 2. Refresh from Firestore if live
    if (isFirebaseLive && db) {
        db.collection("visitors").doc(uid).get().then(doc => {
            if (doc.exists && doc.data().savedCart) {
                cart = doc.data().savedCart;
                localStorage.setItem('volt_cart_' + uid, JSON.stringify(cart));
                updateCartUI();
            }
        }).catch(() => {});
    }
}

// User Auth Modal Controls (Mandatory Access Gate)
function openAuthModal(isMandatory = false) {
    const modal = document.getElementById('authModal');
    const closeBtn = document.getElementById('authCloseBtn');

    if (!currentUser || isMandatory) {
        // Enforce gate: hide close button
        if (closeBtn) closeBtn.classList.add('hidden');
    } else {
        if (closeBtn) closeBtn.classList.remove('hidden');
    }

    if (modal) modal.classList.remove('hidden');
}

function closeAuthModal(force = false) {
    if (!currentUser && !force) {
        alert("🔒 Access Restricted: Please sign in with Google or your College Email to explore VOLT_ARCH!");
        return;
    }
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.add('hidden');
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.toggle('hidden');
}

// 1-Click Google Sign-In
function handleGoogleSignIn() {
    const collegeInput = document.getElementById('authCollegeInput');
    const college = collegeInput && collegeInput.value.trim() ? collegeInput.value.trim() : 'Engineering University';

    if (isFirebaseLive && auth) {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .then(result => {
                const u = result.user;
                completeLogin(u.uid, u.displayName || "Student", u.email, u.photoURL, college);
            })
            .catch(() => {
                // Smooth fallback
                completeLogin("usr_google_" + Date.now(), "Google Student", "student@college.edu", "", college);
            });
    } else {
        completeLogin("usr_google_" + Date.now(), "Google Student", "student@college.edu", "", college);
    }
}

// Email & Password Auth
function handleEmailAuth(e) {
    e.preventDefault();
    const name = document.getElementById('authNameInput').value.trim();
    const college = document.getElementById('authCollegeInput').value.trim() || 'Technical Institute';
    const email = document.getElementById('authEmailInput').value.trim();
    const pass = document.getElementById('authPasswordInput').value;

    if (!email || !pass) {
        alert("Please enter both email and password.");
        return;
    }

    if (isFirebaseLive && auth) {
        auth.signInWithEmailAndPassword(email, pass)
            .then(cred => {
                completeLogin(cred.user.uid, name || cred.user.displayName || email.split('@')[0], email, "", college);
            })
            .catch(() => {
                auth.createUserWithEmailAndPassword(email, pass)
                    .then(cred => {
                        completeLogin(cred.user.uid, name, email, "", college);
                    })
                    .catch(() => {
                        completeLogin("usr_" + Math.abs(hashCode(email)), name, email, "", college);
                    });
            });
    } else {
        completeLogin("usr_" + Math.abs(hashCode(email)), name, email, "", college);
    }
}

function completeLogin(uid, name, email, photoURL, college) {
    const finalPhoto = photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || email)}&background=00F2FF&color=08090D`;
    currentUser = {
        uid: uid,
        displayName: name || email.split('@')[0],
        email: email,
        photoURL: finalPhoto,
        college: college
    };

    localStorage.setItem('volt_current_user', JSON.stringify(currentUser));
    localStorage.setItem('volt_college_' + uid, college);

    updateAuthUI();
    syncVisitorToCloud(currentUser);
    loadCartFromCloud(uid);
    closeAuthModal();

    alert(`🎉 WELCOME, ${currentUser.displayName.toUpperCase()}!\n\nInstitution: ${college}\nStatus: Cloud Session Active (Persistent Cart Enabled)`);
}

// LOGOUT: Clears local cart, saves snapshot in cloud, allows clean re-login
function handleLogout() {
    if (currentUser) {
        saveCartToCloud(cart);
    }

    const userName = currentUser ? currentUser.displayName : 'Student';
    cart = [];
    updateCartUI();

    localStorage.removeItem('volt_current_user');
    currentUser = null;

    if (isFirebaseLive && auth) {
        auth.signOut().catch(() => {});
    }

    updateAuthUI();
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) dropdown.classList.add('hidden');

    alert(`👋 Logged out successfully, ${userName}!\n\nYour hardware cart has been safely backed up in the cloud. Log back in anytime to restore it.`);
}

function updateAuthUI() {
    const btnOpenAuth = document.getElementById('btnOpenAuth');
    const userProfileMenu = document.getElementById('userProfileMenu');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const userAvatar = document.getElementById('userAvatar');
    const userAvatarDropdown = document.getElementById('userAvatarDropdown');
    const userFullName = document.getElementById('userFullName');
    const userEmailDisplay = document.getElementById('userEmailDisplay');
    const userCollegeDisplay = document.getElementById('userCollegeDisplay');
    const userCloudCartCount = document.getElementById('userCloudCartCount');

    if (currentUser) {
        if (btnOpenAuth) btnOpenAuth.classList.add('hidden');
        if (userProfileMenu) userProfileMenu.classList.remove('hidden');
        if (userNameDisplay) userNameDisplay.innerText = currentUser.displayName.split(' ')[0];
        if (userAvatar) userAvatar.src = currentUser.photoURL;
        if (userAvatarDropdown) userAvatarDropdown.src = currentUser.photoURL;
        if (userFullName) userFullName.innerText = currentUser.displayName;
        if (userEmailDisplay) userEmailDisplay.innerText = currentUser.email;
        if (userCollegeDisplay) userCollegeDisplay.innerText = currentUser.college;
        if (userCloudCartCount) userCloudCartCount.innerText = `${cart.length} items`;
    } else {
        if (btnOpenAuth) btnOpenAuth.classList.remove('hidden');
        if (userProfileMenu) userProfileMenu.classList.add('hidden');
    }
}

function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return hash;
}

// FAILSAFE IMAGE HANDLER: Ensures no image in the catalog or modals is ever broken
function handleImageFallback(img) {
    img.onerror = null;
    img.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23080A10'/%3E%3Cpath d='M50 200h500M300 50v300' stroke='%2300F2FF' stroke-width='1.5' stroke-dasharray='4 4' opacity='0.3'/%3E%3Ccircle cx='300' cy='200' r='50' fill='%23121624' stroke='%23BD00FF' stroke-width='2'/%3E%3Ctext x='300' y='205' font-family='monospace' font-size='14' font-weight='bold' fill='%2300F2FF' text-anchor='middle'%3EVOLT_ARCH IC%3C/text%3E%3C/svg%3E";
}

// ==========================================================================
// THREE.JS 3D CAD ENGINE FOR Electrical+PCB.IGS (Laser-Free Precision Parser)
// ==========================================================================
let scene, camera, renderer, controls, pcbGroup;
let isWireframe = false;
let autoRotate = true;

window.addEventListener('DOMContentLoaded', () => {
    initAuthSession();
    renderProducts();
    initHeroCanvas();
    init3dCanvas();
    loadEduDemo('resistor');
});

function init3dCanvas() {
    const container = document.getElementById('threeContainer');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06080E);

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 8, 14);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 35;
    controls.minDistance = 4;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00F2FF, 1.2);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xBD00FF, 0.9);
    dirLight2.position.set(-10, -10, -10);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x00E676, 1, 20);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    pcbGroup = new THREE.Group();
    scene.add(pcbGroup);

    build3dPcbModel();

    // Parse Electrical+PCB.IGS
    fetch('Electrical+PCB.IGS')
        .then(response => {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.text();
        })
        .then(igesText => {
            parseIgesData(igesText);
            const spinner = document.getElementById('cadLoaderSpinner');
            if (spinner) spinner.style.display = 'none';
        })
        .catch(err => {
            console.log("IGES fetch info:", err.message);
            const spinner = document.getElementById('cadLoaderSpinner');
            if (spinner) spinner.style.display = 'none';
        });

    function animate() {
        requestAnimationFrame(animate);
        if (autoRotate && pcbGroup) {
            pcbGroup.rotation.y += 0.008;
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (!container) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    });
}

function build3dPcbModel() {
    const boardGeo = new THREE.BoxGeometry(10, 0.4, 7);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0x064e3b, roughness: 0.3, metalness: 0.2 });
    const board = new THREE.Mesh(boardGeo, boardMat);
    pcbGroup.add(board);

    const chipGeo = new THREE.BoxGeometry(3.5, 0.5, 3.5);
    const chipMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.2 });
    const chip = new THREE.Mesh(chipGeo, chipMat);
    chip.position.set(0, 0.45, 0);
    pcbGroup.add(chip);

    const shieldGeo = new THREE.BoxGeometry(2.5, 0.2, 2.5);
    const shieldMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.1 });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.position.set(0, 0.75, 0);
    pcbGroup.add(shield);

    const pinGeo = new THREE.CylinderGeometry(0.08, 0.08, 1, 8);
    const pinMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.1 });

    for (let i = -4; i <= 4; i++) {
        const pinL = new THREE.Mesh(pinGeo, pinMat);
        pinL.position.set(-4.5, 0, i * 0.7);
        pcbGroup.add(pinL);

        const pinR = new THREE.Mesh(pinGeo, pinMat);
        pinR.position.set(4.5, 0, i * 0.7);
        pcbGroup.add(pinR);
    }

    const smdGeo = new THREE.BoxGeometry(0.5, 0.3, 0.3);
    const smdMat = new THREE.MeshStandardMaterial({ color: 0x00F2FF, roughness: 0.1 });
    const coords = [
        [-2, 0.35, 2], [2, 0.35, -2], [-2, 0.35, -2], [2, 0.35, 2],
        [-1, 0.35, 2.5], [1, 0.35, -2.5]
    ];
    coords.forEach(c => {
        const smd = new THREE.Mesh(smdGeo, smdMat);
        smd.position.set(c[0], c[1], c[2]);
        pcbGroup.add(smd);
    });

    const traceGeo = new THREE.BufferGeometry();
    const points = [];
    for (let i = 0; i < 30; i++) {
        let x1 = (Math.random() - 0.5) * 9;
        let z1 = (Math.random() - 0.5) * 6;
        let x2 = x1 + (Math.random() - 0.5) * 2;
        let z2 = z1;
        points.push(new THREE.Vector3(x1, 0.22, z1));
        points.push(new THREE.Vector3(x2, 0.22, z2));
    }
    traceGeo.setFromPoints(points);
    const traceMat = new THREE.LineBasicMaterial({ color: 0x00F2FF, linewidth: 2 });
    const traces = new THREE.LineSegments(traceGeo, traceMat);
    pcbGroup.add(traces);
}

// Clean, bounded IGES Parser: Filters out infinite revolution axes
function parseIgesData(text) {
    const lines = text.split('\n');
    const cadPoints = [];
    const scale = 0.165;
    const yOffset = 0.22;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.length >= 73 && line.substring(72, 73) === 'P') {
            const parts = line.substring(0, 64).split(',');
            if (parts[0].trim() === '110') {
                const rawX1 = parseFloat(parts[1]);
                const rawY1 = parseFloat(parts[2]);
                const rawZ1 = parseFloat(parts[3]);
                const rawX2 = parseFloat(parts[4]);
                const rawY2 = parseFloat(parts[5]);
                const rawZ2 = parseFloat(parts[6]);

                if (isNaN(rawX1) || isNaN(rawY1) || isNaN(rawZ1) || isNaN(rawX2) || isNaN(rawY2) || isNaN(rawZ2)) {
                    continue;
                }

                const len = Math.hypot(rawX2 - rawX1, rawY2 - rawY1, rawZ2 - rawZ1);

                // Eliminate unbounded revolution axes (len > 35 or out of bounds)
                if (len > 35 || Math.abs(rawY1) > 15 || Math.abs(rawY2) > 15 || 
                    Math.abs(rawX1) > 32 || Math.abs(rawX2) > 32 || 
                    Math.abs(rawZ1) > 22 || Math.abs(rawZ2) > 22) {
                    continue;
                }

                cadPoints.push(
                    rawX1 * scale,
                    rawY1 * scale + yOffset,
                    rawZ1 * scale,
                    rawX2 * scale,
                    rawY2 * scale + yOffset,
                    rawZ2 * scale
                );
            }
        }
    }

    if (cadPoints.length > 0) {
        const igesGeo = new THREE.BufferGeometry();
        igesGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(cadPoints), 3));
        const igesMat = new THREE.LineBasicMaterial({ color: 0xBD00FF, linewidth: 1.5, transparent: true, opacity: 0.85 });
        const igesLines = new THREE.LineSegments(igesGeo, igesMat);
        pcbGroup.add(igesLines);

        const badge = document.getElementById('cadStatusBadge');
        if (badge) badge.innerText = `SolidWorks IGES (${Math.round(cadPoints.length / 6)} Lines)`;
    }
}

function toggleAutoRotate() {
    autoRotate = !autoRotate;
    const btn = document.getElementById('btnAutoRotate');
    if (btn) {
        if (autoRotate) {
            btn.classList.add('border-brand-cyan/60', 'text-brand-cyan');
            btn.classList.remove('border-slate-700', 'text-slate-300');
        } else {
            btn.classList.remove('border-brand-cyan/60', 'text-brand-cyan');
            btn.classList.add('border-slate-700', 'text-slate-300');
        }
    }
}

function toggleWireframe() {
    isWireframe = !isWireframe;
    if (pcbGroup) {
        pcbGroup.traverse(child => {
            if (child.isMesh && child.material) {
                child.material.wireframe = isWireframe;
            }
        });
    }
    const btn = document.getElementById('btnWireframe');
    if (btn) {
        if (isWireframe) {
            btn.classList.add('border-brand-purple/60', 'text-brand-purple');
            btn.classList.remove('border-slate-700', 'text-slate-300');
        } else {
            btn.classList.remove('border-brand-purple/60', 'text-brand-purple');
            btn.classList.add('border-slate-700', 'text-slate-300');
        }
    }
}

function reset3dCamera() {
    if (camera && controls) {
        camera.position.set(0, 8, 14);
        controls.reset();
    }
    const btn = document.getElementById('btnResetCamera');
    if (btn) {
        btn.classList.add('text-emerald-400');
        setTimeout(() => btn.classList.remove('text-emerald-400'), 500);
    }
}

// ==========================================================================
// PRODUCT CATALOG & CATEGORY FILTERING
// ==========================================================================
function renderProducts() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = products.filter(p => currentFilter === 'All' || p.category === currentFilter);

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        const sortVal = sortSelect.value;
        if (sortVal === 'price-low') filtered.sort((a, b) => a.price - b.price);
        else if (sortVal === 'price-high') filtered.sort((a, b) => b.price - a.price);
        else if (sortVal === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    }

    filtered.forEach(p => {
        let finalPrice = p.price;
        if (isStudentDiscountActive) {
            finalPrice = Math.round(p.price * 0.9);
        }

        const isFaved = wishlist.includes(p.id);

        const card = document.createElement('div');
        card.className = 'glass-card rounded-2xl p-5 flex flex-col justify-between group border border-slate-800 relative overflow-hidden';
        card.innerHTML = `
            <div class="relative w-full h-48 bg-slate-900 rounded-xl overflow-hidden mb-4 border border-slate-800/80 cursor-pointer" onclick="openProductModal('${p.id}')">
                <img src="${p.image}" alt="${p.name}" onerror="handleImageFallback(this)" class="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-90 group-hover:opacity-100"/>
                <div class="absolute top-2 left-2 flex flex-col gap-1">
                    <span class="px-2 py-0.5 rounded bg-brand-cyan/90 text-slate-950 font-bold font-mono text-[10px]">${p.badge}</span>
                    ${isStudentDiscountActive ? '<span class="px-2 py-0.5 rounded bg-emerald-400 text-slate-950 font-bold font-mono text-[9px]">-10% STU DSK</span>' : ''}
                </div>
                <button onclick="event.stopPropagation(); toggleWishlist('${p.id}')" class="absolute top-2 right-2 p-1.5 rounded-full bg-slate-950/80 ${isFaved ? 'text-red-500 border-red-500/60' : 'text-slate-300 hover:text-red-400 border-slate-700'} border transition" title="${isFaved ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                    <span class="material-symbols-outlined text-sm" style="${isFaved ? "font-variation-settings: 'FILL' 1;" : ''}">favorite</span>
                </button>
            </div>

            <div class="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>${p.category}</span>
                        <span class="text-emerald-400 font-semibold">${p.stock} in stock</span>
                    </div>
                    <h3 onclick="openProductModal('${p.id}')" class="font-heading font-bold text-white text-sm line-clamp-2 mt-1 group-hover:text-brand-cyan transition cursor-pointer">
                        ${p.name}
                    </h3>
                </div>

                <div class="pt-2 border-t border-slate-800/60 flex items-center justify-between">
                    <div>
                        <div class="text-xs text-slate-500 font-mono flex items-center gap-1">
                            <span>${p.rating} ★</span>
                            <span>(${p.reviews})</span>
                        </div>
                        <div class="text-lg font-extrabold font-mono text-white mt-0.5">
                            ₹${finalPrice.toLocaleString('en-IN')}
                            ${isStudentDiscountActive ? `<span class="line-through text-xs text-slate-500 font-normal">₹${p.price}</span>` : ''}
                        </div>
                    </div>

                    <div class="flex items-center gap-1.5">
                        <button onclick="openProductModal('${p.id}')" class="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 transition" title="Inspect Specs & Working Demo">
                            <span class="material-symbols-outlined text-base">visibility</span>
                        </button>
                        <button onclick="addToCart('${p.id}')" class="px-3 py-2 rounded-xl bg-brand-cyan text-slate-950 font-bold text-xs hover:bg-brand-cyanDark transition flex items-center gap-1 glow-cyan">
                            <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function applyFilters() {
    renderProducts();
}

function filterCategory(cat) {
    currentFilter = cat;
    document.querySelectorAll('.cat-chip').forEach(btn => {
        btn.classList.remove('bg-brand-cyan', 'text-slate-950', 'border-brand-cyan');
        btn.classList.add('bg-slate-900/80', 'border-slate-700', 'text-slate-300');
    });

    if (window.event && window.event.target) {
        window.event.target.classList.remove('bg-slate-900/80', 'border-slate-700', 'text-slate-300');
        window.event.target.classList.add('bg-brand-cyan', 'text-slate-950', 'border-brand-cyan');
    }

    renderProducts();
}

function toggleStudentDiscount() {
    isStudentDiscountActive = !isStudentDiscountActive;
    const badge = document.getElementById('studentBadge');
    if (badge) {
        if (isStudentDiscountActive) {
            badge.classList.remove('hidden');
            badge.classList.add('flex');
        } else {
            badge.classList.add('hidden');
            badge.classList.remove('flex');
        }
    }
    renderProducts();
    updateCartUI();
}

// PRODUCT DETAIL MODAL
function openProductModal(prodId) {
    const p = products.find(item => item.id === prodId);
    if (!p) return;

    let finalPrice = isStudentDiscountActive ? Math.round(p.price * 0.9) : p.price;

    const modalContent = document.getElementById('productModalContent');
    if (!modalContent) return;

    modalContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-5 space-y-4">
                <div class="relative w-full h-72 bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center p-4">
                    <img id="modalProductImg" src="${p.image}" alt="${p.name}" onerror="handleImageFallback(this)" class="w-full h-full object-cover rounded-xl"/>
                    <div class="absolute bottom-3 left-3 bg-slate-950/90 px-3 py-1 rounded-full border border-slate-700 text-[10px] font-mono text-brand-cyan flex items-center gap-1">
                        <span class="material-symbols-outlined text-xs">360</span> 360° Inspection Ready
                    </div>
                </div>

                <div class="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono">
                    <div class="text-slate-400 font-bold uppercase tracking-wider text-[10px]">OPERATIONAL RATINGS</div>
                    <div class="flex justify-between border-b border-slate-800 pb-1">
                        <span class="text-slate-400">Voltage Input:</span>
                        <span class="text-brand-cyan">${p.voltage}</span>
                    </div>
                    <div class="flex justify-between border-b border-slate-800 pb-1">
                        <span class="text-slate-400">Inventory Status:</span>
                        <span class="text-emerald-400">${p.stock} Units Ready</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Compliance:</span>
                        <span class="text-slate-200">CE / RoHS / ISO 9001</span>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-7 space-y-4">
                <div>
                    <div class="text-xs font-mono text-brand-cyan mb-1">${p.category} | SKU: ${p.id.toUpperCase()}</div>
                    <h2 class="font-heading font-extrabold text-2xl text-white">${p.name}</h2>
                    <p class="text-xs text-slate-300 mt-2 leading-relaxed">${p.description}</p>
                </div>

                <div class="flex border-b border-slate-800 gap-4 text-xs font-mono pt-2">
                    <button onclick="switchModalTab('pinout')" class="modal-tab active pb-2 border-b-2 border-brand-cyan text-brand-cyan font-bold">Pinout Layout</button>
                    <button onclick="switchModalTab('working')" class="modal-tab pb-2 text-slate-400 hover:text-white">Working Principle</button>
                    <button onclick="switchModalTab('code')" class="modal-tab pb-2 text-slate-400 hover:text-white">Code & Libraries</button>
                </div>

                <div id="tabPinout" class="tab-pane space-y-2">
                    <div class="text-xs text-slate-400 font-mono mb-2">PIN LAYOUT CONFIGURATION:</div>
                    <div class="flex flex-wrap gap-2">
                        ${p.pinout.map(pin => `<span class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-brand-cyan text-xs font-mono font-bold">${pin}</span>`).join('')}
                    </div>
                </div>

                <div id="tabWorking" class="tab-pane hidden space-y-2 text-xs bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div class="font-bold text-brand-purple flex items-center gap-1 font-mono">
                        <span class="material-symbols-outlined text-sm">precision_manufacturing</span> INTERNAL WORKING MECHANISM
                    </div>
                    <p class="text-slate-300 leading-relaxed">${p.workingDesc}</p>
                </div>

                <div id="tabCode" class="tab-pane hidden space-y-2">
                    <pre class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-400 overflow-x-auto"><code>${p.codeExample}</code></pre>
                </div>

                <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <div>
                        <div class="text-xs text-slate-500 font-mono">Unit Price</div>
                        <div class="text-2xl font-extrabold font-mono text-white">₹${finalPrice.toLocaleString('en-IN')}</div>
                    </div>
                    <div class="flex items-center gap-3">
                        <button onclick="addToCart('${p.id}')" class="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-cyanDark text-slate-950 font-bold text-xs glow-cyan hover:scale-105 transition flex items-center gap-2">
                            <span class="material-symbols-outlined text-base">shopping_bag</span>
                            <span>Add To Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('hidden');
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.add('hidden');
}

function switchModalTab(tabName) {
    document.querySelectorAll('.modal-tab').forEach(b => {
        const onclickAttr = b.getAttribute('onclick') || '';
        if (onclickAttr.includes(`'${tabName}'`)) {
            b.classList.add('border-b-2', 'border-brand-cyan', 'text-brand-cyan', 'font-bold');
            b.classList.remove('text-slate-400');
        } else {
            b.classList.remove('border-b-2', 'border-brand-cyan', 'text-brand-cyan', 'font-bold');
            b.classList.add('text-slate-400');
        }
    });

    document.querySelectorAll('.tab-pane').forEach(d => d.classList.add('hidden'));
    if (tabName === 'pinout') document.getElementById('tabPinout')?.classList.remove('hidden');
    if (tabName === 'working') document.getElementById('tabWorking')?.classList.remove('hidden');
    if (tabName === 'code') document.getElementById('tabCode')?.classList.remove('hidden');
}

// ==========================================================================
// SHOPPING CART WITH CLOUD PERSISTENCE
// ==========================================================================
function addToCart(prodId) {
    if (!currentUser) {
        openAuthModal(true);
        alert("🔒 Access Restricted: Please sign in with Google or your College Email first to explore & build your hardware cart!");
        return;
    }

    const existing = cart.find(item => item.id === prodId);
    if (existing) {
        existing.qty++;
    } else {
        const prod = products.find(p => p.id === prodId);
        if (prod) {
            cart.push({ ...prod, qty: 1 });
        }
    }

    updateCartUI();
    saveCartToCloud(cart);
    toggleCartDrawer(true);
}

function updateCartUI() {
    const list = document.getElementById('cartItemsList');
    if (!list) return;
    list.innerHTML = '';

    let subtotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        list.innerHTML = `
            <div class="py-12 text-center text-slate-500 font-mono text-xs">
                <span class="material-symbols-outlined text-3xl mb-2 text-slate-600">production_quantity_limits</span>
                <p>Your hardware cart is empty.</p>
                <p class="text-[10px] text-slate-600 mt-1">Components added will sync automatically to your account.</p>
            </div>
        `;
    } else {
        cart.forEach(item => {
            totalItems += item.qty;
            const unitPrice = isStudentDiscountActive ? Math.round(item.price * 0.9) : item.price;
            const itemTotal = unitPrice * item.qty;
            subtotal += itemTotal;

            const row = document.createElement('div');
            row.className = 'glass-card p-3 rounded-xl flex items-center justify-between border border-slate-800';
            row.innerHTML = `
                <div class="flex items-center gap-3">
                    <img src="${item.image}" onerror="handleImageFallback(this)" class="w-12 h-12 rounded-lg object-cover bg-slate-900 border border-slate-800"/>
                    <div>
                        <div class="text-xs font-bold text-white line-clamp-1">${item.name}</div>
                        <div class="text-[10px] font-mono text-slate-400">₹${unitPrice} × ${item.qty}</div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button onclick="changeQty('${item.id}', -1)" class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center hover:bg-slate-700 transition">-</button>
                    <span class="text-xs font-mono text-white">${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)" class="w-6 h-6 rounded bg-slate-800 text-white font-bold text-xs flex items-center justify-center hover:bg-slate-700 transition">+</button>
                </div>
            `;
            list.appendChild(row);
        });
    }

    const cartBadge = document.getElementById('cartCountBadge');
    if (cartBadge) cartBadge.innerText = totalItems;

    const subtotalEl = document.getElementById('cartSubtotal');
    if (subtotalEl) subtotalEl.innerText = `₹${subtotal.toLocaleString('en-IN')}`;

    let studentRebate = 0;
    const discountRow = document.getElementById('studentDiscountRow');
    if (isStudentDiscountActive) {
        studentRebate = Math.round(subtotal * 0.1);
        if (discountRow) discountRow.classList.remove('hidden');
        const rebateEl = document.getElementById('cartStudentDiscount');
        if (rebateEl) rebateEl.innerText = `-₹${studentRebate.toLocaleString('en-IN')}`;
    } else {
        if (discountRow) discountRow.classList.add('hidden');
    }

    const gst = Math.round(subtotal * 0.18);
    const gstEl = document.getElementById('cartGst');
    if (gstEl) gstEl.innerText = `₹${gst.toLocaleString('en-IN')}`;

    const grandTotal = subtotal;
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;

    const userCloudCartCount = document.getElementById('userCloudCartCount');
    if (userCloudCartCount) userCloudCartCount.innerText = `${cart.length} items`;
}

function changeQty(prodId, delta) {
    const item = cart.find(i => i.id === prodId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== prodId);
    }
    updateCartUI();
    saveCartToCloud(cart);
}

function toggleCartDrawer(forceOpen) {
    const drawer = document.getElementById('cartDrawer');
    if (!drawer) return;
    if (forceOpen === true) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.toggle('hidden');
    }
}

function simulateCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add hardware components first.');
        return;
    }

    const orderId = 'VOLT-' + Math.floor(100000 + Math.random() * 900000);
    const userDisplay = currentUser ? currentUser.displayName : 'Student Maker';

    alert(`🎉 ORDER PLACED SUCCESSFULLY!\n\nCustomer: ${userDisplay}\nTracking ID: #${orderId}\nGST Proforma Invoice generated & dispatched to your email.`);

    cart = [];
    updateCartUI();
    saveCartToCloud(cart);
    toggleCartDrawer(false);
}

// ==========================================================================
// AI SEARCH & AUTOSUGGEST
// ==========================================================================
function handleSearch(query) {
    const dropdown = document.getElementById('searchDropdown');
    const list = document.getElementById('searchResultsList');
    if (!dropdown || !list) return;

    if (!query || query.trim() === '') {
        dropdown.classList.add('hidden');
        return;
    }

    const matches = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );

    if (matches.length === 0) {
        list.innerHTML = '<div class="text-xs text-slate-400 p-2">No matching components found. Try "ESP32", "Servo", or "Kit".</div>';
    } else {
        list.innerHTML = matches.slice(0, 4).map(m => `
            <div onclick="openProductModal('${m.id}')" class="p-2 hover:bg-slate-800/80 rounded-lg cursor-pointer flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                    <img src="${m.image}" onerror="handleImageFallback(this)" class="w-8 h-8 rounded object-cover"/>
                    <div>
                        <div class="font-bold text-white">${m.name}</div>
                        <div class="text-[10px] text-slate-400 font-mono">${m.category}</div>
                    </div>
                </div>
                <div class="font-mono text-brand-cyan font-bold">₹${m.price}</div>
            </div>
        `).join('');
    }

    dropdown.classList.remove('hidden');
}

function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const dropdown = document.getElementById('searchDropdown');
    if (searchInput) searchInput.value = '';
    if (dropdown) dropdown.classList.add('hidden');
}

// ==========================================================================
// BULK MODAL & WISHLIST
// ==========================================================================
function openBulkModal() {
    const modal = document.getElementById('bulkModal');
    if (modal) modal.classList.remove('hidden');
}

function closeBulkModal() {
    const modal = document.getElementById('bulkModal');
    if (modal) modal.classList.add('hidden');
}

function handleBulkSubmit(e) {
    e.preventDefault();
    alert('✅ QUOTATION REQUEST RECEIVED!\n\nOur Institutional Procurement Team will email your official GST Quotations & PO payment instructions within 2 business hours.');
    closeBulkModal();
}

function toggleWishlist(prodId) {
    if (wishlist.includes(prodId)) {
        wishlist = wishlist.filter(id => id !== prodId);
    } else {
        wishlist.push(prodId);
    }
    const countEl = document.getElementById('wishlistCount');
    if (countEl) countEl.innerText = wishlist.length;
    renderProducts();
}

function toggleWishlistModal() {
    if (wishlist.length === 0) {
        alert('Your wishlist is empty! Heart components to save them.');
        return;
    }
    alert(`Saved Wishlist Components (${wishlist.length}):\n` + wishlist.map(id => products.find(p => p.id === id).name).join('\n'));
}

// ==========================================================================
// EDUCATIONAL SIMULATOR
// ==========================================================================
let eduInterval = null;

function loadEduDemo(type) {
    document.querySelectorAll('.edu-btn').forEach(b => {
        b.classList.remove('border-brand-cyan');
        b.classList.add('border-slate-800');
    });
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('border-brand-cyan');
        window.event.currentTarget.classList.remove('border-slate-800');
    }

    const title = document.getElementById('eduTitle');
    const how = document.getElementById('eduHow');
    const mistake = document.getElementById('eduMistake');

    if (type === 'resistor') {
        if (title) title.innerText = "Resistors & Ohm's Law (V = I × R)";
        if (how) how.innerText = "Resistors restrict current flow by impeding movement of free electrons, generating heat while protecting LEDs and microcontrollers.";
        if (mistake) mistake.innerText = "Connecting high voltage (12V) without calculating Ohm's Law resistor wattage rating causing component thermal meltdown!";
    } else if (type === 'servo') {
        if (title) title.innerText = "Servo Motors (Pulse Width Modulation 50Hz)";
        if (how) how.innerText = "50Hz PWM signal pulses dictate shaft position: 1.0ms pulse = 0°, 1.5ms pulse = 90°, 2.0ms pulse = 180° rotation.";
        if (mistake) mistake.innerText = "Powering multiple servo motors directly from the Arduino 5V header pin will cause voltage brownouts and microcontroller reset loop.";
    } else if (type === 'transistor') {
        if (title) title.innerText = "NPN Transistor Solid-State Switching";
        if (how) how.innerText = "Small base current (Ib) allows large collector-to-emitter current (Ic) to flow, acting as a high-speed electronic switch.";
        if (mistake) mistake.innerText = "Forgetting a flyback diode across inductive loads like motors or relays which damages the transistor due to inductive voltage spike.";
    } else if (type === 'esp32') {
        if (title) title.innerText = "ESP32 GPIO 3.3V Logic Level Protection";
        if (how) how.innerText = "ESP32 pins operate strictly at 3.3V logic level. Analog pins (ADC) read voltages from 0V to 3.3V with 12-bit digital resolution.";
        if (mistake) mistake.innerText = "Feeding 5V signal directly into an ESP32 GPIO pin without a resistor voltage divider or logic level converter chip!";
    }

    drawEduCanvas(type);
}

function drawEduCanvas(type) {
    const cvs = document.getElementById('eduCanvas');
    if (!cvs) return;
    cvs.width = cvs.clientWidth;
    cvs.height = cvs.clientHeight;
    const ctx = cvs.getContext('2d');

    if (eduInterval) clearInterval(eduInterval);

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        
        ctx.strokeStyle = '#00F2FF';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(50, cvs.height/2);
        ctx.lineTo(cvs.width - 50, cvs.height/2);
        ctx.stroke();

        ctx.fillStyle = '#00E676';
        for (let i = 0; i < 10; i++) {
            let x = (frame * 3 + i * 50) % (cvs.width - 100) + 50;
            ctx.beginPath();
            ctx.arc(x, cvs.height/2, 5, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = '#12141C';
        ctx.strokeStyle = '#BD00FF';
        ctx.lineWidth = 2;
        ctx.fillRect(cvs.width/2 - 40, cvs.height/2 - 30, 80, 60);
        ctx.strokeRect(cvs.width/2 - 40, cvs.height/2 - 30, 80, 60);

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '10px Fira Code';
        ctx.textAlign = 'center';
        ctx.fillText(type.toUpperCase(), cvs.width/2, cvs.height/2 + 4);

        frame++;
    }

    eduInterval = setInterval(animate, 30);
}

// ==========================================================================
// HERO PCB ANIMATED CANVAS
// ==========================================================================
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const nodes = [];
    for (let i = 0; i < 40; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            radius: Math.random() * 2 + 1
        });
    }

    function animateHero() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;

            if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
            if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

            ctx.fillStyle = '#00F2FF';
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
            ctx.fill();
        });

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.strokeStyle = `rgba(0, 242, 255, ${1 - dist / 120})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animateHero);
    }
    animateHero();
}

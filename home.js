// Navigation and Button Interactions

document.addEventListener('DOMContentLoaded', function() {
    // If a buyer is already logged in, go straight to dashboard and prevent going back here
    try {
        const token = localStorage.getItem('authToken')
        const buyer = localStorage.getItem('currentBuyer')
        if (token && buyer) {
            window.location.replace('../buyerdash/bd.html')
            return
        }
    } catch (_) {}

    initializeButtons();
    initializeNavigation();
});

// Initialize button click handlers
function initializeButtons() {
    const farmersBtn = document.getElementById('farmersBtn');
    const buyersBtn = document.getElementById('buyersBtn');

    if (farmersBtn) {
        farmersBtn.addEventListener('click', function() {
            navigateToLogin('farmers');
        });
    }

    if (buyersBtn) {
        buyersBtn.addEventListener('click', function() {
            navigateToLogin('buyers');
        });
    }

    // Demo buttons
    const demoButtons = document.querySelectorAll('.btn-secondary, .btn-cta');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            handleDemoRequest();
        });
    });
}

// Navigate to login pages
function navigateToLogin(userType) {
    const loginUrls = {
        farmers: '../fauth/flogin.html',
        buyers: '../Buyerlogin/buy.html'
    };

    const url = loginUrls[userType];
    if (url) {
        window.location.href = url;
    } else {
        console.error('Invalid user type:', userType);
    }
}

// Handle demo request
function handleDemoRequest() {
    console.log('Demo request initiated');
    // You can replace this with actual navigation or modal logic
    alert('Thank you for your interest! We will contact you soon to schedule a demo.');
}

// Initialize smooth navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Add scroll event listener for header shadow effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

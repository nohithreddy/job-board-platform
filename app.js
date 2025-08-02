// JobBoard Pro - Main Application JavaScript

// Application State
const appState = {
    currentUser: null,
    currentPage: 'home',
    jobs: [],
    companies: [],
    categories: [],
    locations: [],
    jobTypes: [],
    experienceLevels: [],
    currentJob: null,
    filters: {
        search: '',
        location: '',
        category: '',
        jobType: '',
        experience: '',
        sortBy: 'newest'
    },
    pagination: {
        currentPage: 1,
        itemsPerPage: 10,
        totalItems: 0
    },
    savedJobs: [],
    applications: []
};

// Sample Data
const sampleData = {
    jobs: [
        {
            id: 1,
            title: "Senior Full Stack Developer",
            company: "Google",
            location: "Mountain View, CA",
            salary: "$180,000 - $250,000",
            type: "Full-time",
            experience: "5+ years",
            posted: "2 days ago",
            category: "Software Development",
            description: "Join Google's innovative team to build next-generation web applications. You'll work with cutting-edge technologies and collaborate with world-class engineers to create products used by billions of users worldwide.",
            requirements: ["React.js, Node.js", "5+ years experience", "Computer Science degree", "Strong problem-solving skills"],
            benefits: ["Health insurance", "401k matching", "Stock options", "Free meals"],
            logo: "https://logo.clearbit.com/google.com"
        },
        {
            id: 2,
            title: "Frontend React Developer",
            company: "Netflix",
            location: "Los Gatos, CA",
            salary: "$140,000 - $200,000",
            type: "Full-time",
            experience: "3+ years",
            posted: "1 day ago",
            category: "Software Development",
            description: "Help build the streaming platform that entertains millions. Work on user interfaces that deliver seamless viewing experiences across all devices.",
            requirements: ["React.js expertise", "TypeScript", "CSS/SCSS", "Testing frameworks"],
            benefits: ["Unlimited PTO", "Stock options", "Health coverage", "Learning budget"],
            logo: "https://logo.clearbit.com/netflix.com"
        },
        {
            id: 3,
            title: "DevOps Engineer",
            company: "Amazon",
            location: "Seattle, WA",
            salary: "$130,000 - $180,000",
            type: "Full-time",
            experience: "4+ years",
            posted: "3 days ago",
            category: "DevOps",
            description: "Scale and optimize cloud infrastructure for millions of customers. Work with AWS services to ensure high availability and performance.",
            requirements: ["AWS certification", "Docker/Kubernetes", "CI/CD pipelines", "Linux administration"],
            benefits: ["Stock purchase plan", "Health benefits", "Relocation assistance", "Career growth"],
            logo: "https://logo.clearbit.com/amazon.com"
        },
        {
            id: 4,
            title: "UX/UI Designer",
            company: "Apple",
            location: "Cupertino, CA",
            salary: "$120,000 - $170,000",
            type: "Full-time",
            experience: "3+ years",
            posted: "1 week ago",
            category: "Design",
            description: "Design intuitive and beautiful user experiences for Apple's ecosystem of products. Collaborate with engineers and product managers to bring innovative ideas to life.",
            requirements: ["Figma/Sketch expertise", "User research", "Prototyping", "Design systems"],
            benefits: ["Employee discounts", "Stock options", "Health coverage", "Creative environment"],
            logo: "https://logo.clearbit.com/apple.com"
        },
        {
            id: 5,
            title: "Data Scientist",
            company: "Microsoft",
            location: "Redmond, WA",
            salary: "$150,000 - $220,000",
            type: "Full-time",
            experience: "4+ years",
            posted: "5 days ago",
            category: "Data Science",
            description: "Drive data-driven decisions using advanced analytics and machine learning. Work on Azure ML platform and contribute to AI initiatives.",
            requirements: ["Python/R", "Machine Learning", "SQL", "Statistics", "PhD preferred"],
            benefits: ["Stock awards", "Health benefits", "Flexible work", "Learning resources"],
            logo: "https://logo.clearbit.com/microsoft.com"
        },
        {
            id: 6,
            title: "Backend Node.js Developer",
            company: "Uber",
            location: "San Francisco, CA",
            salary: "$140,000 - $190,000",
            type: "Full-time",
            experience: "3+ years",
            posted: "4 days ago",
            category: "Software Development",
            description: "Build scalable backend services that power Uber's global platform. Work on microservices architecture handling millions of requests daily.",
            requirements: ["Node.js", "MongoDB/PostgreSQL", "Microservices", "AWS/GCP"],
            benefits: ["Uber credits", "Stock options", "Health insurance", "Flexible PTO"],
            logo: "https://logo.clearbit.com/uber.com"
        },
        {
            id: 7,
            title: "Product Manager",
            company: "Airbnb",
            location: "San Francisco, CA",
            salary: "$160,000 - $220,000",
            type: "Full-time",
            experience: "5+ years",
            posted: "1 week ago",
            category: "Product Management",
            description: "Lead product strategy for key features that enhance the travel experience for millions of users worldwide.",
            requirements: ["Product management", "Data analysis", "User research", "Cross-functional leadership"],
            benefits: ["Travel credits", "Stock options", "Health coverage", "Remote work"],
            logo: "https://logo.clearbit.com/airbnb.com"
        },
        {
            id: 8,
            title: "Mobile iOS Developer",
            company: "Spotify",
            location: "New York, NY",
            salary: "$130,000 - $180,000",
            type: "Full-time",
            experience: "3+ years",
            posted: "6 days ago",
            category: "Mobile Development",
            description: "Develop features for Spotify's iOS app used by millions of music lovers. Create smooth, performant mobile experiences.",
            requirements: ["Swift", "iOS SDK", "Core Data", "REST APIs", "App Store experience"],
            benefits: ["Spotify Premium", "Stock options", "Health benefits", "Music events"],
            logo: "https://logo.clearbit.com/spotify.com"
        }
    ],
    companies: [
        {
            name: "Google",
            description: "Google's mission is to organize the world's information and make it universally accessible and useful.",
            size: "100,000+ employees",
            industry: "Technology",
            founded: "1998",
            website: "google.com"
        },
        {
            name: "Netflix",
            description: "Netflix is the world's leading streaming entertainment service with over 230 million paid memberships.",
            size: "10,000+ employees", 
            industry: "Entertainment",
            founded: "1997",
            website: "netflix.com"
        },
        {
            name: "Amazon",
            description: "Amazon is a multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence.",
            size: "1,500,000+ employees",
            industry: "Technology",
            founded: "1994",
            website: "amazon.com"
        },
        {
            name: "Apple",
            description: "Apple designs and manufactures consumer electronics, software, and online services.",
            size: "150,000+ employees",
            industry: "Technology",
            founded: "1976",
            website: "apple.com"
        },
        {
            name: "Microsoft",
            description: "Microsoft develops, manufactures, licenses, supports, and sells computer software and services.",
            size: "200,000+ employees",
            industry: "Technology",
            founded: "1975",
            website: "microsoft.com"
        },
        {
            name: "Uber",
            description: "Uber operates mobility as a service and logistics platform worldwide.",
            size: "30,000+ employees",
            industry: "Transportation",
            founded: "2009",
            website: "uber.com"
        },
        {
            name: "Airbnb",
            description: "Airbnb operates an online marketplace for lodging and tourism experiences.",
            size: "7,000+ employees",
            industry: "Travel",
            founded: "2008",
            website: "airbnb.com"
        },
        {
            name: "Spotify",
            description: "Spotify is a digital music streaming service that gives access to millions of songs.",
            size: "10,000+ employees",
            industry: "Entertainment",
            founded: "2006",
            website: "spotify.com"
        }
    ],
    categories: ["Software Development", "Design", "Marketing", "Sales", "Data Science", "DevOps", "Product Management", "Mobile Development"],
    locations: ["San Francisco, CA", "New York, NY", "Seattle, WA", "Austin, TX", "Remote", "Los Angeles, CA", "Boston, MA", "Chicago, IL"],
    jobTypes: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
    experienceLevels: ["Entry Level", "1-2 years", "3-5 years", "5+ years", "Senior Level"]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize data
    appState.jobs = [...sampleData.jobs];
    appState.companies = [...sampleData.companies];
    appState.categories = [...sampleData.categories];
    appState.locations = [...sampleData.locations];
    appState.jobTypes = [...sampleData.jobTypes];
    appState.experienceLevels = [...sampleData.experienceLevels];

    // Setup event listeners
    setupEventListeners();
    
    // Initialize theme
    initializeTheme();
    
    // Populate dropdowns
    populateDropdowns();
    
    // Render initial page
    showPage('home');
    renderFeaturedJobs();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            showPage(page);
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    } else {
        console.warn('Theme toggle button not found');
    }

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }

    const viewAllJobsBtn = document.getElementById('viewAllJobsBtn');
    if (viewAllJobsBtn) {
        viewAllJobsBtn.addEventListener('click', () => showPage('jobs'));
    }

    // Modals
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => showModal('loginModal'));
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => showModal('registerModal'));
    }
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            hideModal(e.target.closest('.modal').id);
        });
    });

    // Modal switching
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    
    if (switchToRegister) {
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('loginModal');
            showModal('registerModal');
        });
    }

    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('registerModal');
            showModal('loginModal');
        });
    }

    // Forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const applyForm = document.getElementById('applyForm');
    const postJobForm = document.getElementById('postJobForm');

    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (applyForm) applyForm.addEventListener('submit', handleJobApplication);
    if (postJobForm) postJobForm.addEventListener('submit', handlePostJob);

    // Job details
    const backToJobs = document.getElementById('backToJobs');
    const applyJobBtn = document.getElementById('applyJobBtn');
    const saveJobBtn = document.getElementById('saveJobBtn');

    if (backToJobs) {
        backToJobs.addEventListener('click', () => showPage('jobs'));
    }

    if (applyJobBtn) {
        applyJobBtn.addEventListener('click', () => {
            if (appState.currentUser) {
                showModal('applyModal');
            } else {
                showToast('Please login to apply for jobs', 'error');
                showModal('loginModal');
            }
        });
    }

    if (saveJobBtn) {
        saveJobBtn.addEventListener('click', () => handleSaveJob());
    }

    // Dashboard
    const postNewJobBtn = document.getElementById('postNewJobBtn');
    if (postNewJobBtn) {
        postNewJobBtn.addEventListener('click', () => {
            if (appState.currentUser && appState.currentUser.type === 'company') {
                showModal('postJobModal');
            } else {
                showToast('Only companies can post jobs', 'error');
            }
        });
    }

    // Dashboard tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            switchTab(tab);
        });
    });

    // Profile menu
    document.querySelectorAll('.profile-menu-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.target.dataset.section;
            switchProfileSection(section);
        });
    });

    // Filters and sorting
    const clearFilters = document.getElementById('clearFilters');
    const sortBy = document.getElementById('sortBy');
    
    if (clearFilters) clearFilters.addEventListener('click', clearFiltersHandler);
    if (sortBy) sortBy.addEventListener('change', handleSortChange);
    
    // Filter event listeners
    ['locationFilter', 'jobTypeFilter', 'experienceFilter', 'categoryFilter'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', applyFilters);
        }
    });

    // Click outside modal to close
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            hideModal(e.target.id);
        }
    });
}

function initializeTheme() {
    const savedTheme = 'light'; // Default to light since we don't have localStorage
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme} mode`, 'info');
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

function populateDropdowns() {
    // Search category dropdown
    const searchCategory = document.getElementById('searchCategory');
    if (searchCategory) {
        appState.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            searchCategory.appendChild(option);
        });
    }

    // Filter dropdowns
    populateDropdown('locationFilter', appState.locations);
    populateDropdown('jobTypeFilter', appState.jobTypes);
    populateDropdown('experienceFilter', appState.experienceLevels);
    populateDropdown('categoryFilter', appState.categories);

    // Post job form dropdowns
    populateFormDropdowns();
}

function populateFormDropdowns() {
    const categorySelect = document.querySelector('#postJobForm select');
    const jobTypeSelects = document.querySelectorAll('#postJobForm select');
    
    // Find and populate category dropdown
    jobTypeSelects.forEach(select => {
        const label = select.parentNode.querySelector('.form-label');
        if (!label) return;
        
        if (label.textContent.includes('Category')) {
            appState.categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                select.appendChild(option);
            });
        } else if (label.textContent.includes('Job Type')) {
            appState.jobTypes.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                select.appendChild(option);
            });
        } else if (label.textContent.includes('Experience')) {
            appState.experienceLevels.forEach(level => {
                const option = document.createElement('option');
                option.value = level;
                option.textContent = level;
                select.appendChild(option);
            });
        }
    });
}

function populateDropdown(selector, options) {
    const dropdown = document.getElementById(selector);
    if (!dropdown) return;
    
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });
}

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const activeNavLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeNavLink) {
        activeNavLink.classList.add('active');
    }
    
    appState.currentPage = pageId;

    // Handle page-specific logic
    if (pageId === 'jobs') {
        renderJobsList();
    }
}

function renderFeaturedJobs() {
    const container = document.getElementById('featuredJobsGrid');
    if (!container) return;
    
    const featuredJobs = appState.jobs.slice(0, 6);
    
    container.innerHTML = featuredJobs.map(job => createJobCard(job)).join('');
    
    // Add click handlers
    container.querySelectorAll('.job-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            showJobDetails(featuredJobs[index]);
        });
    });
}

function createJobCard(job) {
    return `
        <div class="job-card" data-job-id="${job.id}">
            <div class="job-card-header">
                <img src="${job.logo}" alt="${job.company}" class="company-logo" onerror="this.style.display='none'">
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <div class="company-name">${job.company}</div>
                    <div class="job-meta">
                        <span>📍 ${job.location}</span>
                        <span>💼 ${job.type}</span>
                        <span>🕒 ${job.posted}</span>
                    </div>
                </div>
            </div>
            <div class="job-card-footer">
                <div class="job-salary">${job.salary}</div>
                <div class="job-actions">
                    <button class="btn btn--outline btn--sm save-job-btn">Save</button>
                    <button class="btn btn--primary btn--sm apply-job-btn">Apply</button>
                </div>
            </div>
        </div>
    `;
}

function showJobDetails(job) {
    appState.currentJob = job;
    
    // Populate job details
    const elements = {
        jobTitle: job.title,
        jobCompany: job.company,
        jobLocation: job.location,
        jobPosted: job.posted,
        jobDescription: job.description,
        jobSalary: job.salary,
        jobType: job.type,
        jobExperience: job.experience
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value;
        }
    });
    
    // Populate requirements
    const requirementsList = document.getElementById('jobRequirements');
    if (requirementsList && job.requirements) {
        requirementsList.innerHTML = job.requirements.map(req => `<li>${req}</li>`).join('');
    }
    
    // Populate benefits
    const benefitsList = document.getElementById('jobBenefits');
    if (benefitsList && job.benefits) {
        benefitsList.innerHTML = job.benefits.map(benefit => `<li>${benefit}</li>`).join('');
    }
    
    // Populate company info
    const company = appState.companies.find(c => c.name === job.company);
    if (company) {
        const companyElements = {
            companyLogo: job.logo,
            companyName: company.name,
            companyDescription: company.description,
            companyIndustry: company.industry,
            companySize: company.size,
            companyFounded: company.founded
        };

        Object.entries(companyElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                if (id === 'companyLogo') {
                    element.src = value;
                } else {
                    element.textContent = value;
                }
            }
        });
    }
    
    showPage('jobDetails');
}

function renderJobsList() {
    const filteredJobs = getFilteredJobs();
    const paginatedJobs = getPaginatedJobs(filteredJobs);
    
    const container = document.getElementById('jobsList');
    if (!container) return;
    
    if (filteredJobs.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>No jobs found</h3><p>Try adjusting your filters</p></div>';
        return;
    }
    
    container.innerHTML = paginatedJobs.map(job => createJobListItem(job)).join('');
    
    // Add click handlers
    container.querySelectorAll('.job-list-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            showJobDetails(paginatedJobs[index]);
        });
        
        // Prevent event bubbling for action buttons
        const saveBtn = item.querySelector('.save-job-btn');
        const applyBtn = item.querySelector('.apply-job-btn');
        
        if (saveBtn) {
            saveBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleSaveJob(paginatedJobs[index].id);
            });
        }
        
        if (applyBtn) {
            applyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                handleQuickApply(paginatedJobs[index].id);
            });
        }
    });
    
    // Update results count
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.textContent = `${filteredJobs.length} jobs found`;
    }
    
    // Render pagination
    renderPagination(filteredJobs.length);
}

function createJobListItem(job) {
    return `
        <div class="job-list-item" data-job-id="${job.id}">
            <div class="job-list-header">
                <div class="job-list-info">
                    <h3>${job.title}</h3>
                    <div class="company-name">${job.company}</div>
                    <div class="job-list-meta">
                        <span>📍 ${job.location}</span>
                        <span>💼 ${job.type}</span>
                        <span>📊 ${job.experience}</span>
                        <span>🕒 ${job.posted}</span>
                        <span class="job-salary">${job.salary}</span>
                    </div>
                </div>
                <div class="job-list-actions">
                    <button class="btn btn--outline btn--sm save-job-btn">Save</button>
                    <button class="btn btn--primary btn--sm apply-job-btn">Apply</button>
                </div>
            </div>
        </div>
    `;
}

function getFilteredJobs() {
    let filtered = [...appState.jobs];
    
    // Apply search filter
    if (appState.filters.search) {
        const searchTerm = appState.filters.search.toLowerCase();
        filtered = filtered.filter(job => 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply other filters
    if (appState.filters.location) {
        filtered = filtered.filter(job => job.location === appState.filters.location);
    }
    
    if (appState.filters.category) {
        filtered = filtered.filter(job => job.category === appState.filters.category);
    }
    
    if (appState.filters.jobType) {
        filtered = filtered.filter(job => job.type === appState.filters.jobType);
    }
    
    if (appState.filters.experience) {
        filtered = filtered.filter(job => job.experience === appState.filters.experience);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        switch (appState.filters.sortBy) {
            case 'newest':
                return new Date(b.posted) - new Date(a.posted);
            case 'oldest':
                return new Date(a.posted) - new Date(b.posted);
            case 'salary-high':
                return extractSalary(b.salary) - extractSalary(a.salary);
            case 'salary-low':
                return extractSalary(a.salary) - extractSalary(b.salary);
            default:
                return 0;
        }
    });
    
    return filtered;
}

function extractSalary(salaryString) {
    const matches = salaryString.match(/\$([0-9,]+)/g);
    if (matches && matches.length > 0) {
        return parseInt(matches[0].replace(/[$,]/g, ''));
    }
    return 0;
}

function getPaginatedJobs(jobs) {
    const start = (appState.pagination.currentPage - 1) * appState.pagination.itemsPerPage;
    const end = start + appState.pagination.itemsPerPage;
    return jobs.slice(start, end);
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / appState.pagination.itemsPerPage);
    const currentPage = appState.pagination.currentPage;
    
    const container = document.getElementById('pagination');
    if (!container) return;
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>`;
    
    // Page numbers
    for (let i = 1; i <= Math.min(totalPages, 5); i++) {
        const pageNum = i === 5 && totalPages > 5 ? totalPages : i;
        paginationHTML += `<button class="${pageNum === currentPage ? 'active' : ''}" onclick="changePage(${pageNum})">${pageNum}</button>`;
        
        if (i === 4 && totalPages > 5) {
            paginationHTML += '<span>...</span>';
        }
    }
    
    // Next button
    paginationHTML += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>`;
    
    container.innerHTML = paginationHTML;
}

function changePage(page) {
    appState.pagination.currentPage = page;
    renderJobsList();
}

function performSearch() {
    const searchTitle = document.getElementById('searchTitle');
    const searchLocation = document.getElementById('searchLocation');
    const searchCategory = document.getElementById('searchCategory');
    
    if (searchTitle) appState.filters.search = searchTitle.value;
    if (searchLocation && searchLocation.value) appState.filters.location = searchLocation.value;
    if (searchCategory && searchCategory.value) appState.filters.category = searchCategory.value;
    
    showPage('jobs');
    showToast('Search completed!', 'success');
}

function applyFilters() {
    const locationFilter = document.getElementById('locationFilter');
    const jobTypeFilter = document.getElementById('jobTypeFilter');
    const experienceFilter = document.getElementById('experienceFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (locationFilter) appState.filters.location = locationFilter.value;
    if (jobTypeFilter) appState.filters.jobType = jobTypeFilter.value;
    if (experienceFilter) appState.filters.experience = experienceFilter.value;
    if (categoryFilter) appState.filters.category = categoryFilter.value;
    
    appState.pagination.currentPage = 1;
    renderJobsList();
}

function clearFiltersHandler() {
    appState.filters = {
        search: '',
        location: '',
        category: '',
        jobType: '',
        experience: '',
        sortBy: 'newest'
    };
    
    // Clear filter form
    const filterIds = ['locationFilter', 'jobTypeFilter', 'experienceFilter', 'categoryFilter', 'sortBy'];
    filterIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = id === 'sortBy' ? 'newest' : '';
        }
    });
    
    appState.pagination.currentPage = 1;
    renderJobsList();
    showToast('Filters cleared', 'info');
}

function handleSortChange(e) {
    appState.filters.sortBy = e.target.value;
    appState.pagination.currentPage = 1;
    renderJobsList();
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate login
    appState.currentUser = {
        id: 1,
        email: email,
        name: 'John Doe',
        type: 'jobseeker'
    };
    
    hideModal('loginModal');
    showToast('Successfully logged in!', 'success');
    updateAuthUI();
}

function handleRegister(e) {
    e.preventDefault();
    const userType = document.getElementById('userType').value;
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!userType) {
        showToast('Please select a user type', 'error');
        return;
    }
    
    // Simulate registration
    appState.currentUser = {
        id: Date.now(),
        email: email,
        name: name,
        type: userType
    };
    
    hideModal('registerModal');
    showToast('Successfully registered!', 'success');
    updateAuthUI();
    
    if (userType === 'company') {
        showPage('companyDashboard');
    }
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (!loginBtn || !registerBtn) return;
    
    if (appState.currentUser) {
        loginBtn.textContent = 'Profile';
        loginBtn.onclick = () => showPage('userProfile');
        registerBtn.textContent = 'Logout';
        registerBtn.onclick = handleLogout;
        registerBtn.classList.remove('btn--primary');
        registerBtn.classList.add('btn--outline');
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = () => showModal('loginModal');
        registerBtn.textContent = 'Register';
        registerBtn.onclick = () => showModal('registerModal');
        registerBtn.classList.remove('btn--outline');
        registerBtn.classList.add('btn--primary');
    }
}

function handleLogout() {
    appState.currentUser = null;
    appState.savedJobs = [];
    appState.applications = [];
    showToast('Successfully logged out!', 'info');
    updateAuthUI();
    showPage('home');
}

function handleSaveJob(jobId) {
    if (!appState.currentUser) {
        showToast('Please login to save jobs', 'error');
        showModal('loginModal');
        return;
    }
    
    const id = jobId || (appState.currentJob ? appState.currentJob.id : null);
    if (!id) return;
    
    if (appState.savedJobs.includes(id)) {
        appState.savedJobs = appState.savedJobs.filter(savedId => savedId !== id);
        showToast('Job removed from saved list', 'info');
    } else {
        appState.savedJobs.push(id);
        showToast('Job saved successfully!', 'success');
    }
}

function handleQuickApply(jobId) {
    if (!appState.currentUser) {
        showToast('Please login to apply for jobs', 'error');
        showModal('loginModal');
        return;
    }
    
    const job = appState.jobs.find(j => j.id === jobId);
    if (job) {
        appState.currentJob = job;
        showModal('applyModal');
    }
}

function handleJobApplication(e) {
    e.preventDefault();
    
    if (!appState.currentJob) {
        showToast('No job selected', 'error');
        return;
    }
    
    const application = {
        id: Date.now(),
        jobId: appState.currentJob.id,
        jobTitle: appState.currentJob.title,
        company: appState.currentJob.company,
        appliedDate: new Date().toLocaleDateString(),
        status: 'Applied'
    };
    
    appState.applications.push(application);
    hideModal('applyModal');
    showToast('Application submitted successfully!', 'success');
    
    // Reset form
    e.target.reset();
}

function handlePostJob(e) {
    e.preventDefault();
    
    const title = e.target.querySelector('input[type="text"]').value;
    const description = e.target.querySelector('textarea').value;
    
    if (!title || !description) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    const newJob = {
        id: Date.now(),
        title: title,
        company: appState.currentUser.name,
        location: 'Remote',
        salary: '$80,000 - $120,000',
        type: 'Full-time',
        experience: '3+ years',
        category: 'Software Development',
        description: description,
        requirements: ['Experience required'],
        benefits: ['Health insurance', 'Stock options'],
        posted: 'Just now',
        logo: 'https://via.placeholder.com/48'
    };
    
    appState.jobs.unshift(newJob);
    hideModal('postJobModal');
    showToast('Job posted successfully!', 'success');
    
    // Reset form
    e.target.reset();
    
    // Refresh jobs list if on jobs page
    if (appState.currentPage === 'jobs') {
        renderJobsList();
    }
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    const activeContent = document.getElementById(tabName + 'Tab');
    if (activeContent) {
        activeContent.classList.add('active');
    }
}

function switchProfileSection(sectionName) {
    // Update menu buttons
    document.querySelectorAll('.profile-menu-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Update sections
    document.querySelectorAll('.profile-section').forEach(section => {
        section.classList.remove('active');
    });
    
    if (sectionName === 'info') {
        const profileInfo = document.getElementById('profileInfo');
        if (profileInfo) profileInfo.classList.add('active');
    } else if (sectionName === 'saved') {
        const savedJobs = document.getElementById('savedJobs');
        if (savedJobs) savedJobs.classList.add('active');
        renderSavedJobs();
    } else if (sectionName === 'applications') {
        const applications = document.getElementById('applications');
        if (applications) applications.classList.add('active');
        renderApplications();
    } else if (sectionName === 'alerts') {
        const jobAlerts = document.getElementById('jobAlerts');
        if (jobAlerts) jobAlerts.classList.add('active');
    }
}

function renderSavedJobs() {
    const container = document.getElementById('savedJobsList');
    if (!container) return;
    
    const savedJobs = appState.jobs.filter(job => appState.savedJobs.includes(job.id));
    
    if (savedJobs.length === 0) {
        container.innerHTML = '<p>No saved jobs yet.</p>';
        return;
    }
    
    container.innerHTML = savedJobs.map(job => `
        <div class="saved-job-item" style="background: var(--color-surface); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); padding: var(--space-16); margin-bottom: var(--space-12);">
            <h4>${job.title}</h4>
            <p>${job.company} - ${job.location}</p>
            <div class="job-actions" style="margin-top: var(--space-12);">
                <button class="btn btn--primary btn--sm view-job-btn">View Details</button>
                <button class="btn btn--outline btn--sm remove-job-btn" data-job-id="${job.id}">Remove</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    container.querySelectorAll('.view-job-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showJobDetails(savedJobs[index]);
        });
    });
    
    container.querySelectorAll('.remove-job-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const jobId = parseInt(btn.dataset.jobId);
            handleSaveJob(jobId);
            renderSavedJobs(); // Re-render to update the list
        });
    });
}

function renderApplications() {
    const container = document.getElementById('applicationsList');
    if (!container) return;
    
    if (appState.applications.length === 0) {
        container.innerHTML = '<p>No applications yet.</p>';
        return;
    }
    
    container.innerHTML = appState.applications.map(app => `
        <div class="application-item" style="background: var(--color-surface); border: 1px solid var(--color-card-border); border-radius: var(--radius-lg); padding: var(--space-16); margin-bottom: var(--space-12);">
            <h4>${app.jobTitle}</h4>
            <p>${app.company}</p>
            <p>Applied: ${app.appliedDate}</p>
            <span class="status status--info">${app.status}</span>
        </div>
    `).join('');
}

function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Global functions for onclick handlers
window.handleSaveJob = handleSaveJob;
window.handleQuickApply = handleQuickApply;
window.changePage = changePage;
window.showJobDetails = showJobDetails;
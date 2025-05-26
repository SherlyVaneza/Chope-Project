// Data
        const cuisines = [
            'African', 'All-Day Breakfast', 'American', 'Asian', 'Argentinian', 'Australian', 'Bar', 'Bakery & Pastry', 'Balinese', 'Beverages', 'British',
            'Buffet', 'Burgers & Sandwiches', 'Cafe', 'Caribbean', 'Chinese', 'Coffee', 'Contemporary French', 'Cuban', 'European', 'Farm to table', 'French',
            'German', 'Greek', 'Greek Mediterranean', 'Hot Pot', 'Indian', 'Indonesian', 'International', 'Italian', 'Japanese', 'Korean', 'Mediterranean',
            'Mexican', 'Middle Eastern', 'Moroccan', 'Modern European', 'Portuguese', 'Seafood', 'Shabu-Shabu', 'South American', 'Southeast Asian', 'Spanish', 'Steak',
            'Thai', 'Vegetarian Friendly', 'Turkish', 'Western', 'Vietnamese', 'Vegan', 'Korean-Grill', 'Japanese-Grill'
        ];

        const locations = [
            'Ancol', 'Bellagio', 'Bekasi', 'Bellagio Mall', 'Bintaro', 'Blok M', 'Bogor', 'Central Park', 'Cikini', 'Cilandak', 'Cipete', 'Dharmawangsa', 'Fatmawati', 'Gajah Mada', 'Gandaria',
            'Pesanggrahan', 'Gandaria City', 'Gatot Subroto', 'Grand Indonesia', 'Grogol', 'Kalideres', 'Karet', 'Radio Dalam', 'Kebayoran Baru', 'Kebayoran Lama', 'Kebon Jeruk', 'Kelapa Gading', 'Kemang', 'Kembangan', 'Kuningan',
            'Lebak Bulus', 'Mall Kelapa Gading', 'Mangga Besar', 'Menteng', 'Melawai', 'Pacific Place', 'Pantai Indah Kapuk', 'Penjaringan', 'Pecenongan', 'PIK Avenue', 'Plaza Indonesia', 'Plaza Senayan', 'Pluit', 'Pondok Indah', 'Pondok Indah Mall',
            'Puri Indah', 'SCBD', 'Senayan', 'Senayan City', 'Senopati', 'Serpong', 'Setiabudhi', 'Slip', 'Sudirman', 'Sunter', 'Tangerang', 'Tebet', 'Thamrin', 'Jatinegara', 'Cikarang',
            'Gambir', 'Kalibata', 'Senen', 'Pasar Minggu', 'Pasar Rebo', 'Kota Kasablanka', 'Ashta District 8', 'Elysee', 'Senayan (Senayan Park)', 'Pasar Mayestik', 'Gading Serpong', 'Alam Sutera', 'BSD City', 'Mega Kuningan', 'Duren Sawit'
        ];

        const goodForOptions = [
            'Al Fresco', 'Bar & Lounge', 'Brunch', 'Casual Dining', 'Fine Dining', 'Karaoke', 'Kid & Family Friendly', 'Large Parties', 'Live Music', 'Private Room', 'Romantic Dates', 'Views'
        ];

        const othersOptions = [
            'Biko Group', 'Bandar Djakarta Group', 'Double Tree by Hilton', 'Fairmont Jakarta', 'Mandarin Oriental', 'New', 'Butterman', 'Union Group', 'GIOI', 'MKA Group', 'APJF Group', 'Gran Melia Hotel', 'The Garden'
        ];

        const restaurants = [
            {
                id: 1,
                name: "Sola Ristorante",
                rating: 4.8,
                reviews: 144,
                address: "Jl. Purworejo No.23, RT.1/RW.5, Dukuh Atas, Menteng, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310",
                image: "../assets/Sola_Directory.webp",
                cuisine: ["Italian", "Fine Dining"],
                location: "Menteng",
                price: 3
            },
            {
                id: 2,
                name: "Pot Boy Aru - Row 9",
                rating: 4.8,
                reviews: 144,
                address: "Row 9, Jl. Bulungan No.9, RW.8, Kramat Pela, Kebayoran Baru, Jakarta, 12130",
                image: "../assets/PotBoy_directory.jpg",
                cuisine: ["Korean", "Hot Pot"],
                location: "Kebayoran Baru",
                price: 2
            },
            {
                id: 3,
                name: "La Alcienda",
                rating: 4.8,
                reviews: 144,
                address: "Bintaro Jaya, Jl. Cempaka Raya No.8 Sektor 2, Rengas, Kec. Ciputat Tim, Kota Tangerang Selatan, Banten 15412",
                image: "../assets/LaAlcienda_Directory.jpg",
                cuisine: ["Spanish", "European"],
                location: "Bintaro",
                price: 3
            },
            {
                id: 4,
                name: "May Star",
                rating: 4.8,
                reviews: 144,
                address: "Mall PIK Avenue, Jl. Pantai Indah Kapuk Boulevard Lt. 1 RT.6/RW.2, Kamal Muara, Kec. Penjaringan, Jkt Utara, Daerah Khusus Ibukota Jakarta 14470",
                image: "../assets/MayStar_Directory.jpg",
                cuisine: ["Chinese", "Seafood"],
                location: "PIK Avenue",
                price: 2
            }
        ];

        // Initialize filters
        function initializeFilters() {
            populateCheckboxes('cuisineFilters', cuisines);
            populateCheckboxes('locationFilters', locations);
            populateCheckboxes('goodForFilters', goodForOptions);
            populateCheckboxes('othersFilters', othersOptions);
        }

        function populateCheckboxes(containerId, options) {
            const container = document.getElementById(containerId);
            container.innerHTML = options.map(option => `
                <div class="checkbox-item">
                    <input type="checkbox" id="${containerId}_${option.replace(/\s+/g, '_')}" value="${option}">
                    <label for="${containerId}_${option.replace(/\s+/g, '_')}">${option}</label>
                </div>
            `).join('');
        }

        // Generate stars HTML
        function generateStars(rating) {
            const fullStars = Math.floor(rating);
            const hasHalfStar = rating % 1 !== 0;
            let starsHTML = '';
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            
            if (hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            const emptyStars = 5 - Math.ceil(rating);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            
            return starsHTML;
        }

        // Create restaurant card HTML
        function createRestaurantCard(restaurant) {
            return `
                <div class="restaurant-card" data-id="${restaurant.id}">
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                    <div class="restaurant-info">
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <div class="restaurant-rating">
                            <div class="stars">${generateStars(restaurant.rating)}</div>
                            <span class="rating-text">${restaurant.rating} (${restaurant.reviews} Reviews)</span>
                        </div>
                        <p class="restaurant-address">${restaurant.address}</p>
                    </div>
                    <button class="book-btn" onclick="bookRestaurant(${restaurant.id})">Book Now</button>
                </div>
            `;
        }

        // Load restaurants
        function loadRestaurants() {
            const loadingState = document.getElementById('loadingState');
            const restaurantGrid = document.getElementById('restaurantGrid');
            
            loadingState.style.display = 'flex';
            
            setTimeout(() => {
                loadingState.style.display = 'none';
                
                const restaurantsHTML = restaurants.map(createRestaurantCard).join('');
                restaurantGrid.innerHTML = restaurantsHTML;
                
                // Add animation
                const cards = document.querySelectorAll('.restaurant-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 1000);
        }

        // Dropdown functionality
        function toggleDropdown(dropdownId) {
            const dropdown = document.getElementById(dropdownId);
            dropdown.classList.toggle('active');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu.id !== dropdownId) {
                    menu.classList.remove('active');
                }
            });
        }

        function selectSort(option) {
            document.getElementById('sortSelected').textContent = option;
            document.getElementById('sortDropdown').classList.remove('active');
            
            // Apply sorting logic here
            console.log('Sorting by:', option);
        }

        // Clear filter functions
        function clearCuisineFilters() {
            document.querySelectorAll('#cuisineFilters input[type="checkbox"]').forEach(cb => cb.checked = false);
        }

        function clearLocationFilters() {
            document.querySelectorAll('#locationFilters input[type="checkbox"]').forEach(cb => cb.checked = false);
        }

        function clearGoodForFilters() {
            document.querySelectorAll('#goodForFilters input[type="checkbox"]').forEach(cb => cb.checked = false);
        }

        function clearOthersFilters() {
            document.querySelectorAll('#othersFilters input[type="checkbox"]').forEach(cb => cb.checked = false);
        }

        // Book restaurant function
        function bookRestaurant(restaurantId) {
            const restaurant = restaurants.find(r => r.id === restaurantId);
            alert(`Booking ${restaurant.name}...`);
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown-select')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('active');
                });
            }
        });

        // Initialize page
        document.addEventListener('DOMContentLoaded', function() {
            initializeFilters();
            loadRestaurants();
        });
// Global variables
let currentMonth = 4 // May (0-indexed)
let currentYear = 2025
let selectedDate = new Date(2025, 4, 24) // May 24, 2025
let adults = 2
let children = 0

// Add this to your main site's navigation JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const restaurantDirectoryLink = document.querySelector('[data-page="restaurant-directory"]');
    
    if (restaurantDirectoryLink) {
        restaurantDirectoryLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide current page content
            document.querySelector('.current-page').style.display = 'none';
            
            // Load restaurant directory page
            window.location.href = 'restaurant-directory.html';
            // OR if using SPA: loadRestaurantDirectory();
        });
    }
});

// Location management functions - FIXED AND PRIORITIZED
function selectLocation(location) {
  // Update desktop location display
  const selectedLocationElement = document.getElementById("selectedLocation")
  if (selectedLocationElement) {
    selectedLocationElement.textContent = location
  }

  // Update active state
  document.querySelectorAll("#locationDropdown .location-option").forEach((option) => {
    option.classList.remove("active")
  })

  // Add active class to clicked option
  if (event && event.target) {
    event.target.classList.add("active")
  }

  // Close dropdown
  const locationDropdown = document.getElementById("locationDropdown")
  if (locationDropdown) {
    locationDropdown.classList.remove("active")
  }

  console.log("Location changed to:", location)
}

// Enhanced Mobile Menu with Smooth Transitions
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const body = document.body;
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isActive = mobileMenuOverlay.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    // Open mobile menu
    function openMobileMenu() {
        mobileMenuBtn.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        body.classList.add('mobile-menu-open');
        
        // Prevent background scrolling
        body.style.overflow = 'hidden';
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('mobile-menu-open');
        
        // Restore background scrolling
        body.style.overflow = '';
        
        // Close auth dropdown if open
        const authBtn = document.querySelector('.mobile-auth');
        const authDropdown = document.querySelector('.auth-choice-dropdown');
        if (authBtn && authDropdown) {
            authBtn.classList.remove('active');
            authDropdown.classList.remove('active');
        }
    }
    
    // Event listeners
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking on overlay (outside content)
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

function selectLocationMobile(location) {
  // Update mobile location display
  const selectedLocationMobileElement = document.getElementById("selectedLocationMobile")
  if (selectedLocationMobileElement) {
    selectedLocationMobileElement.textContent = location
  }

  // Update active state in mobile dropdown
  document.querySelectorAll("#mobileLocationDropdown .location-option").forEach((option) => {
    option.classList.remove("active")
  })

  // Add active class to clicked option
  if (event && event.target) {
    event.target.classList.add("active")
  }

  // Close mobile dropdown
  const mobileLocationDropdown = document.getElementById("mobileLocationDropdown")
  if (mobileLocationDropdown) {
    mobileLocationDropdown.classList.remove("active")
  }

  // Also update desktop version to keep them in sync
  const selectedLocationElement = document.getElementById("selectedLocation")
  if (selectedLocationElement) {
    selectedLocationElement.textContent = location
  }

  // Update desktop dropdown active state
  document.querySelectorAll("#locationDropdown .location-option").forEach((option) => {
    option.classList.remove("active")
    if (option.textContent === location) {
      option.classList.add("active")
    }
  })

  console.log("Mobile location changed to:", location)
}

// Enhanced dropdown toggle function
function toggleDropdownFunc(dropdownId) {
  console.log("Toggling dropdown:", dropdownId)

  // Close all other dropdowns first
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    if (menu.id !== dropdownId) {
      menu.classList.remove("active")
    }
  })

  // Toggle the clicked dropdown
  const dropdown = document.getElementById(dropdownId)
  if (dropdown) {
    dropdown.classList.toggle("active")
    console.log("Dropdown", dropdownId, "is now", dropdown.classList.contains("active") ? "open" : "closed")
  } else {
    console.error("Dropdown not found:", dropdownId)
  }
}

// Location dropdown toggle handlers - ENHANCED
function setupLocationDropdowns() {
  console.log("Setting up location dropdowns...")

  // Desktop location selector
  const locationSelector = document.getElementById("locationSelector")
  if (locationSelector) {
    console.log("Desktop location selector found")
    locationSelector.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log("Desktop location selector clicked")
      toggleDropdownFunc("locationDropdown")
    })
  } else {
    console.error("Desktop location selector not found")
  }

  // Mobile location selector
  const mobileLocationSelector = document.getElementById("mobileLocationSelector")
  if (mobileLocationSelector) {
    console.log("Mobile location selector found")
    mobileLocationSelector.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      console.log("Mobile location selector clicked")
      toggleDropdownFunc("mobileLocationDropdown")
    })
  } else {
    console.error("Mobile location selector not found")
  }
}

// Enhanced click outside handler
function setupClickOutsideHandler() {
  document.addEventListener("click", (e) => {
    // Check if click is outside any dropdown container
    if (
      !e.target.closest(".search-dropdown-container") &&
      !e.target.closest(".mobile-form-section") &&
      !e.target.closest(".mobile-date-time-row") &&
      !e.target.closest(".location-selector-container")
    ) {
      // Close all dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("active")
      })
    }
  })
}

// Guest management
function changeGuests(type, change) {
  if (type === "adults") {
    adults = Math.max(1, adults + change)
    document.getElementById("adultsCount").textContent = adults
  } else {
    children = Math.max(0, children + change)
    document.getElementById("childrenCount").textContent = children
  }
  updateGuestDisplay()
  updateCounterButtons()
}

function updateGuestDisplay() {
  const total = adults + children
  const display = `${total} Pax`
  document.getElementById("guestDisplay").textContent = display
  document.getElementById("guestCount").textContent = display
}

function updateCounterButtons() {
  // Update adults counter buttons
  const adultsMinusBtn = document.querySelector(".guest-row:first-child .counter-btn.minus")
  if (adultsMinusBtn) {
    adultsMinusBtn.disabled = adults <= 1
  }

  // Update children counter buttons
  const childrenMinusBtn = document.querySelector(".guest-row:last-child .counter-btn.minus")
  if (childrenMinusBtn) {
    childrenMinusBtn.disabled = children <= 0
  }
}

// Date management
function selectDateTab(tab) {
  document.querySelectorAll(".date-tab").forEach((t) => t.classList.remove("active"))
  event.target.classList.add("active")

  const today = new Date()
  if (tab === "today") {
    selectedDate = new Date(today)
  } else {
    selectedDate = new Date(today)
    selectedDate.setDate(today.getDate() + 1)
  }
  updateDateDisplay()
  generateCalendar()
}

function changeMonth(direction) {
  currentMonth += direction
  if (currentMonth > 11) {
    currentMonth = 0
    currentYear++
  } else if (currentMonth < 0) {
    currentMonth = 11
    currentYear--
  }
  generateCalendar()
}

function generateCalendar() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Update both calendar instances
  const monthYearElements = ["monthYear", "monthYear2"]
  monthYearElements.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.textContent = `${monthNames[currentMonth]} ${currentYear}`
    }
  })

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const today = new Date()

  let datesHTML = ""

  // Previous month's trailing dates
  for (let i = 0; i < firstDay; i++) {
    const prevDate = new Date(currentYear, currentMonth, 0 - (firstDay - 1 - i)).getDate()
    datesHTML += `<div class="calendar-date other-month">${prevDate}</div>`
  }

  // Current month's dates
  for (let date = 1; date <= daysInMonth; date++) {
    const isToday = today.getFullYear() === currentYear && today.getMonth() === currentMonth && today.getDate() === date
    const isSelected =
      selectedDate.getFullYear() === currentYear &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getDate() === date

    let classes = "calendar-date"
    if (isToday) classes += " today"
    if (isSelected) classes += " selected"

    datesHTML += `<div class="${classes}" onclick="selectDate(${date})">${date}</div>`
  }

  // Update both calendar instances
  const calendarElements = ["calendarDates", "calendarDates2"]
  calendarElements.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.innerHTML = datesHTML
    }
  })
}

function selectDate(date) {
  selectedDate = new Date(currentYear, currentMonth, date)
  updateDateDisplay()
  generateCalendar()
}

function updateDateDisplay() {
  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  const formatted = selectedDate.toLocaleDateString("en-US", options)
  const shortFormat = selectedDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  // Update all date display elements
  const dateDisplayElements = ["dateDisplay", "dateDisplay2"]
  const selectedDateElements = ["selectedDate", "selectedDate2"]

  dateDisplayElements.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.textContent = shortFormat
    }
  })

  selectedDateElements.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.textContent = formatted
    }
  })
}

// Time management
function selectTime(time) {
  document.querySelectorAll("#timeDropdown .time-slot").forEach((slot) => slot.classList.remove("active"))
  event.target.classList.add("active")

  document.getElementById("timeDisplay").textContent = time
  document.getElementById("selectedTime").textContent = time
}

function selectTime2(time) {
  document.querySelectorAll("#time2Dropdown .time-slot").forEach((slot) => slot.classList.remove("active"))
  event.target.classList.add("active")

  document.getElementById("timeDisplay2").textContent = time
  document.getElementById("selectedTime2").textContent = time
}

// Dropdown management
function toggleDropdown(dropdownId) {
  // Close all other dropdowns
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    if (menu.id !== dropdownId) {
      menu.classList.remove("active")
    }
  })

  // Toggle the clicked dropdown
  const dropdown = document.getElementById(dropdownId)
  if (dropdown) {
    dropdown.classList.toggle("active")
  }
}

class RestaurantSlider {
  constructor() {
    this.currentIndex = 0
    this.cardWidth = 320
    this.gap = 24
    this.visibleCards = 3
    this.totalCards = 5

    this.sliderTrack = document.getElementById("sliderTrack")
    this.prevBtn = document.getElementById("prevBtn")
    this.nextBtn = document.getElementById("nextBtn")
    this.mobileDots = document.getElementById("mobileDots")

    this.init()
  }

  init() {
    if (!this.sliderTrack || !this.prevBtn || !this.nextBtn) return

    this.updateVisibleCards()
    this.setupEventListeners()
    this.createMobileDots()
    this.updateSlider()
    this.setupTouchEvents()

    // Handle window resize
    window.addEventListener("resize", () => {
      this.updateVisibleCards()
      this.updateSlider()
    })
  }

  updateVisibleCards() {
    const width = window.innerWidth
    if (width < 640) {
      this.visibleCards = 1.2
      this.cardWidth = 280
      this.gap = 16
    } else if (width < 768) {
      this.visibleCards = 1.8
      this.cardWidth = 300
      this.gap = 16
    } else if (width < 1024) {
      this.visibleCards = 2.5
      this.cardWidth = 300
      this.gap = 24
    } else if (width < 1280) {
      this.visibleCards = 3
      this.cardWidth = 320
      this.gap = 24
    } else {
      this.visibleCards = 3.5
      this.cardWidth = 320
      this.gap = 24
    }
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())
  }

  createMobileDots() {
    if (!this.mobileDots) return

    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    this.mobileDots.innerHTML = ""

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div")
      dot.className = `dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => this.goToSlide(i))
      this.mobileDots.appendChild(dot)
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateSlider()
    }
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    if (this.currentIndex < maxIndex) {
      this.currentIndex++
      this.updateSlider()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateSlider()
  }

  updateSlider() {
    if (!this.sliderTrack) return

    const translateX = -this.currentIndex * (this.cardWidth + this.gap)
    this.sliderTrack.style.transform = `translateX(${translateX}px)`

    this.updateNavigationButtons()
    this.updateDots()
  }

  updateNavigationButtons() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex
  }

  updateDots() {
    if (!this.mobileDots) return

    const dots = this.mobileDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  setupTouchEvents() {
    if (!this.sliderTrack) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    this.sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return

        const diff = currentX - startX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prevSlide()
          } else {
            this.nextSlide()
          }
        }

        isDragging = false
      },
      { passive: true },
    )

    // Mouse events for desktop
    this.sliderTrack.addEventListener("mousedown", (e) => {
      startX = e.clientX
      isDragging = true
      e.preventDefault()
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      currentX = e.clientX
    })

    document.addEventListener("mouseup", () => {
      if (!isDragging) return

      const diff = currentX - startX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }

      isDragging = false
    })
  }
}

class RecommendedSlider {
  constructor() {
    this.currentIndex = 0
    this.cardWidth = 320
    this.gap = 24
    this.visibleCards = 3
    this.totalCards = 5

    this.sliderTrack = document.getElementById("recommendedSliderTrack")
    this.prevBtn = document.getElementById("recommendedPrevBtn")
    this.nextBtn = document.getElementById("recommendedNextBtn")
    this.mobileDots = document.getElementById("recommendedMobileDots")

    this.init()
  }

  init() {
    if (!this.sliderTrack || !this.prevBtn || !this.nextBtn) return

    this.updateVisibleCards()
    this.setupEventListeners()
    this.createMobileDots()
    this.updateSlider()
    this.setupTouchEvents()

    // Handle window resize
    window.addEventListener("resize", () => {
      this.updateVisibleCards()
      this.updateSlider()
    })
  }

  updateVisibleCards() {
    const width = window.innerWidth
    if (width < 640) {
      this.visibleCards = 1.2
      this.cardWidth = 280
      this.gap = 16
    } else if (width < 768) {
      this.visibleCards = 1.8
      this.cardWidth = 300
      this.gap = 16
    } else if (width < 1024) {
      this.visibleCards = 2.5
      this.cardWidth = 300
      this.gap = 24
    } else if (width < 1280) {
      this.visibleCards = 3
      this.cardWidth = 320
      this.gap = 24
    } else {
      this.visibleCards = 3.5
      this.cardWidth = 320
      this.gap = 24
    }
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())
  }

  createMobileDots() {
    if (!this.mobileDots) return

    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    this.mobileDots.innerHTML = ""

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div")
      dot.className = `dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => this.goToSlide(i))
      this.mobileDots.appendChild(dot)
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateSlider()
    }
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    if (this.currentIndex < maxIndex) {
      this.currentIndex++
      this.updateSlider()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateSlider()
  }

  updateSlider() {
    if (!this.sliderTrack) return

    const translateX = -this.currentIndex * (this.cardWidth + this.gap)
    this.sliderTrack.style.transform = `translateX(${translateX}px)`

    this.updateNavigationButtons()
    this.updateDots()
  }

  updateNavigationButtons() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex
  }

  updateDots() {
    if (!this.mobileDots) return

    const dots = this.mobileDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  setupTouchEvents() {
    if (!this.sliderTrack) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    this.sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return

        const diff = currentX - startX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prevSlide()
          } else {
            this.nextSlide()
          }
        }

        isDragging = false
      },
      { passive: true },
    )

    // Mouse events for desktop
    this.sliderTrack.addEventListener("mousedown", (e) => {
      startX = e.clientX
      isDragging = true
      e.preventDefault()
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      currentX = e.clientX
    })

    document.addEventListener("mouseup", () => {
      if (!isDragging) return

      const diff = currentX - startX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }

      isDragging = false
    })
  }
}

class DiningSpotSlider {
  constructor() {
    this.currentIndex = 0
    this.cardWidth = 320
    this.gap = 24
    this.visibleCards = 3
    this.totalCards = 5

    this.sliderTrack = document.getElementById("hotSpotsSliderTrack")
    this.prevBtn = document.getElementById("hotSpotsPrevBtn")
    this.nextBtn = document.getElementById("hotSpotsNextBtn")
    this.mobileDots = document.getElementById("hotSpotsMobileDots")

    this.init()
  }

  init() {
    if (!this.sliderTrack || !this.prevBtn || !this.nextBtn) return

    this.updateVisibleCards()
    this.setupEventListeners()
    this.createMobileDots()
    this.updateSlider()
    this.setupTouchEvents()

    // Handle window resize
    window.addEventListener("resize", () => {
      this.updateVisibleCards()
      this.updateSlider()
    })
  }

  updateVisibleCards() {
    const width = window.innerWidth
    if (width < 640) {
      this.visibleCards = 1.2
      this.cardWidth = 280
      this.gap = 16
    } else if (width < 768) {
      this.visibleCards = 1.8
      this.cardWidth = 300
      this.gap = 16
    } else if (width < 1024) {
      this.visibleCards = 2.5
      this.cardWidth = 300
      this.gap = 24
    } else if (width < 1280) {
      this.visibleCards = 3
      this.cardWidth = 320
      this.gap = 24
    } else {
      this.visibleCards = 3.5
      this.cardWidth = 320
      this.gap = 24
    }
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())
  }

  createMobileDots() {
    if (!this.mobileDots) return

    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    this.mobileDots.innerHTML = ""

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div")
      dot.className = `dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => this.goToSlide(i))
      this.mobileDots.appendChild(dot)
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateSlider()
    }
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    if (this.currentIndex < maxIndex) {
      this.currentIndex++
      this.updateSlider()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateSlider()
  }

  updateSlider() {
    if (!this.sliderTrack) return

    const translateX = -this.currentIndex * (this.cardWidth + this.gap)
    this.sliderTrack.style.transform = `translateX(${translateX}px)`

    this.updateNavigationButtons()
    this.updateDots()
  }

  updateNavigationButtons() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex
  }

  updateDots() {
    if (!this.mobileDots) return

    const dots = this.mobileDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  setupTouchEvents() {
    if (!this.sliderTrack) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    this.sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return

        const diff = currentX - startX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prevSlide()
          } else {
            this.nextSlide()
          }
        }

        isDragging = false
      },
      { passive: true },
    )

    // Mouse events for desktop
    this.sliderTrack.addEventListener("mousedown", (e) => {
      startX = e.clientX
      isDragging = true
      e.preventDefault()
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      currentX = e.clientX
    })

    document.addEventListener("mouseup", () => {
      if (!isDragging) return

      const diff = currentX - startX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }

      isDragging = false
    })
  }
}

class NewOnChopeSlider {
  constructor() {
    this.currentIndex = 0
    this.cardWidth = 320
    this.gap = 24
    this.visibleCards = 3
    this.totalCards = 5

    this.sliderTrack = document.getElementById("newChopeSliderTrack")
    this.prevBtn = document.getElementById("newChopePrevBtn")
    this.nextBtn = document.getElementById("newChopeNextBtn")
    this.mobileDots = document.getElementById("newChopeMobileDots")

    this.init()
  }

  init() {
    if (!this.sliderTrack || !this.prevBtn || !this.nextBtn) return

    this.updateVisibleCards()
    this.setupEventListeners()
    this.createMobileDots()
    this.updateSlider()
    this.setupTouchEvents()

    // Handle window resize
    window.addEventListener("resize", () => {
      this.updateVisibleCards()
      this.updateSlider()
    })
  }

  updateVisibleCards() {
    const width = window.innerWidth
    if (width < 640) {
      this.visibleCards = 1.2
      this.cardWidth = 280
      this.gap = 16
    } else if (width < 768) {
      this.visibleCards = 1.8
      this.cardWidth = 300
      this.gap = 16
    } else if (width < 1024) {
      this.visibleCards = 2.5
      this.cardWidth = 300
      this.gap = 24
    } else if (width < 1280) {
      this.visibleCards = 3
      this.cardWidth = 320
      this.gap = 24
    } else {
      this.visibleCards = 3.5
      this.cardWidth = 320
      this.gap = 24
    }
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())
  }

  createMobileDots() {
    if (!this.mobileDots) return

    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    this.mobileDots.innerHTML = ""

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div")
      dot.className = `dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => this.goToSlide(i))
      this.mobileDots.appendChild(dot)
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateSlider()
    }
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    if (this.currentIndex < maxIndex) {
      this.currentIndex++
      this.updateSlider()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateSlider()
  }

  updateSlider() {
    if (!this.sliderTrack) return

    const translateX = -this.currentIndex * (this.cardWidth + this.gap)
    this.sliderTrack.style.transform = `translateX(${translateX}px)`

    this.updateNavigationButtons()
    this.updateDots()
  }

  updateNavigationButtons() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex
  }

  updateDots() {
    if (!this.mobileDots) return

    const dots = this.mobileDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  setupTouchEvents() {
    if (!this.sliderTrack) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    this.sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return

        const diff = currentX - startX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prevSlide()
          } else {
            this.nextSlide()
          }
        }

        isDragging = false
      },
      { passive: true },
    )

    // Mouse events for desktop
    this.sliderTrack.addEventListener("mousedown", (e) => {
      startX = e.clientX
      isDragging = true
      e.preventDefault()
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      currentX = e.clientX
    })

    document.addEventListener("mouseup", () => {
      if (!isDragging) return

      const diff = currentX - startX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }

      isDragging = false
    })
  }
}

class PopularGuidesSlider {
  constructor() {
    this.currentIndex = 0
    this.cardWidth = 320
    this.gap = 24
    this.visibleCards = 3
    this.totalCards = 5

    this.sliderTrack = document.getElementById("popularGuidesSliderTrack")
    this.prevBtn = document.getElementById("popularGuidesPrevBtn")
    this.nextBtn = document.getElementById("popularGuidesNextBtn")
    this.mobileDots = document.getElementById("popularGuidesMobileDots")

    this.init()
  }

  init() {
    if (!this.sliderTrack || !this.prevBtn || !this.nextBtn) return

    this.updateVisibleCards()
    this.setupEventListeners()
    this.createMobileDots()
    this.updateSlider()
    this.setupTouchEvents()

    // Handle window resize
    window.addEventListener("resize", () => {
      this.updateVisibleCards()
      this.updateSlider()
    })
  }

  updateVisibleCards() {
    const width = window.innerWidth
    if (width < 640) {
      this.visibleCards = 1.2
      this.cardWidth = 280
      this.gap = 16
    } else if (width < 768) {
      this.visibleCards = 1.8
      this.cardWidth = 300
      this.gap = 16
    } else if (width < 1024) {
      this.visibleCards = 2.5
      this.cardWidth = 300
      this.gap = 24
    } else if (width < 1280) {
      this.visibleCards = 3
      this.cardWidth = 320
      this.gap = 24
    } else {
      this.visibleCards = 3.5
      this.cardWidth = 320
      this.gap = 24
    }
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())
  }

  createMobileDots() {
    if (!this.mobileDots) return

    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    this.mobileDots.innerHTML = ""

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div")
      dot.className = `dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => this.goToSlide(i))
      this.mobileDots.appendChild(dot)
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateSlider()
    }
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    if (this.currentIndex < maxIndex) {
      this.currentIndex++
      this.updateSlider()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateSlider()
  }

  updateSlider() {
    if (!this.sliderTrack) return

    const translateX = -this.currentIndex * (this.cardWidth + this.gap)
    this.sliderTrack.style.transform = `translateX(${translateX}px)`

    this.updateNavigationButtons()
    this.updateDots()
  }

  updateNavigationButtons() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex
  }

  updateDots() {
    if (!this.mobileDots) return

    const dots = this.mobileDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  setupTouchEvents() {
    if (!this.sliderTrack) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    this.sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return

        const diff = currentX - startX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prevSlide()
          } else {
            this.nextSlide()
          }
        }

        isDragging = false
      },
      { passive: true },
    )

    // Mouse events for desktop
    this.sliderTrack.addEventListener("mousedown", (e) => {
      startX = e.clientX
      isDragging = true
      e.preventDefault()
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      currentX = e.clientX
    })

    document.addEventListener("mouseup", () => {
      if (!isDragging) return

      const diff = currentX - startX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }

      isDragging = false
    })
  }
}

class DineSaveSlider {
  constructor() {
    this.currentIndex = 0
    this.cardWidth = 320
    this.gap = 24
    this.visibleCards = 3
    this.totalCards = 5

    this.sliderTrack = document.getElementById("dineSaveSliderTrack")
    this.prevBtn = document.getElementById("dineSavePrevBtn")
    this.nextBtn = document.getElementById("dineSaveNextBtn")
    this.mobileDots = document.getElementById("dineSaveMobileDots")

    this.init()
  }

  init() {
    if (!this.sliderTrack || !this.prevBtn || !this.nextBtn) return

    this.updateVisibleCards()
    this.setupEventListeners()
    this.createMobileDots()
    this.updateSlider()
    this.setupTouchEvents()

    window.addEventListener("resize", () => {
      this.updateVisibleCards()
      this.updateSlider()
    })
  }

  updateVisibleCards() {
    const width = window.innerWidth
    if (width < 640) {
      this.visibleCards = 1.2
      this.cardWidth = 280
      this.gap = 16
    } else if (width < 768) {
      this.visibleCards = 1.8
      this.cardWidth = 300
      this.gap = 16
    } else if (width < 1024) {
      this.visibleCards = 2.5
      this.cardWidth = 300
      this.gap = 24
    } else if (width < 1280) {
      this.visibleCards = 3
      this.cardWidth = 320
      this.gap = 24
    } else {
      this.visibleCards = 3.5
      this.cardWidth = 320
      this.gap = 24
    }
  }

  setupEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prevSlide())
    this.nextBtn.addEventListener("click", () => this.nextSlide())
  }

  createMobileDots() {
    if (!this.mobileDots) return

    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    this.mobileDots.innerHTML = ""

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("div")
      dot.className = `dot ${i === 0 ? "active" : ""}`
      dot.addEventListener("click", () => this.goToSlide(i))
      this.mobileDots.appendChild(dot)
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateSlider()
    }
  }

  nextSlide() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))
    if (this.currentIndex < maxIndex) {
      this.currentIndex++
      this.updateSlider()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateSlider()
  }

  updateSlider() {
    if (!this.sliderTrack) return

    const translateX = -this.currentIndex * (this.cardWidth + this.gap)
    this.sliderTrack.style.transform = `translateX(${translateX}px)`

    this.updateNavigationButtons()
    this.updateDots()
  }

  updateNavigationButtons() {
    const maxIndex = Math.max(0, this.totalCards - Math.floor(this.visibleCards))

    if (this.prevBtn) this.prevBtn.disabled = this.currentIndex === 0
    if (this.nextBtn) this.nextBtn.disabled = this.currentIndex >= maxIndex
  }

  updateDots() {
    if (!this.mobileDots) return

    const dots = this.mobileDots.querySelectorAll(".dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }

  setupTouchEvents() {
    if (!this.sliderTrack) return

    let startX = 0
    let currentX = 0
    let isDragging = false

    this.sliderTrack.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX
        isDragging = true
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return
        currentX = e.touches[0].clientX
      },
      { passive: true },
    )

    this.sliderTrack.addEventListener(
      "touchend",
      () => {
        if (!isDragging) return

        const diff = currentX - startX
        const threshold = 50

        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            this.prevSlide()
          } else {
            this.nextSlide()
          }
        }

        isDragging = false
      },
      { passive: true },
    )

    // Mouse events for desktop
    this.sliderTrack.addEventListener("mousedown", (e) => {
      startX = e.clientX
      isDragging = true
      e.preventDefault()
    })

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return
      currentX = e.clientX
    })

    document.addEventListener("mouseup", () => {
      if (!isDragging) return

      const diff = currentX - startX
      const threshold = 50

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          this.prevSlide()
        } else {
          this.nextSlide()
        }
      }

      isDragging = false
    })
  }
}

class MobileNavigation {
  constructor() {
    this.mobileMenuBtn = document.getElementById("mobileMenuBtn")
    this.mobileMenuOverlay = document.getElementById("mobileMenuOverlay")
    this.isOpen = false

    this.init()
  }

  init() {
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener("click", () => this.toggleMenu())
    }

    if (this.mobileMenuOverlay) {
      this.mobileMenuOverlay.addEventListener("click", (e) => {
        if (e.target === this.mobileMenuOverlay) {
          this.closeMenu()
        }
      })
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeMenu()
      }
    })
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  openMenu() {
    this.isOpen = true
    if (this.mobileMenuBtn) this.mobileMenuBtn.classList.add("active")
    if (this.mobileMenuOverlay) this.mobileMenuOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  closeMenu() {
    this.isOpen = false
    if (this.mobileMenuBtn) this.mobileMenuBtn.classList.remove("active")
    if (this.mobileMenuOverlay) this.mobileMenuOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
}

class SearchForm {
  constructor() {
    this.searchForm = document.getElementById("searchForm")
    this.searchBtn = document.querySelector(".search-btn")
    this.searchInputs = document.querySelectorAll(".search-input")

    this.init()
  }

  init() {
    if (this.searchForm) {
      this.searchForm.addEventListener("submit", (e) => this.handleSearch(e))
    }

    this.searchInputs.forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault()
          this.handleSearch(e)
        }
      })
    })
  }

  handleSearch(e) {
    e.preventDefault()
    console.log("Search submitted")
  }
}

class AboutSection {
  constructor() {
    this.readMoreBtn = document.getElementById("readMoreBtn")
    this.readLessBtn = document.getElementById("readLessBtn")
    this.expandedContent = document.getElementById("expandedContent")
    this.isExpanded = false

    this.init()
  }

  init() {
    if (this.readMoreBtn) {
      this.readMoreBtn.addEventListener("click", () => this.expandContent())
    }

    if (this.readLessBtn) {
      this.readLessBtn.addEventListener("click", () => this.collapseContent())
    }
  }

  expandContent() {
    if (this.expandedContent && this.readMoreBtn) {
      this.isExpanded = true
      this.readMoreBtn.style.display = "none"
      this.expandedContent.style.display = "block"

      setTimeout(() => {
        this.expandedContent.classList.add("show")
      }, 10)

      setTimeout(() => {
        this.expandedContent.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 300)
    }
  }

  collapseContent() {
    if (this.expandedContent && this.readMoreBtn) {
      this.isExpanded = false
      this.expandedContent.classList.remove("show")

      setTimeout(() => {
        this.expandedContent.style.display = "none"
        this.readMoreBtn.style.display = "block"

        this.readMoreBtn.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      }, 500)
    }
  }
}

// Partners Section JavaScript
class PartnersSection {
    constructor() {
        this.partnersSection = document.querySelector('.partners-section');
        this.partnerLogos = document.querySelectorAll('.partner-logo');
        this.isAnimated = false;
        
        this.init();
    }
    
    init() {
        if (this.partnersSection) {
            this.setupIntersectionObserver();
            this.setupHoverEffects();
        }
    }
    
    // Setup intersection observer for scroll animations
    setupIntersectionObserver() {
        const options = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.isAnimated) {
                    this.animateSection();
                    this.isAnimated = true;
                }
            });
        }, options);
        
        observer.observe(this.partnersSection);
    }
    
    // Animate section when it comes into view
    animateSection() {
        this.partnersSection.classList.add('animate-in');
        
        // Animate partner logos with stagger effect
        this.partnerLogos.forEach((logo, index) => {
            setTimeout(() => {
                logo.classList.add('animate-in');
            }, index * 100);
        });
    }
    
    // Setup hover effects for partner logos
    setupHoverEffects() {
        this.partnerLogos.forEach(logo => {
            const img = logo.querySelector('.partner-img');
            
            logo.addEventListener('mouseenter', () => {
                this.onLogoHover(logo, img);
            });
            
            logo.addEventListener('mouseleave', () => {
                this.onLogoLeave(logo, img);
            });
            
            // Add click tracking (optional)
            logo.addEventListener('click', () => {
                this.onLogoClick(logo);
            });
        });
    }
    
    // Handle logo hover
    onLogoHover(logo, img) {
        // Add any additional hover effects here
        logo.style.transform = 'translateY(-5px) scale(1.02)';
    }
    
    // Handle logo leave
    onLogoLeave(logo, img) {
        // Reset hover effects
        logo.style.transform = '';
    }
    
    // Handle logo click (for analytics or navigation)
    onLogoClick(logo) {
        const partnerName = logo.querySelector('img').alt;
        console.log(`Partner logo clicked: ${partnerName}`);
        
        // Add analytics tracking here if needed
        // Example: gtag('event', 'partner_logo_click', { partner_name: partnerName });
    }
    
    // Method to update partner logos dynamically
    updatePartnerLogos(partnersData) {
        const grid = document.querySelector('.partners-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        partnersData.forEach((partner, index) => {
            const logoElement = this.createPartnerLogo(partner, index);
            grid.appendChild(logoElement);
        });
        
        // Re-setup hover effects for new elements
        this.partnerLogos = document.querySelectorAll('.partner-logo');
        this.setupHoverEffects();
    }
    
    // Create a partner logo element
    createPartnerLogo(partner, index) {
        const logoDiv = document.createElement('div');
        logoDiv.className = 'partner-logo';
        
        const img = document.createElement('img');
        img.src = partner.logo || '/placeholder.svg';
        img.alt = partner.name;
        img.className = `partner-img ${partner.className || ''}`;
        
        logoDiv.appendChild(img);
        return logoDiv;
    }
}

// Initialize partners section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PartnersSection();
});

// Optional: Add smooth scrolling to partners section
function scrollToPartners() {
    const partnersSection = document.querySelector('.partners-section');
    if (partnersSection) {
        partnersSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PartnersSection;
}

// Desktop guest management
let adultsDesktop = 2
let childrenDesktop = 0

function changeGuestsDesktop(type, change) {
  if (type === "adults") {
    adultsDesktop = Math.max(1, adultsDesktop + change)
    document.getElementById("adultsCountDesktop").textContent = adultsDesktop
  } else {
    childrenDesktop = Math.max(0, childrenDesktop + change)
    document.getElementById("childrenCountDesktop").textContent = childrenDesktop
  }
  updateGuestDisplayDesktop()
  updateCounterButtonsDesktop()
}

function updateGuestDisplayDesktop() {
  const total = adultsDesktop + childrenDesktop
  const display = `${total} Pax`
  const guestDisplayDesktop = document.getElementById("guestDisplayDesktop")
  const guestCountDesktop = document.getElementById("guestCountDesktop")

  if (guestDisplayDesktop) guestDisplayDesktop.textContent = display
  if (guestCountDesktop) guestCountDesktop.textContent = display
}

function updateCounterButtonsDesktop() {
  const adultsMinusBtn = document.querySelector("#guestsDesktopDropdown .guest-row:first-child .counter-btn.minus")
  if (adultsMinusBtn) {
    adultsMinusBtn.disabled = adultsDesktop <= 1
  }

  const childrenMinusBtn = document.querySelector("#guestsDesktopDropdown .guest-row:last-child .counter-btn.minus")
  if (childrenMinusBtn) {
    childrenMinusBtn.disabled = childrenDesktop <= 0
  }
}

// Initialize everything when DOM is loaded - FIXED INITIALIZATION ORDER
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing components...")

  // PRIORITY 1: Setup location dropdowns FIRST
  setupLocationDropdowns()
  setupClickOutsideHandler()

  // PRIORITY 2: Initialize classes
  new RestaurantSlider()
  new RecommendedSlider()
  new DiningSpotSlider()
  new NewOnChopeSlider()
  new PopularGuidesSlider()
  new DineSaveSlider()
  new MobileNavigation()
  new SearchForm()
  new AboutSection()

  // PRIORITY 3: Set up other dropdown triggers (excluding location ones)
  document.querySelectorAll(".dropdown-trigger").forEach((trigger) => {
    // Skip location selectors as they're handled separately
    if (trigger.id === "locationSelector" || trigger.id === "mobileLocationSelector") {
      console.log("Skipping location selector:", trigger.id)
      return
    }

    trigger.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()
      const dropdownId = this.getAttribute("data-dropdown") + "Dropdown"
      toggleDropdownFunc(dropdownId)
    })
  })

  // PRIORITY 4: Initialize displays
  updateGuestDisplay()
  updateCounterButtons()
  updateDateDisplay()
  generateCalendar()
  updateGuestDisplayDesktop()
  updateCounterButtonsDesktop()

  console.log("All components initialized successfully")
})

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Close dropdowns on Escape key
  if (e.key === "Escape") {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active")
    })
  }
})
// Store references to DOM elements and state
let activeSegment = null;
let initialized = false;

// Initialize features grid functionality
function initializeFeaturesGrid() {
  console.log('Initializing features grid...'); // Debug log
  
  if (initialized) return;
  
  const segmentButtons = document.querySelectorAll('.segment-button');
  const featureContainers = document.querySelectorAll('.features-container');
  
  console.log('Found buttons:', segmentButtons.length); // Debug log
  console.log('Found containers:', featureContainers.length); // Debug log

  // Function to show selected segment
  function showSegment(segmentId) {
    console.log('Showing segment:', segmentId); // Debug log
    
    if (!segmentId) return;
    
    // Update active segment
    activeSegment = segmentId;

    // Update containers visibility
    featureContainers.forEach(container => {
      const containerSegment = container.getAttribute('data-segment');
      container.style.display = containerSegment === segmentId ? 'block' : 'none'; // Changed back to 'block'
    });

    // Update button states
    segmentButtons.forEach(btn => {
      const isActive = btn.getAttribute('data-segment') === segmentId;
      btn.classList.toggle('active', isActive);
    });
  }

  // Add click handlers to all segment buttons
  segmentButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const segment = button.getAttribute('data-segment');
      showSegment(segment);
    });
  });

  // Show first segment by default
  if (segmentButtons.length > 0) {
    const firstSegment = segmentButtons[0].getAttribute('data-segment');
    showSegment(firstSegment);
  }

  initialized = true;
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializeFeaturesGrid);

// Backup initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFeaturesGrid);
} else {
  initializeFeaturesGrid();
}

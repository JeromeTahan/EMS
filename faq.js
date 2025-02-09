document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar");
    const closeSidebarIcon = document.querySelector(".close-sidebar");
    const mainContent = document.querySelector(".main_content");
    const navItems = document.querySelectorAll(".sidebar ul li");
  
    // Restore sidebar visibility from local storage
    if (localStorage.getItem("sidebarVisible") === "true") {
      sidebar.classList.add("visible");
      mainContent.classList.add("shifted");
      hamburger.style.display = "none";
    }
  
    // Restore active list item from local storage
    const activeItemIndex = localStorage.getItem("activeNavItem");
    if (activeItemIndex !== null) {
      navItems[activeItemIndex].classList.add("active");
    }
  
    // Open Sidebar and Shift Main Content
    hamburger.addEventListener("click", function () {
      sidebar.classList.add("visible");
      mainContent.classList.add("shifted");
      hamburger.style.display = "none"; // Hide hamburger icon
      localStorage.setItem("sidebarVisible", "true");
    });
  
    // Close Sidebar and Reset Main Content
    closeSidebarIcon.addEventListener("click", function () {
      sidebar.classList.remove("visible");
      mainContent.classList.remove("shifted");
      hamburger.style.display = "block"; // Show hamburger icon
      localStorage.setItem("sidebarVisible", "false");
    });
  
    // Highlight active nav item and maintain it across pages
    navItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        // Remove the 'active' class from all items
        navItems.forEach(nav => nav.classList.remove("active"));
  
        // Add 'active' class to the clicked item
        this.classList.add("active");
  
        // Store the index of the clicked nav item in local storage
        localStorage.setItem("activeNavItem", index);
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    const copyButton = document.querySelector(".copy-button");
    const emailText = document.querySelector(".email").innerText.trim();

    // Toggle FAQ answers
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        
        question.addEventListener("click", function () {
            const isActive = answer.style.display === "block";
            document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
            document.querySelectorAll(".faq-question span").forEach(span => span.textContent = "+");
            
            if (!isActive) {
                answer.style.display = "block";
                question.querySelector("span").textContent = "-";
            }
        });
    });

    // Copy email to clipboard
    document.querySelector('.copy-button').addEventListener('click', function() {
      const emailText = document.querySelector('.email-text').innerText;
      navigator.clipboard.writeText(emailText)
          .then(() => alert('Email copied successfully!'))
          .catch(err => alert('Failed to copy the email.'));
  });
  
});
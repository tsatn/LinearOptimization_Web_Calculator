<template>
  <div id="app">
    <!-- Improved Navbar Design -->
    <nav class="navbar">
      <ul class="nav-list">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/linear" class="nav-link">Linear Optimization</router-link></li>
        <li><router-link to="/nonlinear" class="nav-link">Non-Linear Optimization</router-link></li>
        <li><router-link to="/convex" class="nav-link">Convex Optimization</router-link></li>
      </ul>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer section for any branding or links -->
    <footer class="footer">
      <p>&copy; 2024 Optimization App | All rights reserved</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

/* Apply fonts globally */
#app {
  font-family: 'Source Sans Pro', sans-serif;
  color: #374259;
  background: linear-gradient(135deg, #EAE0DA 0%, #F7F5EB 100%);
}

/* Navbar Styling */
nav.navbar {
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #5C8984 0%, #A0C3D2 50%, #5C8984 100%);
  transition: all 0.3s ease;
  border-bottom: 3px solid #EED3D9;
  font-family: 'Playfair Display', serif;

  background-size: 200% 100%;
  animation: gradientShift 10s ease infinite;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: clamp(0.5rem, 2vw, 1.5rem);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: linear-gradient(45deg, #A0C3D2 0%, #5C8984 50%, #A0C3D2 100%);
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    justify-content: center;
  }
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  li {
    position: relative;
    transition: transform 0.2s ease;
  }

  li:hover {
    transform: translateY(-2px);
  }

  li::after {
    content: '';
    position: relative;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background: linear-gradient(to right, #F5E8DD, #EED3D9);
    transition: width 0.3s ease;
  }

  .active {
    background: linear-gradient(to right, #F7F5EB, #F2D8D8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
}

.nav-link {
  background: linear-gradient(to right, #F7F5EB, #F5E8DD);
  background-clip: text; /* Add this line */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.1);
}

.nav-link:hover {
  background: linear-gradient(to right, #F5E8DD, #F2D8D8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: scale(1.1);
  text-decoration: underline;
}

/* Main Content Styling */
.main-content {
  padding: 2rem;
  background: linear-gradient(135deg, #EAE0DA 0%, #F7F5EB 100%);
  min-height: 80vh;
  font-family: 'Source Sans Pro', sans-serif;
  color: #374259;
}

/* Footer Styling */
footer.footer {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #5C8984 0%, #A0C3D2 50%, #5C8984 100%);
  color: #F7F5EB;
  padding: 1.5rem;
  font-family: 'Playfair Display', serif;
  backdrop-filter: blur(10px);
  border-top: 2px solid #EAC7C7;
  transition: transform 0.3s ease;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  background-size: 200% 100%;
  animation: gradientShift 10s ease infinite;

  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, #A0C3D2 0%, #5C8984 50%, #A0C3D2 100%);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #F2D8D8, transparent);
  }
}

footer p {
  margin: 0;
  font-size: 0.95rem;
  letter-spacing: 1px;
  font-weight: 500;
  background: linear-gradient(to right, #F7F5EB, #F5E8DD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>


document.addEventListener("DOMContentLoaded", () => {
    fetchPets();
});

async function fetchPets() {
    try {
        const response = await fetch('http://localhost:5000/api/pets');
        const pets = await response.json();
        
        const petListContainer = document.querySelector('.pet-grid');
        if (petListContainer) {
            petListContainer.innerHTML = ''; 

            pets.forEach(pet => {
                const card = document.createElement('div');
                card.className = 'pet-card';
            
                card.onclick = () => showDetails(pet.name, pet.meta, pet.icon, pet.desc);
                
                card.innerHTML = `
                    <span class="pet-card-icon">${pet.icon}</span>
                    <div class="pet-info">
                        <h3>${pet.name}</h3>
                        <p>${pet.meta}</p>
                    </div>
                `;
                petListContainer.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Error fetching pets from backend:", error);
    }
}

function navigate(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showDetails(name, meta, icon, desc) {
    document.getElementById('detail-name').innerText = name;
    document.getElementById('detail-meta').innerText = meta;
    document.getElementById('detail-icon').innerText = icon;
    document.getElementById('detail-desc').innerText = desc;
    document.getElementById('confirmed-pet-name').innerText = name;

    navigate('page-details');
}
function confirmAdoption() {
    navigate('page-confirmed');
}
const modal = document.getElementById('recipeModal');
const closeButton = document.getElementById('closeRecipeModal');

const modalImage = document.getElementById('modalImage');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalTime = document.getElementById('modalTime');
const modalDifficulty = document.getElementById('modalDifficulty');
const modalIngredients = document.getElementById('modalIngredients');
const modalInstructions = document.getElementById('modalInstructions');

function openRecipeModal(card) {
    modalImage.src = card.dataset.image;
    modalTag.textContent = card.dataset.tag;
    modalTitle.textContent = card.dataset.title;
    modalTime.textContent = card.dataset.time;
    modalDifficulty.textContent = card.dataset.difficulty;
    modalIngredients.textContent = card.dataset.ingredients;
    modalInstructions.textContent = card.dataset.instructions;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

function closerRecipeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
};

document.querySelectorAll('.recipe-card').forEach(card => {
    card.addEventListener('click', () => {
        openRecipeModal(card);
    })
});

closeButton.addEventListener('click', closeRecipeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeRecipeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeRecipeModal();
    }
});
//==========================================
// STORAGE KKEY
//==========================================
// A single constant for the localStorage key name.
// Using this everywhere instead of retyping the string
// avoids typos like "recipe" vs "recipes" breaking things silently.
const STORAGE_KEY = "recipes";


// ========================================
// CORE DATA STORE
// ========================================
// This array is the single source of truth for the whole app
// Every recipe the user has added lives here as an object, e.g.:
// { id: "abc123", name: "Pancakes", ingredients: [...], steps: [...], tags: [...] }
// All rendering, filtering, editing, and deleting reads from and writes to this array.
let recipes = [];


// ============================================
// EDIT MODE TRACKER
// ============================================
// null = the form is in "add new recipe" mode.
// Any other value = the form is currently editing the recipe with that id.
// handleFormSubmit() checks this to decide whether to push a new recipe
// or update an existing one.
let editingId = null;


// ============================================
// SEARCH / FILTER STATE
// ============================================
// These remember what the user is currently searching/filtering by,
// so that if the recipe list changes (e.g. a new recipe is added)
// while a search or tag filter is active, we can re-apply it correctly
// instead of just dumping the full unfiltered list back on screen.

// Whatever text is currently typed into the search box (empty string = no search active)
let currentSearchTerm = ""

// Which tag filter button is currently active (null = no tag filter active)
let currentTagFilter = null


// ============================================
// CACHED DOM ELEMENT REFERENCES
// ============================================
// Grabbing these once here, instead of calling document.getElementById()
// inside every single function, is both more efficient and less repetitive.
// If you rename an id in your HTML later, you only need to update it here.

const recipeForm = document.getElementById("recipe-form");
const recipeNameInput = document.getElementById("recipe-name");
const recipeInggredientsInput = document.getElementById("recipe-ingredients");
const recipeStepsInput = document.getElementById("recipe-steps");
const recipeTagsInput = document.getElementById("recipe-tags");

const recipeListContainer = document.getElementById("recipe-list");
const searchBox = document.getElementById("search-box");
const tagFiltersContainer = document.getElementById("tag-filters");
let counter = 0;
let multiplier = 1;
let weight_cost = 5;

if (localStorage.counter) {
    counter = Number(localStorage.counter);
    multiplier = Number(localStorage.multiplier);
    weight_cost = Number(localStorage.weight_cost);
    protein_cost = Number(localStorage.protein_cost)
}

updateAll();

function updateAll() {
    weight = document.querySelector('#current_weight');
    total = document.querySelector('#total_gains');
    weight_cost_display = document.querySelector('#weight_cost');
    protein_cost_display = document.querySelector('#protein_cost');

    weight_cost_display.innerHTML = weight_cost;
    protein_cost_display.innerHTML = protein_cost;
    weight.innerHTML = multiplier;
    total.innerHTML = counter;
}

function upgradeWeight() {
    if (counter >= cost) {
        if (multiplier === 1)
            multiplier = 5;
        else
            multiplier += 5;
        counter -= cost;
        cost += Math.ceil(cost*2);
    }

    updateAll();
}

function incrementCounter() {
    counter += multiplier;
    updateAll();
}

window.onbeforeunload = storeProgress;
function storeProgress() {
    localStorage.setItem('counter', counter);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('weight_cost', weight_cost);
    localStorage.setItem('protein_cost', protein_cost);
}
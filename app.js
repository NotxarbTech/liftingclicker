let counter = 0;
let weight_multiplier = 1;
let weight_cost = 5;
let protein_multiplier = 1;
let protein_cost = 1000;

if (localStorage.counter) {
    counter = Number(localStorage.counter);
    weight_multiplier = Number(localStorage.weight_multiplier);
    weight_cost = Number(localStorage.weight_cost);
    protein_multiplier = Number(localStorage.protein_cost);
    protein_cost = Number(localStorage.protein_cost)
}

updateAll();

function updateAll() {
    weight = document.querySelector('#current_weight');
    total = document.querySelector('.total_gains');
    weight_cost_display = document.querySelector('#weight_cost');
    protein_cost_display = document.querySelector('#protein_cost');

    weight_cost_display.innerHTML = weight_cost;
    protein_cost_display.innerHTML = protein_cost;
    weight.innerHTML = weight_cost*protein_cost;
    total.innerHTML = counter;
}

function upgradeWeight() {
    if (counter >= weight_cost) {
        if (weight_multiplier === 1)
            weight_multiplier = 5;
        else
            weight_multiplier += 5;
        counter -= weight_cost;
        weight_cost += Math.ceil(cost*2);
    }

    updateAll();
}

function upgradeProtein() {
    if (counter >= protein_cost) {
        if (protein_multiplier === 1)
            protein_multiplier = 10;
        else
            protein_multiplier += 10;
        counter -= protein_cost;
        protein_cost += Math.ceil(cost*5);
    }

    updateAll();
}

function incrementCounter() {
    counter += weight_multiplier*protein_multiplier;
    updateAll();
}

window.onbeforeunload = () => {
    localStorage.setItem('counter', counter);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('weight_cost', weight_cost);
    localStorage.setItem('protein_cost', protein_cost);
}
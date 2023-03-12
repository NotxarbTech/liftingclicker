let counter = 0;
let multiplier = 1;
let cost = 5;

if (localStorage.counter) {
    counter = Number(localStorage.counter);
    multiplier = Number(localStorage.multiplier);
    cost = Number(localStorage.cost);
}

updateAll();

function updateAll() {
    weight = document.querySelector('#current_weight');
    total = document.querySelector('#total_gains');
    display_cost = document.querySelector('#increase_cost');

    display_cost.innerHTML = cost;
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
        cost += Math.ceil(cost*1.2)
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
    localStorage.setItem('cost', cost);
}
// Przypisanie funkcji dodającej klasę '.shaking' do elementów z randomowym opóźnieniem
const assignClassWithDeley = (element, className, deley) => {
  //Przypisanie do zmiennej random Deley czasu opóźnienia w ms
  const randomDelay = Math.floor(Math.random() * deley);

  // Funkcja dodająca klasę wywoływana po upływie czasu - randomDeley
  setTimeout(() => {
    element.classList.add(className);
  }, randomDelay);
};

// Pobranie wszystkich elementów o klasie "line__img"
const logos = document.querySelectorAll(".line__img");

// Pobranie wszystkich elementów o klasie "line__circle"
const lines = document.querySelectorAll(".line__circle");

// Przypisanie klasy "shaking" z randomowym opóźnieniem do każdego elementu tablicy logos
logos.forEach((element) => {
  assignClassWithDeley(element, "shaking", 2000);
});

// Przypisanie klasy "slider" z randomowym opóźnieniem do każdego elementu tablicy lines
lines.forEach((element) => {
  assignClassWithDeley(element, "slider", 9000);
});

const yearBirthUser = +prompt("What year were you born?:");
let age;
let yourCity;
let yourFavoriteSport;

if (Boolean(yearBirthUser) === false) {
  alert(`It's too bad you didn't want to enter your age.`);
} else if (!isNaN(yearBirthUser)) {
  const cityOfUser = prompt("Where do you live?:");

  if (!isNaN(cityOfUser)) {
    alert(`It's too bad you didn't want to enter the name of your city.`);
  } else if (cityOfUser) {
    const typeSportOfUser = prompt(
      "What is your favorite type of sport: boxing, ufc, running marathon?:"
    );

    const typeOfSport = {
      boxing: "Alexander Usyk",
      ufc: "Khabib Nurmagomedov",
      "running marathon": "Eliud Kipchoge",
    };

    if (!isNaN(typeSportOfUser)) {
      alert(
        `It's too bad you didn't want to enter the name of your favorite type of sport.`
      );
    } else if (!typeOfSport[typeSportOfUser]) {
      alert("You should choose the specified type of sport.");
    } else if (typeSportOfUser) {
      age = 2021 - yearBirthUser;

      switch (cityOfUser) {
        case "Kyiv":
          yourCity = `You live in the capital of Ukraine.`;
          break;
        case "Moscow":
          yourCity = `You live in the capital of Russia.`;
          break;
        case "Minsk":
          yourCity = `You live in the capital of Belorussia.`;
          break;
        default:
          yourCity = `You live in the city of ${cityOfUser}.`;
          break;
      }

      switch (typeSportOfUser) {
        case "boxing":
        case "ufc":
        case "running marathon":
          yourFavoriteSport = `It's cool! Do you want to become ${typeOfSport[typeSportOfUser]}?`;
          break;
      }
    }
  }
}
alert(`Your age is ${age} years. \n${yourCity} \n${yourFavoriteSport}`);

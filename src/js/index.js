const backButton = document.querySelector(".container .back-btn"),
      myAccountButton = document.querySelector(".container .my-account-btn"),
      createVacationButton = document.querySelector(".container .create-vacation-btn"),
      editVacationButton = document.querySelector(".container .edit-vacation-btn"),
      uploadImagesButton = document.querySelector(".container .upload-images-btn"),
      logoutButton = document.querySelector(".container .logout-btn"),
      loginButton = document.querySelector(".container .login-btn");

const startingPage = document.querySelector(".starting-page"),
      register = document.querySelector(".register"),
      login = document.querySelector(".login"),
      forgotPassword = document.querySelector(".forgot-password"),
      yourVacations = document.querySelector(".your-vacations"),
      searchVacation = document.querySelector(".search-vacation"),
      myAccount = document.querySelector(".my-account"),
      createVacation = document.querySelector(".create-vacation"),
      editVacation = document.querySelector(".edit-vacation"),
      uploadImages = document.querySelector(".upload-images"),
      vacation = document.querySelector(".vacation");


loginButton.addEventListener("click", () => 
{
    myAccountButton.classList.remove("hidden");
    createVacationButton.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
    loginButton.classList.add("hidden");

    yourVacations.classList.remove("hidden");
    searchVacation.classList.remove("hidden");
    startingPage.classList.add("hidden");
});


myAccountButton.addEventListener("click", () => 
{
    backButton.classList.remove("hidden");
    myAccountButton.classList.add("hidden");
    createVacationButton.classList.add("hidden");

    myAccount.classList.remove("hidden");
    yourVacations.classList.add("hidden");
    searchVacation.classList.add("hidden");
});
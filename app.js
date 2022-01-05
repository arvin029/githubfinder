// Initialise Github class
const github = new Github();

// Initialise UI class
const ui = new UI();

//Search input
const searchUser = document.getElementById('search-user');

// Search input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get Input Value
  const textInput = e.target.value;
  
  if (textInput !== '') {
    //Make Http call
    github.getUser(textInput).then(data => {
      if (data.profile.message === 'Not Found') {
        //Show Alert
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);

      }
    })

  } else {
    //Clear Profile
    ui.clearProfile();
  }
})
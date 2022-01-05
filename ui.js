class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid" mb-2 src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary d-block mt-2 mb-2">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge bg-success">Followers: ${user.followers}</span>
            <span class="badge bg-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
    
  }

// Show User Repos
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" class="text-decoration-none" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary">Star: ${repo.stargazers_count}</span>
              <span class="badge bg-secondary">Watchers: ${repo.watchers}</span>
              <span class="badge bg-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    })

    // Output repositories
    document.getElementById('repos').innerHTML = output;
  }

  // show alert message
  showAlert(message, className) {
    // Clear any remaining alert
    this.clearAlert();
    // Create div element
    const div = document.createElement('div');
    // Add class
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get parent Element
    const container = document.querySelector('.searchContainer');
    // Get search Field
    const search = document.querySelector('.search');
    // Insert Alert
    container.insertBefore(div, search);
    // Disappear alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000)
  }

  // Clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
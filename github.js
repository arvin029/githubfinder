class Github {
  constructor() {
    this.clientId = "f475cc9741a45833f9e4";
    this.clientSecret = "e86289318129c77ccbba0959fd41e126f2a41987";
    this.reposCount = 5;
    this.reposSort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?perPage=${this.reposCount}&sort=${this.reposSort}&clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile: profile,
      repos: repos
    }
  }
}
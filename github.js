class Github {
  constructor() {
    this.clientId = "f475cc9741a45833f9e4";
    this.clientSecret = "e86289318129c77ccbba0959fd41e126f2a41987";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`);

    const profile = await profileResponse.json();

    return {
      profile: profile
    }
  }
}
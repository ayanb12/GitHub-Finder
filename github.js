class Github {
  constructor() {
    this.client_id = '1ea405a606dcaebcd7b1';
	 this.client_secret = '049a6c100b89e8d69c40e3c0d9e708b4c70228a7';
	 this.repos_count = 5;
	 this.repos_sort = 'created: asc';
	}

  async getUser(user) {
	 const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
	 
	 const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

	 const profile = await profileResponse.json();
	 const repos = await repoResponse.json();

    return {
		profile,
		repos
    }
  }
}
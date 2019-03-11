class Github {
    constructor() {
        this.client_id = "1a2dcd0fc7256601c932";
        this.client_secret = "2868905bbdca81630c84a1aa9bb1011ecbf23c06";
    }
    
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
        profile
        }
    }
}
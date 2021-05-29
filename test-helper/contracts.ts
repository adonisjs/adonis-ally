declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    discord: {
      config: DiscordDriverConfig
      implementation: DiscordDriverContract
    }
    github: {
      config: GithubDriverConfig
      implementation: GithubDriverContract
    }
    twitter: {
      config: TwitterDriverConfig
      implementation: TwitterDriverContract
    }
    google: {
      config: GoogleDriverConfig
      implementation: GoogleDriverContract
    }
  }
}

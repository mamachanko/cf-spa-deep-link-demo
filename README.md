# Cloud Foundry single-page application deep link demo

This app and its deployment showcases how you can use the [Staticfile buildpack](https://github.com/cloudfoundry/staticfile-buildpack)
to deploy your single-page application with deep links to Cloud Foundry.

## Try it out
```bash
npm install # or yarn
./build.sh
./deploy.sh # assumes your logged into CF
```

Now you can visit `/` and `/deep/link`, e.g. `https://spa-deep-link-demo.cfapps.io/deep/link`

# How it works
The secret sauce is in how the Staticfile buildpack is configured via `./Staticfile` 
and the additional Nginx configuration in `./nginx`. Every path is first tried as a file
or directory before everything falls back to `index.html`.

Have a look at `./deploy.sh` to see how the deployment to Cloud Foundry comes together.

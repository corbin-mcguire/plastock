# Plastock 
The filament inventory management software!

## Setup
### Download
Download the repository with HTTPS, SSH, or .zip
#### HTTPS
```bash
git clone https://github.com/corbin-mcguire/plastock.git
```
#### SSH
```bash
git clone git@github.com:corbin-mcguire/plastock.git
```
### Install
Install all the required npm packages
```bash
npm install
```

### CLI
To run the application, ensure that you have the Angular CLI installed
```bash
npm install -g @angular/cli
```

### Build
Run the following command to build the application for use in Electron. You must rebuild every time you make changes to the codebase to see your changes.
```bash
npm run electron-build
```

### Run
The following command will run the application with Electron. Ensure that you have built the project before.
```bash
npm run electron
```

Finally, navigate to `localhost:4200`.

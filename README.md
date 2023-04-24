# README Generator

## Description

## Motivation 
It’s important to have a high-quality README when creating an open source project on GitHub. Every good README should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

This application will allow you to  quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.



## Usage

```sh
# Check node version
node -v

# Sample Output
v16.16.0

# If you are not using version 16
nvm use 16

# or, install
nvm i 16

# Check npm version
npm -v

# Sample output
8.11.0

# install npm packages
npm i
```

# Run the code
```sh
node index.js
```

## Sample Output
```sh
? What is the title of your project? Sample README
? Can you describe your project? Testing the README Generator
? How can users install your project? git clone this repo, then cd to directory, then on terminal node index.js
? How can we use your project? Use this project to generate professional GitHub profile READMEs
? How can we test your project? node test on terminal
? What are your contributions? fork the repo then commit your changes, create PRs
? What is your email address? coder@testing.com
? Name of developer(s)?: coder
? What is your Github username? sopoetik
? Please select your license MIT
Success!
README.md generated successfully.
```

![licence-prompt](screenshots/README%20Generator.png)

![full-prompt](screenshots/README%20Generator1.png)
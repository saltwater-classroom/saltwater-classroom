# saltwater-classroom
Mobile app for Saltwater Classroom. Made with &lt;3 by Scout.

## Overview
Saltwater Classroom is a React Native mobile app that works on iOS and Android phones.  It was built using the Expo client and uses NativeBase as a starter for a lot of the built in components.  We then wrapped the NativeBase components with our own stylings.  Uses Redux to manage application state.  At this point of the project, we only have the front end parts so we used Redux to access JSON data that mock responses from a backend.

To look at how we represented backend API calls, look at the /app/mocks folder and see all of the JSON files.

To run the project, in the home directory:
`yarn install`

Download Expo CLI: `npm install expo-cli`

Start the project: `yarn start`

## General Project Structure
Divided the app into main subfolder categories for each main section:
Learn
Do
Community
Connect
Onboarding
*Note that the onboarding screens are not connected to the rest of the application. For viewing/testing purposes, add Onboarding/OnboardingScreen.js to the tab navigator

/app → Redux
	/actions → broken down into actions for each section of the app
	/mocks → broken down into mocked json responses for each section of the app
	/reducers

/assets → contains fonts and images/illustrations used within the app

/components
	/connect → components specifically used for connect
	/do →  components specifically used for do
	/explore →  components specifically used for explore
	/learn →  components specifically used for learn
	/onboarding →  components specifically used for onboarding

/shared_components → components that used across different sections of the app. Ex. buttons, typography, text inputs

/constants → contains constants for colors and device layouts used within the app

/navigation → contains navbar files

/screens → contains the entrypoint file for all navbar screens

/topbar → contains files for the top bar in the app
